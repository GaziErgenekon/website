import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";
import Overlay from "../ui/Overlay";
import OutsideClickHandler from "./OutsideClickHandler";
import Button from "../ui/Button";
import Backdrop from "../ui/Backdrop";

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
      <Backdrop className="flex-center backdrop-blur-sm">
        <Button
          onClick={onClose}
          size="icon"
          className="absolute top-6 right-6 text-secondary/50 hover:text-secondary/70 rounded-full"
        >
          <FaTimes size={32} />
        </Button>
        <OutsideClickHandler onOutsideClick={() => onClose()}>
          <div className="relative max-w-full max-h-full">
            <img
              src={imageUrl}
              alt={altText}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-secondary/10"
            />
          </div>
        </OutsideClickHandler>
      </Backdrop>
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
