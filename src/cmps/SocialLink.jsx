export function SocialLink({ name, imgUrl, link }) {
    return (
        <a href={link} target="_blank" className={`${name} social-link`}>
            <div className="flex justify-center align-center icon-container animate__zoomIn animate__animated animate__faster">
                <div className="flex justify-center align-center img-container animate__zoomIn animate__animated animate__faster animate__delay-1s">
                    <img className="animate__fadeIn animate__animated animate__faster animate__delay-2s" src={imgUrl} />
                </div>
            </div>
        </a>
    )
}
