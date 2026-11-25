
import { useEffect, useRef, useState } from "react"

function Counter({ to, suffix = "" }) {
  const ref = useRef(null)
  const [number, setNumber] = useState(0)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    let animationFrame
    let hasStarted = false

    const startCounting = () => {
      if (hasStarted) return
      hasStarted = true

      const startTime = performance.now()
      const duration = 1400

      const animate = (currentTime) => {
        const progress = Math.min(
          (currentTime - startTime) / duration,
          1
        )

        // Ease-out animation
        const easedProgress = 1 - Math.pow(1 - progress, 3)

        setNumber(Math.round(to * easedProgress))

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate)
        } else {
          setNumber(to)
        }
      }

      animationFrame = requestAnimationFrame(animate)
    }

    // Fallback jika IntersectionObserver tidak tersedia
    if (!("IntersectionObserver" in window)) {
      startCounting()
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startCounting()
          observer.disconnect()
        }
      },
      {
        threshold: 0.3,
      }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
      cancelAnimationFrame(animationFrame)
    }
  }, [to])

  return (
    <b
      ref={ref}
      className="inline-block text-3xl font-extrabold tracking-tight text-[#343a35] sm:text-4xl"
      aria-label={`${to}${suffix}`}
    >
      {number}
      {suffix}
    </b>
  )
}

export default Counter
