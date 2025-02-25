import React from "react";
import wisetreeflower from "../../assets/wisetreeflower.png";
import wisetreetext from "../../assets/wisetreetext.png";

const FooterLogo = () => (
  <div className="w-full flex items-center justify-center relative mb-[3%]">
    <div className="absolute">
      <img
        src={wisetreeflower}
        alt="wisetreelogo"
        className="w-full lg:w-[364px] h-[344.97px]"
      />
    </div>
    <div>
      <img
        src={wisetreetext}
        alt="wisetreetext"
        className="w-[1018.31px] h-[228px] mt-[10%]"
      />
    </div>
  </div>
);

export default FooterLogo;
