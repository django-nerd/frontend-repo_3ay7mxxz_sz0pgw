export default function CTA() {
  return (
    <section id="get-started" className="py-16 bg-gradient-to-br from-violet-600 to-blue-600 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold">Ready to build something?</h2>
        <p className="mt-3 text-white/90 max-w-2xl mx-auto">
          Launch your next idea with an AI-powered workspace that handles the setup so you can focus on your product.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <a href="#" className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white text-gray-900 font-semibold hover:bg-white/90">Create a project</a>
          <a href="#features" className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-white/30 text-white font-semibold hover:bg-white/10">Explore features</a>
        </div>
        <p className="mt-6 text-sm text-white/80">No credit card required</p>
      </div>
    </section>
  )
}
