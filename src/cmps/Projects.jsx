// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { ProjectsList } from "./ProjectsList";

export function Projects() {

    return (
        <div className="projects">
            <h1 className="font-Gilmer-Outline">Featured Projects</h1>
            <ProjectsList />
        </div>
    );
}
