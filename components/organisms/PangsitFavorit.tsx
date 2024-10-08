// components/organisms/PangsitFavorit.tsx

import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const PangsitFavorit: React.FC = () => {
  return (
    <div className=" container mx-auto py-10 bg-white">
      <div className="flex flex-wrap justify-center items-start">
        {/* Image Container */}
        <div className="relative mb-6 md:w-1/2 w-full flex justify-center">
          <img
            alt="Pangsit Kuah"
            className="rounded-lg shadow-lg w-[90%] md:w-[500px] h-auto transform transition-transform duration-300 hover:scale-105"
            src="images/11.jpg" // Main image
          />
        </div>

        {/* Text and Description */}
        <div className="w-full md:w-1/2 px-6">
          <h1 className="text-5xl font-serif font-bold text-[#5a2d22] mb-8 text-center md:text-left">
            Pangsit Favorit
          </h1>

          {/* Favorite Items */}
          <div className="space-y-6">
            <div className="flex items-start">
              <FaCheckCircle className="text-[#9370db] text-2xl mr-3" />
              <div>
                <h5 className="text-2xl font-semibold text-[#5a2d22] mb-1">
                  Pangsit Kuah Spesial
                </h5>
                <p className="text-lg text-[#5a2d22] leading-relaxed">
                  Pangsit kuah yang disajikan dalam kaldu gurih, dipadu dengan
                  bumbu rempah yang menggugah selera. Nikmati sensasi lembut dan
                  kenikmatan setiap suapan!
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <FaCheckCircle className="text-[#9370db] text-2xl mr-3" />
              <div>
                <h5 className="text-2xl font-semibold text-[#5a2d22] mb-1">
                  Pangsit Kuah Ayam
                </h5>
                <p className="text-lg text-[#5a2d22] leading-relaxed">
                  Pangsit kuah yang diisi daging ayam, dipadukan dengan sayuran
                  segar dan bumbu rahasia, membuat hidangan ini sangat lezat dan
                  memuaskan.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <FaCheckCircle className="text-[#9370db] text-2xl mr-3" />
              <div>
                <h5 className="text-2xl font-semibold text-[#5a2d22] mb-1">
                  Pangsit Kuah Udang
                </h5>
                <p className="text-lg text-[#5a2d22] leading-relaxed">
                  Pangsit kuah dengan isian udang segar yang berpadu dengan
                  kaldu seafood yang kaya rasa, menjadikannya hidangan yang
                  wajib dicoba!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PangsitFavorit;
