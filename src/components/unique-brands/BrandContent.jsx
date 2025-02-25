// BrandContent.js
import React from "react";
import PropTypes from "prop-types";

const BrandContent = ({ date, title, description, buttonText }) => (
  <div className="w-full lg:w-[448px] lg:h-[337px]">
    <div className="flex flex-col items-center justify-center">
      <h4 className="text-[#2B2A29BF] font-libre-franklin font-normal text-[16px] leading-[13px] xl:text-[18px] xl:leading-[24px] tracking-[0] pb-[80px]">
        {date} | {title}
      </h4>
      <p className="text-[#144486E5] font-poppins font-medium text-[24px] xl:text-[30px] leading-[28px] xl:leading-[40px] tracking-[0] text-center pb-[50px]">
        {description}
      </p>
      <button className="uppercase text-[#2B2A29BF] w-[156px] h-[53px] rounded-[45px] border border-[#00213280] px-[30px] py-[20px] flex items-center gap-[10px]">
        {buttonText}
      </button>
    </div>
  </div>
);

BrandContent.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default BrandContent;
