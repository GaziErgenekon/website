import PropTypes from "prop-types";
import { createPortal } from "react-dom";

const Overlay = ({ children }) => {
  const overlay = document.getElementById("overlay");
  return overlay && createPortal(children, overlay);
};

Overlay.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Overlay;
