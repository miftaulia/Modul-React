import { MdRestaurantMenu, MdEmojiFoodBeverage } from "react-icons/md";
import { FaBullseye } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useState } from "react";

export default function About() {
  const content = [
    {
      icon: <MdEmojiFoodBeverage className="text-3xl text-green-600 mt-1" />,
      title: "Siapa Kami",
      desc: "Kami adalah penyedia makanan sehat dan lezat dengan berbagai pilihan menu lokal dan internasional. Mengutamakan kualitas bahan dan cita rasa terbaik.",
    },
    {
      icon: <FaBullseye className="text-3xl text-yellow-500 mt-1" />,
      title: "Misi Kami",
      desc: "Menghadirkan makanan yang nikmat sekaligus bergizi untuk semua kalangan, dengan pelayanan yang ramah dan pengalaman makan yang menyenangkan.",
    },
    {
      icon: <MdRestaurantMenu className="text-3xl text-green-600 mt-1" />,
      title: "Menu Variatif",
      desc: "Kami menyajikan berbagai pilihan menu khas Indonesia dan internasional yang cocok untuk segala usia dan selera.",
    },
    {
      icon: <FaBullseye className="text-3xl text-yellow-600 mt-1" />,
      title: "Komitmen Gizi",
      desc: "Kami menjaga keseimbangan antara rasa dan kandungan nutrisi agar makanan kami tak hanya enak tapi juga sehat.",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const maxIndex = content.length - 2;

  const handlePrev = () => {
    if (startIndex > 0) setStartIndex(startIndex - 1);
  };

  const handleNext = () => {
    if (startIndex < maxIndex) setStartIndex(startIndex + 1);
  };

  return (
    <section id="about" className="my-10 max-w-6xl mx-auto px-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-abril flex items-center justify-center gap-2">
          <MdRestaurantMenu className="text-green-600" />
          About Us
        </h2>
        <p className="text-gray-600 mt-2 text-sm">
          Kenali siapa kami dan apa yang kami sajikan
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {content.slice(startIndex, startIndex + 2).map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg p-6 flex flex-col items-center text-center transition-all duration-300"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
            <p className="text-gray-500 mt-2 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-5 gap-6">
        <button
          onClick={handlePrev}
          disabled={startIndex === 0}
          className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        >
          <IoIosArrowBack size={20} />
        </button>
        <button
          onClick={handleNext}
          disabled={startIndex >= maxIndex}
          className="p-3 rounded-full bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        >
          <IoIosArrowForward size={20} />
        </button>
      </div>
    </section>
  );
}
