
import { useEffect, useState } from "react"

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState({
    type: "",
    message: "",
  })

  useEffect(() => {
    const elements = document.querySelectorAll(".contact-reveal")

    if (!("IntersectionObserver" in window)) {
      elements.forEach((element) =>
        element.classList.add("contact-visible")
      )
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("contact-visible")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  const handleChange = (event) => {
    const { name, value } = event.target

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }))

    setStatus({ type: "", message: "" })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (loading) return

    setLoading(true)
    setStatus({ type: "", message: "" })

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/nazwatrimiftah03@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            subject: form.subject,
            message: form.message,
            _subject: `Portfolio Message: ${form.subject}`,
          }),
        }
      )

      const result = await response.json()

      if (
        response.ok &&
        (result.success === "true" || result.success === true)
      ) {
        setStatus({
          type: "success",
          message: "Your message has been sent successfully!",
        })

        setForm({
          name: "",
          email: "",
          subject: "",
          message: "",
        })
      } else {
        setStatus({
          type: "error",
          message: "Failed to send your message. Please try again.",
        })
      }
    } catch {
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      })
    } finally {
      setLoading(false)
    }
  }

  const contacts = [
    {
      label: "Email",
      value: "nazwatrimiftah03@gmail.com",
      href: "mailto:nazwatrimiftah03@gmail.com",
      icon: "✉",
      external: false,
    },
    {
      label: "LinkedIn",
      value: "LinkedIn Profile",
      href: "https://www.linkedin.com/in/nazwa-tri-miftah-siregar-2b0729352/",
      icon: "in",
      external: true,
    },
    {
      label: "GitHub",
      value: "github.com/nazwatrimiftah03",
      href: "https://github.com/nazwatrimiftah03",
      icon: "⌘",
      external: true,
    },
    {
      label: "Instagram",
      value: "@nazwa_trimiftah",
      href: "https://www.instagram.com/nazwa_trimiftah",
      icon: "◎",
      external: true,
    },
  ]

  return (
    <section
      id="contact"
      className="relative mx-auto max-w-6xl overflow-hidden px-6 py-24 sm:py-28"
    >
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -left-32 top-40 -z-10 h-72 w-72 rounded-full bg-[#e9ede5] opacity-70 blur-3xl" />

      {/* Heading */}
      <div className="contact-reveal mb-14 text-center">
        <div className="mb-4 flex items-center justify-center gap-3">
          <span className="h-px w-10 bg-[#879b80]" />

          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#879b80]">
            05 / Get In Touch
          </p>

          <span className="h-px w-10 bg-[#879b80]" />
        </div>

        <h2 className="text-4xl font-extrabold tracking-tight text-[#343a35] sm:text-5xl">
          Let's Connect
          <span className="text-[#879b80]">.</span>
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#73766f] sm:text-base">
          Have a project, opportunity, or just want to say hello?
          Feel free to reach out. I'd love to hear from you!
        </p>
      </div>

      {/* Contact Content */}
      <div className="grid items-stretch gap-6 md:grid-cols-2">
        {/* Contact Information */}
        <div
          className="contact-reveal rounded-[2rem] border border-[#dce4d7] bg-[#edf1e9] p-7 sm:p-9"
          style={{ transitionDelay: "100ms" }}
        >
          <div className="flex h-full flex-col">
            <div>
              <span className="text-3xl text-[#879b80]">✳</span>

              <h3 className="mt-5 text-2xl font-bold text-[#343a35] sm:text-3xl">
                Let's talk!
              </h3>

              <p className="mt-3 text-sm leading-7 text-[#73766f]">
                I'm always open to discussing new projects, creative ideas,
                collaborations, and opportunities to learn.
              </p>
            </div>

            {/* Contact Links */}
            <div className="mt-9 space-y-3">
              {contacts.map((contact, index) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={contact.external ? "_blank" : undefined}
                  rel={contact.external ? "noreferrer" : undefined}
                  className="group flex items-center gap-4 rounded-2xl border border-[#dce4d7] bg-white/70 p-4 transition duration-300 hover:-translate-y-1 hover:border-[#879b80] hover:bg-white hover:shadow-md"
                  style={{ transitionDelay: `${index * 40}ms` }}
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#edf1e9] text-base font-bold text-[#71866b] transition duration-300 group-hover:bg-[#879b80] group-hover:text-white">
                    {contact.icon}
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block text-[10px] font-bold uppercase tracking-[0.15em] text-[#879b80]">
                      {contact.label}
                    </span>

                    <span className="mt-1 block break-all text-sm font-semibold text-[#343a35]">
                      {contact.value}
                    </span>
                  </span>

                  <span className="text-sm text-[#879b80] transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </a>
              ))}
            </div>

            {/* Bottom Text */}
            <div className="mt-auto border-t border-[#cbd6c5] pt-7">
              <p className="text-sm font-medium text-[#64745f]">
                Thank you for visiting my portfolio!
              </p>

              <p className="mt-1 text-xs text-[#879b80]">
                Always open to new possibilities.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div
          className="contact-reveal rounded-[2rem] border border-[#e2e3dc] bg-white p-7 shadow-sm transition duration-500 hover:shadow-lg sm:p-9"
          style={{ transitionDelay: "250ms" }}
        >
          <div className="mb-7">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#879b80]">
              Send an Inquiry
            </p>

            <h3 className="mt-2 text-2xl font-bold text-[#343a35]">
              Send Me a Message
            </h3>

            <p className="mt-2 text-sm text-[#73766f]">
              Fill in the form below and let's start a conversation.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-xs font-semibold text-[#52634e]"
                >
                  Your Name
                </label>

                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  autoComplete="name"
                  required
                  className="contact-input w-full rounded-xl border border-[#e2e3dc] bg-[#fafaf7] px-4 py-3.5 text-sm text-[#343a35] outline-none transition duration-300 placeholder:text-[#a4a79f]"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-xs font-semibold text-[#52634e]"
                >
                  Your Email
                </label>

                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  autoComplete="email"
                  required
                  className="contact-input w-full rounded-xl border border-[#e2e3dc] bg-[#fafaf7] px-4 py-3.5 text-sm text-[#343a35] outline-none transition duration-300 placeholder:text-[#a4a79f]"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="contact-subject"
                  className="mb-2 block text-xs font-semibold text-[#52634e]"
                >
                  Subject
                </label>

                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What is this about?"
                  required
                  className="contact-input w-full rounded-xl border border-[#e2e3dc] bg-[#fafaf7] px-4 py-3.5 text-sm text-[#343a35] outline-none transition duration-300 placeholder:text-[#a4a79f]"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-xs font-semibold text-[#52634e]"
                >
                  Message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  rows={5}
                  required
                  className="contact-input w-full resize-none rounded-xl border border-[#e2e3dc] bg-[#fafaf7] px-4 py-3.5 text-sm text-[#343a35] outline-none transition duration-300 placeholder:text-[#a4a79f]"
                />
              </div>

              {/* Status Message */}
              {status.message && (
                <div
                  role="status"
                  aria-live="polite"
                  className={`rounded-xl p-3 text-xs leading-6 ${
                    status.type === "success"
                      ? "border border-[#cbd6c5] bg-[#edf1e9] text-[#52634e]"
                      : "border border-red-200 bg-red-50 text-red-600"
                  }`}
                >
                  {status.message}
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="group flex w-full items-center justify-center gap-3 rounded-xl bg-[#879b80] px-6 py-4 text-sm font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#71866b] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message

                    <span className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                      ↗
                    </span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Closing Message */}
      <div
        className="contact-reveal mt-16 text-center"
        style={{ transitionDelay: "150ms" }}
      >
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-[#879b80]">
          Thanks for stopping by
        </p>

        <p className="mt-3 text-lg font-semibold text-[#343a35] sm:text-xl">
          Hope to hear from you soon!
        </p>
      </div>
    </section>
  )
}

export default Contact
