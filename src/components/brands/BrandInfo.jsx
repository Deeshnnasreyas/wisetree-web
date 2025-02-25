import React from "react";
import { Brandtext, Brandtexts } from "../../constants";

const BrandInfo = () => (
  <div className="w-[351px] h-[298px] xl:w-[399px] xl:h-[297px]">
    <p className="font-libreFranklin text-[16px] xl:text-[18px] leading-[27px] tracking-normal font-normal">
      {Brandtext}
    </p>
  </div>
);

export const BrandTextAlt = () => (
  <div className="w-[351px] h-[298px] xl:w-[399px] xl:h-[297px] pt-[40px] lg:pt-0">
    <p className="font-libreFranklin text-[16px] xl:text-[18px] leading-[27px] tracking-normal font-normal">
      {Brandtexts}
    </p>
  </div>
);

export default BrandInfo;
