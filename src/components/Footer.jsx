
function Footer() {
  const currentYear = new Date().getFullYear()

  const navigation = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Certificates", href: "#certificates" },
    { label: "Contact", href: "#contact" },
  ]

  const socials = [
    {
      label: "Instagram",
      href: "https://www.instagram.com/nazwa_trimiftah",
    },
    {
      label: "GitHub",
      href: "https://github.com/nazwatrimiftah03",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/nazwa-tri-miftah-siregar-2b0729352/",
    },
  ]

  return (
    <footer className="border-t border-[#e2e3dc] bg-[#edf1e9]">
      <div className="mx-auto max-w-6xl px-6 py-12 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_0.8fr]">

          {/* Brand */}
          <div className="max-w-sm">
            <a
              href="#home"
              aria-label="Back to home"
              className="inline-flex items-center rounded-full bg-[#879b80] px-5 py-2.5 text-xl font-black text-white transition duration-300 hover:-translate-y-1 hover:bg-[#71866b] hover:shadow-lg"
            >
              NTM.
            </a>

            <p className="mt-5 text-sm leading-7 text-[#73766f]">
              A little space to share my journey, creativity,
              experiences, and things I love building.
            </p>

            <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#879b80]">
              Personal Portfolio · 2026
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#879b80]">
              Explore
            </h3>

            <nav
              aria-label="Footer navigation"
              className="grid grid-cols-2 gap-x-10 gap-y-3"
            >
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="w-fit text-sm text-[#73766f] transition duration-300 hover:translate-x-1 hover:text-[#71866b]"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#879b80]">
              Find Me
            </h3>

            <div className="flex flex-col gap-3">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit my ${social.label} profile`}
                  className="w-fit text-sm text-[#73766f] transition duration-300 hover:translate-x-1 hover:text-[#71866b]"
                >
                  {social.label} ↗
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col justify-between gap-3 border-t border-[#d8dfd3] pt-6 text-xs text-[#92968e] sm:flex-row">
          <p>© {currentYear} Nazwa Tri Miftah Siregar. All rights reserved.</p>

          <a
            href="#home"
            className="w-fit transition hover:text-[#71866b]"
          >
            Back to top ↑
          </a>

          <p>Designed & built with care.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
