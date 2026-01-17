import React from "react";
import { projectsData } from "../../constants";

const Projects = () => {
  return (
    <section className="container my-16">
      <h3 id="projects" className="sec-title text-4xl text-gradient-br from-foreground to-foreground/20 font-semibold">
        Projelerimiz
      </h3>
      <p className="text-center mt-3 text-secondary sm:mx-24">
        Geliştirdiğimiz yerli ve milli teknolojilerle savunma sanayi ve
        haberleşme alanında yenilikçi çözümler sunuyoruz.
      </p>

      <div className="grid grid-cols-1 xls:grid-cols-2 lg:grid-cols-4 gap-2 xl:gap-8 my-12">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="border border-secondary/20 rounded-lg inset-shadow-sm inset-shadow-secondary/10 bg-radial-[at_50%_190%] from-primary/20 from-10% to-background"
          >
            <img
              src={project.image}
              className="w-full object-cover border-b border-secondary/20 h-48"
              alt={project.title}
            />
            <div className="mt-2 p-3">
              <h5 className="font-semibold text-xl">{project.title}</h5>

              <div className="my-1 flex gap-1 flex-wrap">
                <div className="text-sm bg-gradient-to-r from-primary/35 to-primary/55 rounded-full px-2 w-max font-semibold">
                  {project.category}
                </div>
              </div>

              <p className="text-secondary mt-1.5 text-sm line-clamp-3">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
