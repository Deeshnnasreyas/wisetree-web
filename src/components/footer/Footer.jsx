import React from "react";
import connect from "../../assets/connect.png";
import { footerLinks, footerMenus } from "../../constants";
import { Link } from "react-router-dom";
import FooterMenu from "./FooterMenu";
import FooterLogo from "./FooterLogo";
import FooterSocialLinks from "./FooterSocialLinks";
import FooterCopyright from "./FooterCopyright";

const Footer = () => {
  return (
    <div
      className="bg-cover bg-[url('/whobg.png')] w-full min-h-screen overflow-hidden relative
    flex flex-col mt-[-80px] pt-[150px] p-[20px] sm:items-center"
    >
      <div
        className="w-full bg-cover bg-left-top flex flex-col md:flex-row items-center
       md:justify-between bg-[url('/Dotgrid.png')] p-5 md:p-[30px] lg:pt-[100px]"
      >
        <h1 className="mb-4 font-poppins font-normal text-[24px] md:text-[30px] lg:text-[45px] leading-[32px] lg:leading-[55px] tracking-normal text-[#FCFFF9] text-center md:text-left max-w-full md:max-w-[812px]">
          Achieve your business goals today. Book a discovery call now!
        </h1>
        <button className="mt-4 md:mt-0">
          <img
            src={connect}
            alt="connect"
            className="w-[180px] md:w-[237.56px] h-auto"
          />
        </button>
      </div>

      {/* Footer Menu (Mobile) */}
      <FooterMenu menus={footerMenus} />

      {/* Logo & Branding Section */}
      <FooterLogo />

      {/* Divider Line */}
      <hr className="w-[80%] lg:w-full border border-[#FCFFF980] my-5 md:my-[30px] hidden lg:block" />

      {/* Footer Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-[#FCFFF9] text-center md:text-left">
        {/* Social Icons */}
        <FooterSocialLinks socialLinks={footerLinks} />

        {/* Footer Menu (Desktop) */}
        <div className="justify-center md:justify-start gap-6 flex-wrap hidden lg:flex">
          {footerMenus.map((items, index) => (
            <Link key={index} to="#">
              <h4 className="font-poppins font-normal text-[16px] md:text-[18px] tracking-normal">
                {items.label}
              </h4>
            </Link>
          ))}
        </div>

        {/* Copyright Text */}
        <FooterCopyright />
      </div>
    </div>
  );
};

export default Footer;
