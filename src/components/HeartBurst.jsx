
import { useEffect, useState } from "react"

function HeartBurst() {
  const [hearts, setHearts] = useState([])

  useEffect(() => {
    const onClick = (event) => {
      const base = Date.now() + Math.random()

      const batch = Array.from({ length: 5 }, (_, index) => ({
        id: base + index,
        x: event.clientX,
        y: event.clientY,
        dx: (Math.random() - 0.5) * 100,
        dy: -40 - Math.random() * 80,
        rotation: (Math.random() - 0.5) * 40,
      }))

      setHearts((previous) => [...previous, ...batch].slice(-30))

      window.setTimeout(() => {
        setHearts((previous) =>
          previous.filter((heart) => !batch.some((item) => item.id === heart.id))
        )
      }, 1000)
    }

    window.addEventListener("click", onClick)

    return () => {
      window.removeEventListener("click", onClick)
    }
  }, [])

  return (
    <>
      {hearts.map((heart) => (
        <span
          key={heart.id}
          aria-hidden="true"
          className="heart pointer-events-none fixed z-[70] select-none text-[#879B80]"
          style={{
            left: heart.x,
            top: heart.y,
            "--dx": `${heart.dx}px`,
            "--dy": `${heart.dy}px`,
            "--rotation": `${heart.rotation}deg`,
          }}
        >
          ♥
        </span>
      ))}
    </>
  )
}

export default HeartBurst
