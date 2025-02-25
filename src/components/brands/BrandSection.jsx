import React from "react";
import Title from "./Title";
import BrandInfo, { BrandTextAlt } from "./BrandInfo";
import LearnMoreButton from "./LearnMoreButton";

const BrandSection = () => (
  <div className="bg-[#FCFFF9] mt-[130px] p-[30px] rounded-b-[80px] relative z-50 w-full">
    <div className="brand-section bg-[#FCFFF9] rounded-b-[80px] w-full h-[1078px] xl:h-[767px]">
      <Title />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
        <div className="ml-[5px] xl:flex flex-col justify-end min-h-[150px] hidden">
          <LearnMoreButton className="mb-[30px]" />
        </div>
        <BrandInfo />
        <BrandTextAlt />
        <div className="ml-[5px] flex items-end h-full lg:hidden mt-[45px]">
          <LearnMoreButton className="mb-[40px]" />
        </div>
      </div>
    </div>
  </div>
);

export default BrandSection;
