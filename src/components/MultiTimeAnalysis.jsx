import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const MultiTimeAnalysis = () => {
  const [selectedTime] = useState(16); // 4:00 PM (24hr format)

  const data = [
    { hour: "0", volume: 20 },
    { hour: "2", volume: 15 },
    { hour: "4", volume: 10 },
    { hour: "6", volume: 25 },
    { hour: "8", volume: 40 },
    { hour: "10", volume: 60 },
    { hour: "12", volume: 70 },
    { hour: "14", volume: 85 },
    { hour: "16", volume: 90 },
    { hour: "18", volume: 60 },
    { hour: "20", volume: 45 },
    { hour: "22", volume: 30 },
  ];

  const markets = [
    {
      city: "Sydney",
      flag: "🇦🇺",
      time: "8:30 pm",
      utc: "UTC +10",
      status: "Closed",
      color: "bg-blue-400",
    },
    {
      city: "Tokyo",
      flag: "🇯🇵",
      time: "7:30 pm",
      utc: "UTC +9",
      status: "Closed",
      color: "bg-pink-400",
    },
    {
      city: "London",
      flag: "🇬🇧",
      time: "11:30 am",
      utc: "UTC +1",
      status: "Closed",
      color: "bg-blue-600",
    },
    {
      city: "New York",
      flag: "🇺🇸",
      time: "6:30 am",
      utc: "UTC -4",
      status: "Closed",
      color: "bg-green-500",
    },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto py-10 px-4">
      {/* Header */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Forex Market Time Zone Converter
      </h2>
      <p className="text-gray-500 mb-6">
        Learn more about{" "}
        <button className="text-blue-600 underline bg-transparent border-none p-0 cursor-pointer">
          Forex Market Hours
        </button>
        .
      </p>

      {/* Timezone Selector */}
      <div className="mb-6 flex items-center gap-4">
        <label htmlFor="timezone-select" className="font-medium">Timezone:</label>
        <select id="timezone-select" className="border px-3 py-2 rounded-lg shadow-sm">
          <option>Mumbai (GMT +5:30)</option>
          <option>New York (GMT -4)</option>
          <option>London (GMT +1)</option>
        </select>
      </div>

      {/* Market Rows */}
      <div className="space-y-4">
        {markets.map((m, i) => (
          <div
            key={i}
            className="flex items-center justify-between border-b pb-3"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{m.flag}</span>
              <div>
                <h3 className="font-semibold">{m.city}</h3>
                <p className="text-sm text-gray-500">
                  {m.time} ({m.utc})
                </p>
              </div>
            </div>
            <span className="text-sm text-red-500 font-medium">
              Market {m.status} for the Weekend
            </span>
          </div>
        ))}
      </div>

      {/* Timeline */}
      <div className="relative mt-8 h-32 border-t border-b">
        {/* Time slots */}
        <div className="flex justify-between text-sm text-gray-400 mt-1">
          {[...Array(13)].map((_, i) => (
            <span key={i}>{i * 1}</span>
          ))}
        </div>

        {/* Vertical Line Indicator */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-purple-600"
          style={{ left: `${(selectedTime / 24) * 100}%` }}
        >
          <div className="absolute -top-10 -left-8 bg-purple-600 text-white px-3 py-1 rounded-lg shadow">
            {selectedTime}:00
          </div>
        </div>
      </div>

      {/* Trading Volume Graph */}
      <div className="mt-10">
        <h3 className="text-gray-700 mb-2 text-sm">
          Trading Volume is usually high at this time of day.
        </h3>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={data}>
            <XAxis dataKey="hour" />
            <YAxis hide />
            <Tooltip />
            <Line type="monotone" dataKey="volume" stroke="#4CAF50" strokeWidth={3} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default MultiTimeAnalysis;
