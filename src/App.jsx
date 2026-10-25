import { useLayoutEffect, useRef } from "react";
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

  useLayoutEffect(() => {
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    const target = location.state?.scrollTo;
    // Jump, don't glide: html has scroll-behavior: smooth, which a route change interrupts
    const jump = () => {
      const html = document.documentElement;
      const prev = html.style.scrollBehavior;
      html.style.scrollBehavior = "auto";
      const el = target && document.getElementById(target);
      window.scrollTo(0, el ? el.getBoundingClientRect().top + window.scrollY : 0);
      html.style.scrollBehavior = prev;
    };
    jump();
    // Pins and lazy media change the page height after the first paint: settle, then jump again
    const raf = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
      jump();
    });
    const t = setTimeout(jump, 350);

    const cleanup = () => {
      cancelAnimationFrame(raf);
      clearTimeout(t);
    };
    if (first.current) {
      first.current = false;
      return cleanup;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return cleanup;
    gsap.fromTo(
      wipeRef.current,
      { clipPath: "inset(0% 0% 0% 0%)" },
      { clipPath: "inset(0% 0% 100% 0%)", duration: 0.7, ease: "power3.inOut" }
    );
    return cleanup;
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
