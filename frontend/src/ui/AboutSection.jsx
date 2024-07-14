import React from "react";

export const AboutSection = () => {
  return (
    <section className="bg-gray-900 text-white py-12 px:0 flex flex-row">
      <div className="container flex flex-row space-y-8 md:space-y-0">
        
        {/* Left Side - Image and Title */}
        <div className="md:w-2/3 flex flex-col mb-40">
          <div className="text-4xl font-light flex flex-col ml-20">
            <div className="neon-text">Get to</div>
            <div className="font-serif font-bold italic">Know Fashionista</div> 
          </div>
          <img
            src="about2.jpeg"
            alt="Adora"
            className="mt-6 w-3/4 rounded-lg self-center"
          />
          <img
            src="girl.png"
            alt="Adora"
            className="mt-6 w-3/4 rounded-lg self-center"
          />
        </div>

        {/* Right Side - Small Image and Description */}
        <div className="md:w-1/3 flex flex-col items-start">
          <img
            src="about1.jpg"
            alt="Adora Portrait"
            className="w-1/2 rounded-lg"
          />
          <p className="mt-6 text-lg w-2/3">
            Adora worked as a stylist for clothing companies and magazines before launching her own business. She has a fashion design degree from Ivory School of Design.
          </p>
          <img
            src="menfashion.jpg"
            alt="Adora Portrait"
            className="mt-10 w-1/2 rounded-lg"
          />
          <p className="mt-6 text-lg w-2/3">
            Adora worked as a stylist for clothing companies and magazines before launching her own business. She has a fashion design degree from Ivory School of Design.
          </p>
          <img
            src="about1.jpg"
            alt="Adora Portrait"
            className="mt-10 w-1/2 rounded-lg"
          />
          <p className="mt-6 text-lg w-2/3">
            Adora worked as a stylist for clothing companies and magazines before launching her own business. She has a fashion design degree from Ivory School of Design.
          </p>
        </div>
      </div>
    </section>
  );
};
