import PropTypes from "prop-types";
import React, { useEffect, useRef } from "react";

const OutsideClickHandler = ({
  children,
  onOutsideClick = () => {},
  disabled = false,
}) => {
  const wrapperRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!disabled && !wrapperRef.current.contains(e.target)) {
        onOutsideClick();
      }
    };

    if (disabled) {
      document.removeEventListener("click", handleClickOutside, true);
    } else {
      document.addEventListener("click", handleClickOutside, true);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [onOutsideClick, disabled, wrapperRef]);

  return (
    <div className="contents" ref={wrapperRef}>
      {children}
    </div>
  );
};

OutsideClickHandler.propTypes = {
  children: PropTypes.node.isRequired,
  onOutsideClick: PropTypes.func,
  disabled: PropTypes.bool,
};

export default OutsideClickHandler;
