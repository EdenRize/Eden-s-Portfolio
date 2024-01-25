import { InteractiveAvatar } from "./InteractiveAvatar";
import { SocialLink } from "./SocialLink";

export function Hero() {

    const socials = [
        {
            name: 'gmail',
            link: 'https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSGMGPbKrKVCpxsJttZzHLWSmwfkSRwpnQqwRzVHMqwFbdqzZpjcjnwVFvqJFWRRbhnrLSGW'
        },
        {
            name: 'github',
            link: 'https://github.com/EdenRize'
        },
        {
            name: 'linkedin',
            link: 'https://www.linkedin.com/in/eden-rize-9476541b7/'
        },
    ]

    return (
        <div className="hero">

            <InteractiveAvatar />

            <div className="header-container">
                <h1 className="font-Gilmer-Outline"><span className="span-1">Hello!</span> <span className="span-2">I'm</span> <span className="span-3">Eden</span></h1>
                <h2 className="font-Gilmer-Bold"><span className="span-4">I'm</span> <span className="span-5">developing</span> <span className="span-6">Creative</span> <span className="span-7">&</span> <span className="span-8">Interactive</span> <span className="span-9">webapps</span> <span className="span-10">🚀</span></h2>
            </div>

            <div className="flex space-between content-container">
                <p className="font-Gilmer-Light">As a frontend developer,
                    my expertise lies in creating seamless and intuitive user experiences.
                    I specialize in using cutting-edge technologies to produce high-quality web applications.
                    Specifically, I have vast knowledge of ReactJS, Vue & NodeJS, which allow me to build complex and dynamic applications with ease.
                </p>

                <div className="flex align-center justify-center img-container">
                    <img src="../public/img/girl-code.png" />
                </div>
            </div>

            <div className="flex space-between align-center socials-container">
                {socials.map(social => {
                    return <SocialLink key={social.name} name={social.name} imgUrl={`../public/img/${social.name}.svg`} link={social.link} />
                })}

            </div>
        </div>
    )
}
