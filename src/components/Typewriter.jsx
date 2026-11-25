
import { useEffect, useState } from "react"

const roles = [
  "aspiring data analyst",
  "design lover",
  "team player",
  "fast learner",
]

function Typewriter() {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState("")
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = roles[index]

    let delay = deleting ? 45 : 90

    if (!deleting && text === word) {
      delay = 1600
    }

    if (deleting && text === "") {
      delay = 350
    }

    const timer = setTimeout(() => {
      if (!deleting && text === word) {
        setDeleting(true)
      } else if (deleting && text === "") {
        setDeleting(false)
        setIndex((previous) => (previous + 1) % roles.length)
      } else {
        setText(
          deleting
            ? word.slice(0, text.length - 1)
            : word.slice(0, text.length + 1)
        )
      }
    }, delay)

    return () => clearTimeout(timer)
  }, [text, deleting, index])

  return (
    <p className="mt-4 h-8 text-lg font-medium text-[#73766f] sm:text-xl">
      I’m an{" "}
      <span className="font-semibold text-[#71866b]">
        {text}
      </span>
      <span
        aria-hidden="true"
        className="ml-0.5 inline-block animate-pulse text-[#879b80]"
      >
        |
      </span>
    </p>
  )
}

export default Typewriter
