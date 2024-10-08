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
      <div className="flex justify-center gap-12 mt-8 relative z-10">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-red-600">465</h2>
          <p className="text-lg text-red-500">Great Review</p>
        </div>
        <div className="text-center">
          <h2 className="text-5xl font-bold text-red-600">76+</h2>
          <p className="text-lg text-red-500">Cakes Variant</p>
        </div>
      </div>
      <div className="mt-12 relative z-10">
        <h3 className="text-2xl font-bold text-red-700 mb-4">Hubungi Kami</h3>
        <div className="flex justify-center gap-8 mb-4">
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-3xl text-red-600 mr-2" />
            <p className="text-lg text-gray-600">
              Jl. Contoh Alamat No. 123, Kota
            </p>
          </div>
          <div className="flex items-center">
            <FaClock className="text-3xl text-red-600 mr-2" />
            <p className="text-lg text-gray-600">
              Senin - Jumat, 10:00 - 20:00
            </p>
          </div>
          <div className="flex items-center">
            <FaPhone className="text-3xl text-red-600 mr-2" />
            <p className="text-lg text-gray-600">(021) 123-4567</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PesanSekarang;
