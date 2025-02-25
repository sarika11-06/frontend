import { useState } from "react";
import { ChevronRight, Star, Play } from "lucide-react";
type Level = "beginner" | "intermediate" | "advanced";

interface Levels {
  [key: string]: {
    title: string;
    topics: string[];
  };
}

const SkillsCard = () => {
  const [activeLevel, setActiveLevel] = useState<Level>("beginner");

  const levels: Levels = {
    beginner: {
      title: "Basic Foundations",
      topics: [
        "Aramandi Position",
        "Basic Hand Gestures",
        "Foot Movements",
        "Adavus Introduction",
      ],
    },
    intermediate: {
      title: "Intermediate Concepts",
      topics: ["Complex Mudras", "Jathis", "Nritta Elements", "Basic Abhinaya"],
    },
    advanced: {
      title: "Advanced Compositions",
      topics: ["Varnam", "Tillana", "Advanced Abhinaya", "Full Performances"],
    },
  };

  return (
    <div>
      <div className="flex justify-center space-x-4 p-10 max-w-7xl mx-auto">
        <main className="max-w-6xl mx-auto px-4 py-8">
          {/* Level Selection */}
          <div className="flex space-x-4 mb-8">
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
                {level.charAt(0).toUpperCase() + level.slice(1)}
              </button>
            ))}
          </div>

          {/* Current Level Content */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-orange-800 mb-6">
              {levels[activeLevel].title}
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {levels[activeLevel].topics.map((topic, index) => (
                <div
                  key={index}
                  className="bg-orange-50 rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-orange-900">
                      {topic}
                    </h3>
                    <Star className="text-orange-400" size={20} />
                  </div>
                  <p className="text-orange-700 mb-4">
                    Learn the fundamental aspects of {topic.toLowerCase()} in
                    Bharatnatyam.
                  </p>
                  <button className="flex items-center text-orange-600 hover:text-orange-800">
                    <span>Start Learning</span>
                    <ChevronRight size={16} className="ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-orange-800 mb-6">
              Featured Lessons
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="bg-white rounded-lg shadow-md overflow-hidden"
                >
                  <div className="bg-orange-200 h-48 flex items-center justify-center">
                    <Play size={48} className="text-orange-600" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">
                      Basic Mudra Series {item}
                    </h3>
                    <p className="text-gray-600">
                      Master the essential hand gestures of Bharatnatyam
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
      
    </div>
  );
};

export default SkillsCard;
