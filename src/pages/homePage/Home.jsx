import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "../../components/home/Hero";
import LookProcess from "../../components/home/LookProcess";
import BrandSection from "../../components/brands/BrandSection";
import Whoweare from "../../components/home/Whoweare";
import Services from "../../components/service/Services";
import Footer from "../../components/footer/Footer";
import UniqueBrands from "../../components/unique-brands/UniqueBrands";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  document.title = "Wisetree | Home";
  // Animation integration
  useEffect(() => {
    // Animation for Hero section
    gsap.fromTo(
      ".hero-section",
      { opacity: 0, y: -100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animation for BrandSection
    gsap.fromTo(
      ".brand-section",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".brand-section",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animation for Whoweare section
    gsap.fromTo(
      ".whoweare-section",
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".whoweare-section",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animation for LookProcess section
    gsap.fromTo(
      ".look-process-section",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".look-process-section",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animation for Services section
    gsap.fromTo(
      ".services-section",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".services-section",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animation for UniqueBrands section
    gsap.fromTo(
      ".unique-brands-section",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".unique-brands-section",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );

    // Animation for Footer section
    gsap.fromTo(
      ".footer-section",
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".footer-section",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, []);

  return (
    <div className="overflow-hidden">
      <Hero className="hero-section" />
      <BrandSection className="brand-section" />
      <Whoweare className="whoweare-section" />
      <LookProcess className="look-process-section" />
      <Services className="services-section" />
      <UniqueBrands className="unique-brands-section" />
      <Footer className="footer-section" />
    </div>
  );
};

export default Home;
