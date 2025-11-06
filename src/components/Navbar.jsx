import { Rocket, Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="w-full sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-gradient-to-tr from-violet-500 to-blue-500 text-white">
            <Rocket size={18} />
          </div>
          <span className="font-bold text-gray-900 text-lg">VibeCode</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-600">
          <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
          <a href="#how" className="hover:text-gray-900 transition-colors">How it works</a>
          <a href="#pricing" className="hover:text-gray-900 transition-colors">Pricing</a>
        </div>
        <div className="hidden md:block">
          <a href="#get-started" className="inline-flex items-center px-4 py-2 rounded-md bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors">Get Started</a>
        </div>
        <button className="md:hidden inline-flex items-center justify-center p-2 rounded-md border border-gray-300 text-gray-700" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <Menu size={20} />
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-3 space-y-2 text-sm">
            <a href="#features" className="block text-gray-700">Features</a>
            <a href="#how" className="block text-gray-700">How it works</a>
            <a href="#pricing" className="block text-gray-700">Pricing</a>
            <a href="#get-started" className="inline-flex items-center mt-2 px-3 py-2 rounded-md bg-gray-900 text-white text-sm font-medium">Get Started</a>
          </div>
        </div>
      )}
    </header>
  )
}
