'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import SleepBar from '@/components/SleepBar.js'
import StatusBar from '@/components/StatusBar.js'

export default function Game() {
  const [sleepLevel, setSleepLevel] = useState(0)
  const [isAwake, setIsAwake] = useState(false)
  const [time, setTime] = useState(0)
  const [isScaling, setIsScaling] = useState(false)
  const [clickCount, setClickCount] = useState(0)
  const router = useRouter()

  const handleWakeUp = () => {
    setSleepLevel(prev => Math.max(prev - 5, 0))
    setIsScaling(true)
    setClickCount(prev => prev + 1)
    setTimeout(() => setIsScaling(false), 300)
  }

  useEffect(() => {
    if (isAwake) return

    const interval = setInterval(() => {
      setSleepLevel(prev => {
        const next = prev + 2
        console.log('Sleep Level Updated:', next)
        if (next >= 100) {
          setIsAwake(true)
          clearInterval(interval)
        }
        return next
      })
      setTime(prev => prev + 0.2)
    }, 200)

    const keyHandler = (e) => {
      if (e.code === 'Space') {
        handleWakeUp()
      }
    }

    window.addEventListener('keydown', keyHandler)
    return () => {
      clearInterval(interval)
      window.removeEventListener('keydown', keyHandler)
    }
  }, [isAwake])

  useEffect(() => {
    if (isAwake) {
      setTimeout(() => {
        router.push(`/result?time=${Math.floor(time)}`)
      }, 1000)
    }
  }, [isAwake])

  return (
    <div 
      className="flex flex-col items-center justify-center h-screen text-center relative"
      style={{
        backgroundImage: 'url(/images/background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="bg-white/80 rounded-lg shadow-lg flex flex-col items-center px-8 py-12">
        <h2 className="text-2xl font-bold mb-8">小鬼，不要打瞌睡！</h2>
        <div className="text-sm py-6 text-gray-600 mb-2">睡意值</div>
        <div style={{ width: '480px' }} className="bg-gray-300/90 h-[60px] mb-4 border-2 border-gray-400 overflow-hidden relative z-10">
          <div 
            className="absolute top-0 left-0 h-full bg-red-500 transition-all duration-300 z-20"
            style={{ 
              width: `${sleepLevel}%`,
              minWidth: '8px',
              boxShadow: '0 0 10px rgba(239, 68, 68, 0.5)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent z-30" />
          <div className="absolute inset-0 bg-gray-300/90 z-10" style={{ width: `calc(100% - ${sleepLevel}%)`, right: 0 }} />
        </div>
        <div className="w-full mt-4">
          <div className="flex justify-center text-sm text-gray-600 mb-1">
            <span>時間：{Math.floor(time)}秒</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div 
              className="bg-blue-600 h-4 rounded-full transition-all duration-200" 
              style={{ width: `${Math.min((time / 30) * 100, 100)}%` }}
            ></div>
          </div>
        </div>
        <button
          className={`bg-transparent transition-transform duration-70 mt-8 ${isScaling ? 'scale-110' : 'scale-100'}`}
          onClick={handleWakeUp}
        >
          <img src="/images/sleepman.png" alt="sleepman" className="w-[360px] " />
        </button>
        <p className="mt-8 text-gray-500">按空白鍵或點擊人物讓自己醒著</p>
      </div>
    </div>
  )
}