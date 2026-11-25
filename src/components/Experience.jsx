
import { useEffect, useRef, useState } from "react"
import { experience } from "../data/portfolio"

function Experience() {
  const [visibleItems, setVisibleItems] = useState([])
  const itemRefs = useRef([])

  useEffect(() => {
    if (!("IntersectionObserver" in window)) {
      setVisibleItems(experience.map((_, index) => index))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index)

            setVisibleItems((previous) =>
              previous.includes(index)
                ? previous
                : [...previous, index]
            )

            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -40px 0px",
      }
    )

    itemRefs.current.forEach((element) => {
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="experience"
      className="relative mx-auto max-w-6xl overflow-hidden px-6 py-20 sm:py-28"
    >
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -left-32 top-40 -z-10 h-72 w-72 rounded-full bg-[#e9ede5] opacity-60 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-20 -z-10 h-72 w-72 rounded-full bg-[#edf1e9] opacity-70 blur-3xl" />

      {/* Heading */}
      <div className="mb-14 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-[#879b80]" />

            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#879b80]">
              02 / My Journey
            </p>
          </div>

          <h2 className="text-4xl font-extrabold tracking-tight text-[#343a35] sm:text-5xl">
            Experience &
            <br className="hidden sm:block" /> Organization
            <span className="text-[#879b80]">.</span>
          </h2>
        </div>

        <p className="max-w-sm text-sm leading-7 text-[#73766f] sm:text-base">
          A collection of experiences that shaped my journey
          through collaboration, responsibility, and personal growth.
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative">

        {/* Timeline Line */}
        <div className="absolute bottom-5 left-[13px] top-5 w-px bg-gradient-to-b from-[#879b80] via-[#cbd6c5] to-transparent sm:left-1/2 sm:-translate-x-1/2" />

        <div className="space-y-12 sm:space-y-16">
          {experience.map((e, index) => {
            const isLeft = index % 2 === 0
            const isVisible = visibleItems.includes(index)

            return (
              <div
                key={e.title + e.org + index}
                ref={(element) => {
                  itemRefs.current[index] = element
                }}
                data-index={index}
                className={`relative grid gap-5 pl-9 transition-all duration-700 ease-out sm:grid-cols-2 sm:gap-12 sm:pl-0 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{
                  transitionDelay: `${(index % 2) * 100}ms`,
                }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[6px] top-7 z-10 flex h-[15px] w-[15px] items-center justify-center rounded-full border-[3px] border-[#879b80] bg-[#f5f3ee] shadow-[0_0_0_5px_rgba(135,155,128,0.10)] sm:left-1/2 sm:-translate-x-1/2">
                  <span className="h-1 w-1 rounded-full bg-[#879b80]" />
                </div>

                {/* Image */}
                <div
                  className={`group relative min-h-56 overflow-hidden rounded-[1.8rem] border border-[#e2e3dc] bg-[#edf1e9] shadow-sm ${
                    isLeft
                      ? "sm:col-start-1 sm:row-start-1 sm:mr-5"
                      : "sm:col-start-2 sm:row-start-1 sm:ml-5"
                  }`}
                >
                  {e.image ? (
                    <>
                      <img
                        src={e.image}
                        alt={`${e.org} experience`}
                        loading="lazy"
                        className="h-56 w-full object-cover transition duration-700 group-hover:scale-105 sm:h-64"
                        onError={(event) => {
                          event.currentTarget.style.display = "none"
                          event.currentTarget.nextElementSibling.style.display = "flex"
                        }}
                      />

                      <div className="absolute inset-0 hidden items-center justify-center text-sm font-medium text-[#879b80]">
                        <span>Experience & Organization</span>
                      </div>
                    </>
                  ) : (
                    <div className="flex h-56 items-center justify-center text-sm font-medium text-[#879b80] sm:h-64">
                      Experience & Organization
                    </div>
                  )}

                  {/* Image Overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#343a35]/40 via-transparent to-transparent opacity-70 transition duration-500 group-hover:opacity-90" />

                  <span className="absolute bottom-4 left-5 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                    Experience {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="absolute right-4 top-4 rounded-full border border-white/30 bg-white/20 px-3 py-1.5 text-[10px] font-bold tracking-widest text-white backdrop-blur-md">
                    0{index + 1}
                  </span>
                </div>

                {/* Details */}
                <article
                  className={`flex flex-col justify-center rounded-[1.8rem] border border-[#e2e3dc] bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#cbd6c5] hover:shadow-[0_12px_30px_rgba(65,77,62,0.08)] sm:p-8 ${
                    isLeft
                      ? "sm:col-start-2 sm:row-start-1 sm:ml-5"
                      : "sm:col-start-1 sm:row-start-1 sm:mr-5"
                  }`}
                >
                  <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
                    <span className="rounded-full bg-[#edf1e9] px-4 py-2 text-xs font-semibold text-[#64745f]">
                      {e.when}
                    </span>

                    <span className="text-xs font-bold tracking-widest text-[#a3aa9e]">
                      {String(index + 1).padStart(2, "0")} /{" "}
                      {String(experience.length).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold leading-snug text-[#343a35] sm:text-2xl">
                    {e.title}
                  </h3>

                  <p className="mt-2 text-sm font-semibold text-[#879b80]">
                    {e.org}
                  </p>

                  {e.description && (
                    <p className="mt-5 text-sm leading-7 text-[#73766f]">
                      {e.description}
                    </p>
                  )}

                  <div className="mt-6 flex items-center gap-2 text-xs font-medium text-[#879b80]">
                    <span className="h-px w-7 bg-[#879b80]" />
                    Learning & Growing
                  </div>
                </article>
              </div>
            )
          })}
        </div>
      </div>

      {/* Closing */}
      <div className="relative mt-14 overflow-hidden rounded-[2rem] border border-[#cbd6c5] bg-[#edf1e9] px-7 py-10 text-center transition duration-500 hover:shadow-md sm:mt-16 sm:px-12">
        <span className="pointer-events-none absolute -right-3 -top-12 text-[10rem] font-black leading-none text-[#879b80] opacity-[0.08]">
          ✦
        </span>

        <p className="relative text-lg font-semibold leading-8 text-[#52634e] sm:text-xl">
          Every experience is an opportunity to learn something new.
        </p>

        <p className="relative mt-3 text-xs leading-6 text-[#73766f] sm:text-sm">
          Growing through teamwork, responsibility, and new challenges.
        </p>
      </div>
    </section>
  )
}

export default Experience
