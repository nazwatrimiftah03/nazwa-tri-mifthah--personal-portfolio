
import { useEffect, useRef, useState } from "react"

function Reveal({ children }) {
  const ref = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const element = ref.current

    if (!element) return

    // Fallback jika browser tidak mendukung IntersectionObserver
    if (!("IntersectionObserver" in window)) {
      setShow(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true)
          observer.unobserve(element)
        }
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -30px 0px",
      }
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none ${
        show
          ? "translate-y-0 opacity-100"
          : "translate-y-8 opacity-0"
      }`}
    >
      {children}
    </div>
  )
}

export default Reveal
