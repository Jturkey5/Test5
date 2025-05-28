import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'VibeTrading AI - Advanced LLM Trading System',
  description: 'Discover our cutting-edge LLM-powered trading system with proven win rates and advanced verification methods.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="fixed w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <span className="text-xl font-bold gradient-text">VibeTrading AI</span>
              </div>
              <div className="flex items-center space-x-8">
                <a href="#about" className="text-gray-700 hover:text-primary">About</a>
                <a href="#performance" className="text-gray-700 hover:text-primary">Performance</a>
                <a href="#technology" className="text-gray-700 hover:text-primary">Technology</a>
                <a href="#contact" className="button">Get Started</a>
              </div>
            </div>
          </div>
        </nav>
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  )
} 