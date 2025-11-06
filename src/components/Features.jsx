import { Code, Database, Server, Sparkles } from 'lucide-react'

const features = [
  {
    icon: <Sparkles className="text-violet-600" size={20} />,
    title: 'AI-assisted building',
    desc: 'Describe your idea and watch it come to life with clean, structured code.'
  },
  {
    icon: <Code className="text-blue-600" size={20} />,
    title: 'Modern frontend',
    desc: 'Vite + React with Tailwind for fast, delightful UIs.'
  },
  {
    icon: <Server className="text-emerald-600" size={20} />,
    title: 'Fast API backend',
    desc: 'Python FastAPI server wired for business logic and integrations.'
  },
  {
    icon: <Database className="text-rose-600" size={20} />,
    title: 'Built-in database',
    desc: 'MongoDB persistence ready to store anything you need.'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-16 border-t border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Everything you need to ship</h2>
        <p className="mt-2 text-gray-600 max-w-2xl">A complete toolkit to go from idea to live app in minutes.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="rounded-lg border border-gray-200 p-5 bg-gray-50/60">
              <div className="h-9 w-9 rounded-md bg-white border border-gray-200 inline-flex items-center justify-center">
                {f.icon}
              </div>
              <h3 className="mt-4 font-semibold text-gray-900">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
