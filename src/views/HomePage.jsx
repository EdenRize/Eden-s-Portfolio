import { Hero } from "../cmps/Hero";
import { Projects } from "../cmps/Projects";

export function HomePage() {
    return (
        <section className="home-page">
            <Hero />
            <Projects />
        </section>
    )
}