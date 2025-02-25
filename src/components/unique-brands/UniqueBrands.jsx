// UniqueBrands.js
import React from "react";
import BrandImage from "./BrandImage";
import BrandContent from "./BrandContent";
import brandImgleft from "../../assets/brandImgleft.png";
import brandImgright from "../../assets/brandImgright.png";
import brandImgleftMob from "../../assets/brandImgleftMob.png";

const UniqueBrands = () => {
  return (
    <div className="bg-[#FCFFF9] mt-[130px] rounded-b-[80px] relative z-50">
      <div className="brand-section bg-[#FCFFF9] rounded-b-[80px] w-full h-[903px]">
        <div className="p-[30px]">
          <h4 className="font-libreFranklin text-[18px] leading-[24px] tracking-normal font-normal text-[#2B2A29] uppercase">
            THOUGHTFLOW
          </h4>
          <hr className="w-[90%] border border-[#00213280] mb-[35px] mt-[30px]" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-[42px] mt-0 md:mt-[60px] lg:mt-[83px] mb-[80px] md:mb-[110px] lg:mb-[130px]">
          <BrandImage
            src={brandImgleft}
            alt="Brand Image Left"
            className="hidden lg:block"
            style={{ transform: "rotate(360deg)" }}
          />
          <BrandImage
            src={brandImgleftMob}
            alt="Brand Image Left Mobile"
            className="lg:hidden"
          />
          <BrandContent
            date="Oct 15, 2024"
            title="Brand Identity"
            description="Define a unique and clear brand identity that resonates with the relevant target audience"
            buttonText="View Blog"
          />
          <BrandImage
            src={brandImgright}
            alt="Brand Image Right"
            className="hidden xl:block"
          />
        </div>
      </div>
    </div>
  );
};

export default UniqueBrands;
