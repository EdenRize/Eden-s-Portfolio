import { Contact } from "../cmps/Contact";
import { Hero } from "../cmps/Hero";
import { ProfessionalWork } from "../cmps/ProfessionalWork";
import { Projects } from "../cmps/Projects";
import { Tools } from "../cmps/Tools";

export function HomePage() {
  return (
    <section className="home-page">
      <Hero />
      <ProfessionalWork />
      {/* <Projects /> */}
      <Tools />
      <Contact />
    </section>
  );
}
