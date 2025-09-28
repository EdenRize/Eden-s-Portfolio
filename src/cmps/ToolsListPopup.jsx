import { useEffect } from 'react';

export function ToolsListPopup({ tools, onClose }) {
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

    return (
        <div className="tools-list-popup-overlay" onClick={onClose}>
            <div className="tools-list-popup" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                </button>
                
                <div className="popup-content">
                    <div className="popup-header">
                        <h2 className="font-Gilmer-Outline">Tech Stack</h2>
                        <p className="subtitle font-Gilmer-Light">Technologies I work with</p>
                    </div>
                    
                    <div className="tools-container">
                        <div className="tools-grid">
                            {tools.map((tool, index) => (
                                <div key={index} className="tool-item">
                                    <img src={tool.img} alt={tool.name} />
                                    <span className="font-Gilmer-Medium">{tool.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}