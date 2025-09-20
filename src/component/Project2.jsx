import React, { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react"; 
import Image1 from "../assets/Image1.jpg";
import Image2 from "../assets/Image2.jpg";
import Image3 from "../assets/Image3.jpg";
import Image4 from "../assets/Image4.jpg";
import Image5 from "../assets/Image5.jpg";
import Image6 from "../assets/Image6.jpg";
import Image7 from "../assets/Image7.jpg";
import Image8 from "../assets/Image8.jpg";
import Video1 from "../assets/Video.mp4";

const Portfolio = () => {
  const media = [
    { type: "image", src: Image1 },
    { type: "image", src: Image2 },
    { type: "image", src: Image3 },
    { type: "image", src: Image4 },
    { type: "image", src: Image5 },
    { type: "image", src: Image6 },
    { type: "image", src: Image7 },
    { type: "image", src: Image8 },
    { type: "video", src: Video1 },
  ];

  const [currentIndex, setCurrentIndex] = useState(null);

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === media.length - 1 ? 0 : prev + 1));
  };

  const handleClose = () => {
    setCurrentIndex(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <h1 className="text-4xl font-bold text-center mb-10">My Project</h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {media.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl overflow-hidden cursor-pointer"
            onClick={() => setCurrentIndex(index)}
          >
            {item.type === "image" ? (
              <img src={item.src} alt={`Work ${index + 1}`} className="w-full h-56 object-cover" />
            ) : (
              <video className="w-full h-56 object-cover">
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      {currentIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={handleClose}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-white text-3xl"
            onClick={handleClose}
          >
            <X size={32} />
          </button>

          {/* Left Arrow */}
          <button
            className="absolute left-6 text-white"
            onClick={handlePrev}
          >
            <ChevronLeft size={48} />
          </button>

          {/* Media Display */}
          {media[currentIndex].type === "image" ? (
            <img
              src={media[currentIndex].src}
              alt="Fullscreen"
              className="max-h-[90%] max-w-[90%]"
              onClick={(e) => e.stopPropagation()}
            />
          ) : (
            <video
              controls
              autoPlay
              className="max-h-[90%] max-w-[90%]"
              onClick={(e) => e.stopPropagation()}
            >
              <source src={media[currentIndex].src} type="video/mp4" />
            </video>
          )}

          {/* Right Arrow */}
          <button
            className="absolute right-6 text-white"
            onClick={handleNext}
          >
            <ChevronRight size={48} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
