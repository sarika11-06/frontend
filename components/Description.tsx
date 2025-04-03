import { ChevronLeft } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router";

const topicDescriptions: Record<string, string> = {
  "The Basics of Bharatnatyam (3N)":
    "This is the description for The Basics of Bharatnatyam (3N). It covers the foundational elements of the art form, including its history, importance, and basic postures required for beginners.",
  Namaskar:
    "This is the description for Namaskar. In Bharatnatyam, Namaskar is a way of seeking blessings before starting a dance performance. It involves specific hand gestures and postures that signify respect and devotion.",
  Adavus:
    "This is the description for Adavus. Adavus are the fundamental steps in Bharatnatyam. They are the basic building blocks of the dance, consisting of rhythmic footwork and hand gestures that define the aesthetics of the dance.",
// name of topic: eg. More about Adavus
// description of topic eg. This is the description for Adavus.
};

interface DescriptionProps {
  postId: string;
}

const Description: React.FC<DescriptionProps> = ({ postId }) => {
  const description = topicDescriptions[postId] || "Topic not found.";
  const [expanded, setExpanded] = useState(false);
  const contentRef = useRef<HTMLParagraphElement>(null);
  const [showReadMore, setShowReadMore] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (contentRef.current) {
      setShowReadMore(contentRef.current.scrollHeight > 350);
    }
  }, [description]);

  return (
    <>
      <button
        onClick={() => navigate(-1)}
        className="flex items-center cursor-pointer text-orange-600 hover:text-orange-800 mb-4"
      >
        <ChevronLeft size={20} className="mr-2" /> Back
      </button>
      <div className="p-6 w-full rounded-lg shadow-lg bg-white mx-auto">
        <h1 className="text-2xl font-semibold text-orange-600">{postId}</h1>

        <div
          className={`overflow-hidden transition-all duration-300 ${
            expanded ? "max-h-none" : "max-h-[350px]"
          }`}
        >
          <p ref={contentRef} className="mt-4 text-orange-700 leading-relaxed">
            {description}
          </p>
        </div>

        {showReadMore && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-4 text-orange-600 hover:text-orange-800 font-medium flex items-center"
          >
            {expanded ? "Read Less" : "Read More"}
          </button>
        )}
      </div>
    </>
  );
};

export default Description;
