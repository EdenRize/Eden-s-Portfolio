import { useState } from "react";
import { GenericCarousel } from "./GenericCarousel";
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
                <GenericCarousel isPaused={isPaused}>
                    {workProjects.map(project => (
                        <WorkProjectCard 
                            key={project.id} 
                            project={project} 
                            onClick={() => handleProjectClick(project)}
                        />
                    ))}
                </GenericCarousel>
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