
import Counter from "./Counter"

const interests = [
  "Technology",
  "Data Analysis",
  "UI/UX Design",
  "Software Development",
  "Photography",
  "Traveling",
]

function About() {
  return (
    <section
      id="about"
      className="relative mx-auto max-w-6xl overflow-hidden px-6 py-20 sm:py-28"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute right-0 top-24 -z-10 h-64 w-64 rounded-full bg-[#e9ede5] opacity-60 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-20 -z-10 h-64 w-64 rounded-full bg-[#edf1e9] blur-3xl" />

      {/* Section Heading */}
      <div className="mb-12 flex flex-col justify-between gap-6 md:mb-14 md:flex-row md:items-end">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-[#879b80]" />
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#879b80]">
              01 / Get to Know Me
            </p>
          </div>

          <h2 className="text-5xl font-extrabold tracking-tight text-[#343a35] sm:text-6xl">
            About Me<span className="text-[#879b80]">.</span>
          </h2>
        </div>

        <p className="max-w-sm text-sm leading-7 text-[#73766f] sm:text-base">
          A little introduction about who I am, what I do, and
          what inspires me to keep learning and growing.
        </p>
      </div>

      {/* Main Layout */}
      <div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">

        {/* Biography Card */}
        <div className="group relative overflow-hidden rounded-[2rem] border border-[#e2e3dc] bg-white p-7 shadow-sm transition duration-500 hover:shadow-[0_15px_40px_rgba(65,77,62,0.08)] sm:p-10">

          {/* Decorative Initial */}
          <span className="pointer-events-none absolute -right-3 -top-12 select-none text-[13rem] font-black leading-none text-[#edf1e9] transition duration-500 group-hover:scale-110">
            N
          </span>

          <div className="relative z-10">
            {/* Profile Heading */}
            <div className="mb-9 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#edf1e9] text-2xl text-[#71866b] transition duration-300 group-hover:rotate-6">
                ✦
              </div>

              <div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-[#879b80]">
                  A little about me
                </p>

                <h3 className="text-xl font-bold text-[#343a35]">
                  Hi, I'm Nazwa!
                </h3>
              </div>
            </div>

            {/* Biography */}
            <div className="max-w-2xl space-y-5 text-sm leading-8 text-[#73766f] sm:text-base">
              <p>
                I'm a fifth-semester Computer Science student at
                Universitas Sumatera Utara who enjoys learning,
                exploring technology, and developing creative ideas
                into meaningful projects.
              </p>

              <p>
                Beyond academics, I'm actively involved in student
                organizations and committees. These experiences have
                helped me develop communication, teamwork,
                leadership, and time management skills.
              </p>

              <p>
                I'm particularly interested in data analysis,
                software development, and design. I enjoy taking on
                new challenges, expanding my knowledge, and gaining
                practical experience to support my future career.
              </p>
            </div>

            {/* Interests */}
            <div className="mt-10 border-t border-[#e2e3dc] pt-7">
              <div className="mb-5 flex items-center justify-between gap-3">
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#343a35]">
                  Things I Enjoy
                </h4>

                <span className="text-xs text-[#92968e]">
                  My Interests
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {interests.map((item, index) => (
                  <span
                    key={item}
                    style={{ transitionDelay: `${index * 40}ms` }}
                    className="rounded-full border border-[#d8dfd3] bg-[#edf1e9] px-4 py-2 text-xs font-medium text-[#64745f] transition-all duration-300 hover:-translate-y-1 hover:border-[#879b80] hover:bg-[#879b80] hover:text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">

          {/* Organization */}
          <div className="group relative overflow-hidden rounded-[2rem] border border-[#d8dfd3] bg-[#edf1e9] p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-md">
            <div className="mb-8 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#64745f]">
                Organization
              </span>

              <span className="text-2xl text-[#879b80] transition duration-300 group-hover:rotate-12">
                ✧
              </span>
            </div>

            <div className="text-5xl font-extrabold tracking-tight text-[#343a35]">
              <Counter to={8} suffix="+" />
            </div>

            <p className="mt-3 max-w-[220px] text-sm leading-6 text-[#73766f]">
              Experiences in student organizations and committees.
            </p>

            <span className="absolute -bottom-8 -right-3 text-8xl font-black text-[#879b80] opacity-[0.08] transition duration-500 group-hover:-translate-y-2">
              01
            </span>
          </div>

          {/* Projects */}
          <div className="group relative overflow-hidden rounded-[2rem] border border-[#e2e3dc] bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-md">
            <div className="mb-8 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#64745f]">
                Personal Projects
              </span>

              <span className="text-2xl text-[#879b80] transition duration-300 group-hover:rotate-12">
                ⌘
              </span>
            </div>

            <div className="text-5xl font-extrabold tracking-tight text-[#343a35]">
              <Counter to={10} suffix="+" />
            </div>

            <p className="mt-3 max-w-[220px] text-sm leading-6 text-[#73766f]">
              Projects explored and developed through learning and practice.
            </p>

            <span className="absolute -bottom-8 -right-3 text-8xl font-black text-[#879b80] opacity-[0.08] transition duration-500 group-hover:-translate-y-2">
              02
            </span>
          </div>

          {/* Academic Journey */}
          <div className="group relative overflow-hidden rounded-[2rem] border border-[#e2e3dc] bg-[#f5f3ee] p-7 transition-all duration-500 hover:-translate-y-1 hover:shadow-md sm:col-span-2 lg:col-span-1">
            <div className="mb-8 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#64745f]">
                Academic Journey
              </span>

              <span className="text-2xl text-[#879b80] transition duration-300 group-hover:rotate-12">
                ✦
              </span>
            </div>

            <div className="flex items-end gap-3">
              <div className="text-5xl font-extrabold tracking-tight text-[#343a35]">
                <Counter to={5} />
              </div>

              <span className="mb-1 text-sm text-[#73766f]">
                Semester
              </span>
            </div>

            <p className="mt-3 max-w-[220px] text-sm leading-6 text-[#73766f]">
              Studying Computer Science at Universitas Sumatera Utara.
            </p>

            <span className="absolute -bottom-8 -right-3 text-8xl font-black text-[#879b80] opacity-[0.08] transition duration-500 group-hover:-translate-y-2">
              03
            </span>
          </div>
        </div>
      </div>

      {/* Closing Quote */}
      <div className="group relative mt-7 overflow-hidden rounded-[2rem] border border-[#d8dfd3] bg-[#edf1e9] px-7 py-10 text-center transition duration-500 hover:shadow-md sm:px-12">
        <span className="absolute left-6 top-0 text-8xl font-serif leading-none text-[#879b80] opacity-20">
          “
        </span>

        <p className="relative text-lg font-semibold leading-8 text-[#64745f] transition duration-300 group-hover:text-[#52634e] sm:text-xl">
          Always curious, always learning, and always growing.
        </p>

        <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.3em] text-[#92968e]">
          A little reminder to myself
        </p>
      </div>
    </section>
  )
}

export default About
