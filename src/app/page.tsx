import Navbar from "@/components/my-ui/Navbar";
import Hero from "@/components/home/Hero";
import Projects from "@/components/home/Projects";
import About from "@/components/home/About";
import Services from "@/components/home/Services";
import Process from "@/components/home/Process";
import Ai from "@/components/home/Ai";
import Contact from "@/components/home/Contact";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Services />
      <Process />
      <Ai />
      <Contact />
    </div>
  );
}
