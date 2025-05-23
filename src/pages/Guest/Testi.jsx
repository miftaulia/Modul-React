import React from "react";
import testiData from "../../assets/testi.json";
import { FaQuoteLeft } from "react-icons/fa";

export default function Testi() {
  const testis = testiData || [];

  return (
    <section
      id="testi"
      className="my-10 px-4 bg-white py-12 rounded-lg shadow-inner"
    >
      <h2 className="text-3xl font-abril mb-10 text-center text-black">
        What they say
      </h2>

      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {testis.slice(0, 6).map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300 flex flex-col items-center text-center"
            >
              <img
                src={item.avatar}
                alt={item.nama}
                className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-green-100 shadow"
              />

              <h3 className="text-lg font-semibold text-green-700">
                {item.nama}
              </h3>

              <div className="text-gray-600 italic mt-3 relative px-4">
                <FaQuoteLeft className="absolute left-0 top-0 text-green-700 text-xl" />
                <p className="text-sm leading-relaxed">"{item.ulasan}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
