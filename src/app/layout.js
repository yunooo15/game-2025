import '../styles/globals.css'

export const metadata = {
  title: '不要睡覺大挑戰',
  description: '打瞌睡點擊遊戲',
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hant">
      <body className="min-h-screen bg-yellow-50 text-gray-800 font-sans">
        {children}
      </body>
    </html>
  )
}
