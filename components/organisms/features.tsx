import {
  FaMoneyBillWave,
  FaGrinStars,
  FaPizzaSlice,
  FaLeaf,
  FaThumbsUp,
} from "react-icons/fa";

const FeaturesSection = () => {
  const features = [
    {
      icon: <FaMoneyBillWave className="text-5xl mb-4 text-green-500" />,
      title: "Harga Terbaik",
      description: "Pangsit berkualitas dengan harga yang terjangkau.",
    },
    {
      icon: <FaGrinStars className="text-5xl mb-4 text-yellow-500" />,
      title: "Rasa Enak",
      description: "Nikmati rasa lezat pangsit goreng dan rebus kami.",
    },
    {
      icon: <FaPizzaSlice className="text-5xl mb-4 text-red-500" />,
      title: "Varian Pangsit",
      description: "Tersedia berbagai varian, dari goreng hingga kuah.",
    },
    {
      icon: <FaLeaf className="text-5xl mb-4 text-green-400" />,
      title: "Sehat dan Lezat",
      description: "Bahan-bahan segar yang menyehatkan.",
    },
    {
      icon: <FaThumbsUp className="text-5xl mb-4 text-blue-500" />,
      title: "Terekomendasi",
      description: "Pelanggan puas dengan rasa dan kualitas kami.",
    },
  ];

  return (
    <div className="bg-yellow-300 py-14">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-red-600 mb-10">
          Keunggulan Kami
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-box bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
            >
              <div className="flex flex-col items-center">
                {feature.icon}
                <h3 className="text-2xl font-semibold text-red-600 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-800">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
