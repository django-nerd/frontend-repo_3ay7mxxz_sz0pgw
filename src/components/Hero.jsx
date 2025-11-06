import { Star } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-violet-200/60 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-blue-200/60 blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Build full-stack apps with AI — fast.
          </h1>
          <p className="mt-5 text-gray-600 text-lg">
            Design, develop, and deploy interactive apps in a live sandbox. React frontends, FastAPI backends, and a connected database — all wired up for you.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#get-started" className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-gray-900 text-white font-medium hover:bg-gray-800">Start building</a>
            <a href="#features" className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-gray-300 text-gray-700 font-medium hover:bg-gray-50">See features</a>
          </div>
          <div className="mt-6 flex items-center gap-3 text-sm text-gray-600">
            <Star className="text-yellow-500" size={16} />
            Trusted by developers exploring new ideas every day
          </div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4">
          <div className="aspect-video rounded-md bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500" />
          <p className="mt-3 text-sm text-gray-500">Live preview sandbox with instant reloads</p>
        </div>
      </div>
    </section>
  )
}
