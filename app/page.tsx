import FeaturesSection from "@/components/organisms/features";
import Footer from "@/components/organisms/footer";
import Navbar from "@/components/organisms/navbar";
import KueFavorit from "@/components/organisms/PangsitFavorit";
import PesanSekarang from "@/components/organisms/pesan";
import ProductSection from "@/components/organisms/ProductSection";
import TestimonialSection from "@/components/organisms/testimonial";
import React from "react";

const Home = () => {
  return (
    <div className="bg-yellow-300">
      <Navbar />
      <div className="relative flex items-center justify-center h-screen p-6">
        <img
          alt="A delicious pangsit goreng dish with spices"
          src="images/01.jpeg"
          className="absolute top-0 left-0 w-full h-full object-cover bg-center bg-cover z-10"
        />
        <div className="relative w-full h-full">
          <div className="flex justify-start">
            <div className="relative bg-white p-6 rounded-lg text-center shadow-lg z-10 max-w-xs">
              <h1 className="font-playfair text-4xl text-red-600 mb-3">
                PANGXITO
              </h1>
              <p className="text-black mb-4 text-base">
                Pangxito 3 in 1 Bisa Di Goreng, Direbus, dan Dikukus
              </p>
              <button className="bg-red-600 text-white py-2 px-6 rounded-full text-base shadow-md hover:bg-red-500 transition duration-300">
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
