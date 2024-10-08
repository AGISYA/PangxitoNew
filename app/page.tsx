import FeaturesSection from "@/components/organisms/features";
import Footer from "@/components/organisms/footer";
import Navbar from "@/components/organisms/navbar";
import KueFavorit from "@/components/organisms/PangsitFavorit";
import PesanSekarang from "@/components/organisms/pesan";
import ProductSection from "@/components/organisms/ProductSection";
import TestimonialSection from "@/components/organisms/testimonial";
import Image from "next/image";
import React from "react";

const Home = () => {
  return (
    <div className="bg-yellow-300">
      <Navbar />
      <div className="relative flex items-center justify-center h-screen p-6">
        <Image
          alt="A delicious pangsit goreng dish with spices"
          src="/images/2.jpg"
          width="5000"
          height="5000"
          className="absolute top-0 left-0 w-full h-full object-cover bg-center bg-cover z-10"
        />
        <div className="relative w-full h-full">
          <div className="flex justify-start">
            <div className="relative bg-white p-2 md:p-4 rounded-lg text-center shadow-lg z-10 max-w-xs">
              <h1 className="font-playfair text-xl md:text-3xl text-red-600 mb-1 md:mb-3 font-extrabold">
                PANGXITO
              </h1>
              <p className="text-black mb-2 md:mb-4 text-xs md:text-base">
                Pangxito 3 in 1 <br /> Bisa Di Goreng, <br /> Direbus, dan
                Dikukus
              </p>
              <button className="bg-red-600 text-white py-1 px-3 md:py-2 md:px-6 rounded-full text-xs md:text-base shadow-md hover:bg-red-500 transition duration-300">
                PESAN SEKARANG
              </button>
            </div>
          </div>
        </div>

        <TestimonialSection />
      </div>
      <ProductSection />
      <FeaturesSection />
      <KueFavorit />
      <PesanSekarang />
      <Footer />
    </div>
  );
};

export default Home;
