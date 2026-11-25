
import ScrollProgress from "./components/ScrollProgress"
import CursorGlow from "./components/CursorGlow"
import HeartBurst from "./components/HeartBurst"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Marquee from "./components/Marquee"
import Reveal from "./components/Reveal"
import About from "./components/About"
import Projects from "./components/Projects"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import Certificates from "./components/Certificates"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f5f3ee] text-[#343a35]">
      <ScrollProgress />
      <CursorGlow />
      <HeartBurst />

      <Navbar />
      <Hero />
      <Marquee />

      <Reveal><About /></Reveal>
      <Reveal><Projects /></Reveal>
      <Reveal><Experience /></Reveal>
      <Reveal><Skills /></Reveal>
      <Reveal><Certificates /></Reveal>
      <Reveal><Contact /></Reveal>

      <Footer />
    </div>
  )
}

export default App
