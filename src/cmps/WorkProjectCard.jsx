export function WorkProjectCard({ project, onClick }) {
    return (
        <div className="work-project-card" onClick={onClick}>
            <div className="card-image">
                <img src={project.image} alt={project.title} />
            </div>
            <div className="card-content">
                <h3>{project.title}</h3>
                <p>{project.subtitle}</p>
            </div>
        </div>
    );
}