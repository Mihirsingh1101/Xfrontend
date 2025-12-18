export default function Stars() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(80)].map((_, i) => (
        <span
          key={i}
          className="absolute bg-white rounded-full opacity-80"
          style={{
            width: Math.random() * 2 + 1 + "px",
            height: Math.random() * 2 + 1 + "px",
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
            animation: `pulse ${Math.random() * 3 + 2}s infinite`
          }}
        />
      ))}
    </div>
  )
}
