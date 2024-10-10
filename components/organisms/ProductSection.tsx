import Image from "next/image";
import Link from "next/link";

const ProductSection = () => {
  const products = [
    {
      title: "Pangxito Tulang Rangu Original",
      imgSrc: "/images/pangxito.png",
      detailLink: "/produk/Pangxito-Tulang-Rangu-Original",
    },
    {
      title: "Pangxito Tulang Rangu With Cheese",
      imgSrc: "/images/pangxito.png",
      detailLink: "/produk/Pangxito-Tulang-Rangu-With-Cheese",
    },
  ];

  return (
    <div className="bg-yellow-300 py-14">
      <div className="container mx-auto text-center mb-8">
        <h1 className="text-5xl text-red-600 mb-4">Our Products</h1>
        <Link href="/produk">
          <button className="btn btn-view-products bg-red-600 text-white py-2 px-4 rounded-full hover:bg-red-500 transition duration-300">
            View All Products
          </button>
        </Link>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map((product, index) => (
          <div key={index} className="product flex flex-col items-center">
            <Image
              alt={product.title}
              src={product.imgSrc}
              width={300}
              height={300}
              className="rounded-lg object-cover mb-4"
            />
            <h3 className="text-lg font-semibold text-red-600">
              {product.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
