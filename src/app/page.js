'use client'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold mb-6">起床</h1>
      <img src="/images/sleep.png" alt="sleep icon" className="w-32 h-32 mb-4" />
      <button
        className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition"
        onClick={() => router.push('/game')}
      >
        開始遊戲
      </button>
    </div>
  )
}