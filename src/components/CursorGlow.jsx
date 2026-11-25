
import { useEffect, useRef } from "react"

function CursorGlow() {
  const ref = useRef(null)

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches

    if (!isFinePointer) return

    const move = (event) => {
      if (!ref.current) return

      ref.current.style.transform = `translate3d(
        ${event.clientX - 150}px,
        ${event.clientY - 150}px,
        0
      )`
    }

    window.addEventListener("mousemove", move, { passive: true })

    return () => {
      window.removeEventListener("mousemove", move)
    }
  }, [])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-0 hidden h-[300px] w-[300px] rounded-full bg-[#A8B99F]/20 blur-3xl md:block"
      style={{
        willChange: "transform",
        transition: "transform 0.12s ease-out",
      }}
    />
  )
}

export default CursorGlow
