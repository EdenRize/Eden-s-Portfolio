export function SocialLink({ name, imgUrl, link }) {
    return (
        <a href={link} target="_blank" className={`${name} social-link`}>
            <div className="flex justify-center align-center icon-container">
                <div className="flex justify-center align-center img-container">
                    <img src={imgUrl} />
                </div>
            </div>
        </a>
    )
}
