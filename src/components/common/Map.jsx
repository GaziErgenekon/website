import PropTypes from "prop-types";
import React from "react";
import { cn } from "../../libs/utils";

const Map = ({ src, className, ...props }) => {
  return (
    <>
      <iframe
        src={src}
        width="100%"
        height="450"
        className={cn("border-0 mt-12 mb-24 invert-100", className)}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        {...props}
      ></iframe>
    </>
  );
};

Map.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Map;
