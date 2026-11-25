
import { useEffect, useState } from "react"

function Certificates() {
  const [selectedIndex, setSelectedIndex] = useState(null)

  const certificates = Array.from({ length: 15 }, (_, index) => ({
    id: index + 1,
    image: `/assets/certificates/cert-${index + 1}.jpg`,
    title: `Certificate ${String(index + 1).padStart(2, "0")}`,
  }))

  const selectedCertificate =
    selectedIndex !== null ? certificates[selectedIndex] : null

  const closePreview = () => setSelectedIndex(null)

  const showPrevious = () => {
    setSelectedIndex((current) =>
      current === 0 ? certificates.length - 1 : current - 1
    )
  }

  const showNext = () => {
    setSelectedIndex((current) =>
      current === certificates.length - 1 ? 0 : current + 1
    )
  }

  useEffect(() => {
    if (selectedIndex === null) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closePreview()
      if (event.key === "ArrowLeft") showPrevious()
      if (event.key === "ArrowRight") showNext()
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [selectedIndex])

  return (
    <section
      id="certificates"
      className="relative mx-auto max-w-6xl overflow-hidden px-6 py-24 sm:py-28"
    >
      <div className="pointer-events-none absolute -right-24 top-32 -z-10 h-72 w-72 rounded-full bg-[#e9ede5] opacity-60 blur-3xl animate-pulse" />

      {/* Heading */}
      <div className="certificate-heading mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-[#879b80]" />
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#879b80]">
              04 / Achievements
            </p>
          </div>

          <h2 className="text-4xl font-extrabold tracking-tight text-[#343a35] sm:text-5xl">
            Certificates
            <br className="hidden sm:block" />
            & Awards
            <span className="text-[#879b80]">.</span>
          </h2>
        </div>

        <p className="max-w-sm text-sm leading-7 text-[#73766f] sm:text-base">
          A collection of certificates and achievements from
          my learning journey, training, and activities.
        </p>
      </div>

      {/* Gallery Information */}
      <div className="certificate-heading mb-7 flex items-center justify-between border-b border-[#e2e3dc] pb-4">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#73766f]">
          Certificate Gallery
        </p>

        <p className="text-xs font-semibold text-[#879b80]">
          {String(certificates.length).padStart(2, "0")} Certificates
        </p>
      </div>

      {/* Certificate Grid */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4">
        {certificates.map((certificate, index) => (
          <button
            key={certificate.id}
            type="button"
            onClick={() => setSelectedIndex(index)}
            aria-label={`View ${certificate.title}`}
            style={{ animationDelay: `${index * 100}ms` }}
            className="certificate-card group overflow-hidden rounded-[1.3rem] border border-[#e2e3dc] bg-white text-left transition duration-300 hover:-translate-y-2 hover:border-[#cbd6c5] hover:shadow-xl"
          >
            <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-[#edf1e9] p-3 sm:p-4">
              <img
                src={certificate.image}
                alt={certificate.title}
                loading="lazy"
                className="h-full w-full object-contain transition duration-500 group-hover:scale-110"
                onError={(event) => {
                  event.currentTarget.style.display = "none"
                  event.currentTarget.parentElement.classList.add(
                    "certificate-image-error"
                  )
                }}
              />

              <div className="pointer-events-none absolute inset-0 hidden items-center justify-center certificate-placeholder">
                <span className="text-sm font-semibold text-[#879b80]">
                  Image unavailable
                </span>
              </div>

              <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[9px] font-bold tracking-wider text-[#64745f] backdrop-blur-sm">
                {String(certificate.id).padStart(2, "0")}
              </span>

              <span className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white text-sm text-[#71866b] shadow-sm transition duration-300 group-hover:rotate-45 group-hover:bg-[#879b80] group-hover:text-white">
                ↗
              </span>
            </div>

            <div className="border-t border-[#e2e3dc] p-3 sm:p-4">
              <p className="text-xs font-bold text-[#343a35] sm:text-sm">
                {certificate.title}
              </p>

              <p className="mt-1 text-[10px] text-[#879b80] sm:text-xs">
                Click to preview
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* Closing */}
      <div className="certificate-closing mt-12 flex flex-col items-center rounded-[2rem] border border-[#cbd6c5] bg-[#edf1e9] px-6 py-9 text-center">
        <span className="mb-3 text-2xl text-[#879b80] animate-bounce">
          ✦
        </span>

        <p className="text-base font-semibold text-[#52634e] sm:text-lg">
          Learning never stops.
        </p>

        <p className="mt-2 text-xs leading-6 text-[#73766f] sm:text-sm">
          Every achievement represents a step forward in my journey.
        </p>
      </div>

      {/* Preview Modal */}
      {selectedCertificate && (
        <div
          className="certificate-modal fixed inset-0 z-[100] flex items-center justify-center bg-[#20251f]/80 p-4 backdrop-blur-md"
          onClick={closePreview}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={selectedCertificate.title}
            className="certificate-modal-content relative w-full max-w-5xl overflow-hidden rounded-[1.8rem] border border-white/20 bg-[#f5f3ee] shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#e2e3dc] px-5 py-4 sm:px-7">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#879b80]">
                  Certificate Preview
                </p>

                <h3 className="mt-1 text-sm font-bold text-[#343a35] sm:text-base">
                  {selectedCertificate.title}
                </h3>
              </div>

              <button
                type="button"
                onClick={closePreview}
                aria-label="Close certificate"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-xl text-[#343a35] transition hover:rotate-90 hover:bg-[#edf1e9]"
              >
                ×
              </button>
            </div>

            <div className="flex max-h-[72vh] min-h-[250px] items-center justify-center overflow-auto bg-[#e9ede5] p-4 sm:p-8">
              <img
                src={selectedCertificate.image}
                alt={selectedCertificate.title}
                className="max-h-[65vh] max-w-full rounded-lg object-contain shadow-md"
              />
            </div>

            <div className="flex items-center justify-between gap-3 border-t border-[#e2e3dc] px-5 py-4 sm:px-7">
              <button
                type="button"
                onClick={showPrevious}
                className="rounded-full border border-[#cbd6c5] bg-white px-4 py-2.5 text-xs font-semibold text-[#64745f] transition hover:-translate-x-1 hover:bg-[#edf1e9]"
              >
                ← Previous
              </button>

              <p className="text-xs font-medium text-[#73766f]">
                {selectedIndex + 1} / {certificates.length}
              </p>

              <button
                type="button"
                onClick={showNext}
                className="rounded-full bg-[#879b80] px-4 py-2.5 text-xs font-semibold text-white transition hover:translate-x-1 hover:bg-[#71866b]"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Certificates
