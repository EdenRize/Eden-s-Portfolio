import { useState } from "react";
import "@splidejs/splide/dist/css/splide.min.css";
import { WorkCarousel } from "./WorkCarousel";
import { WorkProjectPopup } from "./WorkProjectPopup";
import { AllProjectsPopup } from "./AllProjectsPopup";
import { workProjects1, workProjects2 } from "../data/workProjects";

export function ProfessionalWork() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleClosePopup = () => {
    setSelectedProject(null);
  };

  // Splide options for first carousel (scrolling right)
  const splideOptions1 = {
    type: "loop",
    autoScroll: {
      pauseOnHover: true,
      pauseOnFocus: false,
      rewind: true,
      speed: 0.5, // Slower speed for smooth scrolling
    },
    arrows: false,
    pagination: false,
    fixedWidth: "280px", // Default width
    gap: "20px",
    drag: "free",
    breakpoints: {
      640: {
        fixedWidth: "220px",
      },
      768: {
        fixedWidth: "240px",
      },
      1024: {
        fixedWidth: "300px",
      },
      1280: {
        fixedWidth: "350px",
      },
      1536: {
        fixedWidth: "370px",
      },
    },
  };

  // Splide options for second carousel (scrolling left)
  const splideOptions2 = {
    ...splideOptions1,
    autoScroll: {
      ...splideOptions1.autoScroll,
      speed: -0.5, // Negative speed for reverse direction
    },
  };

  return (
    <div className="professional-work full-section">
      <h1 className="font-Gilmer-Outline">Professional Work</h1>
      <button
        className="all-projects-btn"
        onClick={() => setShowAllProjects(true)}
      >
        All Projects
      </button>

      <div className="carousels-container">
        <WorkCarousel
          options={splideOptions1}
          projects={workProjects1}
          onProjectClick={handleProjectClick}
        />

        <WorkCarousel
          options={splideOptions2}
          projects={workProjects2}
          onProjectClick={handleProjectClick}
          keySuffix="-2"
        />
      </div>

      {selectedProject && (
        <WorkProjectPopup
          project={selectedProject}
          onClose={handleClosePopup}
        />
      )}

      {showAllProjects && (
        <AllProjectsPopup
          projects={[...workProjects1, ...workProjects2]}
          onClose={() => setShowAllProjects(false)}
          onProjectClick={handleProjectClick}
        />
      )}
    </div>
  );
}
