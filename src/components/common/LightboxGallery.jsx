import { useEffect } from "react";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import PropTypes from "prop-types";
import Overlay from "../ui/Overlay";
import Button from "../ui/Button";
import Backdrop from "../ui/Backdrop";

const LightboxGallery = ({ images, selectedIndex, onClose, onIndexChange }) => {
  const isOpen = selectedIndex !== null;

  const goNext = (e) => {
    if (e) e.stopPropagation();
    onIndexChange((selectedIndex + 1) % images.length);
  };

  const goPrev = (e) => {
    if (e) e.stopPropagation();
    onIndexChange((selectedIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  });

  if (!isOpen) return null;

  return (
    <Overlay>
      <Backdrop className="flex-center size-full backdrop-blur-sm animate-custom-enter">
        <div className="absolute inset-0" onClick={onClose} />

        <Button
          onClick={onClose}
          className="absolute top-6 right-6 text-white/70 hover:text-white !bg-transparent transition-colors z-10"
        >
          <FaTimes size={32} />
        </Button>

        <Button
          onClick={goPrev}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors !bg-transparent hover:bg-white/10 rounded-full z-10"
        >
          <FaChevronLeft size={40} />
        </Button>

        <div
          key={selectedIndex}
          className="relative max-w-[90vw] max-h-[85vh] animate-custom-enter"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={images[selectedIndex]}
            alt={`Galeri görseli ${selectedIndex + 1}`}
            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
          />
          <div className="absolute -bottom-10 left-0 right-0 text-center text-white/60 text-sm">
            {selectedIndex + 1} / {images.length}
          </div>
        </div>

        <Button
          onClick={goNext}
          size="icon"
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/50 hover:text-white !bg-transparent hover:bg-white/10 rounded-full z-10"
        >
          <FaChevronRight size={40} />
        </Button>
      </Backdrop>
    </Overlay>
  );
};

LightboxGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedIndex: PropTypes.number,
  onClose: PropTypes.func.isRequired,
  onIndexChange: PropTypes.func.isRequired,
};

export default LightboxGallery;
