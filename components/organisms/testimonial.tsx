import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const TestimonialSection = () => {
  return (
    <div className="absolute bottom-5 right-5 bg-yellow-100 p-5 rounded-2xl w-60 shadow-md z-10">
      <p className="text-black mb-2 text-sm">
        "Pangsit yang lezat, benar-benar membuat saya terkesan!"
      </p>
      <div className="flex items-center mb-2">
        <img
          alt="Customer photo"
          src="https://storage.googleapis.com/a1aa/image/vMA51AriCjZUG5OKOSFzvL0F6BAmNyGWg10Wv9XCe1HJyKyJA.jpg"
          className="rounded-full w-10 h-10 mr-2"
        />
        <div>
          <div className="text-black text-sm">Gabriele</div>
          <div className="text-black text-xs">CUSTOMER</div>
        </div>
      </div>
      <div className="text-yellow-400 flex justify-center">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStarHalfAlt />
      </div>
    </div>
  );
};

export default TestimonialSection;
