import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

const basicMudras = [
  {
    name: "Pataka",
    description: "Symbolizes clouds, forest, denial, or blessing.",
    image: "../images/Basics/Pataka.jpg",
  },
  {
    name: "Tripataka",
    description: "Represents crown, tree, or flames.",
    image: "../images/Basics/Tripataka.jpg",
  },
  {
    name: "Ardhapataka",
    description: "Symbolizes a river, knife, or leaves.",
    image: "../images/Basics/Ardhapataka.jpg",
  },
  {
    name: "Arala",
    description: "Denotes separation, lightning, or opposition.",
    image: "/images/Basics/Arala.jpg",
  },
  {
    name: "Mayura",
    description: "Represents a peacock, applying tilak, or a bird.",
    image: "../images/Basics/Mayura.jpg",
  },
  {
    name: "Ardhachandra",
    description: "Symbolizes the moon, offering, or hand movements.",
    image: "../images/Basics/Ardhachandra.jpg",
  },
  {
    name: "Shukatunda",
    description: "Depicts a parrot’s beak, shooting an arrow, or a spear.",
    image: "../images/Basics/Sukatunda.jpg",
  },
  {
    name: "Mushti",
    description: "Represents grasping, strength, or a fist.",
    image: "../images/Basics/Musti.jpg",
  },
  {
    name: "Shikhara",
    description: "Symbolizes a crown, bow, or ringing a bell.",
    image: "../images/Basics/Sikhara.jpg",
  },
  {
    name: "Kapitta",
    description: "Used to show Lakshmi, Saraswati, or holding a flower.",
    image: "../images/Basics/Kapittha.jpg",
  },
];

const Basics = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Back Button */}
      <button onClick={() => navigate(-1)} className="flex items-center text-orange-600 hover:text-orange-800 mb-4">
        <ChevronLeft size={20} className="mr-2" /> Back
      </button>

      <h1 className="text-3xl font-bold text-orange-800 mb-6">Basic Mudras in Bharatnatyam</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {basicMudras.map((mudra, index) => (
          <div key={index} className="bg-orange-50 rounded-lg p-6 shadow-md flex flex-col items-center text-center">
            <img src={mudra.image} alt={mudra.name} className="w-32 h-32 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold text-orange-900">{mudra.name}</h3>
            <p className="text-orange-700 mt-2">{mudra.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Basics;
