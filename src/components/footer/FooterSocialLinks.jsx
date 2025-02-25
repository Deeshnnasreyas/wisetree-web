import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const FooterSocialLinks = ({ socialLinks }) => (
  <div className="flex justify-center md:justify-start gap-4">
    {socialLinks.map((items, index) => (
      <Link key={index} to="#">
        <img src={items.image} alt={items.alt} className="w-[24px] h-[24px]" />
      </Link>
    ))}
  </div>
);
FooterSocialLinks.propTypes = {
  socialLinks: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired, // The image URL should be a string
      alt: PropTypes.string.isRequired, // The alt text for the image should be a string
    })
  ).isRequired, // socialLinks is required and must be an array
};
export default FooterSocialLinks;
