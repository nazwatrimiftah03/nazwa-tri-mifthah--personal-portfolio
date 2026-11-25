
const words = [
  "Data Analysis",
  "Design",
  "Teamwork",
  "Content Creation",
  "Leadership",
  "Volunteering",
]

function Marquee() {
  const row = [...words, ...words]

  return (
    <section
      aria-label="My interests and strengths"
      className="relative my-12 -rotate-1 overflow-hidden border-y border-[#cbd6c5] bg-[#879b80] py-5 text-white shadow-[0_8px_24px_rgba(65,77,62,0.10)]"
    >
      <div className="marquee-container">
        <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap">
          {row.map((word, index) => (
            <span
              key={`${word}-${index}`}
              className="flex items-center gap-10 text-sm font-semibold uppercase tracking-[0.18em] sm:text-base"
            >
              {word}

              <span className="text-[#dce6d7]">✳</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Marquee
