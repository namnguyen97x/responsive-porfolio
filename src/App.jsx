import Hero from "./pages/Hero";
import Navbar from "./pages/Navbar";
import About from "./pages/About";
import Portforlio from "./pages/Portforlio";
import Experience from "./pages/Experience";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Portforlio />
      <Experience />
    </div>
  )
}