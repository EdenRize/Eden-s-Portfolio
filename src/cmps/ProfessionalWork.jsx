import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { WorkProjectCard } from "./WorkProjectCard";
import { WorkProjectPopup } from "./WorkProjectPopup";
import { workProjects } from "../data/workProjects";

export function ProfessionalWork() {
  const swiperRef1 = useRef(null);
  const swiperRef2 = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleClosePopup = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    [swiperRef1, swiperRef2].forEach((ref) => {
      if (!ref.current) return;
      const swiper = ref.current.swiper;
      if (selectedProject) swiper.autoplay.stop();
      else swiper.autoplay.start();
    });
  }, [selectedProject]);

  const handleTouchEnd = (swiperRef) => () => {
    if (swiperRef.current && !selectedProject) {
      setTimeout(() => {
        const swiper = swiperRef.current.swiper;
        swiper.autoplay.start();
      }, 100);
    }
  };

  return (
    <div className="professional-work full-section">
      <h1 className="font-Gilmer-Outline">Professional Work</h1>

      <div className="carousels-container">
        <div className="carousel-wrapper">
          <Swiper
            ref={swiperRef1}
            modules={[Autoplay]}
            slidesPerView="auto"
            spaceBetween={20}
            loop={true}
            speed={9000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
              reverseDirection: true,
            }}
            freeMode={true}
            freeModeMomentum={false}
            onTouchEnd={handleTouchEnd(swiperRef1)}
            className="smooth-carousel"
          >
            {[...workProjects, ...workProjects].map((project, i) => (
              <SwiperSlide
                key={`${project.id}-${i}`}
                className="carousel-slide"
              >
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

        <div className="carousel-wrapper">
          <Swiper
            ref={swiperRef2}
            modules={[Autoplay]}
            slidesPerView="auto"
            spaceBetween={20}
            loop={true}
            speed={9000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            freeMode={true}
            freeModeMomentum={false}
            onTouchEnd={handleTouchEnd(swiperRef2)}
            className="smooth-carousel"
          >
            {[...workProjects, ...workProjects].map((project, i) => (
              <SwiperSlide
                key={`${project.id}-${i}`}
                className="carousel-slide"
              >
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
