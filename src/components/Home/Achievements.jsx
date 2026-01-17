import React, { useState } from "react";
import { FaAward } from "react-icons/fa6";
import ImageViewer from "../common/ImageViewer";
import { achievements } from "../../constants";
import Carousel from "../ui/Carousel";

const Achievements = () => {
  const [viewer, setViewer] = useState({ isOpen: false, url: "" });

  const openImage = (url) => {
    setViewer({ isOpen: true, url: url });
  };

  const closeImage = () => {
    setViewer({ ...viewer, isOpen: false });
  };

  const sliderOptions = {
    perView: 1,
    hoverpause: true,
    autoplay: 10000,
    type: "carousel",
    gap: 10,
  };

  return (
    <section className="w-full py-16 bg-background text-foreground">
      <div id="achievements" className="container">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold mb-2 sec-title text-gradient-br from-foreground to-foreground/20">
            Başarılarımız
          </h3>
          <p className="text-foreground/60 text-base font-light">
            Emek, teknoloji ve takım ruhunun getirdiği ödüller.
          </p>
        </div>
        <Carousel 
        leftArrowClassname="top-auto -bottom-16 [&_svg]:size-12 !left-[calc(50%-60px)] "
        rightArrowClassname="top-auto -bottom-16 [&_svg]:size-12  !right-[calc(50%-60px)] "
        options={sliderOptions}>
          {achievements.map((item) => (
            <div
              key={item.id}
              className="flex flex-col w-full md:flex-row gap-5 md:p-4 rounded-xl border border-secondary/10 bg-transparent hover:border-primary/40 transition-colors duration-300"
            >
              <div className="w-full md:w-[45%] shrink-0 relative">
                <div
                  className="h-48 md:h-72 rounded-lg overflow-hidden border border-secondary/5 cursor-pointer group/img"
                  onClick={() => openImage(item.mainImage)}
                >
                  <img
                    src={item.mainImage}
                    alt={item.title}
                    className="size-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-background/30 opacity-0 group-hover/img:opacity-100 transition-opacity flex-center">
                    <span className="text-white text-xs font-bold bg-black/50 px-2 py-1 rounded">
                      Büyüt
                    </span>
                  </div>
                </div>
              </div>

              <div className="px-4 md:px-0 flex flex-col justify-between w-full">
                <div>
                  <div className="row-center gap-3 mb-2">
                    <div className="p-2 rounded-lg border border-primary/20 bg-primary/5 text-primary flex-center">
                      <FaAward className="text-lg md:text-xl" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-foreground/70 text-sm md:text-base leading-relaxed pl-1">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-secondary/10 flex gap-3 overflow-x-auto max-w-full pb-2 md:pb-0 custom-scroll">
                  {item.thumbnails.map((thumb, idx) => (
                    <div
                      key={idx}
                      onClick={() => openImage(thumb)}
                      className="w-28 h-20 shrink-0 rounded-lg border border-secondary/10 cursor-pointer hover:border-primary/50 transition-colors overflow-hidden relative group"
                    >
                      <img
                        src={thumb}
                        alt="detail"
                        className="size-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <ImageViewer
        isOpen={viewer.isOpen}
        imageUrl={viewer.url}
        onClose={closeImage}
      />
    </section>
  );
};

export default Achievements;
