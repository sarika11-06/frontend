import { useState } from "react";
import { ChevronLeft, PlayCircle } from "lucide-react";
import { useNavigate } from "react-router";

const Videos = () => {
  const navigate = useNavigate();
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const videos = [
    {
      id: "bi5oVX0Sp9s",
      title: "Basic Mudra Series 1",
      description: "Learn the fundamental hand gestures of Bharatnatyam.",
    },
    {
      id: "UmRjxek5qYQ",
      title: "Footwork Techniques",
      description:
        "Master the rhythmic foot movements essential for performances.",
    },
    {
      id: "VIDEO_ID_3",
      title: "Expressions in Bharatnatyam",
      description: "Understand how facial expressions enhance storytelling.",
    },
    {
      id: "VIDEO_ID_4",
      title: "Advanced Mudras",
      description: "Explore complex mudras and their meanings.",
    },
    {
      id: "VIDEO_ID_5",
      title: "Rhythmic Patterns",
      description: "Dive into the intricate rhythms of Bharatnatyam.",
    },
    {
      id: "VIDEO_ID_6",
      title: "Storytelling through Dance",
      description: "Learn how to tell captivating stories with movement.",
    },
  ];

  return (
    <div className="flex justify-center space-x-4 p-10 max-w-7xl mx-auto">
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="flex justify-start -ml-3.5 mb-6">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-orange-600 hover:text-orange-800 font-medium cursor-pointer"
          >
            <ChevronLeft size={20} className="ml-2" />
            <span>Back</span>
          </button>
        </div>
        <h2 className="text-2xl font-bold text-orange-800 mb-6">
          All Dance Videos
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <div
                className="relative bg-orange-200 h-48 flex items-center justify-center cursor-pointer"
                onClick={() => setActiveVideo(video.id)}
              >
                {activeVideo === video.id ? (
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                    title={video.title}
                    frameBorder="0"
                    allow="autoplay"
                    allowFullScreen
                    className="rounded-t-lg"
                  ></iframe>
                ) : (
                  <>
                    <img
                      src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover rounded-t-lg"
                    />
                    {/* Play Button Overlay */}
                    {/* <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-t-lg">
                      <PlayCircle size={60} className="text-white opacity-80 hover:opacity-100 transition duration-300" />
                    </div> */}
                  </>
                )}
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2 text-orange-900">
                  {video.title}
                </h3>
                <p className="text-gray-600">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Videos;
