
import { tools, skills } from "../data/portfolio"

const toolIcons = {
  "Visual Studio Code": "vscode",
  "IntelliJ IDEA": "idea",
  "Android Studio": "androidstudio",
  "Visual Studio": "visualstudio",
  Flutter: "flutter",
  React: "react",
  Java: "java",
  Dart: "dart",
  HTML: "html",
  CSS: "css",
  JavaScript: "js",
  Python: "python",
  Supabase: "supabase",
  PostgreSQL: "postgres",
  MySQL: "mysql",
  Firebase: "firebase",
  MongoDB: "mongodb",
  Figma: "figma",
  Git: "git",
  GitHub: "github",
  Postman: "postman",
  Vercel: "vercel",
  Docker: "docker",
}

const customLogos = {
  "Cisco Packet Tracer": "https://cdn.simpleicons.org/cisco/049FD9",
}

const skillDescriptions = {
  "UI/UX Design":
    "Creating user-friendly interfaces and meaningful user experiences.",
  "Graphic Design":
    "Designing visual content for digital and creative needs.",
  "Frontend Development":
    "Building responsive and interactive website interfaces.",
  "Backend Development":
    "Working with application logic, databases, and server-side features.",
  "Photo & Video Editing":
    "Editing photos and videos for creative content.",
  "Social Media Management":
    "Managing social media content and digital communication.",
  Teamwork:
    "Collaborating, communicating, and working together in a team.",
}

const skillSymbols = {
  "UI/UX Design": "✦",
  "Graphic Design": "◈",
  "Frontend Development": "⌘",
  "Backend Development": "⌁",
  "Photo & Video Editing": "▧",
  "Social Media Management": "◎",
  Teamwork: "◇",
}

function ToolLogo({ tool }) {
  const icon = toolIcons[tool]
  const logoUrl = customLogos[tool]
    ? customLogos[tool]
    : icon
      ? `https://skillicons.dev/icons?i=${icon}`
      : null

  return (
    <div className="group flex min-w-[150px] items-center gap-3 rounded-2xl border border-[#e2e3dc] bg-white/90 px-5 py-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#cbd6c5] hover:bg-[#edf1e9] hover:shadow-md sm:min-w-[175px] sm:px-6">
      {logoUrl ? (
        <img
          src={logoUrl}
          alt={`${tool} logo`}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.style.display = "none"
            event.currentTarget.nextElementSibling.style.display = "flex"
          }}
          className="h-9 w-9 shrink-0 object-contain transition duration-300 group-hover:scale-110"
        />
      ) : null}

      <span
        style={{ display: logoUrl ? "none" : "flex" }}
        className="h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#edf1e9] text-xs font-bold text-[#71866b]"
      >
        {tool.slice(0, 2).toUpperCase()}
      </span>

      <span className="whitespace-nowrap text-sm font-semibold text-[#343a35]">
        {tool}
      </span>
    </div>
  )
}

function ToolMarquee({ items, reverse = false }) {
  const duplicatedItems = [...items, ...items, ...items]

  return (
    <div className="group relative overflow-hidden py-3">
      {/* Left Fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#f5f3ee] to-transparent sm:w-24" />

      {/* Right Fade */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#f5f3ee] to-transparent sm:w-24" />

      {/* Moving Logos */}
      <div
        className={`flex w-max gap-4 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        } group-hover:[animation-play-state:paused] group-active:[animation-play-state:paused]`}
      >
        {duplicatedItems.map((tool, index) => (
          <ToolLogo key={`${tool}-${index}`} tool={tool} />
        ))}
      </div>
    </div>
  )
}

function Skills() {
  const firstRow = tools.filter((_, index) => index % 2 === 0)
  const secondRow = tools.filter((_, index) => index % 2 !== 0)

  return (
    <section
      id="skills"
      className="overflow-hidden bg-[#f5f3ee] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">

        {/* Section Heading */}
        <div className="mb-12 text-center sm:mb-16">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#879b80]" />

            <p className="text-xs font-bold uppercase tracking-[0.35em] text-[#879b80]">
              My Digital Playground
            </p>

            <span className="h-px w-8 bg-[#879b80]" />
          </div>

          <h2 className="text-4xl font-black tracking-tight text-[#343a35] sm:text-6xl">
            Tools I <span className="text-[#879b80]">Use.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-[#73766f] sm:text-base">
            A collection of technologies and tools I explore and use
            to bring ideas into real digital experiences.
          </p>
        </div>
      </div>

      {/* Moving Tool Logos */}
      <div className="space-y-3">
        <ToolMarquee items={firstRow} />
        <ToolMarquee items={secondRow} reverse />
      </div>

      {/* Caption */}
      <div className="mx-auto mt-8 flex max-w-6xl items-center justify-center gap-3 px-6">
        <span className="h-px w-8 bg-[#cbd6c5]" />

        <p className="text-center text-[10px] font-semibold uppercase tracking-[0.25em] text-[#92968e]">
          Constantly Learning & Exploring
        </p>

        <span className="h-px w-8 bg-[#cbd6c5]" />
      </div>

      {/* My Skills */}
      <div className="mx-auto mt-24 max-w-6xl px-6 sm:mt-32">

        {/* Skills Heading */}
        <div className="mb-10">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-[#879b80]" />

            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#879b80]">
              What I Can Do
            </p>
          </div>

          <h3 className="text-3xl font-black tracking-tight text-[#343a35] sm:text-4xl">
            My Skills<span className="text-[#879b80]">.</span>
          </h3>

          <p className="mt-3 max-w-lg text-sm leading-7 text-[#73766f]">
            Skills and abilities I continue to improve through
            projects, collaboration, and experience.
          </p>
        </div>

        {/* Skills Cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <article
              key={skill}
              className="group relative overflow-hidden rounded-2xl border border-[#e2e3dc] bg-white/80 p-5 transition-all duration-500 hover:-translate-y-1 hover:border-[#cbd6c5] hover:bg-[#edf1e9] hover:shadow-[0_12px_30px_rgba(65,77,62,0.08)]"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#edf1e9] text-xl font-bold text-[#71866b] transition duration-300 group-hover:rotate-6 group-hover:scale-110">
                  {skillSymbols[skill] || "✦"}
                </div>

                <span className="text-xs font-semibold text-[#b5bcaf]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h4 className="text-base font-bold text-[#343a35] transition-colors duration-300 group-hover:text-[#64745f]">
                {skill}
              </h4>

              <p className="mt-2 text-xs leading-6 text-[#73766f]">
                {skillDescriptions[skill] ||
                  "A skill I continue to develop through learning and practice."}
              </p>

              <span className="absolute -bottom-5 -right-3 text-7xl font-black text-[#879b80] opacity-0 transition duration-500 group-hover:opacity-[0.08]">
                ✦
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
