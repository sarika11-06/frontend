import { useState } from "react";

type Level = "asamyukta_hastas" | "samyukta_hastas";

interface GalleryItem {
  imgSrc: string;
  caption: string;
}

interface LevelsGallery {
  [key: string]: {
    title: string;
    content: string;
    images: GalleryItem[];
  };
}

const Gallery = () => {
  const [activeLevel, setActiveLevel] = useState<Level>("asamyukta_hastas");

  const levels: LevelsGallery = {
    asamyukta_hastas: {
      title: "Asamyukta Hastas",
      content:
        "Asamyuta hasta mudras or single hand gestures are expressions to be shown by a hand. According to Abhinayadarpanam, there are 28 asamuta hasta mudras.",
      images: [
        { imgSrc: "/images/Basics/Arala.jpg", caption: "Namaskar" },
        { imgSrc: "/images/Basics/Ardhachandra.jpg", caption: "Basic Pose" },
        { imgSrc: "/images/Basics/", caption: "Foundation Step" },
        { imgSrc: "/images/Basics/", caption: "Foundation Step" },
        { imgSrc: "/images/Basics/", caption: "Foundation Step" },
        { imgSrc: "/images/Basics/", caption: "Foundation Step" },
        { imgSrc: "/images/Basics/", caption: "Foundation Step" },
        { imgSrc: "/images/Basics/", caption: "Foundation Step" },
        { imgSrc: "/images/Basics/", caption: "Foundation Step" },
        { imgSrc: "/images/Basics/", caption: "Foundation Step" },
        { imgSrc: "/images/Basics/", caption: "Foundation Step" },
        { imgSrc: "/images/Basics/", caption: "Foundation Step" },
        { imgSrc: "/images/Basics/", caption: "Foundation Step" },
        { imgSrc: "/images/Basics/", caption: "Foundation Step" },
        { imgSrc: "/images/Basics/", caption: "Foundation Step" },
        { imgSrc: "/images/Basics/", caption: "Foundation Step" },
        { imgSrc: "/images/Basics/", caption: "Foundation Step" },
        { imgSrc: "/images/Basics/", caption: "Foundation Step" },
        { imgSrc: "/images/Basics/", caption: "Foundation Step" },
      ],
    },
    samyukta_hastas: {
      title: "Samyukta Hastas",
      content:
        "Samyuta Hasta mudras or Combined hand gestures are expressions to be shown by both hands. According to abhinaya darpan there are 23 Samuta hasta mudras.",
      images: [
        { imgSrc: "/images/tatta_adavu.jpg", caption: "Tatta Adavu" },
        { imgSrc: "/images/natta_adavu.jpg", caption: "Natta Adavu" },
        { imgSrc: "/images/visharu_adavu.jpg", caption: "Visharu Adavu" },
      ],
    },
  };

  return (
    <div className="flex justify-center space-x-4 p-10 max-w-7xl mx-auto">
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Level Selection */}

        <div className="flex space-x-4 mb-8 ">
          {Object.keys(levels).map((level) => (
            <button
              key={level}
              onClick={() => setActiveLevel(level as Level)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeLevel === level
                  ? "bg-orange-600 text-white"
                  : "bg-white text-orange-600 hover:bg-orange-100"
              }`}
            >
              {level.replace("_", " ").charAt(0).toUpperCase() + level.slice(1)}
            </button>
          ))}
        </div>

        {/* Gallery Content */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold text-orange-800 mb-6">
            {levels[activeLevel].title}
          </h2>
          {/* Unique content line per level */}
          <p className="text-orange-700 text-lg mb-8">
            {levels[activeLevel].content}
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {levels[activeLevel].images.map((item, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow"
              >
                <img
                  src={item.imgSrc}
                  alt={item.caption}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4 bg-orange-50">
                  <p className="text-orange-900 font-semibold">
                    {item.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Gallery;
