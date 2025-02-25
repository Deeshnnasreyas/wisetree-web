import React from "react";
import Hero from "../../components/home/Hero";
import LookProcess from "../../components/home/LookProcess";
// import Services from "../../components/home/Services";
// import UniqueBrands from "../../components/home/UniqueBrands";
// import Footer from "../../components/home/Footer";
import BrandSection from "../../components/brands/BrandSection";
import Whoweare from "../../components/home/Whoweare";
import Services from "../../components/service/Services";
import Footer from "../../components/footer/Footer";
import UniqueBrands from "../../components/unique-brands/UniqueBrands";

const Home = () => {
  document.title = "Wisetree | Home";
  return (
    <div className="overflow-hidden">
      <Hero />
      <BrandSection />
      <Whoweare />
      <LookProcess />
      <Services />
      <UniqueBrands />
      <Footer />
    </div>
  );
};

export default Home;
