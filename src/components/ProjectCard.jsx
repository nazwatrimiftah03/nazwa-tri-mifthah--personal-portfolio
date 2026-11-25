
import { useState } from "react"

function ProjectCard({ project, index = 0 }) {
  const [showDetails, setShowDetails] = useState(false)

  return (
    <>
      <article className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-[#e2e3dc] bg-white transition duration-300 hover:-translate-y-1 hover:border-[#cbd6c5] hover:shadow-lg">

        {/* Project Image */}
        <div className="relative aspect-[16/10] overflow-hidden bg-[#edf1e9]">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />

          <span className="absolute left-3 top-3 rounded-full border border-white/70 bg-white/90 px-3 py-1.5 text-[10px] font-bold tracking-wider text-[#64745f] backdrop-blur-sm">
            PROJECT {String(index + 1).padStart(2, "0")}
          </span>

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#343a35]/20 to-transparent opacity-60" />
        </div>

        {/* Project Information */}
        <div className="flex flex-1 flex-col p-5">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#879b80]">
            {project.kind}
          </p>

          <h3 className="text-lg font-bold leading-snug text-[#343a35] transition group-hover:text-[#71866b]">
            {project.title}
          </h3>

          <p className="mt-3 line-clamp-3 text-xs leading-6 text-[#73766f] sm:text-sm">
            {project.problem}
          </p>

          {/* Technologies */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tags?.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[#edf1e9] px-2.5 py-1 text-[10px] font-medium text-[#64745f]"
              >
                {tag}
              </span>
            ))}

            {project.tags?.length > 4 && (
              <span className="rounded-full border border-[#e2e3dc] px-2.5 py-1 text-[10px] font-medium text-[#73766f]">
                +{project.tags.length - 4}
              </span>
            )}
          </div>

          {/* Buttons */}
          <div className="mt-auto flex items-center gap-3 border-t border-[#e2e3dc] pt-4">
            <button
              type="button"
              onClick={() => setShowDetails(true)}
              className="rounded-full bg-[#879b80] px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-[#71866b]"
            >
              View Details ↗
            </button>

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-[#cbd6c5] px-4 py-2.5 text-xs font-semibold text-[#64745f] transition hover:bg-[#edf1e9]"
              >
                GitHub ↗
              </a>
            )}
          </div>
        </div>
      </article>

      {/* Project Detail Modal */}
      {showDetails && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-[#20251f]/60 p-4 backdrop-blur-sm"
          onClick={() => setShowDetails(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${project.title} project details`}
            className="relative my-auto max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[2rem] border border-[#e2e3dc] bg-[#f5f3ee] shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Modal Image */}
            <div className="relative aspect-[16/9] overflow-hidden bg-[#edf1e9]">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#343a35]/30 to-transparent" />

              <button
                type="button"
                onClick={() => setShowDetails(false)}
                aria-label="Close project details"
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-2xl text-[#343a35] shadow-md transition hover:bg-[#edf1e9]"
              >
                ×
              </button>

              <span className="absolute bottom-4 left-6 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                Project {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-9">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#879b80]">
                {project.kind}
              </p>

              <h2 className="mt-3 text-2xl font-extrabold text-[#343a35] sm:text-3xl">
                {project.title}
                <span className="text-[#879b80]">.</span>
              </h2>

              {/* Overview */}
              <div className="mt-7">
                <h3 className="mb-2 text-sm font-bold text-[#52634e]">
                  Project Overview
                </h3>

                <p className="text-sm leading-7 text-[#73766f]">
                  {project.problem}
                </p>
              </div>

              {/* Role */}
              {project.role && (
                <div className="mt-6">
                  <h3 className="mb-2 text-sm font-bold text-[#52634e]">
                    My Role
                  </h3>

                  <p className="text-sm leading-7 text-[#73766f]">
                    {project.role}
                  </p>
                </div>
              )}

              {/* Result */}
              {project.result && (
                <div className="mt-6">
                  <h3 className="mb-2 text-sm font-bold text-[#52634e]">
                    Project Results
                  </h3>

                  <p className="text-sm leading-7 text-[#73766f]">
                    {project.result}
                  </p>
                </div>
              )}

              {/* Technologies */}
              <div className="mt-7">
                <h3 className="mb-3 text-sm font-bold text-[#52634e]">
                  Technologies Used
                </h3>

                <div className="flex flex-wrap gap-2">
                  {project.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#cbd6c5] bg-white px-3 py-2 text-xs font-medium text-[#64745f]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Links */}
              <div className="mt-8 flex flex-wrap gap-3 border-t border-[#e2e3dc] pt-6">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-[#879b80] px-5 py-3 text-xs font-semibold text-white transition hover:bg-[#71866b]"
                  >
                    View Demo ↗
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-[#cbd6c5] px-5 py-3 text-xs font-semibold text-[#64745f] transition hover:bg-white"
                  >
                    View Source Code ↗
                  </a>
                )}

                {!project.demo && !project.github && (
                  <p className="text-xs text-[#73766f]">
                    Project details only.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ProjectCard
