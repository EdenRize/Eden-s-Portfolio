import { Image } from "./Image"

export function ProjectsList() {
    const projects = [
        {
            title: 'Myday',
            imgUrl: '/img/myday.svg',
            description: 'Myday streamlines collaboration and task organization, offering an intuitive project management platform akin to \'Monday\'.',
            gitLink: 'https://github.com/EdenRize/Myday-frontend',
            website: 'https://github.com/EdenRize/Myday-frontend'
        },
        {
            title: 'ZIVIZ',
            imgUrl: '/img/ziviz.png',
            description: 'A website used as a business card for the tattoo artist & clothing brand - "ZIVIZ"',
            gitLink: 'https://github.com/EdenRize/ZIVIZ',
            website: 'https://ziviz.art/'
        },
    ]

    return (
        <ul className="clean-list projects-list">
            {projects.map((project, idx) => {
                return <li className={`flex ${(idx + 1) % 2 === 0 && 'reverse'} project`} key={idx}>
                    <a target="_blank" href={project.website} className="proj-img-container">
                        <Image src={project.imgUrl} />
                    </a>

                    <div className="info-container">
                        <a target="_blank" href={project.website} className="font-Gilmer-Bold title">{project.title}</a>
                        <p className="font-Gilmer-Light description">{project.description}</p>
                        <div className="flex align-center github-container">
                            <a className="github" target="_blank" href={project.gitLink}>
                                <Image src="/img/github-light.svg" />
                            </a>

                            <a className="arrow" target="_blank" href={project.gitLink}>
                                <Image src="/img/arrow-right.svg" />
                            </a>
                        </div>
                    </div>
                </li>
            })}
        </ul>
    )
}
