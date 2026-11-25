
import { useEffect, useState } from "react"

const links = [
  ["About", "#about"],
  ["Projects", "#projects"],
  ["Experience", "#experience"],
  ["Skills", "#skills"],
  ["Certificates", "#certificates"],
  ["Contact", "#contact"],
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    function handleEscape(event) {
      if (event.key === "Escape") {
        setMenuOpen(false)
      }
    }

    window.addEventListener("keydown", handleEscape)

    return () => {
      window.removeEventListener("keydown", handleEscape)
    }
  }, [])

  return (
    <nav
      aria-label="Main navigation"
      className="sticky top-3 z-50 mx-auto mt-3 w-[calc(100%-2rem)] max-w-6xl"
    >
      <div className="relative">
        {/* Main Navbar */}
        <div className="flex items-center justify-between rounded-full border border-[#E2E3DC] bg-white/90 p-2 shadow-[0_4px_20px_rgba(65,77,62,0.08)] backdrop-blur-xl transition-all duration-300">
          {/* Logo */}
          <a
            href="#"
            onClick={() => setMenuOpen(false)}
            aria-label="Back to top"
            className="rounded-full bg-[#879B80] px-5 py-2.5 text-lg font-bold text-white transition duration-300 hover:bg-[#71866B] hover:shadow-md"
          >
            NTM.
          </a>

          {/* Desktop Menu */}
          <div className="hidden items-center gap-1 md:flex">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-medium text-[#52634E] transition-all duration-300 hover:bg-[#EDF1E9] hover:text-[#343A35]"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen((previous) => !previous)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="flex h-10 w-10 items-center justify-center rounded-full text-2xl text-[#52634E] transition duration-300 hover:bg-[#EDF1E9] md:hidden"
          >
            <span className="transition-transform duration-300">
              {menuOpen ? "×" : "☰"}
            </span>
          </button>
        </div>

        {/* Mobile Dropdown */}
        <div
          id="mobile-navigation"
          className={`absolute left-0 right-0 top-[calc(100%+0.6rem)] overflow-hidden rounded-2xl border border-[#E2E3DC] bg-white/95 shadow-[0_12px_30px_rgba(65,77,62,0.12)] backdrop-blur-xl transition-all duration-300 md:hidden ${
            menuOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-2 opacity-0"
          }`}
        >
          <div className="grid grid-cols-2 gap-2 p-3">
            {links.map(([label, href]) => (
              <a
                key={href}
                href={href}
                tabIndex={menuOpen ? 0 : -1}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-[#52634E] transition-all duration-300 hover:bg-[#EDF1E9] hover:pl-5 hover:text-[#343A35]"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
