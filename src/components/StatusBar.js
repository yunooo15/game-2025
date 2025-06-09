export default function StatusBar({ value, color = 'red' }) {
  const colorMap = {
    red: 'bg-red-500',
    blue: 'bg-blue-500',
    green: 'bg-green-500'
  }

  return (
    <div className="w-full bg-gray-200 rounded-lg p-4 mb-4 border border-gray-300">
      <div className="w-full bg-gray-300 rounded-full h-8 overflow-hidden shadow-inner relative">
        <div 
          className={`${colorMap[color]} h-8 rounded-full transition-all duration-300 ease-in-out relative`}
          style={{ 
            width: `${value}%`,
            boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-white/20"></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent pointer-events-none"></div>
      </div>
    </div>
  )
} 