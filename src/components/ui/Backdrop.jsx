import PropTypes from "prop-types";

const Backdrop = ({ children }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-black/50 z-[100]">
      {children}
    </div>
  );
};

Backdrop.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Backdrop;
