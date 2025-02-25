import React from "react";
const LookProcess = () => {
  return (
    <div className="bg-[#FCFFF9] p-[30px] rounded-b-[80px] relative">
      <div className="process-section w-full h-full lg:h-[838px] flex flex-col">
        <div className="flex justify-center mt-[142px]">
          <h1 className=" max-w-[370px] lg:max-w-[870px] text-center font-poppins font-normal text-[45px] xl:text-[80px] leading-[55px] xl:leading-[95px] tracking-[-1%] text-[#104386] bg-gradient-to-r from-[#104386] to-[#93bbef] bg-clip-text text-transparent">
            If you’re looking at us, You’re looking to
          </h1>
        </div>
        <div className="flex gap-[30px] lg:gap-[89px]">
          <div
            className="relative flex items-center bg-[url('/gain1.png')] w-[216.13px] h-[133px]
             lg:w-[700.38px] lg:h-[431px] ml-0  lg:ml-[99px]  mt-[-5%] lg:mt-[-2%]  rounded-[23px] lg:rounded-[75px] 
             overflow-hidden bg-cover z-[10000]"
          >
            <div className="absolute flex justify-between items-center gap-[19px] lg:gap-[64px] p-[10%]">
              <span className="text-[56.53px] lg:text-[183.18px] text-[#FCFFF9E5]">
                1
              </span>
              <div className="flex flex-col text-[#FCFFF9E5] ">
                <h4 className="font-poppins font-medium  text-[26px] lg:text-[86px] uppercase ">
                  Gain
                </h4>

                <p className="font-libre-franklin font-normal text-[13px] lg:text-[43.1px]  text-center">
                  Gain Buyer’s Trust
                </p>
              </div>
            </div>
          </div>
          <div
            className="relative flex items-center bg-[url('/enhace.png')] w-[116px] h-[71px] 
            lg:w-[370.5px] lg:h-[228px]
        rounded-[12px] lg:rounded-[39px]  overflow-hidden bg-cover pl-[9px]  lg:pl-[29px] pr-[10px] lg:pr-[40px] py-[19px] lg:py-[63px] mt-[5%] "
          >
            <div className="absolute z-[10000] flex justify-between items-center gap-[5px]  lg:gap-[20px]  ">
              <span className="text-[30px] lg:text-[96px] text-[#FCFFF9E5]">
                2
              </span>
              <div className="flex flex-col text-[#FCFFF9E5] ">
                <h4 className="font-poppins font-medium text-[14px] lg:text-[45px] uppercase blur-[1.5px] ">
                  enhance
                </h4>

                <p
                  className="font-libre-franklin font-normal text-[7px] lg:text-[22.8px] 
                  leading-[10px] lg:leading-[31.92px] tracking-[-0.01em] text-left
                 blur-[1.5px]"
                >
                  Enhance Sales Quota Attainment
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-[89px] pl-[7%] lg:pl-[30%] ">
          <div
            className="order-2 relative flex  items-center bg-[url('/generate.png')]  w-[61px] h-[37px]  
            lg:w-[194.9px] lg:h-[119.94px] 
          rounded-[6px] lg:rounded-[20px]  overflow-hidden bg-cover  backdrop-blur-md p-2 lg:p-5 mt-[-2%]
          lg:mt-[-5%]"
          >
            <div className="absolute flex justify-between items-center  text-[#FCFFF9E5] blur-[1.5px]">
              <span className="font-poppins font-medium text-[22px] lg:text-[71px] leading-[17px] lg:leading-[56.97px] tracking-[-0.01em] text-center">
                3
              </span>

              <div className="flex flex-col text-[#FCFFF9E5] ">
                <h4
                  className="text-[#FCFFF9E5]  font-poppins font-medium text-[7px] leading-[17px] 
                lg:text-[23.99px] lg:leading-[56.97px] tracking-[-0.01em] uppercase "
                >
                  Generate
                </h4>
                <p className="font-libre-franklin font-normal  text-[3px] leading-[5px]  lg:text-[11.99px] lg:leading-[16.79px] tracking-[-0.01em] text-center">
                  generate demand
                </p>
              </div>
            </div>
          </div>
          <div
            className="order-1 relative flex items-center bg-[url('/enhace.png')] w-[50px] h-[37px] 
            lg:w-[162.5px] lg:h-[100px]
        rounded-[5px]  lg:rounded-[17px]  overflow-hidden bg-cover backdrop-blur-md p-1 lg:p-5 mt-8"
          >
            <div className="absolute flex justify-between items-center blur-[1.5px]">
              <span className="text-[10px]  lg:text-[60px] text-[#FCFFF9E5]">
                4
              </span>
              <div className="flex flex-col text-[#FCFFF9E5] ">
                <h4 className="font-poppins font-medium text-[8px] lg:text-[20px]  uppercase ">
                  Build
                </h4>

                <p className="font-libre-franklin font-normal text-[3px] lg:text-[10px] text-center">
                  build a distinctive brand
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LookProcess;
