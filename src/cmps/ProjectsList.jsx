import { useState } from "react";
import { Image } from "./Image";

export function ProjectsList() {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    // {
    //   title: "Myday",
    //   imgUrl: "/img/myday.svg",
    //   description:
    //     "Myday streamlines collaboration and task organization, offering an intuitive project management platform akin to 'Monday'.",
    //   gitLink: "https://github.com/EdenRize/Myday-frontend",
    //   website: "https://github.com/EdenRize/Myday-frontend",
    // },
    {
      title: "ZIVIZ",
      imgUrl: "/img/ziviz.png",
      description:
        'A website used as a business card for the tattoo artist & clothing brand - "ZIVIZ"',
      gitLink: "https://github.com/EdenRize/ZIVIZ",
      website: "https://ziviz.art/",
    },
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const project = projects[currentProject];

  return (
    <div className="projects-list-container">
      {projects.length > 1 && (
        <button
          className="nav-btn prev-btn"
          onClick={prevProject}
          aria-label="Previous project"
        >
          <img src="/img/arrow-left.svg" alt="Previous" />
        </button>
      )}

      <div className="project-content">
        <a
          target="_blank"
          href={project.website}
          className="proj-img-container"
        >
          <Image src={project.imgUrl} forceRender={true} />
        </a>

        <div className="info-container">
          <a
            target="_blank"
            href={project.website}
            className="font-Gilmer-Bold title"
          >
            {project.title}
          </a>
          <p className="font-Gilmer-Light description">{project.description}</p>
          <div className="flex align-center github-container">
            <a className="github" target="_blank" href={project.gitLink}>
              <Image src="/img/github-light.svg" />
            </a>

            <a className="arrow" target="_blank" href={project.gitLink}>
              <Image src="/img/arrow-right.svg" />
            </a>
          </div>
        </div>
      </div>

      {projects.length > 1 && (
        <button
          className="nav-btn next-btn"
          onClick={nextProject}
          aria-label="Next project"
        >
          <img src="/img/arrow-right.svg" alt="Next" />
        </button>
      )}
    </div>
  );
}
