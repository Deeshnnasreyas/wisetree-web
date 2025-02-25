import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import letstalk from "../../assets/letstalk.png";
import wisetree from "../../assets/wisetree.png";
import MobileHero from "./MobileHero";
import { heroText } from "../../constants";
const Hero = () => {
  return (
    <div className="p-[30px]">
      <div
        className="hero-section bg-[#FCFFF9] relative 
   w-full h-screen bg-cover bg-left-top bg-[url('/hero.png')] rounded-[80px] rounded-t-[0px] overflow-hidden hidden lg:block"
      >
        <header className="absolute top-0 left-0 w-full flex items-center justify-between p-4 bg-transparent z-50">
          <Link to="/">
            <img src={logo} alt="Logo" className="w-44 h-auto" />
          </Link>
        </header>
        <div className="container relative w-full h-full">
          <div className="w-full flex justify-center items-center  pt-[249px] pb-[214px] relative">
            <h1 className="text-[120px] leading-[180px] font-bold text-[#F7FFEF] uppercase">
              <span className="relative  right-[-27%]">
                {" "}
                Don&apos;t just Keep U
              </span>
              <span className="relative left-[-20%]"> Up, OUTRUN</span>
            </h1>

            <div className="absolute left-[50%] top-[50%] -translate-x-[60%] -translate-y-[18%]">
              <div className="relative flex items-center justify-center w-[225px] h-[225px] rounded-full text-center">
                <img
                  src={letstalk}
                  alt="Logo"
                  className="absolute top-0 left-0 w-full h-full"
                />
                <p className="relative max-w-[140px] text-[50px] leading-[60px] font-medium text-[#F7FFEF] z-[20px] uppercase">
                  Let&apos;s Talk
                </p>
              </div>
            </div>
            <div className="absolute left-[70%] top-[70%] -translate-x-[0%] -translate-y-[18%]">
              <p className="font-sans text-base leading-7 tracking-normal text-[#F7FFEFD9] max-w-[297px]">
                {" "}
                {heroText}
              </p>
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 mb-[6%]">
              <div>
                <img
                  src={wisetree}
                  alt="wisetree"
                  className="w-[115px] h-[65px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden overflow-x-hidden">
        <MobileHero />
      </div>
    </div>
  );
};

export default Hero;
