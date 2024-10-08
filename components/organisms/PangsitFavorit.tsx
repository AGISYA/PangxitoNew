// components/organisms/PangsitFavorit.tsx

import Image from "next/image";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const PangsitFavorit: React.FC = () => {
  return (
    <div className=" container mx-auto py-10 bg-yellow-300">
      <div className="flex flex-wrap justify-center items-start">
        <div className="relative mb-6 md:w-1/2 w-full flex justify-center">
          <Image
            width={1000}
            height={1000}
            alt="PANGXITO 3 IN 1"
            className="rounded-lg shadow-lg w-[90%] md:w-[500px] h-auto transform transition-transform duration-300 hover:scale-105"
            src="/images/1.jpg"
          />
        </div>
        <div className="w-full md:w-1/2 px-6">
          <h1 className="text-5xl font-serif font-bold text-[#5a2d22] mb-8 text-center md:text-left">
            PANGXITO 3 IN 1
          </h1>

          <div className="space-y-6">
            <div className="flex items-start">
              <FaCheckCircle className="text-[#9370db] text-2xl mr-3" />
              <div>
                <h5 className="text-2xl font-semibold text-[#5a2d22] mb-1">
                  PANGXITO GORENG
                </h5>
                <p className="text-lg text-[#5a2d22] leading-relaxed">
                  Bisa di olang menjadi pangxito goreng dan di tambah dengan
                  saus
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <FaCheckCircle className="text-[#9370db] text-2xl mr-3" />
              <div>
                <h5 className="text-2xl font-semibold text-[#5a2d22] mb-1">
                  PANGXITO REBUS
                </h5>
                <p className="text-lg text-[#5a2d22] leading-relaxed">
                  Cocok juga di jadikan pangsit rebus yang lembut dan kenyal
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <FaCheckCircle className="text-[#9370db] text-2xl mr-3" />
              <div>
                <h5 className="text-2xl font-semibold text-[#5a2d22] mb-1">
                  PANGXITO KUAH
                </h5>
                <p className="text-lg text-[#5a2d22] leading-relaxed">
                  Bisa juga di jadikan pangsit kuah dengan bumbu pedas manis
                  gurih yang bikin ketagihan
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
