import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../../assets/logo.png";

const MobileHero = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <header className="flex justify-between mb-[16px]">
        <Link to="/">
          <img src={logo} alt="Logo" className="w-44 h-auto" />
        </Link>
        <button
          className=" text-[#104386] text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </header>
      <div
        className=" bg-[url('/mobileBg.png')] rounded-[40px] flex
        flex-col justify-between pb-[30px] overflow-hidden bg-cover"
      >
        <div className="max-w-[216px] pl-[25px] pt-[25px]">
          <p className="text-[16px] text-[#F7FFEF] font-normal">
            Looking to streamline your marketing?
          </p>
        </div>
        <div className="relative mt-[10%]">
          <h3 className="text-[60px] text-[#F7FFEF] font-bold uppercase">
            <span className="ml-[38%]">Don’t OUTRUN</span>
          </h3>
        </div>
        <div className="absolute ml-[168px] mt-[168px]">
          <div className="w-[120px] h-[120px] bg-[url('/letstalk.png')] overflow-hidden bg-cover relative flex items-center justify-center">
            <p className="absolute text-center text-[30px] leading-[35px] font-medium text-[#F7FFEF] z-[20px] uppercase">
              Let&apos;s Talk
            </p>
          </div>
        </div>
        <div className="w-[248px] pl-[25px] pt-[25px]">
          <p className="text-[16px] text-[#F7FFEF] font-normal">
            Wisetree Brands is your trusted partner to help you stand out, craft
            sustainable B2B strategies, and create a lasting impression.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MobileHero;
