import React from "react";
import { galleryImages } from "../../constants";

const Gallery = () => {
  return (
    <section className="container my-12">
      <h3 className="sec-title text-4xl text-gradient-br from-foreground to-foreground/20 font-semibold">
        Galeri
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-12">
        {galleryImages.map((img, i) => (
          <div key={i} className="aspect-video rounded-xl overflow-hidden group">
            <img
              src={img}
              alt={`Gallery ${i}`}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
