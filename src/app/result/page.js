'use client'
import { useSearchParams, useRouter } from 'next/navigation'

export default function Result() {
  const searchParams = useSearchParams()
  const time = searchParams.get('time')
  const router = useRouter()

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold mb-4">你醒來了！</h1>
      <img src="/images/wakeup.png" alt="wake up" className="w-32 h-32 mb-4" />
      <p className="text-lg mb-4">你撐過了 <strong>{time}</strong> 秒</p>
      <button
        className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 transition"
        onClick={() => router.push('/')}
      >
        再玩一次
      </button>
    </div>
  )
}