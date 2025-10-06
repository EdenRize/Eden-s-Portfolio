import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { WorkProjectCard } from "./WorkProjectCard";
import { WorkProjectPopup } from "./WorkProjectPopup";
import { workProjects } from "../data/workProjects";

export function ProfessionalWork() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsPaused(true);
  };

  const handleClosePopup = () => {
    setSelectedProject(null);
    setIsPaused(false);
  };

  return (
    <div className="professional-work full-section">
      <h1 className="font-Gilmer-Outline">Professional Work</h1>

      <div className="carousel-container">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          speed={2000}
          autoplay={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          loop={true}
          allowTouchMove={true}
          centeredSlides={false}
          className="work-projects-swiper"
        >
          {workProjects.map((project) => (
            <SwiperSlide key={project.id}>
              <WorkProjectCard
                project={project}
                onClick={() => handleProjectClick(project)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
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
