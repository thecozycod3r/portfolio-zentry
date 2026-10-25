import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/Navbar";
import Features from "./components/Features";
import SideProjects from "./components/SideProjects";
import Websites from "./components/Websites";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Hero />
      <About />
      <Features />
      <Websites />
      <SideProjects />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
