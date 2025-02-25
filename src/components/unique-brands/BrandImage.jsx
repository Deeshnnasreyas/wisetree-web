// BrandImage.js
import React from "react";
import PropTypes from "prop-types";

const BrandImage = ({ src, alt, className, style }) => (
  <div className={`rounded-[35px] ${className}`} style={style}>
    <img
      src={src}
      alt={alt}
      className="w-[297.82px] h-[324.89px] xl:w-[550px] xl:h-[600px]"
    />
  </div>
);

BrandImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default BrandImage;
