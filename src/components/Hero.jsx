
import photo1 from "../assets/hero.png"
import photo2 from "../assets/photo2.png"
import photo3 from "../assets/photo3.png"
import Typewriter from "./Typewriter"

function Hero() {
  return (
    <header
      id="home"
      className="relative flex min-h-screen flex-col overflow-hidden bg-[#f5f3ee] px-5 py-6 sm:px-10 sm:py-8"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#dce5d5]/60 blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-[#e5ebdd]/70 blur-[110px]" />

      {/* Top Information */}
      <nav className="relative z-20 mx-auto flex w-full max-w-7xl items-center justify-between border-b border-[#dde2d8] pb-5">
        <a
          href="#home"
          className="text-xl font-black tracking-tight text-[#343a35]"
        >
          NTM<span className="text-[#879b80]">.</span>
        </a>

        <span className="hidden text-[10px] font-semibold uppercase tracking-[0.3em] text-[#92968e] sm:block">
          Personal Portfolio
        </span>

        <a
          href="https://www.instagram.com/nazwa_trimiftah"
          target="_blank"
          rel="noreferrer"
          className="text-xs font-semibold text-[#64745f] transition hover:text-[#879b80]"
        >
          Instagram ↗
        </a>
      </nav>

      {/* Portfolio Information */}
      <div className="relative z-20 mx-auto mt-5 flex w-full max-w-7xl items-center justify-between">
        <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#92968e] sm:text-xs">
          Creative Portfolio
        </span>

        <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#92968e] sm:text-xs">
          2026 — Indonesia
        </span>
      </div>

      {/* Background Text */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <h1 className="whitespace-nowrap text-[27vw] font-black leading-none tracking-[-0.11em] text-[#879b80]/10 sm:text-[25vw]">
          NAZWA
        </h1>
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center py-14 text-center sm:py-16">

        {/* Availability Badge */}
        <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#cbd6c5] bg-white/70 px-5 py-2.5 shadow-sm backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="absolute h-full w-full animate-ping rounded-full bg-[#879b80] opacity-60" />
            <span className="relative h-2 w-2 rounded-full bg-[#879b80]" />
          </span>

          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#64745f] sm:text-xs">
            Open to Opportunities
          </span>
        </div>

        {/* Name */}
        <div className="animate-[heroFade_0.8s_ease-out_both]">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.4em] text-[#879b80]">
            Hello, I'm
          </p>

          <h2 className="text-6xl font-black tracking-[-0.07em] text-[#343a35] sm:text-8xl">
            Nazwa<span className="text-[#879b80]">.</span>
          </h2>

          <p className="mt-2 text-lg font-medium tracking-wide text-[#71866b] sm:text-3xl">
            Tri Miftah Siregar
          </p>

          <div className="mt-5 text-base font-medium text-[#64745f] sm:text-xl">
            <Typewriter />
          </div>
        </div>

        {/* Photos */}
        <div className="mt-10 flex items-center justify-center sm:mt-12">
          <img
            src={photo1}
            alt="Nazwa"
            className="h-40 w-28 -rotate-6 rounded-2xl border-[5px] border-white object-cover shadow-xl transition duration-500 hover:z-30 hover:-translate-y-3 hover:rotate-0 sm:h-64 sm:w-48"
          />

          <img
            src={photo2}
            alt="Nazwa at an event"
            className="z-20 -ml-5 h-48 w-32 -translate-y-4 rounded-2xl border-[5px] border-white object-cover shadow-2xl transition duration-500 hover:-translate-y-7 sm:-ml-7 sm:h-72 sm:w-52"
          />

          <img
            src={photo3}
            alt="Nazwa volunteering"
            className="-ml-5 h-40 w-28 rotate-6 rounded-2xl border-[5px] border-white object-cover shadow-xl transition duration-500 hover:z-30 hover:-translate-y-3 hover:rotate-0 sm:-ml-7 sm:h-64 sm:w-48"
          />
        </div>

        {/* Description */}
        <p className="mt-8 max-w-xl px-2 text-sm leading-8 text-[#73766f] sm:mt-9 sm:text-base">
          Computer Science student at Universitas Sumatera Utara with an
          interest in technology, software development, data analysis,
          and creative design. Always curious to learn, explore, and create.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-3 rounded-full bg-[#879b80] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#879b80]/20 transition duration-300 hover:-translate-y-1 hover:bg-[#71866b] sm:px-8"
          >
            Explore My Work
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-[#cbd6c5] bg-white/80 px-7 py-3.5 text-sm font-semibold text-[#64745f] transition duration-300 hover:-translate-y-1 hover:bg-[#edf1e9] sm:px-8"
          >
            Let's Connect ↗
          </a>
        </div>
      </div>

      {/* Bottom Information */}
      <div className="relative z-20 mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 border-t border-[#dde2d8] pt-5 sm:flex-row">
        <div className="text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-[#92968e]">
          © 2026 Nazwa Tri Miftah Siregar
        </div>

        <div className="flex items-center gap-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#71866b]">
          <a href="#about" className="transition hover:text-[#343a35]">
            About
          </a>
          <a href="#projects" className="transition hover:text-[#343a35]">
            Projects
          </a>
          <a href="#contact" className="transition hover:text-[#343a35]">
            Contact
          </a>
        </div>

        <a
          href="#about"
          className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#92968e] transition hover:text-[#64745f]"
        >
          Scroll to explore ↓
        </a>
      </div>
    </header>
  )
}

export default Hero
