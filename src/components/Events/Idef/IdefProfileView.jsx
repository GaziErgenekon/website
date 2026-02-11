import React from "react";
import Button from "../../ui/Button";

const IdefProfileView = () => {
  return (
    <section className="mb-24">
      <h2 className="sec-title text-gradient-br from-foreground to-foreground/20 text-4xl font-bold text-center mb-4">
        Resmi Fuar Profilimiz
      </h2>
      <p className="text-center text-foreground/60 mb-8">
        IDEF'25 Dijital Platformunda Ergenekon R&D Team
      </p>

      <a
        href="https://gaziergenekonarge.idef.com.tr/"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full h-[400px] border border-white/10 rounded-2xl overflow-hidden shadow-xl group relative transform hover:-translate-y-1 transition-all duration-300"
      >
        <div className="bg-[url('/oduller/idef_burkay.JPG')] absolute inset-0 bg-cover bg-center blur-sm opacity-50 group-hover:opacity-40 transition-opacity duration-500" />
        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors duration-500"></div>

        {/* Content */}
        <div className="relative z-10 col-center h-full text-center space-y-6 p-8">
          <div className="w-24 h-24 bg-white/10 rounded-full flex-center backdrop-blur-md border border-white/20 mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
            <img
              src="/logolar/idef_logo.png"
              alt="IDEF Logo"
              className="w-16 h-16 object-contain"
            />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-primary transition-colors duration-300">
              IDEF'25 Dijital Standı
            </h3>
            <p className="text-gray-300 max-w-lg mx-auto text-lg">
              Ergenekon R&D Team'in resmi fuar profilini, ürünlerini ve detaylı
              bilgilerini IDEF dijital platformunda inceleyin.
            </p>
          </div>

          <Button
            size="lg"
            variant="default"
            colorMode="primary"
            className="px-8 py-3 rounded-full font-bold shadow-lg shadow-primary/20 mt-4"
          >
            Profili Ziyaret Et ↗
          </Button>
        </div>
      </a>
    </section>
  );
};

export default IdefProfileView;
