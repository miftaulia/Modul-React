import { GiCottonFlower } from "react-icons/gi";
import React from "react";
import makananData from "../../assets/makanan.json";
import { FaEye, FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";

export default function Produk() {
  return (
    <section id="produk" className="my-10 px-6 max-w-7xl mx-auto">
      <GiCottonFlower size={20} className="text-green-500 mx-auto mb-0" />
      <h2 className="text-3xl font-abril mb-6 text-center">New Product</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {makananData.map((item) => (
          <div
            key={item.id || item.nama}
            className="rounded-lg overflow-hidden group shadow hover:shadow-lg transition-shadow duration-300 bg-white flex flex-col"
          >
            <div className="relative h-60 w-full">
              <img
                src={item.url}
                alt={item.nama}
                className="h-full w-full object-cover"
              />

              <div className="absolute left-1/2 -translate-x-1/2 -bottom-5 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
                <button className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition">
                  <FaEye />
                </button>
                <button className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition">
                  <FaHeart />
                </button>
                <button className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition">
                  <FaShoppingCart />
                </button>
              </div>
            </div>

            <div className="text-center px-4 pt-10 pb-4">
              <h3 className="font-abril text-gray-700 text-lg mb-1">{item.nama}</h3>

              <div className="flex justify-center text-green-500 mb-1">
                {[...Array(5)].map((_, idx) => (
                  <FaStar key={idx} className="text-sm" />
                ))}
              </div>

              <p className="text-gray-500 font-medium">
                Rp {(item.harga ?? 0).toLocaleString("id-ID")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
