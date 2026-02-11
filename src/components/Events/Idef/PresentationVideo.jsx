import React from "react";

const PresentationVideo = () => {
  return (
    <section className="mb-24">
      <h2 className="sec-title text-gradient-br from-foreground to-foreground/20 text-4xl font-bold text-center mb-12">
        Sunumumuz & Tanıtım
      </h2>
      <div className="w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-black aspect-video relative group">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/BXOt_NbPr04"
          title="IDEF'25 Sunumu"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        ></iframe>
      </div>
    </section>
  );
};

export default PresentationVideo;
