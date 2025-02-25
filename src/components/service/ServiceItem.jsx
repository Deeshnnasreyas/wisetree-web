import React from "react";
import PropTypes from "prop-types";
const ServiceItem = ({ item, index }) => (
  <div
    className="p-[30px] w-full h-[250px] sm:h-[275px] md:h-[295px] relative overflow-hidden bg-cover bg-center rounded-[35px] shadow-md flex items-center"
    style={{ backgroundImage: `url(${item?.bg})` }}
  >
    {/* Content Wrapper with Column Reverse for alternate items */}
    <div
      className={`absolute text-[#FCFFF9] flex ${
        index % 2 !== 0 ? "flex-col-reverse" : "flex-col"
      } justify-between w-full h-full`}
    >
      <div>
        <h4 className="font-poppins font-medium text-[22px] tracking-normal max-w-[227px] h-[115px] capitalize">
          {item?.heading}
        </h4>
        <p className="font-poppins font-medium text-[32px] tracking-normal">
          {item?.subheading}
        </p>
      </div>

      {/* Icons & Step Section */}
      <div className="flex w-[90%] justify-between items-center">
        <div className="w-[65px] h-[65px] lg:mt-[12px]">
          <img src={item?.icon} alt={item?.alt} />
        </div>
        <div
          className="relative w-[96px] h-[96px] bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(${item?.ellipse})` }}
        >
          <p className="absolute text-[25px] text-[#FCFFF9]">{item?.step}</p>
        </div>
      </div>
    </div>
  </div>
);
ServiceItem.propTypes = {
  item: PropTypes.shape({
    bg: PropTypes.string.isRequired,
    heading: PropTypes.string.isRequired,
    subheading: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    ellipse: PropTypes.string.isRequired,
    step: PropTypes.number.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};
export default ServiceItem;
