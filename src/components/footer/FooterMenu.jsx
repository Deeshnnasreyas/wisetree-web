import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const FooterMenu = ({ menus }) => (
  <div className="w-full grid grid-cols-3 gap-4 mt-5 items-center lg:hidden">
    {menus.map((items, index) => (
      <Link key={index} to="#">
        <h4 className="text-[#FCFFF9] font-poppins font-normal text-[16px] md:text-[18px] tracking-normal">
          {items.label}
        </h4>
      </Link>
    ))}
  </div>
);
FooterMenu.propTypes = {
  menus: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired, // label should be a string
    })
  ).isRequired, // menus should be an array and is required
};

export default FooterMenu;
