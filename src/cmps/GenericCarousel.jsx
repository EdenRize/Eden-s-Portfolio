import { useEffect, useState, useRef, Children } from "react";

export function GenericCarousel({ children, isPaused = false }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);
    const [isDocumentVisible, setIsDocumentVisible] = useState(true);
    const [lastInteraction, setLastInteraction] = useState(0);
    const carouselRef = useRef(null);
    const items = Children.toArray(children);
    const itemCount = items.length;

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + itemCount) % itemCount);
        setLastInteraction(Date.now());
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % itemCount);
        setLastInteraction(Date.now());
    };

    // Handle document visibility
    useEffect(() => {
        const handleVisibilityChange = () => {
            setIsDocumentVisible(!document.hidden);
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);
        
        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);

    // Handle intersection observer for viewport visibility
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );

        if (carouselRef.current) {
            observer.observe(carouselRef.current);
        }

        return () => {
            if (carouselRef.current) {
                observer.unobserve(carouselRef.current);
            }
        };
    }, []);

    // Handle carousel rotation
    useEffect(() => {
        if (itemCount <= 1 || isPaused || !isVisible || !isDocumentVisible) return;
        
        const interval = setInterval(() => {
            const timeSinceLastInteraction = Date.now() - lastInteraction;
            // Only auto-advance if no recent manual interaction (within 4 seconds)
            if (timeSinceLastInteraction > 4000 || lastInteraction === 0) {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % itemCount);
            }
        }, 4000); // Slower rotation for work projects

        return () => clearInterval(interval);
    }, [itemCount, isPaused, isVisible, isDocumentVisible, lastInteraction]);

    if (itemCount === 0) return null;
    if (itemCount === 1) {
        return (
            <div className="generic-carousel single-item">
                {items[0]}
            </div>
        );
    }

    const getPrevIdx = (idx) => (idx - 1 + itemCount) % itemCount;
    const getNextIdx = (idx) => (idx + 1) % itemCount;
    const getTwoBeforeIdx = (idx) => (idx - 2 + itemCount) % itemCount;
    const getTwoAfterIdx = (idx) => (idx + 2) % itemCount;

    const renderItems = () => {
        const currentIdx = currentIndex;
        const prevIdx = getPrevIdx(currentIdx);
        const nextIdx = getNextIdx(currentIdx);
        const twoBeforeIdx = getTwoBeforeIdx(currentIdx);
        const twoAfterIdx = getTwoAfterIdx(currentIdx);

        const itemsToRender = [
            { key: twoBeforeIdx, item: items[twoBeforeIdx], className: 'semi-hidden before' },
            { key: prevIdx, item: items[prevIdx], className: 'prev' },
            { key: currentIdx, item: items[currentIdx], className: 'current' },
            { key: nextIdx, item: items[nextIdx], className: 'next' },
            { key: twoAfterIdx, item: items[twoAfterIdx], className: 'semi-hidden after' },
        ];

        return itemsToRender.map(({ key, item, className }) => (
            <div key={key} className={`carousel-item ${className}`}>
                {item}
            </div>
        ));
    };

    return (
        <div ref={carouselRef} className="generic-carousel">
            {renderItems()}
            <button 
                className="carousel-nav carousel-nav-prev" 
                onClick={goToPrevious}
                aria-label="Previous item"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
            </button>
            <button 
                className="carousel-nav carousel-nav-next" 
                onClick={goToNext}
                aria-label="Next item"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            </button>
        </div>
    );
}