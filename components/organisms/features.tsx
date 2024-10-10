import { FaMoneyBillWave, FaGrinStars, FaThumbsUp } from "react-icons/fa";

const FeaturesSection = () => {
  const features = [
    {
      icon: <FaMoneyBillWave className="text-3xl mb-1 text-green-500" />,
      title: "Harga Terbaik",
      description: "Pangsit berkualitas dengan harga yang terjangkau.",
    },
    {
      icon: <FaGrinStars className="text-3xl mb-1 text-yellow-500" />,
      title: "Rasa Enak",
      description: "Nikmati kelezatan pangsit tulang rangu 3in1 kami.",
    },
    {
      icon: <FaThumbsUp className="text-3xl mb-1 text-blue-500" />,
      title: "Terekomendasi",
      description: "Pelanggan puas dengan rasa dan kualitas kami.",
    },
  ];

  return (
    <div className="py-6">
      <div className="container mx-auto text-center mb-4">
        <h2 className="text-2xl font-bold text-red-600 mb-2">
          Keunggulan Kami
        </h2>
      </div>
      <div className="container mx-auto flex flex-wrap justify-center items-start gap-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center transition-transform transform hover:scale-105 text-sm md:text-base" // Added responsive text size
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full mb-2">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold text-red-600 mb-1">
              {feature.title}
            </h3>
            <p className="text-gray-800 text-center text-xs">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
