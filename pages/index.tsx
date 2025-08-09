import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import DarkModeToggle from "../components/DarkModeToggle";

export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Navbar />
            <DarkModeToggle />
        </>
    );
}
