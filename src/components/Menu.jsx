import React from "react";
import { FaCoffee, FaMugHot, FaLeaf, FaBolt } from "react-icons/fa";
import Cappuccino from "../assets/Cappuccino.png";
import ChaiLatte from "../assets/ChaiLatte.png";
import Macchiato from "../assets/Macchiato.png";
import Expresso from "../assets/Expresso.png";

const Menu = () => {
  const coffeeItems = [
    {
      name: "Cappuccino",
      icon: <FaCoffee className="w-8 h-8 text-amber-900" />,
      image: Cappuccino,
      desc: "Creamy espresso with steamed milk and thick foam",
      accent: "bg-amber-100",
    },
    {
      name: "Chai Latte",
      icon: <FaLeaf className="w-8 h-8 text-amber-900" />,
      image: ChaiLatte,
      desc: "Spiced black tea with steamed milk and honey",
      accent: "bg-orange-100",
    },
    {
      name: "Macchiato",
      icon: <FaMugHot className="w-8 h-8 text-amber-900" />,
      image: Macchiato,
      desc: "Espresso with a dollop of milk foam",
      accent: "bg-rose-100",
    },
    {
      name: "Expresso",
      icon: <FaBolt className="w-8 h-8 text-amber-900" />,
      image: Expresso,
      desc: "Strong black coffee shot, rich and aromatic",
      accent: "bg-brown-100",
    },
  ];

  return (
    <div
      id="menu"
      className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16 relative">
          <h2 className="relative inline-block text-3xl sm:text-4xl md:text-3xl lg:text-5xl [font-family: 'Homemade_Apple', cursive] drop-shadow-md font-bold text-amber-900 mb-4">
            <span className="absolute -top-2 sm:-top-4 md:-top-5 lg:-top-6 -left-2 sm:-left-4 md:-left-6 lg:-left-8 text-xl sm:text-2xl md:text-3xl lg:text-3xl">
              ☕
            </span>
            Enjoy a New Blend of Coffee Style{" "}
            <span className="absolute -bottom-2 sm:-bottom-4 md:-bottom-5 lg:-bottom-6 -right-2 sm:-right-4 md:-right-6 lg:-right-8 text-xl">
              ☕
            </span>
          </h2>
          <p className="text-xl lg:text-2xl font-bold [font-family:'Libre_Baskerville', serif] italic text-amber-800 max-w-2xl mx-auto mt-8">
            Explore all flavors of coffee with us. There is always a new cup
            worth experiencing.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coffeeItems.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-700/10 to-amber-900/10 rounded-2xl pointer-events-none" />

              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/30 to-transparent z-10" />
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-56 object-cover transition -transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6 relative">
                <div className="mb-4 flex items-center justify-between">
                  {item.icon}

                  <span className="text-2xl font-playfair font-bold text-amber-900 bg-amber-100 px-4 py-2 rounded-full shadow-sm">
                    $199
                  </span>
                </div>
                <h3 className="text-2xl font-playfair font-bold text-amber-900 mb-2 border-b-2 border-amber-200 pb-2">
                  {item.name}
                </h3>
                <p className="text-amber-800 font-lato mb-4 min-h-[60px]">
                  {item.desc}
                </p>
                <button className="w-full bg-gradient-to-r from-amber-900 via-amber-800 to-amber-900 text-white py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300 flex justify-center items-center gap-2 font-lato font-semibold group-hover:bg-amber-800">
                  <FaMugHot className="transition-transform group-hover:rotate-12" />
                  <span className="group-hover:translate-x-1 transition-transform">
                    Order Now
                  </span>
                </button>
              </div>

              {/* HOVER EFFECT CORNER */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4 border-amber-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4 border-amber-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4 border-amber-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4 border-amber-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
