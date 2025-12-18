import Blackhole from "../components/Blackhole"

export default function Home() {
  return (
    <section className="relative h-screen bg-black overflow-hidden flex items-center justify-center">

      <Blackhole />

      {/* TEXT LAYER */}
      <div className="absolute text-center text-white">
        <h1 className="text-[10vw] font-bold tracking-widest">
          XPECTO
        </h1>
        <p className="mt-2 tracking-[0.3em] text-gray-400">
          OCTOBER 24 • 25 • 26
        </p>
      </div>

    </section>
  )
}
