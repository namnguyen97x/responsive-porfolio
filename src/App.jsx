import Hero from "./pages/Hero";
import Navbar from "./pages/Navbar";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Portfolio from "./pages/Portforlio";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

export default function App() {
  return (
    <div>
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </div>
  )
}