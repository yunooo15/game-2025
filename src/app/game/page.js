'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import SleepBar from '@/components/SleepBar.js'
import SleepButton from '@/components/SleepButton.js'

export default function Game() {
  const [sleepLevel, setSleepLevel] = useState(0)
  const [isAwake, setIsAwake] = useState(false)
  const [time, setTime] = useState(0)
  const router = useRouter()

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
        setSleepLevel(prev => Math.max(prev - 5, 0))
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
    <div className="relative w-full h-screen flex flex-col items-center justify-center text-center">
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/alarm.png" 
          alt="alarm" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10 bg-white/80 p-8 rounded-lg shadow-lg flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-4">小鬼，不要打瞌睡！</h2>
        <SleepBar value={sleepLevel} />
        <button
          className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition mt-4"
          onClick={() => setSleepLevel(prev => Math.max(prev - 5, 0))}
        >
          打瞌睡
        </button>
        <p className="mt-4 text-gray-500">按空白鍵或點擊讓自己醒著</p>
      </div>
    </div>
  )
}