'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import SleepBar from '@/components/SleepBar.js'

export default function Game() {
  const [sleepLevel, setSleepLevel] = useState(0)
  const [isAwake, setIsAwake] = useState(false)
  const [time, setTime] = useState(0)
  const [isScaling, setIsScaling] = useState(false)
  const router = useRouter()

  const handleWakeUp = () => {
    setSleepLevel(prev => Math.max(prev - 5, 0))
    setIsScaling(true)
    setTimeout(() => setIsScaling(false), 300)
  }

  useEffect(() => {
    if (isAwake) return

    const interval = setInterval(() => {
      setSleepLevel(prev => {
        const next = prev + 2
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
        <SleepBar value={sleepLevel} />
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