import React from "react";
import { imageGridData } from "../../constants/index";
import ServiceItem from "./ServiceItem";
import PropTypes from "prop-types";
const Services = ({ className }) => (
  <div
    className={`bg-[#FCFFF9] mt-[80px] lg:mt-[130px] px-[21px] ${className}`}
  >
    <div className="service-section relative w-full">
      <div
        className="w-full h-[209px] pl-[21px] bg-cover bg-left-top flex items-center justify-left
       bg-[url('/Dotgrid.png')] "
      >
        <h1
          className="font-poppins font-normal text-[80px] lg:text-[150px] leading-[55px] tracking-[0] text-center h-[16.35px]
           text-[#2B2A29]"
        >
          Services
        </h1>
      </div>
      <div className="pl-[28px]">
        <h4
          className="bg-gradient-to-r from-[#104386] to-[#93bbef] bg-clip-text text-transparent 
        font-poppins font-normal text-[45px] leading-[55px] lg:text-[80px] lg:leading-[92px] tracking-[-0.01em]"
        >
          Empowering B2B Leaders to scale organically
        </h4>
      </div>
      <div className="p-[30px] mt-[65px] mb-[130px]">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-4 
        sm:gap-6 md:gap-[27px]"
        >
          {imageGridData.map((item, index) => (
            <ServiceItem key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  </div>
);
Services.propTypes = {
  className: PropTypes.string.isRequired, // Ensuring className is always passed and is a string
};
export default Services;
