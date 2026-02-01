import Overlay from "./Overlay";
import Backdrop from "./Backdrop";
import { FaXmark } from "react-icons/fa6";
import OutsideClickHandler from "../common/OutsideClickHandler";
import PropTypes from "prop-types";


const Modal = ({
  children,
  open,
  closeModal,
  className,
  wrapperClassName,
}) => {
  return (
    <>
      {open && (
        <Overlay>
          <Backdrop>
            <div className={`flex-center w-full h-full ${wrapperClassName}`}>
              <OutsideClickHandler
                disabled={!open}
                onOutsideClick={() => closeModal()}
              >
                <div
                  className={`relative custom-scroll overflow-y-auto p-3 mx-auto w-full xs:w-[90%] sm:w-[600px] bg-foreground/5 border border-foreground/10 backdrop-blur-2xl rounded-lg xs:p-4 min-h-[10vh] max-h-[80vh] ${className}`}
                >
                  {children}
                  <FaXmark
                    className="absolute right-4 top-4 cursor-pointer"
                    onClick={() => closeModal()}
                    size={25}
                  />
                </div>
              </OutsideClickHandler>
            </div>
          </Backdrop>
        </Overlay>
      )}
    </>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  open: PropTypes.bool,
  closeModal: PropTypes.func.isRequired,
  className: PropTypes.string,
  wrapperClassName: PropTypes.string,
};

export default Modal;
