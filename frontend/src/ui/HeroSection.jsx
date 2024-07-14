import React from "react";

export const HeroSection = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="background-video.mp4"
        autoPlay
        loop
        muted
      >
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-5xl font-bold">AI-Powered Fashion</h1>
        <p className="mt-4 text-xl">
          Empower Your Fashion Decisions with Data-Driven Insights and AI Creativity
        </p>
        <button className="mt-8 px-6 py-3 border border-white text-white font-semibold rounded-md hover:bg-white hover:text-black transition duration-300">
          Try for Free
        </button>
      </div>
    </div>
  );
};
