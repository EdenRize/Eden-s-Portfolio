import { useEffect, useState, useRef } from "react";
import { Image } from "./Image";

export function Carousel({ imgs }) {
  const [currentImage, setCurrentImage] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isDocumentVisible, setIsDocumentVisible] = useState(true);
  const carouselRef = useRef(null);

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
    if (!isVisible || !isDocumentVisible) return;
    
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % imgs.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isVisible, isDocumentVisible, imgs.length]);

  const getPrevIdx = (idx) => (idx - 1 + imgs.length) % imgs.length;
  const getNextIdx = (idx) => (idx + 1) % imgs.length;
  const getTwoBeforeIdx = (idx) => (idx - 2 + imgs.length) % imgs.length;
  const getTwoAfterIdx = (idx) => (idx + 2) % imgs.length;

  const renderImages = () => {
    const currentIdx = currentImage;
    const prevIdx = getPrevIdx(currentIdx);
    const nextIdx = getNextIdx(currentIdx);
    const twoBeforeIdx = getTwoBeforeIdx(currentIdx);
    const twoAfterIdx = getTwoAfterIdx(currentIdx);

    const imagesToRender = [
      {
        key: twoBeforeIdx,
        src: imgs[twoBeforeIdx],
        className: "semi-hidden before",
      },
      { key: prevIdx, src: imgs[prevIdx], className: "prev" },
      { key: currentIdx, src: imgs[currentIdx], className: "current" },
      { key: nextIdx, src: imgs[nextIdx], className: "next" },
      {
        key: twoAfterIdx,
        src: imgs[twoAfterIdx],
        className: "semi-hidden after",
      },
    ];

    return imagesToRender.map(({ key, src, className }) => (
      <Image key={key} src={src} classes={`carousel-img ${className}`} />
    ));
  };

  return <div ref={carouselRef} className="carousel">{renderImages()}</div>;
}
