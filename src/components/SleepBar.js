'use client'

export default function SleepBar({ value }) {
    return (
      <div className="w-80 h-6 bg-gray-300 rounded overflow-hidden mb-4">
        <div
          className="h-full bg-red-500 transition-all duration-200"
          style={{ width: `${value}%` }}
        />
      </div>
    )
  }
  