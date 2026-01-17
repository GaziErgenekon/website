import React from "react";

const Gallery = () => {
  return (
    <section className="container my-12">
      <h3 className="sec-title text-4xl text-gradient-br from-foreground to-foreground/20 font-semibold">
        Galeri
      </h3>

      <div className="grid grid-cols-1 xls:grid-cols-2 sm:grid-cols-3 as gap-4 my-12 ">
        <div className="bg-secondary/10 aspect-video rounded-xl"/>
        <div className="bg-secondary/10 aspect-video rounded-xl"/>
        <div className="bg-secondary/10 aspect-video rounded-xl"/>
        <div className="bg-secondary/10 aspect-video rounded-xl"/>
        <div className="bg-secondary/10 aspect-video rounded-xl"/>
        <div className="bg-secondary/10 aspect-video rounded-xl"/>
      </div>
    </section>
  );
};

export default Gallery;
