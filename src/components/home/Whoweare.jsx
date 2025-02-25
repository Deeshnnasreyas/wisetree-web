import React from "react";
import learn from "../../assets/learn.png";
import whoweareimg1 from "../../assets/whoweareimg1.png";
import whoweareimg2 from "../../assets/whoweareimg2.png";
import whoweareimg3 from "../../assets/whoweareimg3.png";
import arrows from "../../assets/arrows.png";
import { whowearetext } from "../../constants";
const Whoweare = () => {
  return (
    <div className="">
      <div
        className="who-section bg-cover flex bg-[url('/whobg.png')] w-full h-[1291px] xl:h-[1107px] rounded-b-[80px]
       overflow-hidden relative  mt-[-80px] pt-[210px] p-[30px]"
      >
        <div className="mb-[86px]">
          <div className="grid grid-cols-1 pt-0 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-[50px] mb-10 lg:mb-[80px]">
            <div className="">
              <p className="font-libreFranklin text-[#FCFFF9D9] text-[18px] leading-[27px] tracking-normal font-normal">
                {whowearetext}
              </p>
            </div>
            <div className="max-w-[202px] h-[234px] items-center flex justify-center">
              <h2
                className="font-poppins text-[80px] leading-[89px] tracking-[-0.01em] font-semibold
                bg-gradient-to-r from-[#fcfff9] to-[#bfc1bd] bg-clip-text text-transparent"
              >
                who we are
              </h2>
            </div>
            <div className="max-w-[304px] h-[175px]">
              <p className="font-libreFranklin text-[18px] leading-[27px] tracking-normal font-normal text-[#FCFFF9D9]">
                for long-term business relationships and sustained success​. As
                a B2B Brand and Marketing Consulting Firm we are at the
                forefront of redefining success metrics that we achieve through
                consistent, and customised engineered efforts.
              </p>
            </div>
            <div className="lg:flex items-end h-[234px] hidden">
              <button className="">
                <img
                  src={learn}
                  alt="learnmore"
                  className="lg:w-[264.5573px] lg:h-[66.5574px]"
                />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-4">
            <div></div>
            <div className="w-full lg:w-[325px] lg:h-[391px] ">
              {" "}
              <img src={whoweareimg1} alt="learnmore" className="" />
            </div>
            <div className="w-full lg:w-[325px] lg:h-[330px]">
              <img src={whoweareimg2} alt="learnmore" className="" />
            </div>
            <div className="w-full lg:w-[325px] lg:h-[450px]">
              <img src={whoweareimg3} alt="learnmore" className="" />
              <button className="w-[25px] h-[25px] cursor-pointer float-end">
                <img
                  src={arrows}
                  alt="arrows"
                  className="w-[25px] h-[25px] text-[#FCFFF9] mt-[15px] "
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whoweare;
