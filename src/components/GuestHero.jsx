import { HiArrowNarrowLeft } from "react-icons/hi";
import { HiArrowNarrowRight } from "react-icons/hi";
import { GiCottonFlower } from "react-icons/gi";
import { useState, useEffect } from "react";

const images = [
  "/img/hero.jpg",
  "/img/hero1.jpg",
];

export default function GuestHero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section id="home" className="relative h-[600px] flex items-center justify-center text-white overflow-hidden">
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-2000 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          style={{ backgroundImage: `url('${img}')` }}
        />
      ))}

      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-10 text-center px-4">
        <div className="inline-block mb-4">
          <svg
            className="mx-auto mb-2"
            width="50"
            height="50"
            fill="white"
            viewBox="0 0 24 24"
          >
          </svg>
        </div>
        <GiCottonFlower className="text-6xl text-white item-centers mx-27" />
        <h1 className="text-5xl font-abril leading-tight mb-7">
          Organic
          <br />
          Food Market
        </h1>

        <button className="bg-green-700 text-white hover:bg-white hover:text-green-700 px-6 py-3 rounded font-semibold shadow-md transition">
          Order Now
        </button>

      </div>

      <button
        onClick={prevImage}
        aria-label="Previous Image"
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-transparent border-3 border-white text-white rounded-full w-10 h-10 
        flex items-center justify-center shadow-md hover:bg-white hover:text-black transition"
      >
        <HiArrowNarrowLeft />
      </button>
      <button
        onClick={nextImage}
        aria-label="Next Image"
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-transparent border-3 border-white text-white rounded-full w-10 h-10 flex 
items-center justify-center shadow-md hover:bg-white hover:text-black transition"
      >
        <HiArrowNarrowRight />
      </button>
    </section>
  );
}
