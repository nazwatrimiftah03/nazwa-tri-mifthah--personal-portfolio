import photo1 from "../assets/hero.png"
import photo2 from "../assets/photo2.png"
import photo3 from "../assets/photo3.png"

const photos = [
  { src: photo1, alt: "Nazwa smiling", style: "-rotate-6 z-10" },
  { src: photo2, alt: "Nazwa at an event", style: "z-20 -translate-y-4 -ml-8" },
  { src: photo3, alt: "Nazwa volunteering", style: "rotate-6 z-10 -ml-8" },
]

function PhotoStack() {
  return (
    <div className="mt-14 flex items-center justify-center">
      {photos.map((p) => (
        <img
          key={p.alt}
          src={p.src}
          alt={p.alt}
          className={`h-64 w-44 rounded-3xl border-4 border-white object-cover shadow-xl transition duration-300 hover:z-30 hover:-translate-y-3 sm:h-80 sm:w-56 ${p.style}`}
        />
      ))}
    </div>
  )
}

export default PhotoStack