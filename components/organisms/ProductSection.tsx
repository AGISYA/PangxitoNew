import Image from "next/image";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const ProductSection = () => {
  const products = [
    {
      title: "Pangsit Goreng",
      description: "Crispy dan gurih",
      imgSrc: "/images/goreng.jpg",
    },
    {
      title: "Pangsit Rebus",
      description: "Lembut dan segar",
      imgSrc: "/images/rebus.jpg",
    },
    {
      title: "Pangsit Kuah",
      description: "Segar dan lezat",
      imgSrc: "/images/kuah.jpg",
    },
  ];

  return (
    <div className="bg-gradient-to-b bg-yellow-300 font-sans">
      <div className="container mx-auto text-center py-14">
        <h1 className="text-5xl font-bold text-red-600 mb-12">Paling Laris</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group card rounded-xl bg-white p-6 shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 border border-gray-200"
            >
              <Image
                width="1000"
                height="1000"
                alt={product.title}
                className="rounded-lg mb-4 object-cover h-40 w-full transition-transform duration-300 group-hover:scale-105"
                src={product.imgSrc}
              />
              <div className="card-body">
                <h5 className="text-2xl font-semibold text-red-600 mb-3">
                  {product.title}
                </h5>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="flex justify-center mb-4">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStarHalfAlt className="text-yellow-500" />
                </div>
                <button className="bg-white mx-4 text-red-500 py-2 px-4 rounded-full text-lg shadow-md hover:bg-red-500 hover:text-white transition duration-300">
                  Beli Sekarang
                </button>
                <button className="bg-white text-red-500 py-2 px-4 rounded-full text-lg shadow-md hover:bg-red-500 hover:text-white transition duration-300">
                  + Keranjang
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
