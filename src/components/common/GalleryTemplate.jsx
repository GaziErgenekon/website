import PropTypes from "prop-types";
import React, { useState } from "react";
import { lazy } from "react";

const LightboxGallery = lazy(() => import("./LightboxGallery"));

const GalleryTemplate = ({ headerTitle = "", imagesArr = [] }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openModal = (index) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  return (
    <>
      <LightboxGallery
        images={imagesArr}
        selectedIndex={selectedImageIndex}
        onClose={closeModal}
        onIndexChange={setSelectedImageIndex}
      />

      <h3 className="sec-title text-4xl text-gradient-br from-foreground to-foreground/20 font-semibold">
        {headerTitle}
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-12">
        {imagesArr.map((img, i) => (
          <div
            key={i}
            className="aspect-video rounded-xl overflow-hidden group cursor-pointer relative"
            onClick={() => openModal(i)}
          >
            <img
              src={img}
              alt={`Galeri ${i + 1}`}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
              <span className="text-white text-sm font-bold tracking-wider uppercase border border-white/30 px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                Görüntüle
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

GalleryTemplate.propTypes = {
  headerTitle: PropTypes.string,
  imagesArr: PropTypes.array,
};

export default GalleryTemplate;
