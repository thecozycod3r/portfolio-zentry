import { useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";
import WebsitePage from "./pages/WebsitePage";

gsap.registerPlugin(ScrollTrigger);

// Wipe in on every route change, then land at the top (or at a home section)
const useRouteTransition = (wipeRef) => {
  const location = useLocation();
  const first = useRef(true);

  useEffect(() => {
    const target = location.state?.scrollTo;
    if (target) {
      requestAnimationFrame(() =>
        document.getElementById(target)?.scrollIntoView({ behavior: "instant" })
      );
    } else {
      window.scrollTo(0, 0);
    }
    ScrollTrigger.refresh();

    if (first.current) {
      first.current = false;
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.fromTo(
      wipeRef.current,
      { clipPath: "inset(0% 0% 0% 0%)" },
      { clipPath: "inset(0% 0% 100% 0%)", duration: 0.7, ease: "power3.inOut" }
    );
  }, [location.pathname, location.key, wipeRef, location.state]);
};

function App() {
  const wipeRef = useRef(null);
  useRouteTransition(wipeRef);

  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/:slug" element={<ProjectPage />} />
        <Route path="/websites/:slug" element={<WebsitePage />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
      <div
        ref={wipeRef}
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[70] bg-violet-300"
        style={{ clipPath: "inset(0% 0% 100% 0%)" }}
      />
    </main>
  );
}

export default App;
