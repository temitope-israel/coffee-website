import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Discover from "./components/Discover";
import Menu from "./components/Menu";
import AboutUs from "./components/AboutUs";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Discover />
      <Menu />
      <AboutUs />
      <Testimonials />
    </>
  );
};

export default App;
