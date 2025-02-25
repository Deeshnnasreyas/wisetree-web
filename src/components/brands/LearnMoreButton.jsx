import React from "react";
import learnmore from "../../assets/learnmore.png";
import PropTypes from "prop-types";
const LearnMoreButton = ({ className }) => (
  <button className={className}>
    <img
      src={learnmore}
      alt="Learn more about our branding services"
      className="w-[284px] h-[70px] xl:w-[220px] xl:h-[58px]"
    />
  </button>
);
LearnMoreButton.propTypes = {
  className: PropTypes.string.isRequired, // Ensuring className is always passed and is a string
};

export default LearnMoreButton;
