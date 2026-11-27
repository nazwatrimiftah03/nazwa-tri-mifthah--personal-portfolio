
function CV() {
  const cvFile = "/assets/cv-ats-nazwa.pdf"

  return (
    <section
      id="cv"
      className="mx-auto max-w-5xl px-5 py-16 sm:px-6"
    >
      <div className="mb-8 text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#879b80]">
          Get to Know Me
        </p>

        <h2 className="text-3xl font-bold text-[#343a35] sm:text-4xl">
          My Curriculum Vitae
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-[#73766f]">
          Explore my professional background, experiences,
          education, and skills through my ATS-friendly CV.
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-[#dce2d7] bg-white shadow-sm">
        <div className="flex flex-col gap-4 border-b border-[#e9ede5] p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="font-semibold text-[#343a35]">
              Nazwa Tri Miftah Siregar
            </h3>
            <p className="mt-1 text-xs text-[#73766f]">
              ATS-Friendly Resume · PDF Document
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            <a
              href={cvFile}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#879b80] px-5 py-2.5 text-sm font-medium text-[#52664e] transition hover:bg-[#edf1e9]"
            >
              <span>↗</span>
              View CV
            </a>

            <a
              href={cvFile}
              download="CV-ATS-Nazwa-Tri-Miftah-Siregar.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#879b80] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#71876b]"
            >
              <span>↓</span>
              Download CV
            </a>
          </div>
        </div>

        <div className="bg-[#edf1e9] p-3 sm:p-5">
          <iframe
            src={`${cvFile}#toolbar=1&navpanes=0`}
            title="Nazwa ATS CV Preview"
            className="h-[500px] w-full rounded-lg border border-[#dce2d7] bg-white sm:h-[700px]"
          />
        </div>

        <div className="p-4 text-center">
          <p className="text-xs text-[#92968e]">
            Interested in my profile? Feel free to view or download my CV.
          </p>
        </div>
      </div>
    </section>
  )
}

export default CV
