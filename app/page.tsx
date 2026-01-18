import { Navigation } from "../components/layout/Navigation";
import { Footer } from "../components/layout/Footer";
import { Hero } from "../components/sections/Hero";
import { Experience } from "../components/sections/Experience";
import { TechnicalSkills } from "../components/sections/TechnicalSkills";
import { About } from "../components/sections/About";
import { Contact } from "../components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <Experience />
        <TechnicalSkills />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
