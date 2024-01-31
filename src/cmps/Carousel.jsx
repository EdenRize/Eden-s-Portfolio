import { useEffect, useState } from "react";
import { Image } from "./Image";

export function Carousel({ imgs }) {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % imgs.length);
        }, 1500)

        return () => clearInterval(interval)
    }, []);

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
            { key: twoBeforeIdx, src: imgs[twoBeforeIdx], className: 'semi-hidden before' },
            { key: prevIdx, src: imgs[prevIdx], className: 'prev' },
            { key: currentIdx, src: imgs[currentIdx], className: 'current' },
            { key: nextIdx, src: imgs[nextIdx], className: 'next' },
            { key: twoAfterIdx, src: imgs[twoAfterIdx], className: 'semi-hidden after' },
        ];

        return imagesToRender.map(({ key, src, className }) => (
            <Image key={key} src={src} classes={`carousel-img ${className}`} />
        ));
    };

    return (
        <div className="carousel">
            {renderImages()}
        </div>
    );
}
