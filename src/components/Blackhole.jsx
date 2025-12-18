export default function BlackHole() {
  return (
    <div className="relative flex items-center justify-center">

      {/* ACCRETION DISK (ROTATING IMAGE) */}
      <img
        src="src\assets\Blackhole.png"
        alt="Black Hole Accretion Disk"
        className="
          w-[520px] h-[520px]
          animate-spin-slow
          select-none
          pointer-events-none
        "
      />

      {/* EVENT HORIZON (CENTER DARK CORE) */}
      <div
        className="
          absolute
          w-[220px] h-[220px]
          rounded-full
          bg-black
        "
      />

    </div>
  )
}
