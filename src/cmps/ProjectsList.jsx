export function ProjectsList() {
    const projects = [
        {
            title: 'Myday',
            imgUrl: '../public/img/myday.svg',
            description: 'Myday streamlines collaboration and task organization, offering an intuitive project management platform akin to \'Monday\'.',
            gitLink: 'https://github.com/EdenRize/Myday-frontend'
        }
    ]

    return (
        <ul className="clean-list projects-list">
            {projects.map(project => {
                return <li className="flex project" key={project.title}>
                    <div className="proj-img-container">
                        <img src={project.imgUrl} />
                    </div>

                    <div className="info-container">
                        <p className="font-Gilmer-Bold title">{project.title}</p>
                        <p className="font-Gilmer-Light description">{project.description}</p>
                        <div className="flex align-center github-container">
                            <a className="github" target="_blank" href={project.gitLink}>
                                <img src="../public/img/github-light.svg" />
                            </a>

                            <a className="arrow" target="_blank" href={project.gitLink}>
                                <img src="../public/img/arrow-right.svg" />
                            </a>
                        </div>
                    </div>
                </li>
            })}
        </ul>
    )
}
