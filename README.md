# FX Labs Trading Dashboard

A comprehensive forex trading dashboard with real-time market data, RSI analysis, currency strength meters, and AI-powered news analysis.

## Recent Updates

### RSI Calculation: MT5 Parity (Latest)
- RSI in both RSI Tracker and RSI Correlation now matches MetaTrader 5 more closely.
- We use Wilder's RSI (RMA smoothing) computed on CLOSED candles only, mirroring typical MT5 display values.
- Previously we used a simple-average (Cutler's) approach over the last N bars, which could diverge; we also included the forming candle which further skewed values.
- Implementation details:
  - `src/store/useRSITrackerStore.js` and `src/store/useRSICorrelationStore.js` now call `src/utils/calculations.js` `calculateRSI`.
  - We drop the last (potentially forming) bar when we have enough history to ensure closed-candle RSI.
  - Applied price: Close. Timeframe must match (e.g., `4H` vs MT5 `H4`). Symbols map to broker suffixes (e.g., `BTCUSDm`).
- Minor residual differences can arise from feed and timestamp alignment; in normal conditions the values should be very close to MT5.

### RSI Tracker: Toggle Shows Current Mode (Latest)
- Fixed the RSI Tracker vs Watchlist toggle button to display the current mode rather than the target mode
- Tooltip now mirrors RSI Correlation Dashboard style: "Switch to … mode"
- Visual styling remains consistent with active state highlighting

### RSI Tracker: Watchlist Manual Add Button (Latest)
- Added a plus button in RSI Tracker header, visible only in Watchlist mode (before the alert bell)
- Clicking it opens an Add Currency Pair modal with search and filtered list
- Uses existing watchlist store for persistence and auto-subscription
- Keeps UI consistent with existing modals and dark mode styling

### RSI Correlation Dashboard: Real Correlation Stabilization (Latest)
- Fixed issue where Real Correlation initially showed many mismatches with very low percentages that corrected after a few seconds or refresh.
- Root cause: correlation was computed on unaligned OHLC series immediately after subscribe, leading to spurious low values.
- Change: rolling correlation now aligns candles by timestamp across both symbols and uses only overlapping, time-aligned candles for log-return correlation.
- Result: stable, accurate correlation percentages on first render; mismatch highlighting now reflects true relationships without needing a refresh.

### Navbar Mobile Menu Spacing Fix (Latest)
- **MOBILE MENU SPACING**: Added responsive right margin to mobile menu icon for better spacing from screen edge
- **RESPONSIVE MARGINS**: Applied `mr-2 sm:mr-4` to mobile menu button for consistent spacing across screen sizes
- **IMPROVED UX**: Mobile menu icon now has proper spacing from the right edge of the screen
- **CONSISTENT DESIGN**: Follows the same responsive margin pattern used throughout the navbar
- **TOUCH FRIENDLY**: Better spacing makes the menu button easier to tap on mobile devices

### Hero Section Responsive Text Fix
- **RESPONSIVE TEXT SIZING**: Fixed "Market with AI" heading to display properly on medium and small devices
- **IMPROVED BREAKPOINTS**: Updated text sizes from `text-5xl md:text-6xl lg:text-7xl` to `text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl`
- **DESCRIPTION TEXT**: Enhanced description text responsiveness from `text-xl md:text-2xl` to `text-lg sm:text-xl md:text-2xl`
- **FEATURE LIST**: Updated feature list items to use `text-base sm:text-lg` for better mobile readability
- **MASTER TRADER AI**: Fixed Master Trader AI header text sizing for better mobile display
- **RESPONSIVE MARGINS**: Adjusted left margin for "Decode the" text to be responsive across all screen sizes
- **USER EXPERIENCE**: Text now scales appropriately from mobile (3xl) to extra large screens (7xl)

### Dashboard Responsive Layout Fix
- **RESPONSIVE BREAKPOINT FIX**: Fixed dashboard layout to show proper multi-column view on wide screens (1024px+)
- **LAYOUT OPTIMIZATION**: Changed breakpoint from `xl` (1280px) to `lg` (1024px) for desktop layout
- **MOBILE LAYOUT**: Mobile layout now only shows on screens smaller than 1024px
- **DESKTOP LAYOUT**: Desktop 12x12 grid layout now activates at 1024px instead of 1280px
- **USER EXPERIENCE**: Users at 1127px width now see proper multi-column dashboard instead of single-column mobile view
- **QUANTUM ANALYSIS**: Multi-Indicator Heatmap now displays correctly in desktop layout on wide screens
- **AI NEWS ANALYSIS**: AI News Analysis section maintains proper layout across all screen sizes

### Navbar Logo Theme Compatibility (Latest)
- **UNIFIED LOGO**: Now uses single logo (logo1.png) for both light and dark modes
- **DYNAMIC FILTERING**: Applied CSS filters to change logo text color based on theme
- **LIGHT MODE**: Logo text appears black using `filter brightness-0 contrast-100`
- **DARK MODE**: Logo text appears white using `filter brightness-110 contrast-110`
- **SMOOTH TRANSITIONS**: Logo color changes smoothly when switching between themes
- **CONSISTENT BRANDING**: Maintains brand consistency while ensuring readability in both modes

### Dark/Light Mode Toggle
- **THEME TOGGLE BUTTON**: Added dark/light mode toggle button to navbar with Sun/Moon icons
- **THEME CONTEXT**: Implemented React context provider for theme state management
- **PERSISTENT THEME**: Theme preference is saved to localStorage and restored on page load
- **SYSTEM PREFERENCE**: Automatically detects and uses system dark/light mode preference
- **SMOOTH TRANSITIONS**: Added smooth color transitions (0.3s) for theme switching
- **DARK MODE STYLES**: Comprehensive dark mode styling for all components:
  - Dark backgrounds (slate-800, slate-900) for cards and containers
  - Dark borders (slate-700) for component boundaries
  - Light text colors (slate-300, slate-400) for readability
  - Dark scrollbar styling for consistent appearance
- **NAVBAR INTEGRATION**: Theme toggle button positioned in navbar with proper styling
- **TAILWIND CONFIG**: Updated Tailwind config to support class-based dark mode
- **ACCESSIBILITY**: Proper tooltips and ARIA labels for theme toggle button
- **CLEAN IMPLEMENTATION**: Minimal complexity with clean, readable code following best practices
- **MULTI-INDICATOR HEATMAP DARK MODE**: Updated MultiIndicatorHeatmap component with comprehensive dark mode support:
  - Dark mode text colors for all labels, headers, and dropdowns
  - Dark mode backgrounds for dropdown menus and progress bars
  - Dark mode borders and hover states for interactive elements
  - Consistent dark mode styling across all heatmap UI elements
  - Maintained all existing functionality while adding dark mode compatibility
- **AI NEWS ANALYSIS DARK MODE**: Updated AI News Analysis components with comprehensive dark mode support:
  - Dark mode styling for both home page section and dashboard widget
  - Dark mode text colors for all news cards, modal content, and filter tabs
  - Dark mode backgrounds for news cards, modal dialogs, and economic data sections
  - Dark mode borders and hover states for interactive elements
  - Consistent dark mode styling across news analysis UI elements
  - Maintained all existing functionality including countdown timers, AI analysis, and news filtering
- **RSI TRACKER DARK MODE**: Updated RSI Tracker component with comprehensive dark mode support:
  - Dark mode text colors for all table headers, data cells, and labels
  - Dark mode backgrounds for tables, modals, and interactive elements
  - Dark mode styling for tab navigation, watchlist toggle, and settings modal
  - Dark mode borders and hover states for all interactive elements
  - Dark mode styling for empty states and loading indicators
  - Consistent dark mode styling across RSI tracker UI elements
  - Maintained all existing functionality including RSI calculations, watchlist management, and alert configuration
- **RSI CORRELATION DARK MODE**: Updated RSI Correlation Dashboard settings modal with comprehensive dark mode support:
  - Dark mode styling for settings modal background and title
  - Dark mode text colors for all form labels and input fields
  - Dark mode backgrounds and borders for all form inputs and select dropdowns
  - Dark mode styling for calculation mode toggle and header buttons
  - Dark mode hover states for all interactive elements
  - Dark mode styling for modal action buttons (Reset, Cancel, Save)
  - Consistent dark mode styling across RSI correlation settings UI
  - Maintained all existing functionality including correlation calculations, mode switching, and settings persistence
- **HERO SECTION MATRIX CONTAINER**: Completely redesigned Matrix-Style Trading Visual Container to match modern trading dashboard design:
  - Replaced complex chart system with clean "Master Trader AI" dashboard layout
  - Added cryptocurrency analysis cards for Bitcoin and Ethereum with real-time pricing
  - Implemented success probability indicators with progress bars and trend analysis
  - Added market trend section with bearish/bullish indicators and analysis button
  - Updated color scheme to green theme with dark slate backgrounds
  - Maintained responsive design and hover animations
  - Preserved all existing functionality while improving visual appeal and user experience
- **TRADING DASHBOARD MASTER TRADER AI**: Replaced RSI Correlation Dashboard with comprehensive Master Trader AI dashboard:
  - Removed RSI Correlation Dashboard component from Trading Dashboard Section
  - Created full Master Trader AI dashboard with 8 currency pairs grid layout
  - Added cryptocurrency pairs: BTC/USD, ETH/USD, XRP/USD, SOL/USD with success probabilities
  - Added forex pairs: EUR/USD, GBP/USD, XAU/USD, USD/JPY with trend analysis
  - Implemented filter buttons for All Pairs, Crypto, and Forex categories
  - Added success probability progress bars with color-coded indicators (red 35%, yellow 65%)
  - Included trend indicators with up/down arrows and percentage changes
  - Maintained dark theme with green accents and professional styling
  - Preserved all existing Trading Dashboard functionality while enhancing user experience
- **MASTER TRADER AI CARD DESIGN**: Updated Master Trader AI cards to match exact image specifications:
  - Implemented exact card design with dark theme and purple border (rgba(168, 85, 247, 0.5))
  - Added light blue icon background (linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%))
  - Positioned symbol name (BTC/USD) in large white text with trend text below in light red
  - Aligned price (112173.96) on the right in large white text with change percentage and arrow
  - Implemented success probability section with progress bar and percentage display
  - Used red progress bar fill for low probability (35%) and yellow for higher probability (65%)
  - Updated BTC/USD data to match image exactly: price 112173.96, change -0.48%, trend "Weak Downtrend"
  - Maintained responsive grid layout with proper spacing and hover effects
  - Preserved all existing functionality while implementing exact visual design

### Subscription Section Redesign
- **MINIMAL PREMIUM DESIGN**: Completely redesigned subscription section with clean, minimal layout
- **REMOVED VISUAL CLUTTER**: Eliminated excessive animations, floating icons, and background elements
- **STREAMLINED PRICING**: Simplified pricing display with clear visual hierarchy
- **FOCUSED CTA**: Single, compelling call-to-action button for better conversion
- **ENHANCED USER EXPERIENCE**: Cleaner interface that instantly catches user attention
- **PREMIUM AESTHETICS**: Professional design with subtle hover effects and proper spacing
- **SIMPLIFIED FEATURES**: Reduced feature lists to essential items for better readability
- **IMPROVED ACCESSIBILITY**: Better contrast and cleaner typography for enhanced usability

### Multi-Indicator Heatmap UI Enhancement
- **READABLE TIMEFRAME DISPLAY**: Updated timeframe labels from abbreviated format (1M, 5M, 15M) to readable format (1 Min, 5 Min, 15 Mins, 1 Hour, 4 Hours, 1 Day, 1 Week)
- **READABLE INDICATOR NAMES**: Updated indicator labels (EMA21 → EMA 21, EMA50 → EMA 50, EMA200 → EMA 200, UTBOT → UT BOT, IchimokuClone → Ichimoku)
- **ENHANCED BUY/SELL BUTTONS**: Updated Buy/Sell cell buttons with square design, proper colors (#03c05d for Buy, #e03f4c for Sell), and subtle shadow effects
- **REMOVED TF HEADER**: Removed "TF" header from heatmap table for cleaner UI
- **ENHANCED USER EXPERIENCE**: More intuitive timeframe and indicator display without changing business logic
- **UI-ONLY CHANGES**: All business logic and calculations remain unchanged, only visual presentation improved

### Typography Enhancement
- **INTER MEDIUM FONT**: Updated entire dashboard to use Inter Medium (font-weight: 500) for consistent typography
- **GLOBAL FONT APPLICATION**: Applied Inter Medium to all text elements across the dashboard and tabs
- **ENHANCED READABILITY**: Improved text clarity and professional appearance with Inter font family
- **FONT CONFIGURATION**: Updated Tailwind config to include Inter font family with proper weight definitions
- **MONOSPACE PRESERVATION**: Maintained JetBrains Mono for code elements while applying Inter Medium to all other text

### Dashboard Layout Optimization
- **WATCHLIST SECTION REMOVED**: Removed the dedicated watchlist panel from the dashboard layout
- **RSI TRACKER EXPANSION**: RSI Tracker height increased from 4 rows to 6 rows for better content visibility
- **AI NEWS BALANCED**: AI News Analysis adjusted to 6 rows starting from row 7 to prevent congestion
- **IMPROVED LAYOUT**: Better balance between RSI Tracker and AI News sections for optimal user experience
- **INTEGRATED WATCHLIST**: Watchlist functionality is now fully integrated within the RSI Tracker component
- **SPACE EFFICIENCY**: Better utilization of dashboard space with consolidated watchlist management

### RSI Tracker Watchlist Integration
- **WATCHLIST TOGGLE**: Added watchlist button to RSI Tracker header for seamless switching between RSI analysis and watchlist views
- **Integrated Watchlist View**: Content area now converts to watchlist display when watchlist button is clicked
- **Watchlist Management**: Users can view, manage, and remove symbols from their watchlist directly within the RSI Tracker
- **Visual Indicators**: Watchlist button shows active state with blue highlighting when in watchlist mode
- **Tab Navigation**: RSI tracker tabs (Oversold/Overbought) are hidden when in watchlist mode for cleaner interface
- **Real-time Data**: Watchlist items display current RSI values, prices, and daily changes using live market data
- **Enhanced Data Handling**: Proper symbol conversion (EURUSD → EURUSDm) for RSI data lookup
- **Loading States**: Shows loading spinner when removing symbols from watchlist
- **Error Handling**: Graceful handling of missing data with "--" placeholders
- **Remove Functionality**: Users can remove symbols from watchlist with trash icon and loading feedback
- **Empty State**: Clean empty state message when no watchlist items exist with helpful instructions
- **Seamless Integration**: Leverages existing watchlist service and base market store for consistent data management

### RSI Tracker Daily % Calculation
- The RSI Tracker previously showed intrabar change: `(latest close - latest open) / latest open` of the active timeframe. This did not match MT5 Market Watch “Daily Change”.
- Updated mechanism: Daily % is now computed from the start-of-day price when available: `(current bid − daily open) / daily open * 100`.
- Data source priority:
  - Use daily timeframe bars (`1D`/`D1`) for the current day’s open when present.
  - If daily bars are unavailable, fall back to the first bar of the current day from the active timeframe.
  - As a last resort, fall back to the latest bar’s open (approximates change when time data is limited).
- Why it may still differ slightly from MT5: brokers define “day” using server time. If only non-daily bars are available, the fallback uses the bar timestamps to infer the day boundary, which can differ from MT5 server time in edge cases. Subscribing to the daily timeframe eliminates this variance.

### Symbol Formatting Fix: Alert Creation and Updates
- **SYMBOL MAPPING FIX**: Fixed critical issue where UI symbols (EURUSD) were not being converted to broker-specific symbols (EURUSDm) during alert updates
- Updated all three alert services to apply symbol mapping in both `createAlert` and `updateAlert` methods
- **Affected Services**: HeatmapAlertService, RSIAlertService, RSICorrelationAlertService
- **Implementation**: Added symbol mapping logic to `updateAlert` methods to ensure consistency between creation and updates
- **Symbol Mapping**: EURUSD → EURUSDm, GBPUSD → GBPUSDm, USDJPY → USDJPYm, etc.
- **Impact**: Ensures alerts work correctly with backend MT5 data regardless of whether they're created or updated

### Critical Security Fix: RLS Policy Enforcement
- **MAJOR SECURITY IMPROVEMENT**: Fixed critical vulnerability where end users could forge alert triggers
- Updated RLS policies to restrict trigger insertion to alert owners only
- Replaced unsafe `FOR INSERT WITH CHECK (true)` policies with proper ownership verification
- Added comprehensive authorization checks to verify alert ownership before trigger creation
- **Security Impact**: Prevents malicious users from creating fake triggers for other users' alerts
- **Affected Services**: All alert services (Heatmap, RSI, RSI Correlation)
- **Implementation**: Uses existing Python backend infrastructure with secure RLS policies

### Previous Heatmap Alert Service Validation Fix
- Fixed validation trigger issue in `updateAlert` method around lines 339-355
- Expanded `configFields` array to include all fields that `_validateAlertConfig` actually validates
- Ensures proper validation of alert configurations during updates by including all relevant fields
- Fixed issue where validation only triggered for limited subset of fields
- Now properly validates thresholds, notification methods, frequency, indicators, pairs, timeframes, and trading style
- Maintains existing snake_case to camelCase conversion before validation
- Ensures `_validateAlertConfig` receives normalized camelCase config for proper validation
- Prevents validation bypass when updating configuration fields
- Added comprehensive field coverage for alert configuration validation

### Previous Heatmap Alert Service Fixes
- Fixed snake_case to camelCase field mapping issue in `updateAlert` method
- Added proper field conversion from database format to service layer format
- Added bidirectional field conversion: camelCase ↔ snake_case
- Implemented field whitelisting for secure database updates
- Fixed all public methods (`createAlert`, `getAlertById`, `getAlerts`, `getActiveAlerts`, `updateAlert`) to return consistent camelCase format
- Prevents database field name mismatches and ensures data integrity
- Fixed PostgREST/Supabase compatibility issue in `acknowledgeTrigger` method
- Removed unsupported joined-table filter from UPDATE operation
- Implemented proper two-step process: UPDATE by trigger ID, then SELECT with joined relation
- Added proper error handling for unauthorized/not found cases
- Relies on RLS (Row Level Security) for authorization enforcement
- Fixed previous values overwrite issue in `processHeatmapData` method
- Implemented deep merge logic to preserve existing pair/timeframe entries
- Added `_deepMergeObjects` helper method for proper object merging
- Handles null/undefined previousValues by treating as empty object before merging
- Prevents data loss when updating only specific pairs/timeframes
- Fixed numeric validation security issue in `rsiAlertService.js`
- Added Number.isFinite guards to prevent NaN/Infinity bypassing validation
- Protected RSI period, overbought/oversold thresholds, and RFI thresholds
- Ensures proper validation of all numeric range and ordering comparisons
- Prevents silent failures from non-finite numeric values
- Fixed snake_case to camelCase field mapping issue in `rsiAlertService.js`
- Added bidirectional field conversion utilities for RSI alert service
- Implemented proper field normalization before validation
- Updated all public methods to return consistent camelCase format
- Ensures validation and business logic always work with camelCase
- Prevents database field name mismatches in RSI alert operations
- Fixed numeric validation security issue in `rsiCorrelationAlertService.js`
- Added Number.isFinite guards to prevent NaN/Infinity bypassing validation
- Protected RSI period, overbought/oversold thresholds, and correlation thresholds
- Ensures proper validation of all numeric range and ordering comparisons
- Prevents silent failures from non-finite numeric values
- Fixed snake_case to camelCase field mapping issue in `rsiCorrelationAlertService.js`
- Added bidirectional field conversion utilities for RSI correlation alert service
- Implemented proper field normalization before validation
- Updated all public methods to return consistent camelCase format
- Ensures validation and business logic always work with camelCase
- Prevents database field name mismatches in RSI correlation alert operations

## Features

### Core Trading Features
- **Real-time Market Data**: Live forex price feeds with WebSocket connections
- **RSI Analysis**: Overbought/oversold tracking with customizable thresholds
- **Currency Strength Meter**: Multi-view currency strength analysis (Bar Chart, Line Chart, Heatmap)
- **RSI Correlation Dashboard**: Advanced correlation analysis between currency pairs
  - Color legend header removed for a cleaner dashboard header
  - Total Pairs pill removed from header for a cleaner look
  - Mismatch-first sorting and simplified styling to surface divergences quickly
  - Mismatch rules:
    - RSI Threshold mode:
      - Positive pairs: mismatch if one RSI > 70 and the other < 30
      - Negative pairs: mismatch if both RSIs > 70 or both < 30
    - Real Correlation mode:
      - Positive pairs: mismatch if correlation < +25%
      - Negative pairs: mismatch if correlation > -15%
  - Styling:
    - Mismatch cells: green border highlight (thicker border)
    - Non-mismatch cells: white background with grey border
    - Heatmap cells: thicker borders for clearer separation
- **Multi-Indicator Heatmap**: Comprehensive technical analysis dashboard with multiple indicators across timeframes
  - Symbol dropdown now derives from `useRSITrackerStore.settings.autoSubscribeSymbols` (same source as watchlist)
  - **Enhanced Data Validation**: Robust error handling with insufficient data detection
  - **Fallback Calculations**: Graceful degradation when some indicators can't calculate
  - **Real-time Status Indicators**: Visual feedback for data quality and calculation status
  - **Progressive Data Loading**: Shows data progress as market information becomes available
- **AI News Analysis**: AI-powered forex news insights and analysis
  - **Enhanced News Cards**: Suggested pairs to watch displayed directly in news cards
  - **Reorganized Modal Layout**: AI analysis at top, suggested pairs, economic data, and detailed analysis
  - **Tabs UI Consistency**: News filter tabs now match RSI Tracker tabs (compact height, smaller font, tighter badges)
  - **Default Tab (Latest)**: The default AI News tab is "Upcoming". Your selection (Upcoming, Released, or All) is saved to Supabase per user and restored on login.
  - **Bullish/Bearish Styling Update**: Cards now use border-only green/red accents for bullish/bearish effects (no full background fills)
  - **Upcoming Styling Update**: Upcoming news no longer uses yellow backgrounds/borders; appearance matches released news with neutral background. Only bullish/bearish keep green/red borders.
- **Impact Filter Update (Latest)**: AI News now shows only HIGH impact items. Upcoming/Released tabs and counts reflect HIGH impact news only.
  - **Tab Persistence Fix (Latest)**: Selecting the "All" tab no longer reverts to "Released" due to a background tab state load. The store now preserves locally updated sections when merging with database state to avoid race-condition overwrites.
  - **RSI Tabs Cleanup**: Removed icons from RSI Tracker tab headers for a cleaner look
  - **Timezone-Aware Timestamps (Latest)**: News timestamps now respect provided timezones (e.g., ISO like `2025-09-16T21:00:00Z`) and are displayed in the browser's local timezone. Legacy format `YYYY.MM.DD HH:mm:ss` is treated as UTC for consistency.
  - **Today's News Only (Latest)**: The AI News widget now shows only today's news based on the browser's local date (midnight-to-midnight in your timezone). Tabs and counts reflect this filter.
  - **Impacted Currency & Suggested Pairs (Latest)**: Impacted Currency strictly uses backend `currency`. Suggested Pairs derive from the system pair list (Add Currency Pair modal) containing that currency and display as `ABC/DEF` (e.g., `EUR/USD`). Impact now comes from backend `analysis.impact` (high/medium/low/unknown) and effect uses backend `analysis.effect` (normalized for display).
- **Watchlist Management**: Personalized symbol tracking with database persistence
  - Watchlist "Add Currency Pair" derives available pairs from `useRSITrackerStore.settings.autoSubscribeSymbols`
  - To add/remove options, update `autoSubscribeSymbols` in `src/store/useRSITrackerStore.js` (use 'm' suffix)

### User Experience Features
- **Connection Status Dots**: All widgets now show a small top-right status dot (green = connected, red = disconnected). The previous "Connected/Disconnected" badges have been removed for a cleaner header.
- **Tab State Persistence**: All user interface states are automatically saved and restored
  - RSI Threshold settings (overbought/oversold values)
  - RSI Tracker active tab (Oversold/Overbought)
  - Currency Strength Meter view mode (Bar Chart, Line Chart, or Heatmap)
  - AI News Analysis filter (Upcoming or Latest news)
- **Enhanced UI Spacing**: Improved table and component spacing for better readability
  - Unified widget card styling across dashboard (consistent rounded corners and elevation)
  - Proper padding and margins in RSI Tracker tables
  - Consistent spacing across all view modes (table, cards, expandable)
  - Better visual separation between columns and rows
- **Responsive Design**: Optimized for desktop and mobile trading
- **Real-time Updates**: Live data streaming with automatic reconnection
- **User Authentication**: Secure login with Supabase authentication

## Tab State Persistence

The application automatically saves and restores your dashboard preferences:

### Persisted States
1. **RSI Threshold Settings**: Your custom overbought/oversold values (default: 70/30)
2. **RSI Tracker Tab**: Which tab is active (Oversold or Overbought)
3. **Currency Strength View**: Your preferred visualization mode (Bar Chart, Line Chart, or Heatmap)
4. **News Filter**: Your news preference (Upcoming, Released, or All)
   - Default: Upcoming

### How It Works
- All tab states are stored in a `user_state` table in Supabase
- Comprehensive dashboard settings are stored in a `user_settings` table in Supabase
- States are automatically saved when you change tabs or settings
- Your preferences are restored when you log back in
- States are user-specific and secure with Row Level Security (RLS)

## Dashboard Settings Persistence

The application now includes comprehensive dashboard settings persistence:

### Settings Categories
- **Global Settings**: Universal timeframe for all indicators
- **RSI Correlation Settings**: Timeframe, RSI period, overbought/oversold thresholds, correlation window, calculation mode
- **RSI Tracker Settings**: Timeframe, RSI period, overbought/oversold thresholds, auto-subscribe symbols
- **Currency Strength Settings**: Timeframe, calculation mode (closed/live), enhanced calculation toggle, auto-subscribe symbols
- **Multi-Indicator Heatmap Settings**: Symbol selection, trading style, indicator weights, new signal display toggle

### Database Tables
- `user_state`: Basic tab states and UI preferences
- `user_settings`: Comprehensive dashboard settings and configurations

## Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd Fxlabs.ai_Front_end
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   ```bash
   cp env.supabase.example .env.local
   ```
   Edit `.env.local` with your Supabase credentials.

4. **Set up Supabase database**:
   - Create a new Supabase project
   - Run the SQL script in `supabase_user_state_table.sql` to create the user_state table
   - Run the SQL script in `user_settings_table.sql` to create the user_settings table
   - Enable authentication in your Supabase project

5. **Start the development server**:
   ```bash
   npm start
   ```

## Database Setup

### Required Tables

1. **watchlist**: Stores user's watchlist symbols
2. **user_state**: Stores user's tab states and preferences
3. **user_settings**: Stores comprehensive dashboard settings and configurations
4. **heatmap_alerts**: Stores multi-indicator heatmap alert configurations
5. **heatmap_alert_triggers**: Tracks when heatmap alerts are triggered
6. **rsi_alerts**: Stores RSI Tracker alert configurations
7. **rsi_alert_triggers**: Tracks when RSI alerts are triggered
8. **rsi_correlation_alerts**: Stores RSI Correlation Dashboard alert configurations
9. **rsi_correlation_alert_triggers**: Tracks when RSI correlation alerts are triggered

Run the SQL scripts provided:
- `supabase_user_state_table.sql` to create the user_state table with proper security policies
- `user_settings_table.sql` to create the user_settings table with proper security policies
- `supabase_heatmap_alerts_schema.sql` to create the heatmap alerts tables with proper security policies
- `supabase_rsi_alerts_schema.sql` to create the RSI alerts tables with proper security policies
- `supabase_rsi_correlation_alerts_schema.sql` to create the RSI correlation alerts tables with proper security policies

## Architecture

### State Management
- **Zustand Stores**: Modular state management for different dashboard components
- **Base Market Store**: Shared functionality including tab state persistence
- **Component Stores**: Specialized stores for RSI, Currency Strength, and Correlation data

### Services
- **UserStateService**: Manages user tab state persistence
- **WatchlistService**: Handles watchlist database operations
- **NewsService**: Fetches and analyzes forex news with AI
- **HeatmapAlertService**: Manages multi-indicator heatmap alerts and notifications
- **RSIAlertService**: Manages RSI Tracker alerts and notifications
- **RSICorrelationAlertService**: Manages RSI Correlation Dashboard alerts and notifications

### Components
- **Dashboard**: Main trading interface with responsive grid layout
- **RSI Components**: Overbought/oversold tracking and correlation analysis
- **Currency Strength Meter**: Multi-view currency strength visualization
- **Multi-Indicator Heatmap**: Advanced technical analysis dashboard
- **AI News Analysis**: Intelligent news filtering and analysis
- **HeatmapAlertConfig**: Alert configuration modal for multi-indicator heatmap alerts
- **RSIAlertConfig**: Alert configuration modal for RSI Tracker alerts
- **RSICorrelationAlertConfig**: Alert configuration modal for RSI Correlation Dashboard alerts

## Multi-Indicator Heatmap

### Data Reliability Improvements (Latest Update)

The Multi-Indicator Heatmap has been significantly enhanced for proper market working:

#### **Data Validation & Error Handling**
- **Progressive Data Loading**: Shows data collection progress (e.g., "47/50 bars")
- **Insufficient Data Detection**: Clearly indicates when more market data is needed
- **Real-time Status Indicators**: Visual feedback for each indicator's calculation status
- **Graceful Error Handling**: Comprehensive error catching with meaningful messages

#### **Fallback Calculations**
- **Smart Fallbacks**: When primary calculations fail, uses simplified fallback methods
- **Partial Data Support**: Works with limited data while waiting for full dataset
- **Status Indicators**: Visual cues showing which indicators are using fallbacks (⚡ icon)
- **Error Explanations**: Specific error messages (e.g., "Need 200+ bars" for EMA200)

#### **Enhanced Debug Logging**
- **Grouped Console Logs**: Organized debug information for better troubleshooting
- **Signal Success Tracking**: Shows which indicators calculated successfully
- **Data Quality Assessment**: Real-time evaluation of data quality (POOR/FAIR/GOOD/EXCELLENT)
- **Calculation Performance**: Tracks calculation errors and warnings

#### **Visual Improvements**
- **Data Progress Bar**: Shows loading progress for insufficient data scenarios
- **Status Icons**: Different icons for working (signals), fallback (F), and failed (...) indicators
- **Color-coded Cells**: Clear distinction between calculated, fallback, and missing data
- **Error Tooltips**: Detailed hover information explaining calculation status
 - **Neutral Labeling**: Cells that previously showed `0%` now display `Neutral`
 - **Buy/Sell Styling**: Buy/Sell visuals use border-only (green/red) with no icons for a cleaner look
 - **Recommendation Cards**: In the All in One Currency Indicator header, we now display "Recommendation: Buy (xx%)" as a larger primary card and the opposite side "Sell (yy%)" as a smaller, lower-opacity card. The larger card dynamically reflects whichever side (Buy/Sell) has the higher percentage.
 - **All in One Currency UI Tweaks (Latest)**:
   - Primary recommendation card uses a thicker border and subtle elevation for emphasis
   - Heatmap cells no longer increase depth on hover (no hover shadow)
   - Table headers cleaned up: icons removed; headers are bold and slightly larger; timeframe labels (1M, 5M, etc.) are not bold

#### **Market Data Requirements**
- **EMA21**: Requires 21+ bars for accurate calculation
- **EMA50**: Requires 50+ bars for accurate calculation  
- **EMA200**: Requires 200+ bars for accurate calculation
- **MACD**: Requires 26+ bars for accurate calculation
- **RSI**: Requires 15+ bars for accurate calculation
- **UTBOT**: Requires 20+ bars for accurate calculation
- **Ichimoku**: Requires 52+ bars for accurate calculation

The system now provides reliable trading signals even with partial data and clearly communicates data quality to users.

### Core Features

The Multi-Indicator Heatmap provides a comprehensive view of technical analysis signals across multiple timeframes and indicators using standardized indicator logic.

### Features
- **Timeframes**: 5M, 15M, 30M, 1H, 4H, 1D
- **Indicators**: EMA21, EMA50, EMA200, MACD, RSI, UT Bot, Ichimoku Clone
- **Scoring System**: Weighted scoring based on timeframe importance
- **Final Score**: Aggregated score from -100 to +100
- **Buy/Sell Probability**: Percentage-based probability calculations
- **New Signal Detection**: Highlights fresh signals with orange dots (K=3 lookback)
- **Enhanced Dropdowns**: Professional dropdown interface with:
  - **Symbol Selection**: Major currency pairs with flag emojis (EUR/USD, GBP/USD, USD/JPY, etc.)
  - **Trading Style**: Scalper, Day Trader, Swing Trader with visual icons
  - **Weight Configuration**: Equal or Trend-Tilted indicator weights
  - **New Signal Toggle**: ON/OFF switch for new signal highlighting
- **Settings Persistence**: All user preferences are automatically saved and restored:
  - **Symbol Selection**: Remembers your preferred currency pair
  - **Trading Style**: Saves your trading approach (Scalper/Day Trader/Swing Trader)
  - **Indicator Weights**: Remembers your weight preference (Equal/Trend-Tilted)
  - **New Signal Display**: Saves your preference for showing new signal indicators

### Indicator Logic (Simple & Consistent)

#### EMA (21, 50, 200) Indicators
- **Buy Signal**: `close > EMA AND EMA slope ≥ 0`
- **Sell Signal**: `close < EMA AND EMA slope ≤ 0`
- **Neutral**: Otherwise
- **New Signal**: Price crossed EMA within last K bars (default K=3)

#### MACD Indicator
- **MACD Line**: `EMA(12) - EMA(26)`
- **Signal Line**: `EMA(MACD, 9)`
- **Buy Signal**: `MACD > Signal AND MACD > 0`
- **Sell Signal**: `MACD < Signal AND MACD < 0`
- **Neutral**: Otherwise
- **New Signal**: MACD/Signal cross within last K bars (default K=3)

### How It Works
1. **Data Collection**: Uses existing WebSocket data from RSI Tracker store
2. **Indicator Calculation**: Calculates all indicators for each timeframe using candle close prices
3. **Signal Detection**: Determines buy/sell/neutral signals based on standardized logic
4. **New Signal Detection**: Identifies fresh signals within last K bars (default K=3)
5. **Per-Cell Scoring**: Each indicator gets a score (-1.25 to +1.25) with new-signal boost
6. **Trading Style Selection**: Choose from Scalper, Day Trader, or Swing Trader styles via enhanced dropdown
7. **Timeframe Weighting**: Weights vary by trading style (sum to 1.0 for each style)
8. **Final Aggregation**: Weighted average creates final score and probabilities

### Enhanced User Interface
- **Professional Dropdowns**: All controls use consistent styling with hover effects and focus states
- **Visual Indicators**: Icons and emojis for better user experience (⚡ for Scalper, 📈 for Day Trader, etc.)
- **Responsive Design**: Dropdowns adapt to different screen sizes with proper spacing
- **State Management**: All dropdown selections are properly managed and persist during session
- **Accessibility**: Proper ARIA labels and keyboard navigation support
- **Automatic Persistence**: All user settings are automatically saved to the database and restored on login

### Per-Cell Scoring System

Each cell in the heatmap is converted to a numeric score using the following logic:

#### Base Scoring
- **Buy Signal**: +1
- **Sell Signal**: -1  
- **Neutral Signal**: 0

#### New-Signal Boost
- **New Buy Signal**: +1 + 0.25 = +1.25
- **New Sell Signal**: -1 - 0.25 = -1.25
- **New Neutral Signal**: 0 (no boost applied)

#### Score Clamping
All scores are clamped to the range **[-1.25, +1.25]**

#### Visual Representation
- **Strong Buy (1.0-1.25)**: Dark green background
- **Buy+ (0.5-1.0)**: Medium green background  
- **Buy (0-0.5)**: Light green background
- **Neutral (0)**: Gray background
- **Sell (0 to -0.5)**: Light red background
- **Sell+ (-0.5 to -1.0)**: Medium red background
- **Strong Sell (-1.0 to -1.25)**: Dark red background
- **New Signal**: Orange dot indicator (+0.25 boost)

### Trading Style Weights

Weights per style sum to 1.0 and determine which timeframes are most important for each trading approach:

| Timeframe | Scalper | Day Trader | Swing Trader |
|-----------|---------|------------|--------------|
| 5M        | 0.30    | 0.10       | 0.00         |
| 15M       | 0.30    | 0.25       | 0.00         |
| 30M       | 0.20    | 0.25       | 0.10         |
| 1H        | 0.15    | 0.25       | 0.25         |
| 4H        | 0.05    | 0.10       | 0.35         |
| 1D        | 0.00    | 0.05       | 0.30         |

#### Trading Style Focus Areas:
- **Scalper**: Focus on 5M-30M timeframes (80% weight on short-term)
- **Day Trader**: Balanced across 15M-1H timeframes (75% weight on medium-term)
- **Swing Trader**: Focus on 1H-1D timeframes (90% weight on long-term)

### Indicator Weights

Two simple options for weighting indicators (both sum to 1.0):

| Indicator | Equal (Default) | Trend-Tilted |
|-----------|----------------|--------------|
| EMA21     | 0.1429         | 0.10         |
| EMA50     | 0.1429         | 0.10         |
| EMA200    | 0.1429         | 0.15         |
| MACD      | 0.1429         | 0.15         |
| RSI       | 0.1429         | 0.10         |
| UTBOT     | 0.1429         | 0.15         |
| IchimokuClone | 0.1429     | 0.25         |

#### Weight Options:
- **Equal**: All indicators have equal weight (0.1429 each)
- **Trend-Tilted**: Higher weight on trend-following indicators (EMA200, MACD, UTBOT, IchimokuClone)

### Indicator Logic (Simple & Consistent)

#### EMA (21, 50, 200) Indicators
- **Buy Signal**: `close > EMA AND EMA slope ≥ 0`
- **Sell Signal**: `close < EMA AND EMA slope ≤ 0`
- **Neutral**: Otherwise
- **New Signal**: Price crossed EMA within last K bars (default K=3)

#### MACD Indicator
- **MACD Line**: `EMA(12) - EMA(26)`
- **Signal Line**: `EMA(MACD, 9)`
- **Buy Signal**: `MACD > Signal AND MACD > 0`
- **Sell Signal**: `MACD < Signal AND MACD < 0`
- **Neutral**: Otherwise
- **New Signal**: MACD/Signal cross within last K bars (default K=3)

#### RSI (14) Indicator
- **Buy Signal**: `RSI ≤ 30` (oversold)
- **Sell Signal**: `RSI ≥ 70` (overbought)
- **Neutral**: Otherwise
- **New Signal**: RSI crosses 30 or 70 within last K bars (default K=3)

#### UTBOT (ATR-based flip)
- **Baseline**: `EMA(close, 50)`
- **ATR**: `ATR(10)`
- **Long Stop**: `Baseline - 3.0 × ATR`
- **Short Stop**: `Baseline + 3.0 × ATR`
- **Buy Signal**: Flip to Long or close breaks above short stop
- **Sell Signal**: Flip to Short or close breaks below long stop
- **Neutral**: Otherwise
- **New Signal**: Any flip within last K bars (default K=3)

#### IchimokuClone
- **Tenkan**: Midpoint of high/low over 9 periods
- **Kijun**: Midpoint over 26 periods
- **Span A**: `(Tenkan + Kijun) / 2` shifted +26
- **Span B**: Midpoint over 52 periods shifted +26
- **Chikou**: Close shifted -26
- **Decision Priority** (first hit wins):
  1. **Price vs Cloud**: above = Buy, below = Sell, inside = Neutral
  2. **Tenkan/Kijun Cross**: Tenkan > Kijun = Buy; < = Sell
  3. **Cloud Color**: SpanA > SpanB = Buy; < = Sell
  4. **Chikou vs Price**: above = Buy; below = Sell; else Neutral
- **New Signal**: Tenkan/Kijun cross or price cloud breakout within last K bars (default K=3)

## Multi-Indicator Heatmap Alerts

### Overview

The Multi-Indicator Heatmap Alerts system allows users to create intelligent trading alerts based on the comprehensive technical analysis provided by the Multi-Indicator Heatmap. Users can configure alerts for specific trading pairs, timeframes, and indicators with customizable thresholds.

### Key Features

#### Alert Configuration
- **Trading Pairs**: Select up to 3 currency pairs for monitoring
- **Timeframes**: Choose up to 3 timeframes from 1M to 1W
- **Indicators**: Select 1-2 indicators from the 7 available (EMA21, EMA50, EMA200, MACD, RSI, UTBOT, IchimokuClone)
- **Trading Style**: Choose from Scalper, Day Trader, or Swing Trader approaches
- **Thresholds**: Set custom buy (70-100) and sell (0-30) thresholds
- **Notification Methods**: Browser notifications, email, or push notifications
- **Alert Frequency**: Once only, every 5/15/30 minutes, or hourly

#### Alert Management
- **Create Alerts**: Easy-to-use interface for setting up new alerts
- **Edit Alerts**: Modify existing alert configurations
- **Toggle Active/Inactive**: Enable or disable alerts without deleting them
- **Delete Alerts**: Remove alerts you no longer need
- **Alert History**: View all triggered alerts with market data at trigger time

#### Trigger Tracking
- **Real-time Monitoring**: Alerts are checked against live market data
- **Trigger History**: Complete record of when alerts fired
- **Market Data Snapshot**: Store actual indicator values at trigger time
- **Acknowledgment System**: Mark triggers as acknowledged to track follow-up
- **Statistics Dashboard**: View alert performance and trigger frequency

### Database Schema

#### heatmap_alerts Table
```sql
- id: UUID (Primary Key)
- user_id: UUID (Foreign Key to auth.users)
- alert_name: VARCHAR(100) - User-defined alert name
- is_active: BOOLEAN - Alert status
- pairs: JSONB - Array of up to 3 trading pairs
- timeframes: JSONB - Array of up to 3 timeframes
- selected_indicators: JSONB - Array of 1-2 selected indicators
- trading_style: VARCHAR(20) - Trading approach (scalper/dayTrader/swingTrader)
- buy_threshold_min/max: INTEGER - Buy alert thresholds (70-100)
- sell_threshold_min/max: INTEGER - Sell alert thresholds (0-30)
- notification_methods: JSONB - Array of notification types
- alert_frequency: VARCHAR(20) - How often to check for triggers
- created_at/updated_at: TIMESTAMP - Audit timestamps
- last_triggered_at: TIMESTAMP - Last trigger time
```

#### heatmap_alert_triggers Table
```sql
- id: UUID (Primary Key)
- alert_id: UUID (Foreign Key to heatmap_alerts)
- triggered_at: TIMESTAMP - When the alert fired
- trigger_type: VARCHAR(10) - 'buy' or 'sell'
- trigger_score: INTEGER - Actual score that triggered the alert
- symbol: VARCHAR(20) - Trading pair that triggered
- timeframe: VARCHAR(10) - Timeframe that triggered
- indicators_data: JSONB - Market data snapshot at trigger
- is_acknowledged: BOOLEAN - User acknowledgment status
- acknowledged_at: TIMESTAMP - When user acknowledged
```

### Service API

The `HeatmapAlertService` provides a comprehensive API for managing alerts:

#### Core Methods
- `createAlert(config)` - Create a new alert with validation
- `getAlerts()` - Get all user alerts
- `getActiveAlerts()` - Get only active alerts
- `updateAlert(id, updates)` - Update alert configuration
- `deleteAlert(id)` - Remove an alert
- `toggleAlert(id, isActive)` - Enable/disable alerts

#### Trigger Management
- `getAlertTriggers(alertId, options)` - Get triggers for specific alert
- `acknowledgeTrigger(triggerId)` - Mark trigger as acknowledged
- `getRecentTriggers(options)` - Get recent triggers across all alerts
- `getAlertStats()` - Get alert statistics and performance metrics

#### Configuration Helpers
- `getDefaultAlertConfig()` - Get default configuration template
- `getAlertOptions()` - Get available options for dropdowns
- `_validateAlertConfig(config)` - Validate alert configuration

### Security Features

#### Row Level Security (RLS)
- **User Isolation**: Users can only access their own alerts and triggers
- **Secure Policies**: Comprehensive RLS policies for all operations
- **Audit Trail**: Complete tracking of alert creation and modifications

#### Data Validation
- **Input Validation**: Comprehensive validation of all alert parameters
- **Constraint Checking**: Database-level constraints for data integrity
- **Error Handling**: Graceful error handling with meaningful messages

### Usage Examples

#### Creating a Basic RSI Alert
```javascript
const alertConfig = {
  alertName: "EURUSD RSI Alert",
  pairs: ["EURUSD"],
  timeframes: ["1H"],
  selectedIndicators: ["RSI"],
  tradingStyle: "dayTrader",
  buyThresholdMin: 70,
  buyThresholdMax: 100,
  sellThresholdMin: 0,
  sellThresholdMax: 30,
  notificationMethods: ["browser"],
  alertFrequency: "once"
};

const alert = await heatmapAlertService.createAlert(alertConfig);
```

#### Creating a Multi-Pair MACD Alert
```javascript
const alertConfig = {
  alertName: "Major Pairs MACD Alert",
  pairs: ["EURUSD", "GBPUSD", "USDJPY"],
  timeframes: ["4H", "1D"],
  selectedIndicators: ["MACD", "EMA200"],
  tradingStyle: "swingTrader",
  buyThresholdMin: 75,
  buyThresholdMax: 100,
  sellThresholdMin: 0,
  sellThresholdMax: 25,
  notificationMethods: ["browser", "email"],
  alertFrequency: "every_hour"
};

const alert = await heatmapAlertService.createAlert(alertConfig);
```

### Integration with Multi-Indicator Heatmap

The alert system integrates seamlessly with the existing Multi-Indicator Heatmap:

1. **Shared Data Source**: Uses the same market data and calculations
2. **Consistent Logic**: Applies the same indicator logic and scoring system
3. **Real-time Updates**: Monitors live market data for trigger conditions
4. **Unified Interface**: Alert management integrated into the navbar bell icon
5. **Visual Indicators**: Bell icon shows active alert count as a badge
6. **Modal Interface**: Clean, user-friendly alert configuration modal

### Future Enhancements

- **Backend Integration**: Real-time alert checking and notification delivery
- **Advanced Filters**: More sophisticated trigger conditions
- **Performance Analytics**: Detailed alert performance metrics
- **Mobile Notifications**: Push notification support
- **Alert Templates**: Pre-configured alert templates for common strategies

## RSI Tracker Alerts

### Overview

The RSI Tracker Alerts system allows users to create intelligent trading alerts based on RSI (Relative Strength Index) analysis, RFI (RSI-Flow Imbalance) scores, and RSI crossup/crossdown events. Users can configure alerts for specific trading pairs with customizable RSI thresholds and conditions.

### Key Features

#### Alert Configuration
- **Trading Pairs**: Select up to 5 currency pairs for monitoring (including precious metals and cryptocurrencies)
- **Timeframes**: Choose 1-3 timeframes from 1M to 1W for comprehensive analysis
- **RSI Settings**: Customizable RSI period (5-50), overbought threshold (60-90), oversold threshold (10-40)
- **Alert Conditions**: Select from 6 different conditions:
  - **Overbought**: RSI above overbought threshold
  - **Oversold**: RSI below oversold threshold
  - **Strong RFI**: RFI score above strong threshold (0.50-1.00)
  - **Moderate RFI**: RFI score above moderate threshold (0.30-0.80)
  - **Cross Up**: RSI crosses above oversold threshold
  - **Cross Down**: RSI crosses below overbought threshold
- **RFI Thresholds**: Customizable strong and moderate RFI thresholds
- **Notification Methods**: Browser notifications, email, or push notifications
- **Alert Frequency**: Once only, every 5/15/30 minutes, or hourly

#### Alert Management
- **Create Alerts**: Easy-to-use interface for setting up new RSI alerts
- **Edit Alerts**: Modify existing alert configurations
- **Toggle Active/Inactive**: Enable or disable alerts without deleting them
- **Delete Alerts**: Remove alerts you no longer need
- **Alert History**: View all triggered alerts with RSI data at trigger time

#### Trigger Tracking
- **Real-time Monitoring**: Alerts are checked against live RSI data
- **Trigger History**: Complete record of when alerts fired
- **RSI Data Snapshot**: Store actual RSI values, RFI scores, and price data at trigger time
- **Event Tracking**: Track RSI crossup/crossdown events with detailed data
- **Acknowledgment System**: Mark triggers as acknowledged to track follow-up
- **Statistics Dashboard**: View alert performance and trigger frequency

### Database Schema

#### rsi_alerts Table
```sql
- id: UUID (Primary Key)
- user_id: UUID (Foreign Key to auth.users)
- alert_name: VARCHAR(100) - User-defined alert name
- is_active: BOOLEAN - Alert status
- pairs: JSONB - Array of up to 5 trading pairs
- timeframes: JSONB - Array of 1-3 timeframes for RSI analysis
- rsi_period: INTEGER - RSI calculation period (5-50)
- rsi_overbought_threshold: INTEGER - Overbought threshold (60-90)
- rsi_oversold_threshold: INTEGER - Oversold threshold (10-40)
- alert_conditions: JSONB - Array of alert conditions
- rfi_strong_threshold: DECIMAL(3,2) - Strong RFI threshold (0.50-1.00)
- rfi_moderate_threshold: DECIMAL(3,2) - Moderate RFI threshold (0.30-0.80)
- notification_methods: JSONB - Array of notification types
- alert_frequency: VARCHAR(20) - How often to check for triggers
- created_at/updated_at: TIMESTAMP - Audit timestamps
- last_triggered_at: TIMESTAMP - Last trigger time
```

#### rsi_alert_triggers Table
```sql
- id: UUID (Primary Key)
- alert_id: UUID (Foreign Key to rsi_alerts)
- triggered_at: TIMESTAMP - When the alert fired
- trigger_condition: VARCHAR(20) - Specific condition that triggered
- symbol: VARCHAR(20) - Trading pair that triggered
- timeframe: VARCHAR(10) - Timeframe that triggered
- rsi_value: DECIMAL(5,2) - Actual RSI value at trigger
- rfi_score: DECIMAL(3,2) - RFI score at trigger (if applicable)
- current_price: DECIMAL(10,5) - Current price at trigger
- price_change_percent: DECIMAL(5,2) - Price change percentage
- rsi_event_data: JSONB - Additional data for RSI events
- is_acknowledged: BOOLEAN - User acknowledgment status
- acknowledged_at: TIMESTAMP - When user acknowledged
```

### Service API

The `RSIAlertService` provides a comprehensive API for managing RSI alerts:

#### Core Methods
- `createAlert(config)` - Create a new RSI alert with validation
- `getAlerts()` - Get all user RSI alerts
- `getActiveAlerts()` - Get only active RSI alerts
- `updateAlert(id, updates)` - Update alert configuration
- `deleteAlert(id)` - Remove an RSI alert
- `toggleAlert(id, isActive)` - Enable/disable alerts

#### Trigger Management
- `getAlertTriggers(alertId, options)` - Get triggers for specific alert
- `acknowledgeTrigger(triggerId)` - Mark trigger as acknowledged
- `getRecentTriggers(options)` - Get recent triggers across all alerts
- `getAlertStats()` - Get alert statistics and performance metrics

#### Configuration Helpers
- `getDefaultAlertConfig()` - Get default configuration template
- `getAlertOptions()` - Get available options for dropdowns
- `_validateRSIAlertConfig(config)` - Validate alert configuration

### Security Features

#### Row Level Security (RLS)
- **User Isolation**: Users can only access their own RSI alerts and triggers
- **Secure Policies**: Comprehensive RLS policies for all operations
- **Audit Trail**: Complete tracking of alert creation and modifications

#### Data Validation
- **Input Validation**: Comprehensive validation of all alert parameters
- **Constraint Checking**: Database-level constraints for data integrity
- **Error Handling**: Graceful error handling with meaningful messages

### Usage Examples

#### Creating a Basic RSI Overbought/Oversold Alert
```javascript
const alertConfig = {
  alertName: "EURUSD RSI Alert",
  pairs: ["EURUSD"],
  timeframes: ["1H"],
  rsiPeriod: 14,
  rsiOverboughtThreshold: 70,
  rsiOversoldThreshold: 30,
  alertConditions: ["overbought", "oversold"],
  notificationMethods: ["browser"],
  alertFrequency: "once"
};

const alert = await rsiAlertService.createAlert(alertConfig);
```

#### Creating a Multi-Pair Multi-Timeframe RFI Alert
```javascript
const alertConfig = {
  alertName: "Major Pairs RFI Alert",
  pairs: ["EURUSD", "GBPUSD", "USDJPY", "XAUUSD", "BTCUSD"],
  timeframes: ["1H", "4H", "1D"],
  rsiPeriod: 14,
  rsiOverboughtThreshold: 75,
  rsiOversoldThreshold: 25,
  alertConditions: ["rfi_strong", "rfi_moderate", "crossup", "crossdown"],
  rfiStrongThreshold: 0.85,
  rfiModerateThreshold: 0.65,
  notificationMethods: ["browser", "email"],
  alertFrequency: "every_hour"
};

const alert = await rsiAlertService.createAlert(alertConfig);
```

### Integration with RSI Tracker

The alert system integrates seamlessly with the existing RSI Tracker:

1. **Shared Data Source**: Uses the same RSI calculations and RFI analysis
2. **Consistent Logic**: Applies the same RSI period and threshold logic
3. **Real-time Updates**: Monitors live RSI data for trigger conditions
4. **Unified Interface**: Alert management integrated into the navbar with orange TrendingUp icon
5. **Visual Indicators**: TrendingUp icon shows active RSI alert count as a badge
6. **Modal Interface**: Clean, user-friendly RSI alert configuration modal

### Supported Trading Pairs

The RSI Tracker Alerts support all trading pairs available in the RSI Tracker:

#### Major Currency Pairs
- EURUSD, GBPUSD, USDJPY, USDCHF, AUDUSD, USDCAD, NZDUSD
- EURGBP, EURJPY, EURCHF, EURAUD, EURCAD, EURNZD
- GBPJPY, GBPCHF, GBPAUD, GBPCAD, GBPNZD
- AUDJPY, AUDCHF, AUDCAD, AUDNZD
- CADJPY, CADCHF, CHFJPY, NZDJPY, NZDCHF, NZDCAD

#### Precious Metals
- XAUUSD (Gold), XAGUSD (Silver)

#### Cryptocurrencies
- BTCUSD (Bitcoin), ETHUSD (Ethereum)

### Future Enhancements

- **Backend Integration**: Real-time RSI alert checking and notification delivery
- **Advanced RSI Analysis**: More sophisticated RSI-based trigger conditions
- **Performance Analytics**: Detailed RSI alert performance metrics
- **Mobile Notifications**: Push notification support
- **Alert Templates**: Pre-configured RSI alert templates for common strategies
- **Multi-timeframe Analysis**: Cross-timeframe RSI analysis alerts

## RSI Correlation Alerts

### Overview

The RSI Correlation Alerts system allows users to create intelligent trading alerts based on RSI Correlation Dashboard analysis. It supports both RSI Threshold mode (traditional overbought/oversold mismatches) and Real Correlation mode (actual correlation coefficient analysis) with comprehensive correlation pair monitoring across multiple timeframes.

### Key Features

#### Alert Configuration
- **Correlation Pairs**: Select up to 5 correlation pairs from 17 available pairs (positive and negative correlations)
- **Timeframes**: Choose 1-3 timeframes from 1M to 1W for comprehensive analysis
- **Calculation Modes**: 
  - **RSI Threshold Mode**: Alert based on RSI overbought/oversold mismatches
  - **Real Correlation Mode**: Alert based on actual correlation coefficients
- **RSI Settings** (RSI Threshold mode): Customizable RSI period (5-50), overbought threshold (60-90), oversold threshold (10-40)
- **Correlation Settings** (Real Correlation mode): Rolling correlation window (20, 50, 90, 120 periods)
- **Alert Conditions**: Mode-specific conditions:
  - **RSI Threshold Mode**: Positive mismatch, negative mismatch, neutral break
  - **Real Correlation Mode**: Strong positive, strong negative, weak correlation, correlation break
- **Correlation Thresholds** (Real Correlation mode): Customizable strong (0.50-1.00), moderate (0.20-0.80), weak (0.05-0.50)
- **Notification Methods**: Browser notifications, email, or push notifications
- **Alert Frequency**: Once only, every 5/15/30 minutes, or hourly

#### Alert Management
- **Create Alerts**: Easy-to-use interface for setting up new RSI correlation alerts
- **Edit Alerts**: Modify existing alert configurations
- **Toggle Active/Inactive**: Enable or disable alerts without deleting them
- **Delete Alerts**: Remove alerts you no longer need
- **Alert History**: View all triggered alerts with correlation data at trigger time

#### Trigger Tracking
- **Real-time Monitoring**: Alerts are checked against live RSI correlation data
- **Trigger History**: Complete record of when alerts fired
- **Correlation Data Snapshot**: Store actual RSI values, correlation coefficients, and market data at trigger time
- **Mode-specific Tracking**: Different data captured for RSI Threshold vs Real Correlation modes
- **Acknowledgment System**: Mark triggers as acknowledged to track follow-up
- **Statistics Dashboard**: View alert performance and trigger frequency

### Database Schema

#### rsi_correlation_alerts Table
```sql
- id: UUID (Primary Key)
- user_id: UUID (Foreign Key to auth.users)
- alert_name: VARCHAR(100) - User-defined alert name
- is_active: BOOLEAN - Alert status
- correlation_pairs: JSONB - Array of up to 5 correlation pairs
- timeframes: JSONB - Array of 1-3 timeframes for correlation analysis
- calculation_mode: VARCHAR(20) - 'rsi_threshold' | 'real_correlation'
- rsi_period: INTEGER - RSI calculation period (5-50)
- rsi_overbought_threshold: INTEGER - Overbought threshold (60-90)
- rsi_oversold_threshold: INTEGER - Oversold threshold (10-40)
- correlation_window: INTEGER - Rolling correlation window (20, 50, 90, 120)
- alert_conditions: JSONB - Array of alert conditions based on mode
- strong_correlation_threshold: DECIMAL(3,2) - Strong correlation threshold (0.50-1.00)
- moderate_correlation_threshold: DECIMAL(3,2) - Moderate correlation threshold (0.20-0.80)
- weak_correlation_threshold: DECIMAL(3,2) - Weak correlation threshold (0.05-0.50)
- notification_methods: JSONB - Array of notification types
- alert_frequency: VARCHAR(20) - How often to check for triggers
- created_at/updated_at: TIMESTAMP - Audit timestamps
- last_triggered_at: TIMESTAMP - Last trigger time
```

#### rsi_correlation_alert_triggers Table
```sql
- id: UUID (Primary Key)
- alert_id: UUID (Foreign Key to rsi_correlation_alerts)
- triggered_at: TIMESTAMP - When the alert fired
- trigger_condition: VARCHAR(30) - Specific condition that triggered
- calculation_mode: VARCHAR(20) - Mode used when trigger occurred
- pair_symbol1: VARCHAR(20) - First symbol in the pair
- pair_symbol2: VARCHAR(20) - Second symbol in the pair
- timeframe: VARCHAR(10) - Timeframe that triggered
- rsi1_value: DECIMAL(5,2) - RSI value for first symbol (RSI mode)
- rsi2_value: DECIMAL(5,2) - RSI value for second symbol (RSI mode)
- correlation_value: DECIMAL(4,3) - Actual correlation value (-1 to 1) (Real mode)
- correlation_strength: VARCHAR(10) - 'weak', 'moderate', 'strong' (Real mode)
- correlation_trend: VARCHAR(15) - 'increasing', 'decreasing', 'stable' (Real mode)
- trigger_data: JSONB - Additional data specific to trigger condition
- is_acknowledged: BOOLEAN - User acknowledgment status
- acknowledged_at: TIMESTAMP - When user acknowledged
```

### Service API

The `RSICorrelationAlertService` provides a comprehensive API for managing RSI correlation alerts:

#### Core Methods
- `createAlert(config)` - Create a new RSI correlation alert with validation
- `getAlerts()` - Get all user RSI correlation alerts
- `getActiveAlerts()` - Get only active RSI correlation alerts
- `updateAlert(id, updates)` - Update alert configuration
- `deleteAlert(id)` - Remove an RSI correlation alert
- `toggleAlert(id, isActive)` - Enable/disable alerts

#### Trigger Management
- `getAlertTriggers(alertId, options)` - Get triggers for specific alert
- `acknowledgeTrigger(triggerId)` - Mark trigger as acknowledged
- `getRecentTriggers(options)` - Get recent triggers across all alerts
- `getAlertStats()` - Get alert statistics and performance metrics

#### Configuration Helpers
- `getDefaultAlertConfig()` - Get default configuration template
- `getAlertOptions()` - Get available options for dropdowns
- `_validateRSICorrelationAlertConfig(config)` - Validate alert configuration

### Security Features

#### Row Level Security (RLS)
- **User Isolation**: Users can only access their own RSI correlation alerts and triggers
- **Secure Policies**: Comprehensive RLS policies for all operations
- **Audit Trail**: Complete tracking of alert creation and modifications

#### Data Validation
- **Input Validation**: Comprehensive validation of all alert parameters
- **Constraint Checking**: Database-level constraints for data integrity
- **Error Handling**: Graceful error handling with meaningful messages

### Usage Examples

#### Creating a Basic RSI Threshold Alert
```javascript
const alertConfig = {
  alertName: "EUR-GBP RSI Mismatch Alert",
  correlationPairs: [["EURUSD", "GBPUSD"]],
  timeframes: ["1H"],
  calculationMode: "rsi_threshold",
  rsiPeriod: 14,
  rsiOverboughtThreshold: 70,
  rsiOversoldThreshold: 30,
  alertConditions: ["positive_mismatch", "negative_mismatch"],
  notificationMethods: ["browser"],
  alertFrequency: "once"
};

const alert = await rsiCorrelationAlertService.createAlert(alertConfig);
```

#### Creating a Real Correlation Alert
```javascript
const alertConfig = {
  alertName: "Major Pairs Correlation Alert",
  correlationPairs: [["EURUSD", "GBPUSD"], ["USDJPY", "EURUSD"], ["XAUUSD", "XAGUSD"]],
  timeframes: ["1H", "4H", "1D"],
  calculationMode: "real_correlation",
  correlationWindow: 50,
  alertConditions: ["strong_positive", "strong_negative", "correlation_break"],
  strongCorrelationThreshold: 0.75,
  moderateCorrelationThreshold: 0.35,
  weakCorrelationThreshold: 0.20,
  notificationMethods: ["browser", "email"],
  alertFrequency: "every_hour"
};

const alert = await rsiCorrelationAlertService.createAlert(alertConfig);
```

### Integration with RSI Correlation Dashboard

The alert system integrates seamlessly with the existing RSI Correlation Dashboard:

1. **Shared Data Source**: Uses the same RSI calculations and correlation analysis
2. **Consistent Logic**: Applies the same RSI period, thresholds, and correlation windows
3. **Real-time Updates**: Monitors live RSI correlation data for trigger conditions
4. **Unified Interface**: Alert management integrated into the navbar with purple BarChart3 icon
5. **Visual Indicators**: BarChart3 icon shows active RSI correlation alert count as a badge
6. **Modal Interface**: Clean, user-friendly RSI correlation alert configuration modal

### Supported Correlation Pairs

The RSI Correlation Alerts support all 17 correlation pairs available in the RSI Correlation Dashboard:

#### Positive Correlations (10 pairs)
- EURUSD ↔ GBPUSD, EURUSD ↔ AUDUSD, EURUSD ↔ NZDUSD
- GBPUSD ↔ AUDUSD, AUDUSD ↔ NZDUSD, USDCHF ↔ USDJPY
- XAUUSD ↔ XAGUSD (Gold-Silver), XAUUSD ↔ EURUSD (Gold-EUR)
- BTCUSD ↔ ETHUSD (Crypto), BTCUSD ↔ XAUUSD (Bitcoin-Gold)

#### Negative Correlations (7 pairs)
- EURUSD ↔ USDCHF, GBPUSD ↔ USDCHF
- USDJPY ↔ EURUSD, USDJPY ↔ GBPUSD
- USDCAD ↔ AUDUSD, USDCHF ↔ AUDUSD
- XAUUSD ↔ USDJPY (Gold-USDJPY)

### Calculation Modes

#### RSI Threshold Mode
- **Purpose**: Traditional RSI overbought/oversold mismatch detection
- **Logic**: 
  - Positive pairs: Mismatch if one RSI > 70 and other < 30
  - Negative pairs: Mismatch if both RSIs > 70 or both < 30
- **Conditions**: positive_mismatch, negative_mismatch, neutral_break
- **Data Captured**: RSI values, current prices, mismatch type

#### Real Correlation Mode
- **Purpose**: Actual correlation coefficient analysis using Pearson correlation
- **Logic**: 
  - Strong correlation: |correlation| ≥ threshold
  - Moderate correlation: threshold > |correlation| ≥ moderate threshold
  - Weak correlation: |correlation| < weak threshold
- **Conditions**: strong_positive, strong_negative, weak_correlation, correlation_break
- **Data Captured**: Correlation value, strength classification, trend direction

### Future Enhancements

- **Backend Integration**: Real-time RSI correlation alert checking and notification delivery
- **Advanced Correlation Analysis**: More sophisticated correlation-based trigger conditions
- **Performance Analytics**: Detailed RSI correlation alert performance metrics
- **Mobile Notifications**: Push notification support
- **Alert Templates**: Pre-configured RSI correlation alert templates for common strategies
- **Cross-timeframe Correlation**: Multi-timeframe correlation analysis alerts

## Accessibility

The application follows web accessibility best practices to ensure an inclusive user experience:

### Navigation Accessibility
- **Semantic Navigation**: Uses proper `<Link>` components for navigation instead of buttons where appropriate
- **Button Types**: All interactive buttons include proper `type="button"` attributes to prevent form submission
- **Accessible Labels**: Icon-only buttons include descriptive `aria-label` attributes for screen readers
- **Keyboard Navigation**: All interactive elements support keyboard navigation and focus management

### Recent Accessibility Improvements
- **Navbar Navigation**: Dashboard navigation now uses semantic `<Link>` components for better accessibility and open-in-new-tab behavior
- **Notification Button**: Added proper `type="button"` and `aria-label="View notifications"` to the notification icon button
- **AI News Modal**: Enhanced modal accessibility with proper dialog semantics, ARIA attributes, and z-index management
  - Fixed z-index conflict with sticky navbar (raised to z-[60])
  - Added `role="dialog"`, `aria-modal="true"`, and proper labeling
  - Implemented safe-area inset support for mobile devices
  - Added accessible close button with proper labeling
- **Screen Reader Support**: All interactive elements now provide meaningful labels for assistive technologies

## Security

- **Row Level Security (RLS)**: All user data is protected with Supabase RLS policies
- **Authentication**: Secure user authentication with Supabase Auth
- **Data Isolation**: Each user can only access their own data
- **XSS Protection**: HTML sanitization implemented to prevent cross-site scripting attacks
  - Custom sanitization function for AI news analysis content
  - Escapes all HTML entities before applying safe transformations
  - Whitelists only `<strong>` and `<br />` tags for formatting
- **Enhanced Authentication**: Robust token parsing for password reset flows
  - Handles both URL search parameters and hash fragments
  - Hash parameters take precedence over search parameters
  - Ensures Supabase authentication tokens are correctly parsed regardless of URL format

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.
