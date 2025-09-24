import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';

import { calculateRSI } from '../utils/calculations';

// WebSocket URL configuration
const WEBSOCKET_URL = process.env.REACT_APP_WEBSOCKET_URL || 'wss://api.fxlabs.ai/ws/market';

// Smart symbol formatting
const formatSymbol = (input) => {
  const trimmed = input.trim();
  if (trimmed.toLowerCase().endsWith('m')) {
    const base = trimmed.slice(0, -1);
    return base + 'm';
  }
  return trimmed;
};

// Correlation pairs data - only the specified pairs
const CORRELATION_PAIRS = {
  negative: [
    ['EURUSD', 'USDCHF'],
    ['GBPUSD', 'USDCHF'],
    ['USDJPY', 'EURUSD'],
    ['USDJPY', 'GBPUSD'],
    ['USDCAD', 'AUDUSD'],
    ['USDCHF', 'AUDUSD'],
    ['XAUUSD', 'USDJPY']  // Gold-USDJPY moderately negative
  ],
  positive: [
    ['EURUSD', 'GBPUSD'],
    ['EURUSD', 'AUDUSD'],
    ['EURUSD', 'NZDUSD'],
    ['GBPUSD', 'AUDUSD'],
    ['AUDUSD', 'NZDUSD'],
    ['USDCHF', 'USDJPY'],
    ['XAUUSD', 'XAGUSD'],  // Gold-Silver very high positive
    ['XAUUSD', 'EURUSD'],  // Gold-EUR moderately positive (safe-haven vs USD)
    ['BTCUSD', 'ETHUSD'],  // Crypto very high positive
    ['BTCUSD', 'XAUUSD']   // BTC-Gold weak/moderate positive
  ]
};

// Rolling correlation window options
const CORRELATION_WINDOWS = [20, 50, 90, 120];

const useRSICorrelationStore = create(
  subscribeWithSelector((set, get) => ({
    // Connection state
    isConnected: false,
    isConnecting: false,
    connectionError: null,
    websocket: null,
    
    // Market data
    subscriptions: new Map(), // symbol -> subscription info
    tickData: new Map(),      // symbol -> latest ticks
    ohlcData: new Map(),      // symbol -> OHLC bars
    initialOhlcReceived: new Set(), // symbols that received initial OHLC
    
    // RSI Data
    rsiData: new Map(), // symbol -> RSI values
    
    // Dashboard-specific settings
    settings: {
      timeframe: '1H',
      rsiPeriod: 14,
      rsiOverbought: 70,
      rsiOversold: 30,
      correlationWindow: 50, // Default rolling correlation window
      calculationMode: 'rsi_threshold' // 'rsi_threshold' | 'real_correlation'
    },
    
    // Correlation Data
    correlationPairs: CORRELATION_PAIRS,
    correlationStatus: new Map(), // pairKey -> { status: 'match'|'mismatch'|'neutral', rsi1, rsi2 }
    realCorrelationData: new Map(), // pairKey -> { correlation: -1 to 1, strength: 'weak'|'moderate'|'strong', trend: 'increasing'|'decreasing'|'stable' }
    
    // UI state
    logs: [],
    timeframes: ['1M', '5M', '15M', '30M', '1H', '4H', '1D'],
    correlationWindows: CORRELATION_WINDOWS,
    
    // Connection Actions
    connect: () => {
      const state = get();
      if (state.isConnected || state.isConnecting) return;
      
      set({ isConnecting: true, connectionError: null });
      
      try {
        const ws = new WebSocket(WEBSOCKET_URL);
        set({ websocket: ws });
        
        ws.onopen = () => {
          set({ isConnected: true, isConnecting: false });
          get().addLog('Connected to MT5 server (RSI Correlation)', 'success');
          
          // Report to global connection manager
          import('./useMarketStore').then(({ default: useMarketStore }) => {
            useMarketStore.getState().updateDashboardConnection('rsiCorrelation', {
              connected: true,
              connecting: false,
              error: null
            });
          });
        };
        
        ws.onmessage = (event) => {
          try {
            // Handle binary data - convert to text first
            let message;
            if (event.data instanceof Blob) {
              // Convert blob to text
              event.data.text().then(text => {
                try {
                  message = JSON.parse(text);
                  get().handleMessage(message);
                } catch (parseError) {
                  console.error('Failed to parse WebSocket message text:', parseError);
                }
              }).catch(blobError => {
                console.error('Failed to read blob data:', blobError);
              });
            } else if (typeof event.data === 'string') {
              // Handle string data directly
              message = JSON.parse(event.data);
              get().handleMessage(message);
            } else {
              console.warn('Unknown message data type:', typeof event.data);
            }
          } catch (error) {
            // eslint-disable-next-line no-console
            console.error('Failed to handle WebSocket message:', error);
          }
        };
        
        ws.onclose = () => {
          set({ 
            isConnected: false, 
            isConnecting: false, 
            websocket: null 
          });
          get().addLog('Disconnected from MT5 server (RSI Correlation)', 'warning');
          
          // Report to global connection manager
          import('./useMarketStore').then(({ default: useMarketStore }) => {
            useMarketStore.getState().updateDashboardConnection('rsiCorrelation', {
              connected: false,
              connecting: false,
              error: 'Connection closed'
            });
          });
        };
        
        ws.onerror = (error) => {
          console.error('RSI Correlation WebSocket error:', error);
          set({ 
            isConnecting: false, 
            connectionError: 'Failed to connect to MT5 server' 
          });
          get().addLog('Connection error (RSI Correlation)', 'error');
          
          // Report to global connection manager
          import('./useMarketStore').then(({ default: useMarketStore }) => {
            useMarketStore.getState().updateDashboardConnection('rsiCorrelation', {
              connected: false,
              connecting: false,
              error: 'Failed to connect to MT5 server'
            });
          });
        };
        
      } catch (error) {
        set({ 
          isConnecting: false, 
          connectionError: error.message 
        });
      }
    },
    
    disconnect: () => {
      const { websocket } = get();
      if (websocket) {
        websocket.close();
      }
      set({ 
        isConnected: false, 
        isConnecting: false, 
        websocket: null,
        subscriptions: new Map(),
        tickData: new Map(),
        ohlcData: new Map(),
        initialOhlcReceived: new Set()
      });
    },
    
    subscribe: (symbol, timeframe, dataTypes) => {
      const { websocket, isConnected } = get();
      if (!isConnected || !websocket) return;
      
      // Check if WebSocket is ready to send data
      if (websocket.readyState !== WebSocket.OPEN) {
        get().addLog(`WebSocket not ready for subscription to ${symbol}`, 'warning');
        return;
      }
      
      const formattedSymbol = formatSymbol(symbol);
      
      const subscription = {
        action: 'subscribe',
        symbol: formattedSymbol,
        timeframe,
        data_types: dataTypes
      };
      
      try {
        websocket.send(JSON.stringify(subscription));
        get().addLog(`Subscribing to ${formattedSymbol} (${timeframe}) - ${dataTypes.join(', ')}`, 'info');
      } catch (error) {
        get().addLog(`Failed to subscribe to ${formattedSymbol}: ${error.message}`, 'error');
      }
    },
    
    unsubscribe: (symbol) => {
      const { websocket, isConnected } = get();
      if (!isConnected || !websocket) return;
      
      // Check if WebSocket is ready to send data
      if (websocket.readyState !== WebSocket.OPEN) {
        get().addLog(`WebSocket not ready for unsubscription from ${symbol}`, 'warning');
        return;
      }
      
      const formattedSymbol = formatSymbol(symbol);
      
      const message = {
        action: 'unsubscribe',
        symbol: formattedSymbol
      };
      
      try {
        websocket.send(JSON.stringify(message));
        get().addLog(`Unsubscribing from ${formattedSymbol}`, 'info');
      } catch (error) {
        get().addLog(`Failed to unsubscribe from ${formattedSymbol}: ${error.message}`, 'error');
      }
    },
    
    handleMessage: (message) => {
      const state = get();
      
      switch (message.type) {
        case 'connected':
          get().addLog(`Welcome: ${message.message}`, 'success');
          if (message.supported_timeframes) {
            set({ timeframes: message.supported_timeframes });
          }
          break;
          
        case 'subscribed':
          const subscriptions = new Map(state.subscriptions);
          subscriptions.set(message.symbol, {
            symbol: message.symbol,
            timeframe: message.timeframe,
            dataTypes: message.data_types,
            subscribedAt: new Date()
          });
          set({ subscriptions });
          get().addLog(`Subscribed to ${message.symbol} (${message.timeframe})`, 'success');
          break;
          
        case 'unsubscribed':
          const newSubscriptions = new Map(state.subscriptions);
          newSubscriptions.delete(message.symbol);
          const newTickData = new Map(state.tickData);
          newTickData.delete(message.symbol);
          const newOhlcData = new Map(state.ohlcData);
          newOhlcData.delete(message.symbol);
          const newInitialReceived = new Set(state.initialOhlcReceived);
          newInitialReceived.delete(message.symbol);
          
          set({ 
            subscriptions: newSubscriptions,
            tickData: newTickData,
            ohlcData: newOhlcData,
            initialOhlcReceived: newInitialReceived
          });
          get().addLog(`Unsubscribed from ${message.symbol}`, 'warning');
          break;
          
        case 'initial_ohlc':
          const ohlcData = new Map(state.ohlcData);
          ohlcData.set(message.symbol, {
            symbol: message.symbol,
            timeframe: message.timeframe,
            bars: message.data,
            lastUpdate: new Date()
          });
          const initialReceived = new Set(state.initialOhlcReceived);
          initialReceived.add(message.symbol);
          
          set({ 
            ohlcData,
            initialOhlcReceived: initialReceived
          });
          get().addLog(`Received ${message.data.length} initial OHLC bars for ${message.symbol}`, 'info');
          
          // Trigger calculations when initial data is received
          setTimeout(() => {
            get().recalculateAllRsi();
            if (state.settings.calculationMode === 'real_correlation') {
              get().calculateAllCorrelations();
            }
          }, 200);
          break;
          
        case 'ticks':
          const tickData = new Map(state.tickData);
          message.data.forEach(tick => {
            const existing = tickData.get(tick.symbol) || { ticks: [], lastUpdate: null };
            existing.ticks = [tick, ...existing.ticks.slice(0, 49)]; // Keep last 50 ticks
            existing.lastUpdate = new Date();
            tickData.set(tick.symbol, existing);
          });
          set({ tickData });
          break;
          
        case 'ohlc_update':
          const currentOhlcData = new Map(state.ohlcData);
          const symbolData = currentOhlcData.get(message.data.symbol);
          if (symbolData) {
            // Update the most recent bar or add new one
            const bars = [...symbolData.bars];
            const lastBar = bars[bars.length - 1];
            
            if (lastBar && lastBar.time === message.data.time) {
              // Update existing bar - don't log
              bars[bars.length - 1] = message.data;
            } else {
              // Add new bar and keep only last 100 - log this as it's a new candle
              bars.push(message.data);
              if (bars.length > 100) {
                bars.shift();
              }
              get().addLog(`New candle: ${message.data.symbol} - ${message.data.close}`, 'info');
            }
            
            symbolData.bars = bars;
            symbolData.lastUpdate = new Date();
            currentOhlcData.set(message.data.symbol, symbolData);
            set({ ohlcData: currentOhlcData });
            
            // Trigger RSI recalculation when new data arrives
            setTimeout(() => {
              get().recalculateAllRsi();
              if (state.settings.calculationMode === 'real_correlation') {
                get().calculateAllCorrelations();
              }
            }, 100);
          }
          break;
          
        case 'pong':
          get().addLog('Pong received', 'info');
          break;
          
        case 'error':
          get().addLog(`Error: ${message.error}`, 'error');
          break;
          
        default:
      }
    },
    
    // Settings Actions
    updateSettings: (newSettings) => {
      const state = get();
      const oldSettings = state.settings;
      const updatedSettings = { ...oldSettings, ...newSettings };
      
      set({ settings: updatedSettings });
      
      // If timeframe changed, update all subscriptions
      if (newSettings.timeframe && newSettings.timeframe !== oldSettings.timeframe) {
        
        const { subscribe } = get();
        const currentSubscriptions = Array.from(state.subscriptions.entries());
        
        // Update subscriptions to use new timeframe
        const updatedSubscriptions = new Map();
        currentSubscriptions.forEach(([symbol, subscription]) => {
          
          // Update subscription info with new timeframe
          const updatedSubscription = {
            ...subscription,
            timeframe: newSettings.timeframe
          };
          updatedSubscriptions.set(symbol, updatedSubscription);
          
          // Subscribe to new timeframe
          subscribe(symbol, newSettings.timeframe, subscription.dataTypes || ['ticks', 'ohlc']);
        });
        
        // Update subscriptions map
        set({ subscriptions: updatedSubscriptions });
        
        // Recalculate RSI with new timeframe data
        setTimeout(() => {
          get().recalculateAllRsi();
          if (updatedSettings.calculationMode === 'real_correlation') {
            get().calculateAllCorrelations();
          }
        }, 1500);
      }
      
      // If RSI settings changed, recalculate
      if (newSettings.rsiPeriod || newSettings.rsiOverbought || newSettings.rsiOversold) {
        get().recalculateAllRsi();
      }
      
      // If correlation window changed, recalculate correlations
      if (newSettings.correlationWindow && newSettings.correlationWindow !== oldSettings.correlationWindow) {
        if (updatedSettings.calculationMode === 'real_correlation') {
          get().calculateAllCorrelations();
        }
      }
      
      // If calculation mode changed, recalculate appropriate metrics
      if (newSettings.calculationMode && newSettings.calculationMode !== oldSettings.calculationMode) {
        if (newSettings.calculationMode === 'real_correlation') {
          get().calculateAllCorrelations();
        } else {
          get().recalculateAllRsi();
        }
      }
    },
    
    // RSI Calculation Actions
    // Use Wilder's RSI on closed candles to align with MT5 (via utils.calculateRSI)
    calculateRsi: (symbol, period = 14) => {
      const bars = get().getOhlcForSymbol(symbol);
      if (!bars || bars.length < period + 1) return null;

      // Prefer closed candles: drop the last bar if we have enough history
      const effectiveBars = bars.length > period + 1 ? bars.slice(0, -1) : bars;
      const closes = effectiveBars.map(bar => Number(bar.close)).filter(v => Number.isFinite(v));
      if (closes.length < period + 1) return null;

      return calculateRSI(closes, period);
    },

    // Real Rolling Correlation Calculation (time-aligned, stable)
    // Aligns candles by timestamp across both symbols and uses the last
    // `window + 1` overlapping candles to compute log-return correlation.
    // This avoids spurious low percentages caused by misaligned OHLC series
    // that can happen right after subscriptions initialize.
    calculateRollingCorrelation: (symbol1, symbol2, window = 50) => {
      const raw1 = get().getOhlcForSymbol(symbol1);
      const raw2 = get().getOhlcForSymbol(symbol2);

      if (!raw1?.length || !raw2?.length) return null;

      // Ensure ascending order by time
      const toTime = (t) => {
        // Normalize time key for comparison and Map keys
        // Handles numeric epoch or ISO-like strings
        const n = Number(t);
        return Number.isFinite(n) ? n : Date.parse(t);
      };

      const bars1 = [...raw1].sort((a, b) => toTime(a.time) - toTime(b.time));
      const bars2 = [...raw2].sort((a, b) => toTime(a.time) - toTime(b.time));

      // Build quick lookup for close by time
      const map1 = new Map(bars1.map(b => [toTime(b.time), Number(b.close)]));
      const map2 = new Map(bars2.map(b => [toTime(b.time), Number(b.close)]));

      // Intersect timestamps present in both series
      const times1 = Array.from(map1.keys());
      const times2 = new Set(map2.keys());
      const intersectTimes = times1.filter(t => times2.has(t)).sort((a, b) => a - b);

      // Need at least `window + 1` aligned candles to produce `window` returns
      if (intersectTimes.length < window + 1) return null;

      // Take the last `window + 1` aligned timestamps (closed candles only)
      const alignedTimes = intersectTimes.slice(-1 * (window + 1));

      // Compute log returns for both symbols using aligned times
      const returns1 = [];
      const returns2 = [];
      for (let i = 1; i < alignedTimes.length; i++) {
        const t = alignedTimes[i];
        const prevT = alignedTimes[i - 1];

        const p1 = map1.get(t);
        const p1Prev = map1.get(prevT);
        const p2 = map2.get(t);
        const p2Prev = map2.get(prevT);

        if (p1Prev > 0 && p2Prev > 0 && p1 > 0 && p2 > 0) {
          returns1.push(Math.log(p1 / p1Prev));
          returns2.push(Math.log(p2 / p2Prev));
        }
      }

      if (returns1.length < window) return null;

      // Calculate Pearson correlation
      const mean1 = returns1.reduce((s, v) => s + v, 0) / returns1.length;
      const mean2 = returns2.reduce((s, v) => s + v, 0) / returns2.length;

      let num = 0;
      let sumSq1 = 0;
      let sumSq2 = 0;
      for (let i = 0; i < returns1.length; i++) {
        const d1 = returns1[i] - mean1;
        const d2 = returns2[i] - mean2;
        num += d1 * d2;
        sumSq1 += d1 * d1;
        sumSq2 += d2 * d2;
      }

      if (sumSq1 === 0 || sumSq2 === 0) return 0;
      return num / Math.sqrt(sumSq1 * sumSq2);
    },
    
      // Calculate all correlations
    calculateAllCorrelations: () => {
      const state = get();
      const newCorrelationData = new Map();
      
      [...state.correlationPairs.positive, ...state.correlationPairs.negative].forEach((pair) => {
        const [symbol1, symbol2] = pair;
        const sym1 = symbol1 + 'm';
        const sym2 = symbol2 + 'm';
        
        const correlation = get().calculateRollingCorrelation(sym1, sym2, state.settings.correlationWindow);
        
          if (correlation !== null) {
          const pairKey = `${symbol1}_${symbol2}`;
          
          // Determine correlation strength
          let strength;
          if (Math.abs(correlation) >= 0.7) {
            strength = 'strong';
          } else if (Math.abs(correlation) >= 0.3) {
            strength = 'moderate';
          } else {
            strength = 'weak';
          }
          
          // Determine trend (simplified - could be enhanced with historical comparison)
          let trend = 'stable';
          // TODO: Implement trend calculation by comparing with previous window
            
            // Determine correlation sign type
            const pairType = state.correlationPairs.positive.some(
              p => (p[0] === symbol1 && p[1] === symbol2) || (p[0] === symbol2 && p[1] === symbol1)
            ) ? 'positive' : 'negative';

            // Mismatch logic for Real Correlation mode
            // For Positive cells: correlation below +0.25 -> mismatch
            // For Negative cells: correlation above -0.15 -> mismatch
            const isMismatch = (
              (pairType === 'positive' && correlation < 0.25) ||
              (pairType === 'negative' && correlation > -0.15)
            );

          newCorrelationData.set(pairKey, {
            correlation: correlation,
            strength: strength,
            trend: trend,
              type: pairType,
              isMismatch,
            timestamp: new Date()
          });
        }
      });
      
      set({ realCorrelationData: newCorrelationData });
    },

    recalculateAllRsi: () => {
      const state = get();
      const newRsiData = new Map();
      const newCorrelationStatus = new Map();

      // Calculate RSI for all subscribed symbols
      state.subscriptions.forEach((sub, symbol) => {
        const rsi = get().calculateRsi(symbol, state.settings.rsiPeriod);
        if (rsi !== null) {
          newRsiData.set(symbol, {
            value: rsi,
            timestamp: new Date(),
            period: state.settings.rsiPeriod
          });
        }
      });

      // Update correlation status
      [...state.correlationPairs.positive, ...state.correlationPairs.negative].forEach((pair) => {
        const [symbol1, symbol2] = pair;
        const sym1 = symbol1 + 'm';
        const sym2 = symbol2 + 'm';
        const rsi1 = newRsiData.get(sym1)?.value;
        const rsi2 = newRsiData.get(sym2)?.value;

        if (rsi1 !== undefined && rsi2 !== undefined) {
          const pairKey = `${symbol1}_${symbol2}`;
          const isPositiveCorrelation = state.correlationPairs.positive.some(
            p => (p[0] === symbol1 && p[1] === symbol2) || (p[0] === symbol2 && p[1] === symbol1)
          );

          let status;
          const { rsiOverbought, rsiOversold } = state.settings;

          // Strict mismatch rules use configurable thresholds
          if (isPositiveCorrelation) {
            // Mismatch if one > overbought and the other < oversold
            const mismatch = (rsi1 > rsiOverbought && rsi2 < rsiOversold) || (rsi2 > rsiOverbought && rsi1 < rsiOversold);
            status = mismatch ? 'mismatch' : 'neutral';
          } else {
            // Negative correlation: mismatch if both > overbought or both < oversold
            const mismatch = (rsi1 > rsiOverbought && rsi2 > rsiOverbought) || (rsi1 < rsiOversold && rsi2 < rsiOversold);
            status = mismatch ? 'mismatch' : 'neutral';
          }

          newCorrelationStatus.set(pairKey, {
            status,
            rsi1,
            rsi2,
            type: isPositiveCorrelation ? 'positive' : 'negative'
          });

        }
      });

      set({ rsiData: newRsiData, correlationStatus: newCorrelationStatus });
    },
    
    // Utility Actions
    addLog: (message, type = 'info') => {
      const logs = get().logs;
      const newLog = {
        id: Date.now(),
        timestamp: new Date(),
        message,
        type
      };
      set({ logs: [newLog, ...logs.slice(0, 99)] }); // Keep last 100 logs
    },

    clearLogs: () => {
      set({ logs: [] });
    },

    // Data Getters
    getOhlcForSymbol: (symbol) => {
      const ohlcData = get().ohlcData.get(symbol);
      return ohlcData ? ohlcData.bars : [];
    },

    getTicksForSymbol: (symbol) => {
      const tickData = get().tickData.get(symbol);
      return tickData ? tickData.ticks : [];
    },

    // Auto-subscription for correlation pairs
    autoSubscribeToCorrelationPairs: () => {
      const state = get();
      if (!state.isConnected) return;

      const { subscribe } = get();
      const allPairs = [...state.correlationPairs.positive, ...state.correlationPairs.negative];
      
      allPairs.forEach(([symbol1, symbol2]) => {
        const sym1 = symbol1 + 'm';
        const sym2 = symbol2 + 'm';
        
        if (!state.subscriptions.has(sym1)) {
          subscribe(sym1, state.settings.timeframe, ['ticks', 'ohlc']);
        }
        if (!state.subscriptions.has(sym2)) {
          subscribe(sym2, state.settings.timeframe, ['ticks', 'ohlc']);
        }
      });
      
    }
  }))
);

export default useRSICorrelationStore;
