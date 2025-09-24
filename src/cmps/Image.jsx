import { useEffect, useRef, useState } from "react"

export function Image({ src, classes, forceRender = false }) {

    const imageRef = useRef(null)
    const [isRender, setIsRender] = useState(forceRender)

    useEffect(() => {
        if (forceRender) {
            setIsRender(true);
            return;
        }
        
        let observer;
        const observerTimeout = setTimeout(() => {
            observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setIsRender(true)
                    }
                },
                {
                    rootMargin: "600px",
                }
            );
            if (imageRef.current) {
                observer.observe(imageRef.current);
            }
        }, 200);

        return () => {
            clearTimeout(observerTimeout);
            if (observer && imageRef.current) {
                observer.unobserve(imageRef.current);
            }
        };
    }, [src, forceRender]);
    
    if (!isRender) return <span className={`${classes} image-comp`} ref={imageRef}></span>
    return (
        <img className={` image-comp ${classes}`} ref={imageRef} src={src} />
    )


}
