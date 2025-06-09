'use client'
import { useSearchParams, useRouter } from 'next/navigation'
import { Suspense } from 'react'

function ResultContent() {
  const searchParams = useSearchParams()
  const time = searchParams.get('time')
  const router = useRouter()

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
      <div className="bg-white/80 p-8 rounded-lg shadow-lg flex flex-col">
        {/* <h1 className="text-4xl font-bold mb-4">你醒來了！</h1> */}
        <p className="text-lg mb-8">你撐過了 <strong>{time}</strong> 秒</p>
        <img src="/images/teacher.png" alt="teacher" className="w-[480px] mb-8" />
        <button
          className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600 transition shadow-lg hover:shadow-xl transform hover:scale-105"
          onClick={() => router.push('/')}
        >
          Again
        </button>
        <button
          className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition shadow-lg hover:shadow-xl transform hover:scale-105 mt-3"
          onClick={() => window.location.href = 'https://classroomdaydream.vercel.app'}
        >
          回到主頁
        </button>
      </div>
    </div>
  )
}

export default function Result() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ResultContent />
    </Suspense>
  )
}