import React from "react";

const PageTitle = () => {
  return (
    <div className="text-center mb-16 space-y-4">
      <h2 className="text-4xl md:text-6xl font-bold pb-4 sec-title text-gradient-br from-foreground to-foreground/20">
        IDEF'25 Yolculuğumuz
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
      <p className="text-xl text-foreground/60 max-w-3xl mx-auto font-light leading-relaxed">
        Uluslararası Savunma Sanayii Fuarı'ndaki teknoloji gösterimimiz ve
        sektör buluşmalarımızdan kareler.
      </p>
    </div>
  );
};

export default PageTitle;
