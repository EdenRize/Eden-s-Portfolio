import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import { WorkProjectCard } from './WorkProjectCard';

export const WorkCarousel = ({ 
  options, 
  projects, 
  onProjectClick, 
  keySuffix = '' 
}) => {
  const handleSlideClick = (splide, slide) => {
    const slideIndex = slide.index;
    const projectIndex = slideIndex % projects.length;
    onProjectClick(projects[projectIndex]);
  };

  return (
    <div className="carousel-wrapper">
      <Splide
        options={options}
        extensions={{ AutoScroll }}
        className="smooth-carousel"
        onClick={handleSlideClick}
      >
        {projects.map((project, i) => (
          <SplideSlide
            key={`${project.id}-${i}${keySuffix}`}
            className="carousel-slide"
          >
            <div className="work-card-clickable">
              <WorkProjectCard project={project} />
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};