import React, { useState } from "react";
import { FaAward } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { achievements } from "../../constants";
import Carousel from "../ui/Carousel";
import { lazy } from "react";
import { useLanguage } from "../../i18n/LanguageContext";

const ImageViewer = lazy(() => import("../common/ImageViewer"));

const Achievements = () => {
  const navigate = useNavigate();
  const { t, tx } = useLanguage();
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

  const byYear = achievements.reduce((acc, item) => {
    const year = item.year || "Diğer";
    (acc[year] = acc[year] || []).push(item);
    return acc;
  }, {});
  // 2026 şimdilik boş — içerik sonradan eklenecek.
  const years = Array.from(new Set([...Object.keys(byYear), "2026"])).sort(
    (a, b) => b.localeCompare(a)
  );

  return (
    <section className="w-full py-16 bg-background text-foreground">
      <div id="achievements" className="container">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold mb-2 sec-title text-gradient-br from-foreground to-foreground/20">
            {t("achievements.heading")}
          </h3>
          <p className="text-foreground/60 text-base font-light">
            {t("achievements.subtitle")}
          </p>
        </div>
        <Carousel
          leftArrowClassname="top-auto -bottom-16 [&_svg]:size-12 !left-[calc(50%-60px)] "
          rightArrowClassname="top-auto -bottom-16 [&_svg]:size-12  !right-[calc(50%-60px)] "
          options={sliderOptions}
        >
          {achievements.map((item) => (
            <div
              key={item.id}
              className="flex flex-col w-full md:flex-row gap-5 md:p-4 rounded-xl border border-secondary/10 bg-transparent hover:border-primary/40 transition-colors duration-300"
            >
              <div className="w-full md:w-[45%] shrink-0 relative">
                <div
                  className="h-48 md:h-72 rounded-lg overflow-hidden border border-secondary/5 cursor-pointer group/img"
                  onClick={() =>
                    item.link ? navigate(item.link) : openImage(item.mainImage)
                  }
                >
                  <img
                    src={item.mainImage}
                    alt={tx(item.title)}
                    loading="lazy"
                    decoding="async"
                    className={`size-full ${
                      item.imageFit || "object-cover"
                    } group-hover/img:scale-105 transition-transform duration-500`}
                  />
                  <div className="absolute inset-0 bg-background/30 opacity-0 group-hover/img:opacity-100 transition-opacity flex-center">
                    <span className="text-white text-xs font-bold bg-black/50 px-2 py-1 rounded">
                      {item.link
                        ? t("achievements.view")
                        : t("achievements.zoom")}
                    </span>
                  </div>
                </div>
              </div>

              <div className="px-4 md:px-0 flex flex-col justify-between w-full">
                <div>
                  <span className="inline-block bg-primary/20 text-primary px-4 py-1 rounded-full text-xs font-bold tracking-wider mb-3">
                    {item.link
                      ? t("achievements.badgeActivity")
                      : t("achievements.badgeAward")}
                  </span>
                  <div className="row-center gap-3 mb-2">
                    <div className="p-2 rounded-lg border border-primary/20 bg-primary/5 text-primary flex-center">
                      <FaAward className="text-lg md:text-xl" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground">
                      {tx(item.title)}
                    </h3>
                  </div>

                  <p className="text-foreground/70 text-sm md:text-base leading-relaxed pl-1">
                    {tx(item.desc)}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-secondary/10 flex gap-3 overflow-x-auto max-w-full pb-2 md:pb-0 custom-scroll">
                  {item.thumbnails.map((thumb, idx) =>
                    typeof thumb === "string" ? (
                      <div
                        key={idx}
                        onClick={() => openImage(thumb)}
                        className="w-28 h-20 shrink-0 rounded-lg border border-secondary/10 cursor-pointer hover:border-primary/50 transition-colors overflow-hidden relative group"
                      >
                        <img
                          src={thumb}
                          alt="detail"
                          loading="lazy"
                          decoding="async"
                          className="size-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      </div>
                    ) : (
                      <a
                        key={idx}
                        href={thumb.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-28 h-20 shrink-0 rounded-lg border border-secondary/10 cursor-pointer hover:border-primary/50 transition-colors overflow-hidden relative group bg-white/5 p-2"
                        title={tx(thumb.title)}
                      >
                        <img
                          src={thumb.logo}
                          alt={tx(thumb.title)}
                          loading="lazy"
                          decoding="async"
                          className="size-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                        />
                      </a>
                    ),
                  )}
                </div>
              </div>
            </div>
          ))}
        </Carousel>

        <div className="mt-28">
          <h4 className="text-center text-primary text-lg font-bold tracking-widest uppercase mb-10">
            {t("achievements.timeline")}
          </h4>
          <div className="relative max-w-3xl mx-auto border-l-2 border-primary/20 pl-8 space-y-12">
            {years.map((year) => {
              const items = byYear[year] || [];
              const isEmpty = items.length === 0;
              return (
                <div key={year} className="relative">
                  <span
                    className={`absolute -left-[41px] top-1 size-5 rounded-full border-4 border-background ${
                      isEmpty ? "bg-primary/30" : "bg-primary"
                    }`}
                  />
                  <div
                    className={`text-2xl font-bold mb-4 ${
                      isEmpty ? "text-foreground/40" : "text-foreground"
                    }`}
                  >
                    {year}
                  </div>

                  {isEmpty ? (
                    <div className="flex items-center gap-3 p-4 rounded-xl border border-dashed border-secondary/20 text-foreground/40 italic">
                      {t("achievements.timelineEmpty")}
                    </div>
                  ) : (
                    <div className="flex flex-col gap-3">
                      {items.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center gap-4 p-3 rounded-xl border border-secondary/10 bg-transparent hover:border-primary/40 transition-colors group/ms"
                        >
                          <div className="size-16 shrink-0 rounded-lg overflow-hidden border border-secondary/10">
                            <img
                              src={item.mainImage}
                              alt={tx(item.title)}
                              loading="lazy"
                              decoding="async"
                              className="size-full object-cover group-hover/ms:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <div className="flex items-center gap-2 min-w-0">
                            <FaAward className="text-primary shrink-0" />
                            <span className="font-semibold truncate">
                              {tx(item.title)}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
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
