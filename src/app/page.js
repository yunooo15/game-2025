'use client'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  return (
    <div 
      className="relative w-full h-screen"
      style={{
        backgroundImage: 'url(/images/background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="relative h-full flex flex-col items-center justify-center">
        <h1 className="text-10xl font-bold text-white mb-8">不要睡著大挑戰</h1>
        <button
          className="bg-blue-500 text-white px-8 rounded-full text-xl font-bold hover:bg-blue-600 transition shadow-lg hover:shadow-xl transform hover:scale-105"
          onClick={() => router.push('/game')}
        >
          開始遊戲
        </button>
      </div>
    </div>
  )
}