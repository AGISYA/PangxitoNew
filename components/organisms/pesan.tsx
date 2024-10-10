import React from "react";
import { FaMapMarkerAlt, FaClock, FaPhone } from "react-icons/fa";

const PesanSekarang = () => {
  return (
    <div className="bg-white py-16 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br bg-yellow-300"></div>
      <h1 className="text-5xl font-bold text-red-700 mb-6 relative z-10">
        Jajanan yang Bikin Nagih Ya PANGXITO
      </h1>
      <button className="bg-red-600 text-white py-2 px-6 rounded-lg uppercase font-bold shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-red-500 relative z-10">
        Pesan Sekarang
      </button>
      <div className="mt-12 relative z-10">
        <h3 className="text-2xl font-bold text-red-700 mb-4">Hubungi Kami</h3>
        <div className="flex justify-center gap-2 mb-2">
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-sm text-red-600 mr-1" />
            <p
              className="text-xs text-gray-600 font-semibold"
              style={{ fontSize: "0.9rem" }}
            >
              Jl. Contoh Alamat No. 123, Kota
            </p>
          </div>
          <div className="flex items-center">
            <FaClock className="text-sm text-red-600 mr-1" />
            <p
              className="text-xs text-gray-600 font-semibold"
              style={{ fontSize: "0.9rem" }}
            >
              Senin - Jumat, 10:00 - 20:00
            </p>
          </div>
          <div className="flex items-center">
            <FaPhone className="text-sm text-red-600 mr-1" />
            <p
              className="text-xs text-gray-600 font-semibold"
              style={{ fontSize: "0.9rem" }}
            >
              (021) 123-4567
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PesanSekarang;
