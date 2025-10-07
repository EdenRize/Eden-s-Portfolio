import { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
import { WorkProjectCard } from "./WorkProjectCard";
import { WorkProjectPopup } from "./WorkProjectPopup";
import { workProjects } from "../data/workProjects";

export function ProfessionalWork() {
  const [selectedProject, setSelectedProject] = useState(null);

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
      speed: 0.5 // Slower speed for smooth scrolling
    },
    arrows: false,
    pagination: false,
    fixedWidth: '280px', // Default width
    gap: '20px',
    drag: 'free',
    breakpoints: {
      640: {
        fixedWidth: '220px',
      },
      768: {
        fixedWidth: '240px',
      },
      1024: {
        fixedWidth: '300px',
      },
      1280: {
        fixedWidth: '350px',
      },
      1536: {
        fixedWidth: '370px',
      }
    }
  };

  // Splide options for second carousel (scrolling left)
  const splideOptions2 = {
    ...splideOptions1,
    autoScroll: {
      ...splideOptions1.autoScroll,
      speed: -0.5 // Negative speed for reverse direction
    }
  };

  return (
    <div className="professional-work full-section">
      <h1 className="font-Gilmer-Outline">Professional Work</h1>

      <div className="carousels-container">
        <div className="carousel-wrapper">
          <Splide
            options={splideOptions1}
            extensions={{ AutoScroll }}
            className="smooth-carousel"
          >
            {[...workProjects, ...workProjects].map((project, i) => (
              <SplideSlide key={`${project.id}-${i}`} className="carousel-slide">
                <div
                  className="work-card-clickable"
                  onClick={() => handleProjectClick(project)}
                >
                  <WorkProjectCard project={project} />
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>

        <div className="carousel-wrapper">
          <Splide
            options={splideOptions2}
            extensions={{ AutoScroll }}
            className="smooth-carousel"
          >
            {[...workProjects, ...workProjects].map((project, i) => (
              <SplideSlide key={`${project.id}-${i}-2`} className="carousel-slide">
                <div
                  className="work-card-clickable"
                  onClick={() => handleProjectClick(project)}
                >
                  <WorkProjectCard project={project} />
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>

      {selectedProject && (
        <WorkProjectPopup
          project={selectedProject}
          onClose={handleClosePopup}
        />
      )}
    </div>
  );
}