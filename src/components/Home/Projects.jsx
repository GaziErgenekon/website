import React, { useState } from "react";
import { projectsData } from "../../constants";
import Modal from "../ui/Modal";
import { useLanguage } from "../../i18n/LanguageContext";

const Projects = () => {
  const [selected, setSelected] = useState(null);
  const { t, tx } = useLanguage();

  return (
    <section className="container my-16">
      <h3 id="projects" className="sec-title text-4xl text-gradient-br from-foreground to-foreground/20 font-semibold">
        {t("projects.heading")}
      </h3>
      <p className="text-center mt-3 text-secondary sm:mx-24">
        {t("projects.subtitle")}
      </p>

      <div className="grid grid-cols-1 xls:grid-cols-2 lg:grid-cols-4 gap-2 xl:gap-8 my-12">
        {projectsData.map((project) => (
          <button
            type="button"
            key={project.id}
            onClick={() => setSelected(project)}
            className="text-left w-full cursor-pointer border border-secondary/20 rounded-lg inset-shadow-sm inset-shadow-secondary/10 bg-radial-[at_50%_190%] from-primary/20 from-10% to-background hover:border-primary/50 transition-colors duration-300 group"
          >
            <img
              src={project.image}
              className="w-full object-contain border-b border-secondary/20 h-48 p-6"
              alt={project.title}
              loading="lazy"
              decoding="async"
            />
            <div className="mt-2 p-3">
              <h5 className="font-semibold text-xl">{project.title}</h5>

              <div className="my-1 flex gap-1 flex-wrap">
                <div className="text-sm bg-gradient-to-r from-primary/35 to-primary/55 rounded-full px-2 w-max font-semibold">
                  {project.category}
                </div>
              </div>

              <p className="text-secondary mt-1.5 text-sm line-clamp-3">
                {tx(project.description)}
              </p>

              <span className="inline-block mt-3 text-sm font-semibold text-primary opacity-70 group-hover:opacity-100 transition-opacity">
                {t("projects.cta")}
              </span>
            </div>
          </button>
        ))}
      </div>

      <Modal open={!!selected} closeModal={() => setSelected(null)}>
        {selected && (
          <div className="space-y-4">
            <div className="h-44 flex-center rounded-lg border border-secondary/20 bg-radial-[at_50%_190%] from-primary/20 from-10% to-background">
              <img
                src={selected.image}
                alt={selected.title}
                className="h-full object-contain p-6"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <h4 className="font-bold text-2xl mr-auto">{selected.title}</h4>
              <span className="text-xs bg-gradient-to-r from-primary/35 to-primary/55 rounded-full px-3 py-1 font-semibold">
                {selected.category}
              </span>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-foreground/60">
              <span>
                <span className="text-foreground/40">
                  {t("projects.status")}{" "}
                </span>
                {tx(selected.status)}
              </span>
              <span>
                <span className="text-foreground/40">
                  {t("projects.year")}{" "}
                </span>
                {selected.year}
              </span>
            </div>

            <p className="text-foreground/80 leading-relaxed">
              {tx(selected.fullDescription)}
            </p>

            {selected.achievements?.length > 0 && (
              <div>
                <h6 className="font-semibold mb-2">
                  {t("projects.highlights")}
                </h6>
                <div className="flex flex-wrap gap-2">
                  {selected.achievements.map((a) => (
                    <span
                      key={tx(a)}
                      className="text-sm border border-primary/30 bg-primary/10 text-primary rounded-full px-3 py-1"
                    >
                      {tx(a)}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </Modal>
    </section>
  );
};

export default Projects;
