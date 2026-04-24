import React from "react";
import Men from "../assets/Men.png";
import Women from "../assets/Women.png";

const Testimonials = () => {
  return (
    <div
      id="testimonials"
      className=" min-h-screen bg-gradient-to-b from-[antiquewhite] to-[wheat] flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 py-10 font-[Poppins]"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-4xl md:text-5xl font-bold text-stone-900 mb-4 font-[Playfair_Display]">
          What Our Customers Say
        </h2>
        <p className="text-lg sm:text-lg md:text-xl text-stone-600 max-w-2xl mx-auto">
          Hear from our satisfied customers about their experience with our
          coffee.
        </p>
      </div>

      {/* TESTIMONIALS GRID GOES HERE */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full px-4">
        {/* TESTIMONIAL 1 */}
        <div className="relative bg-rose-50 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-500 border-l-4 border-r-4 border-t-2 border-b-2 md:border-l-[16px] md:border-r-[16px] md:border-t-4 md:border-b-4 border-[#3d2b1e] group overflow-hidden transform">
          <div className="text-center">
            <div className="mb-8">
              <img
                src={Men}
                alt="Men"
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover mx-auto border-4 border-stone-900 shadow-lg transition-transform"
              />
            </div>

            <div className="relative mb-8">
              <span className="absolute top-0 left-1/2 -translate-x-1/2 -mt-8 text-6xl text-sky-900 opacity-20">
                &ldquo;
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
