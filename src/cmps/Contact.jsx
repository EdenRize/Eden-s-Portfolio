import { Image } from "./Image"

export function Contact() {

    const linksInfo = [
        {
            imgUrl: '/img/github-light.svg',
            link: 'https://github.com/EdenRize'
        },
        {
            imgUrl: '/img/linkedin-light.svg',
            link: 'https://www.linkedin.com/in/eden-rize-9476541b7/'
        },
        {
            imgUrl: '/img/facebook.svg',
            link: 'https://www.facebook.com/profile.php?id=100006550717856'
        },

    ]

    return (
        <div className="flex column space-between contact">
            <div className="info-container">
                <h1 className="font-Gilmer-Heavy">Interested?<br />
                    Let's Get In Touch!</h1>

                <p className="font-Gilmer-Light info">I'm active on <a href="https://www.linkedin.com/in/eden-rize-9476541b7/" target="_blank">LinkedIn</a>,
                    so you can reach me there. I'm also available on <a href="https://www.facebook.com/profile.php?id=100006550717856" target="_blank">Facebook</a> and
                    on <a href="https://www.instagram.com/edenrize/" target="_blank">Instagram</a>. Contact me !
                </p>

                <a className="resume-link" href="/files/Eden_Rize-Resume.pdf" download="Eden Rize - Resume.pdf" >
                    <button className="flex align-center resume">
                        <Image src="/img/pdf.svg" />
                        <p className="font-Gilmer-Bold">Download Resume</p>
                    </button>
                </a>
            </div>

            <div className="flex align-center space-between links-container">
                {linksInfo.map((link, idx) => {
                    return <a className="flex align-center justify-center social-link" key={idx} href={link.link} target="_blank">
                        <Image src={link.imgUrl} />
                    </a>
                })}
            </div>
        </div>
    )
}
