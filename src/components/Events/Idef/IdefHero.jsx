import React from "react";

const IdefHero = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden mb-24 shadow-2xl border border-white/5 group">
      <img
        src="/oduller/idef_burkay.JPG"
        alt="IDEF Standımız"
        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8 md:p-12">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Ergenekon Sahne'de
        </h2>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl">
          Dünyanın en prestijli savunma sanayi fuarlarından biri olan
          IDEF'25'te, yerli ve milli projelerimizi global katılımcılarla
          buluşturduk.
        </p>
      </div>
    </div>
  );
};

export default IdefHero;
