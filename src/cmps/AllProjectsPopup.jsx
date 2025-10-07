import { useEffect } from 'react';

export function AllProjectsPopup({ projects, onClose, onProjectClick }) {
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        
        document.addEventListener('keydown', handleEscape);
        document.body.style.overflow = 'hidden';
        
        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [onClose]);

    const handleProjectClick = (project) => {
        onProjectClick(project);
        // Don't close the All Projects popup when selecting a project
    };

    return (
        <div className="all-projects-popup-overlay" onClick={onClose}>
            <div className="all-projects-popup" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                </button>
                
                <div className="popup-content">
                    <div className="popup-header">
                        <h2 className="font-Gilmer-Outline">Professional Work</h2>
                        <p className="subtitle font-Gilmer-Light">My recent projects</p>
                    </div>
                    
                    <div className="projects-container">
                        <div className="projects-grid">
                            {projects.map((project) => (
                                <div 
                                    key={project.id} 
                                    className="project-card"
                                    onClick={() => handleProjectClick(project)}
                                >
                                    <div className="project-image">
                                        <img src={project.image} alt={project.title} />
                                    </div>
                                    <div className="project-info">
                                        <h3 className="font-Gilmer-Medium">{project.title}</h3>
                                        <p className="font-Gilmer-Light">{project.subtitle}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}