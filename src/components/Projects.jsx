
import { projects } from "../data/portfolio"
import ProjectCard from "./ProjectCard"

function Projects() {
  return (
    <section
      id="projects"
      className="relative mx-auto max-w-6xl overflow-hidden px-6 py-24 sm:py-28"
    >
      {/* Decorative Background */}
      <div className="pointer-events-none absolute right-0 top-40 -z-10 h-72 w-72 rounded-full bg-[#e9ede5] opacity-60 blur-3xl" />

      {/* Heading */}
      <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-[#879b80]" />
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#879b80]">
              03 / My Work
            </p>
          </div>

          <h2 className="text-4xl font-extrabold tracking-tight text-[#343a35] sm:text-5xl">
            Selected Projects
            <span className="text-[#879b80]">.</span>
          </h2>
        </div>

        <p className="max-w-sm text-sm leading-7 text-[#73766f] sm:text-base">
          A collection of projects I've explored and developed,
          from web applications to mobile experiences.
        </p>
      </div>

      {/* Project Count */}
      <div className="mb-7 flex items-center justify-between border-b border-[#e2e3dc] pb-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#73766f]">
          Featured Works
        </p>

        <p className="text-xs font-semibold text-[#879b80]">
          {String(projects.length).padStart(2, "0")} Projects
        </p>
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 items-start gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={index}
          />
        ))}
      </div>

      {/* Closing */}
      <div className="mt-14 flex flex-col items-center justify-center gap-3 rounded-[2rem] border border-[#d8dfd3] bg-[#edf1e9] px-6 py-9 text-center">
        <span className="text-2xl text-[#879b80]">✦</span>

        <p className="text-base font-semibold text-[#52634e] sm:text-lg">
          Every project is a new opportunity to create and learn.
        </p>

        <p className="text-xs leading-6 text-[#73766f] sm:text-sm">
          Exploring ideas, building solutions, and growing through experience.
        </p>
      </div>
    </section>
  )
}

export default Projects
