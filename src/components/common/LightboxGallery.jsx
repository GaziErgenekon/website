import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import PropTypes from "prop-types";
import Overlay from "../ui/Overlay";
import Button from "../ui/Button";
import Backdrop from "../ui/Backdrop";

const LightboxGallery = ({ images, selectedIndex, onClose, onIndexChange }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") handleNext(e);
      if (e.key === "ArrowLeft") handlePrev(e);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, onClose, onIndexChange]);

  const handleNext = (e) => {
    if (e) e.stopPropagation();
    onIndexChange((selectedIndex + 1) % images.length);
  };

  const handlePrev = (e) => {
    if (e) e.stopPropagation();
    onIndexChange((selectedIndex - 1 + images.length) % images.length);
  };

  return (
    <AnimatePresence>
      {selectedIndex !== null && (
        <Overlay>
          <Backdrop className="flex-center size-full  backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
            >
              <Button
                onClick={onClose}
                className="absolute top-6 right-6 text-white/70 hover:text-white !bg-transparent transition-colors "
              >
                <FaTimes size={32} />
              </Button>

              <Button
                onClick={handlePrev}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors !bg-transparent hover:bg-white/10 rounded-full"
              >
                <FaChevronLeft size={40} />
              </Button>

              <motion.div
                key={selectedIndex}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative max-w-[90vw] max-h-[85vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={images[selectedIndex]}
                  alt={`Gallery Image ${selectedIndex + 1}`}
                  className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-10 left-0 right-0 text-center text-white/60 text-sm">
                  {selectedIndex + 1} / {images.length}
                </div>
              </motion.div>

              <Button
                onClick={handleNext}
                size="icon"
                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white !bg-transparent hover:bg-white/10 rounded-full"
              >
                <FaChevronRight size={40} />
              </Button>
            </motion.div>
          </Backdrop>
        </Overlay>
      )}
    </AnimatePresence>
  );
};

LightboxGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedIndex: PropTypes.number,
  onClose: PropTypes.func.isRequired,
  onIndexChange: PropTypes.func.isRequired,
};

export default LightboxGallery;
