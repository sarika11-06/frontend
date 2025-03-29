import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router";

const Videos = () => {
  const navigate = useNavigate();

  const videos = [
    {
      id: "bi5oVX0Sp9s",
      title: "Basic Mudra Series 1",
      description: "Learn the fundamental hand gestures of Bharatnatyam.",
    },
    {
      id: "VIDEO_ID_2",
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
          {videos.map((video, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              {/* YouTube Video Embed */}
              <div className="bg-orange-200 h-48 flex items-center justify-center">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  frameBorder="0"
                  allowFullScreen
                  className="rounded-t-lg"
                ></iframe>
              </div>

              {/* Video Details */}
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
