import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";
import Overlay from "../ui/Overlay";
import OutsideClickHandler from "./OutsideClickHandler";

const ImageViewer = ({ isOpen, imageUrl, onClose, altText = "Görüntü" }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !imageUrl) return null;

  return (
    <Overlay>
      <div className="fixed top-0 left-0 right-0 bottom-0 z-[1000] flex-center bg-background/90 backdrop-blur-sm p-4 md:p-10">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-50 p-2 text-secondary/50 hover:text-secondary/70 hover:bg-secondary/10 rounded-full transition-all duration-300"
        >
          <FaTimes size={32} />
        </button>
        <OutsideClickHandler onOutsideClick={()=> onClose()}>
          <div
            className="relative max-w-full max-h-full"
          >
            <img
              src={imageUrl}
              alt={altText}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-secondary/10"
            />
          </div>
        </OutsideClickHandler>
      </div>
    </Overlay>
  );
};

ImageViewer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  imageUrl: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  altText: PropTypes.string,
};

export default ImageViewer;
