import { Sun, Moon } from "lucide-react";
import React, { useState, useEffect, useCallback } from "react";
import {
  ResponsiveContainer,
  Tooltip,
  AreaChart,
  Area,
} from "recharts";


const data = [
  { time: "1", volume: 20 },
  { time: "2", volume: 30 },
  { time: "3", volume: 25 },
  { time: "4", volume: 40 },
  { time: "5", volume: 50 },
  { time: "6", volume: 45 },
  { time: "7", volume: 60 },
  { time: "8", volume: 70 },
  { time: "9", volume: 65 },
  { time: "10", volume: 55 },
  { time: "11", volume: 75 },
  { time: "12", volume: 80 },
];

const ForexMarketTimeZone = () => {
  const [selectedTimezone, setSelectedTimezone] = useState("Asia/Kolkata");
  const [is24Hour, setIs24Hour] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [sliderPosition, setSliderPosition] = useState(66.67); // Default position (2/3 of timeline)
  const [isDragging, setIsDragging] = useState(false);

  // Real-time updates
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Calculate time based on slider position
  const getTimeFromSliderPosition = (position) => {
    const hours = Math.floor((position / 100) * 24);
    const minutes = Math.floor(((position / 100) * 24 - hours) * 60);
    const date = new Date();
    date.setHours(hours, minutes, 0, 0);
    return date;
  };

  // Get day/night icon based on time
  const getTimeIcon = (date, timezone) => {
    const localTime = new Date(date.toLocaleString("en-US", {timeZone: timezone}));
    const hour = localTime.getHours();
    
    // Day: 6 AM to 6 PM, Night: 6 PM to 6 AM
    if (hour >= 6 && hour < 18) {
      return <Sun size={16} className="text-yellow-400" />;
    } else {
      return <Moon size={16} className="text-blue-300" />;
    }
  };

  // Handle mouse events for slider
  const handleMouseDown = (e) => {
    setIsDragging(true);
    e.preventDefault();
  };

  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return;
    
    const timeline = e.currentTarget.closest('.timeline-container');
    if (!timeline) return;
    
    const rect = timeline.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, [isDragging]);

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Add global mouse events when dragging
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove]);

  // Format time based on 12/24 hour toggle
  const formatTime = (date, timezone) => {
    const options = {
      timeZone: timezone,
      hour: '2-digit',
      minute: '2-digit',
      hour12: !is24Hour
    };
    return date.toLocaleTimeString('en-US', options);
  };

  // Format date based on timezone
  const formatDate = (date, timezone) => {
    const options = {
      timeZone: timezone,
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      timeZoneName: 'short'
    };
    return date.toLocaleDateString('en-US', options);
  };

  // Get market status based on time
  const getMarketStatus = (timezone) => {
    const now = new Date();
    const localTime = new Date(now.toLocaleString("en-US", {timeZone: timezone}));
    const day = localTime.getDay(); // 0 = Sunday, 6 = Saturday
    const hour = localTime.getHours();
    
    // Forex markets are closed on weekends
    if (day === 0 || day === 6) {
      return "MARKET CLOSED FOR THE WEEKEND";
    }
    
    // Basic trading hours (simplified)
    if (hour >= 8 && hour < 17) {
      return "MARKET OPEN";
    } else {
      return "MARKET CLOSED";
    }
  };

  const markets = [
    {
      name: "Sydney",
      flag: "🇦🇺",
      timezone: "Australia/Sydney",
      color: "stripes-blue",
    },
    {
      name: "Tokyo",
      flag: "🇯🇵",
      timezone: "Asia/Tokyo",
      color: "stripes-pink",
    },
    {
      name: "London",
      flag: "🇬🇧",
      timezone: "Europe/London",
      color: "stripes-blue",
    },
    {
      name: "New York",
      flag: "🇺🇸",
      timezone: "America/New_York",
      color: "stripes-green",
    },
  ];

  return (
    <div className="bg-white  p-3 max-w-4xl mx-auto font-sans relative">
      {/* Time Format Toggle - Top Right */}
      <div className="absolute top-4 right-4 flex items-center gap-2">
        <span className="text-xs text-gray-500">12h</span>
        <button
          onClick={() => setIs24Hour(!is24Hour)}
          className="flex items-center justify-center w-8 h-4 rounded-full transition-colors duration-200"
          style={{
            backgroundColor: is24Hour ? '#3b82f6' : '#d1d5db'
          }}
        >
          <div 
            className="w-3 h-3 bg-white rounded-full shadow-sm transition-transform duration-200"
            style={{
              transform: is24Hour ? 'translateX(4px)' : 'translateX(-4px)'
            }}
          />
        </button>
        <span className="text-xs text-gray-500">24h</span>
      </div>

      {/* Header */}
      <div className="mb-3 pr-16">
        <h1 className="text-xl font-bold text-gray-800">
          Forex Market Time Zone Converter
        </h1>
        <p className="text-xs text-gray-500">
          Learn more about{" "}
          <button className="text-indigo-600 underline bg-transparent border-none cursor-pointer p-0">
            Forex Market Hours
          </button>
          .
        </p>
      </div>

      {/* Timezone Selector */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-sm font-semibold text-gray-600">TIMEZONE</span>
        <select
          className="border rounded-lg px-2 py-1 text-sm"
          value={selectedTimezone}
          onChange={(e) => setSelectedTimezone(e.target.value)}
        >
          <option value="Asia/Kolkata">Kolkata (GMT +5:30)</option>
          <option value="Europe/London">London (GMT +1)</option>
          <option value="America/New_York">New York (GMT -4)</option>
          <option value="Asia/Tokyo">Tokyo (GMT +9)</option>
          <option value="Australia/Sydney">Sydney (GMT +10)</option>
        </select>
      </div>

      {/* Timeline */}
      <div className="relative timeline-container" onMouseMove={handleMouseMove}>
        {/* Top hours - Real-time */}
        <div className="flex text-xs text-gray-500 justify-between px-6 mb-2">
          {Array.from({ length: 24 }).map((_, i) => {
            const hourTime = new Date();
            hourTime.setHours(i, 0, 0, 0);
            const displayHour = formatTime(hourTime, selectedTimezone).split(':')[0];
            return (
              <span key={i} className={i === new Date().getHours() ? 'text-purple-600 font-bold' : ''}>
                {displayHour}
              </span>
            );
          })}
        </div>

        {/* Interactive Timeline Background */}
        <div 
          className="h-3 bg-gray-200 rounded-full mx-6 mb-6 cursor-pointer"
          role="slider"
          tabIndex={0}
          aria-label="Timeline slider"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={sliderPosition}
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const percentage = (x / rect.width) * 100;
            setSliderPosition(percentage);
          }}
          onKeyDown={(e) => {
            if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
              e.preventDefault();
              const increment = e.key === 'ArrowRight' ? 5 : -5;
              setSliderPosition(prev => Math.max(0, Math.min(100, prev + increment)));
            }
          }}
        >
          {/* Timeline markers */}
          {Array.from({ length: 24 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-px h-3 bg-gray-300"
              style={{ left: `${(i / 23) * 100}%` }}
            />
          ))}
        </div>

        {/* Vertical Time Indicator - Interactive Slider */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-purple-500 cursor-grab active:cursor-grabbing transition-all duration-200"
          style={{ left: `${sliderPosition}%` }}
          role="slider"
          tabIndex={0}
          aria-label="Time indicator slider"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={sliderPosition}
          onMouseDown={handleMouseDown}
          onKeyDown={(e) => {
            if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
              e.preventDefault();
              const increment = e.key === 'ArrowRight' ? 5 : -5;
              setSliderPosition(prev => Math.max(0, Math.min(100, prev + increment)));
            }
          }}
        >
          {/* Slider Handle */}
          <div className="absolute -top-3 -left-3 w-6 h-6 bg-purple-600 rounded-full border-2 border-white shadow-lg"></div>
        </div>
        
        {/* Time Display */}
        <div 
          className="absolute -top-12 flex flex-col items-center pointer-events-none"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          <div className="bg-purple-600 text-white px-4 py-2 rounded-xl shadow-lg text-center">
            <div className="flex items-center justify-center gap-2">
              {getTimeIcon(getTimeFromSliderPosition(sliderPosition), selectedTimezone)}
              {formatTime(getTimeFromSliderPosition(sliderPosition), selectedTimezone)}
            </div>
            <span className="text-xs">{getTimeFromSliderPosition(sliderPosition).toLocaleDateString('en-US', { weekday: 'long', timeZone: selectedTimezone })}</span>
          </div>
        </div>

        {/* Market Rows */}
        <div className="space-y-3 mt-3">
          {markets.map((m, i) => (
            <div
              key={i}
              className="flex items-center gap-4 py-3"
            >
              {/* Flag + Info */}
              <div className="flex items-center gap-3 w-64">
                <span className="text-2xl">{m.flag}</span>
                <div>
                  <h3 className="font-semibold text-base text-gray-800">{m.name}</h3>
                  <p className="text-sm text-gray-600">{formatTime(currentTime, m.timezone)}</p>
                  <p className="text-xs text-gray-500">{formatDate(currentTime, m.timezone)}</p>
                </div>
              </div>

              {/* Status */}
              <div className="text-sm text-gray-700 font-medium w-64">
                <span className="bg-gray-100 px-3 py-2 rounded-lg whitespace-nowrap">
                  {getMarketStatus(m.timezone)}
                </span>
              </div>

              {/* Timeline bar */}
              <div className="flex-1 ml-6">
                <div className={`h-6 w-1/4 rounded-lg ${m.color}`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trading Volume Graph */}
      <div className="mt-3">
        <p className="text-xs text-gray-600">
          Trading Volume is usually high at this time of day.
        </p>
        <span className="inline-block mt-1 px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
          High
        </span>

        {/* Recharts Line Graph */}
        <div className="mt-2 h-24">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="colorVolume" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#22c55e" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Tooltip />
              <Area
                type="monotone"
                dataKey="volume"
                stroke="#22c55e"
                fillOpacity={1}
                fill="url(#colorVolume)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default ForexMarketTimeZone;
