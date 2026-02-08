import React, { useState } from "react";
import { mainGalleryImages } from "../../constants";
import LightboxGallery from "../common/LightboxGallery";

const Gallery = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openModal = (index) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  return (
    <section className="container my-12">
      <LightboxGallery
        images={mainGalleryImages}
        selectedIndex={selectedImageIndex}
        onClose={closeModal}
        onIndexChange={setSelectedImageIndex}
      />

      <h3 className="sec-title text-4xl text-gradient-br from-foreground to-foreground/20 font-semibold">
        Galeri
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-12">
        {mainGalleryImages.map((img, i) => (
          <div
            key={i}
            className="aspect-video rounded-xl overflow-hidden group cursor-pointer relative"
            onClick={() => openModal(i)}
          >
            <img
              src={img}
              alt={`Gallery ${i}`}
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
    </section>
  );
};

export default Gallery;
