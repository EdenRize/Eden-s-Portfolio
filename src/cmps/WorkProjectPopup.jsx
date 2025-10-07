import { useEffect, useState } from 'react';

export function WorkProjectPopup({ project, onClose }) {
    const [lightboxImage, setLightboxImage] = useState(null);
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                if (lightboxImage) {
                    setLightboxImage(null);
                } else {
                    onClose();
                }
            }
        };
        
        document.addEventListener('keydown', handleEscape);
        document.body.style.overflow = 'hidden';
        
        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'unset';
        };
    }, [onClose, lightboxImage]);

    return (
        <div className="work-project-popup-overlay" onClick={onClose}>
            <div className="work-project-popup" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                </button>
                
                <div className="popup-content">
                    <div className="popup-header">
                        <h2>{project.title}</h2>
                        <p className="subtitle">{project.subtitle}</p>
                    </div>
                    
                    <div className="popup-body">
                        <p className="description">{project.description}</p>
                    
                    <div className="technologies">
                        <h3>Technologies Used</h3>
                        <div className="tech-list">
                            {project.technologies.map((tech, index) => (
                                <span key={index} className="tech-tag">{tech}</span>
                            ))}
                        </div>
                    </div>
                    
                    {project.images && project.images.length > 0 && (
                        <div className="media-section">
                            <h3>Screenshots</h3>
                            <div className="images-grid">
                                {project.images.map((image, index) => (
                                    <img 
                                        key={index} 
                                        src={image} 
                                        alt={`${project.title} screenshot ${index + 1}`}
                                        onClick={() => setLightboxImage(image)}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                    
                    {project.videos && project.videos.length > 0 && (
                        <div className="media-section">
                            <h3>Demo Videos</h3>
                            <div className="videos-list">
                                {project.videos.map((video, index) => (
                                    <video key={index} controls>
                                        <source src={video} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                ))}
                            </div>
                        </div>
                    )}
                    
                    {project.link && (
                        <div className="project-link">
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                View Live Project →
                            </a>
                        </div>
                    )}
                    </div>
                </div>
            </div>
            
            {lightboxImage && (
                <div className="image-lightbox" onClick={(e) => {
                    e.stopPropagation();
                    setLightboxImage(null);
                }}>
                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        <img src={lightboxImage} alt="Enlarged view" />
                        <button className="lightbox-close" onClick={() => setLightboxImage(null)}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}