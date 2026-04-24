import React from "react";
import CoffeeBeans from "../assets/CoffeeBeans.png";

const Discover = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#f1e0c5] via-[#d4a373] to-[#4b3838] min-h-[50vh] text-[#4e342e] font-serif py-12 px-4 flex items-center overflow-hidden">
      <div className="container max-w-7xl mx-auto w-full flex flex-col md:flex-row gap-8">
        {/* LEFT SIDE */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left px-4 md:px-7">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Discover the Best Coffee
          </h1>
          <p className="text-base  sm:text-lg md:text-xl leading-relaxed mb-6">
            Bean Scaene is a coffee shop that provides you with quality coffee
            that helps boost your productivity and builds your mood. Having a
            cup of coffee is good, but having a cup of real coffee is greater.
            There is not doubt thta you will enjoy this coffee more than any
            other you have ever tasted.
          </p>
          <button className="bg-[#4e342e] text-white py-3 px-6 rounded-full shadow-md hovershadow-lg transform hover:-translate-y-1 transition duration-300 ease-in-out cursor-pointer">
            Learn More
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center px-4">
          <img
            src={CoffeeBeans}
            alt="Coffee Beans"
            className="w-full h-auto max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Discover;
