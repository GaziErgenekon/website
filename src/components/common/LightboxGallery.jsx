import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import PropTypes from "prop-types";

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
    }, [selectedIndex, onClose, onIndexChange]); // Added dependencies

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
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm top-0 left-0 w-full h-full"
                >
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-[60]"
                    >
                        <FaTimes size={32} />
                    </button>

                    <button
                        onClick={handlePrev}
                        className="absolute left-4 md:left-8 text-white/50 hover:text-white transition-colors z-[60] p-2 hover:bg-white/10 rounded-full"
                    >
                        <FaChevronLeft size={40} />
                    </button>

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

                    <button
                        onClick={handleNext}
                        className="absolute right-4 md:right-8 text-white/50 hover:text-white transition-colors z-[60] p-2 hover:bg-white/10 rounded-full"
                    >
                        <FaChevronRight size={40} />
                    </button>
                </motion.div>
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
