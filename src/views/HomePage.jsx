import { Contact } from "../cmps/Contact";
import { Hero } from "../cmps/Hero";
import { Projects } from "../cmps/Projects";
import { Tools } from "../cmps/Tools";

export function HomePage() {

    return (
        <section className="home-page">
            <Hero />
            <Projects />
            <Tools />
            <Contact />
        </section>
    )
}