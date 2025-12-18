export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-black via-[#050314] to-black overflow-hidden">
      
      {/* Glow */}
      <div className="absolute w-[500px] h-[500px] bg-purple-600/30 blur-[120px] rounded-full"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-wide text-white">
          XPECTO <span className="text-purple-400">2026</span>
        </h1>

        <p className="mt-6 text-gray-300 text-lg max-w-xl mx-auto">
          Create your imagination.  
          Where technology meets the cosmos.
        </p>

        <button className="mt-10 px-8 py-4 rounded-full bg-purple-600 hover:bg-purple-700 transition shadow-lg shadow-purple-500/40">
          Launch Experience 🚀
        </button>
      </div>
    </section>
  )
}
