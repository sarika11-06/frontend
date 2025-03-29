import React from "react";
import danceImg from "images/Untitled design.png";
import { useNavigate } from "react-router";

export default function About() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-8">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            About Bharatanatyam
          </h1>
          <p className="text-xl text-center mt-2 opacity-90">
            Discover the ancient art form of South India
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Introduction Section */}
        <section className="flex flex-col md:flex-row gap-8 items-start mb-16">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-orange-800 mb-4">
              The Heritage of Bharatanatyam
            </h2>
            <p className="text-gray-700 mb-4">
              Bharatanatyam is one of India's oldest and most prestigious
              classical dance forms, originating over 2,000 years ago in Tamil
              Nadu, South India. Derived from the ancient text of Natya Shastra,
              it embodies rhythm, expression, and storytelling through graceful
              movements and intricate footwork.
            </p>
            <p className="text-gray-700">
              Originally performed in Hindu temples, this sacred dance form was
              practiced by Devadasis (temple dancers) as a way to worship and
              express devotion. Today, Bharatanatyam has evolved into a globally
              recognized art form while maintaining its spiritual essence and
              technical rigor.
            </p>
          </div>

          <div className="md:w-1/2">
            <div className="bg-gradient-to-br from-orange-600 to-orange-700 p-2 rounded-lg shadow-lg">
              <img
                src={danceImg}
                alt="Bharatanatyam Dance"
                className="w-full max-h-[300px] object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Key Elements Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-orange-800 mb-6 text-center">
            Key Elements of Bharatanatyam
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-orange-500">
              <h3 className="text-xl font-bold text-orange-700 mb-2">Nritta</h3>
              <p className="text-gray-700">
                Pure dance movements without expressive elements, focusing on
                rhythm, timing, and intricate footwork patterns. Nritta
                demonstrates the technical skill of the dancer.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-orange-500">
              <h3 className="text-xl font-bold text-orange-700 mb-2">Natya</h3>
              <p className="text-gray-700">
                The dramatic element that incorporates storytelling through a
                combination of dance, music, and emotional expression, often
                depicting mythological stories and epics.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-orange-500">
              <h3 className="text-xl font-bold text-orange-700 mb-2">
                Abhinaya
              </h3>
              <p className="text-gray-700">
                The art of expression through facial gestures, eye movements,
                and body language. Abhinaya conveys emotions and narratives,
                bringing characters and stories to life.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-orange-500">
              <h3 className="text-xl font-bold text-orange-700 mb-2">Adavus</h3>
              <p className="text-gray-700">
                The fundamental building blocks of Bharatanatyam, consisting of
                basic dance steps. There are over 108 adavus, grouped into
                various categories based on their complexity.
              </p>
            </div>
          </div>
        </section>

        {/* Traditional Attire Section */}
        <section className="flex flex-col-reverse md:flex-row gap-8 items-center mb-16">
          <div className="md:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-orange-100 p-4 rounded-lg">
                <h4 className="font-bold text-orange-800 mb-2">
                  Temple Jewelry
                </h4>
                <p className="text-sm text-gray-700">
                  Elaborate gold-plated ornaments adorning the head, ears, neck,
                  and wrists, often featuring sun and moon motifs.
                </p>
              </div>
              <div className="bg-orange-100 p-4 rounded-lg">
                <h4 className="font-bold text-orange-800 mb-2">Silk Costume</h4>
                <p className="text-sm text-gray-700">
                  A specially stitched Saree with pleats and a fan-shaped
                  arrangement in front to showcase intricate footwork.
                </p>
              </div>
              <div className="bg-orange-100 p-4 rounded-lg">
                <h4 className="font-bold text-orange-800 mb-2">Ghungroos</h4>
                <p className="text-sm text-gray-700">
                  Anklets with small bells that create rhythmic sounds
                  complementing the dance movements and music.
                </p>
              </div>
              <div className="bg-orange-100 p-4 rounded-lg">
                <h4 className="font-bold text-orange-800 mb-2">Makeup</h4>
                <p className="text-sm text-gray-700">
                  Traditional styling with dramatic eyes, red marks on the
                  forehead, and vibrant colors enhancing expressions.
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-orange-800 mb-4">
              Traditional Attire & Ornaments
            </h2>
            <p className="text-gray-700 mb-4">
              The visual grandeur of Bharatanatyam is enhanced by its
              distinctive costume and jewelry. Every element of the dancer's
              appearance has symbolic significance and practical purpose,
              allowing for the full range of movement required while maintaining
              traditional aesthetics.
            </p>
            <p className="text-gray-700">
              The costume typically features vibrant colors, with red, orange,
              and gold being particularly favored for their auspicious
              connotations in Indian culture. Modern performances may
              incorporate contemporary design elements while preserving the
              essential traditional components.
            </p>
          </div>
        </section>

        {/* Training and Learning Section */}
        <section className="bg-orange-50 p-8 rounded-lg shadow-md mb-16">
          <h2 className="text-3xl font-bold text-orange-800 mb-4 text-center">
            Learning Bharatanatyam
          </h2>
          <p className="text-gray-700 mb-6 text-center max-w-3xl mx-auto">
            Training in Bharatanatyam requires dedication, discipline, and years
            of rigorous practice under the guidance of an experienced guru.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-orange-700 mb-2">
                Arangetram
              </h3>
              <p className="text-gray-700">
                After years of training, a student's first full solo performance
                (Arangetram) marks their formal debut and recognition as a
                dancer.
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-orange-700 mb-2">
                Daily Practice
              </h3>
              <p className="text-gray-700">
                Students typically train for 2-3 hours daily, focusing on
                footwork, posture, expressions, and building physical stamina.
              </p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h3 className="text-lg font-bold text-orange-700 mb-2">
                Guru-Shishya Tradition
              </h3>
              <p className="text-gray-700">
                Following the ancient tradition of knowledge transfer, students
                learn through close mentorship with their teacher.
              </p>
            </div>
          </div>
        </section>

        {/* Join Us / Call to Action */}
        <section className="bg-[#f04b00] text-white p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-3xl font-bold mb-4">
            Experience the Art of Bharatanatyam
          </h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Whether you're interested in learning this ancient art form or
            witnessing its beauty through performances, we welcome you to join
            our community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-orange-700 px-6 py-3 rounded-lg font-bold transition duration-300 cursor-pointer"
              onClick={() => navigate("/videos")}
            >
              Videos Performances
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
