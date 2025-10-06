import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { WorkProjectCard } from "./WorkProjectCard";
import { WorkProjectPopup } from "./WorkProjectPopup";
import { workProjects } from "../data/workProjects";

export function ProfessionalWork() {
  const swiperRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleClosePopup = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    if (!swiperRef.current) return;
    const swiper = swiperRef.current.swiper;
    if (selectedProject) swiper.autoplay.stop();
    else swiper.autoplay.start();
  }, [selectedProject]);

  return (
    <div className="professional-work full-section">
      <h1 className="font-Gilmer-Outline">Professional Work</h1>

      <div className="carousel-container">
        <Swiper
          ref={swiperRef}
          modules={[Autoplay]}
          slidesPerView="auto"
          spaceBetween={40}
          loop={true}
          allowTouchMove={false}
          speed={5000} // very long animation time
          autoplay={{
            delay: 0, // no waiting
            disableOnInteraction: false,
          }}
          freeMode={true}
          freeModeMomentum={false}
          className="smooth-carousel"
        >
          {[...workProjects, ...workProjects].map((project, i) => (
            <SwiperSlide key={`${project.id}-${i}`} className="carousel-slide">
              <div
                className="work-card-clickable"
                onClick={() => handleProjectClick(project)}
              >
                <WorkProjectCard project={project} />
              </div>
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
