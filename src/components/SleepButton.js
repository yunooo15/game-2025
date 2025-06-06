'use client'

export default function SleepButton({ onClick }) {
    return (
      <button
        onClick={onClick}
        className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
      >
        打瞌睡
      </button>
    )
  }