import PropTypes from "prop-types";
import { cn } from "../../libs/utils";

const Backdrop = ({ children, className, ...props }) => {
  return (
    <div
      className={cn("fixed inset-0 bg-black/50 z-[1000]", className)}
      {...props}
    >
      {children}
    </div>
  );
};

Backdrop.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default Backdrop;
