import React from "react";
import HeroSection from "./HeroSection";
import Header from "./Header";
import Footer from "./Footer";
import ContactUs from "./Contact";
import Services from "./Services";
import DigitalGoldStats from "./Stats";
import AboutUs from "./AboutUs";

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <AboutUs />
      <Services />
      <DigitalGoldStats />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
