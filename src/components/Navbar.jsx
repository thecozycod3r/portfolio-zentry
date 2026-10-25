import clsx from "clsx";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";

import Button from "./Button";
import { asset, EMAIL, GITHUB, LINKEDIN } from "../lib";

const navItems = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "games", label: "Games" },
  { id: "contact", label: "Contact" },
];

const NavBar = () => {
  const navContainerRef = useRef(null);
  const pillRef = useRef(null);
  const linkRefs = useRef({});
  const menuRef = useRef(null);

  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [active, setActive] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // Hide on scroll down, show on scroll up; frosted once off the top
  useEffect(() => {
    if (menuOpen) return;
    if (currentScrollY < 40) setIsNavVisible(true);
    else if (currentScrollY > lastScrollY) setIsNavVisible(false);
    else if (currentScrollY < lastScrollY) setIsNavVisible(true);
    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY, menuOpen]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -110,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.3,
      ease: "power2.out",
    });
  }, [isNavVisible]);

  // Which section is on screen drives the active link
  useEffect(() => {
    const sections = navItems
      .map((n) => document.getElementById(n.id))
      .filter(Boolean);
    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (hit) setActive(hit.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] }
    );
    sections.forEach((s) => io.observe(s));
    const onTop = () => window.scrollY < 200 && setActive(null);
    window.addEventListener("scroll", onTop, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onTop);
    };
  }, []);

  // Slide the highlight under the active link
  useLayoutEffect(() => {
    const pill = pillRef.current;
    const el = active && linkRefs.current[active];
    if (!pill) return;
    if (!el) {
      gsap.to(pill, { opacity: 0, duration: 0.2 });
      return;
    }
    gsap.to(pill, {
      x: el.offsetLeft,
      width: el.offsetWidth,
      opacity: 1,
      duration: 0.45,
      ease: "power3.out",
    });
  }, [active]);

  // Full-screen menu on phones
  useEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;
    document.body.style.overflow = menuOpen ? "hidden" : "";
    if (menuOpen) {
      gsap.set(menu, { display: "flex" });
      gsap.fromTo(
        menu,
        { clipPath: "circle(0% at 92% 6%)" },
        { clipPath: "circle(150% at 92% 6%)", duration: 0.6, ease: "power3.inOut" }
      );
      gsap.fromTo(
        menu.querySelectorAll(".menu-link"),
        { yPercent: 110, rotate: 4 },
        { yPercent: 0, rotate: 0, stagger: 0.06, duration: 0.6, delay: 0.2, ease: "power3.out" }
      );
    } else {
      gsap.to(menu, {
        clipPath: "circle(0% at 92% 6%)",
        duration: 0.45,
        ease: "power3.inOut",
        onComplete: () => gsap.set(menu, { display: "none" }),
      });
    }
  }, [menuOpen]);

  return (
    <>
      <div
        ref={navContainerRef}
        className="fixed inset-x-0 top-4 z-50 px-4 sm:px-6"
      >
        <nav
          className={clsx(
            "mx-auto flex h-14 max-w-6xl items-center justify-between rounded-2xl px-3 transition-colors duration-500",
            currentScrollY > 40 && !menuOpen
              ? "border border-white/10 bg-black/55 backdrop-blur-xl"
              : "border border-transparent"
          )}
        >
          <a href="#" aria-label="Back to top" className="flex items-center gap-3">
            <span className="flex-center size-9 rounded-lg bg-violet-300 font-zentry text-base text-yellow-300">
              DS
            </span>
            <span className="hidden font-general text-xs uppercase tracking-wider text-blue-50 sm:block">
              Dhruv Shricharan
            </span>
          </a>

          <div className="relative hidden items-center rounded-full border border-white/15 bg-white/5 p-1 backdrop-blur-md md:flex">
            <span
              ref={pillRef}
              aria-hidden
              className="absolute left-0 top-1 h-[calc(100%-0.5rem)] w-0 rounded-full bg-blue-50 opacity-0"
            />
            {navItems.map((item) => (
              <a
                key={item.id}
                ref={(el) => (linkRefs.current[item.id] = el)}
                href={`#${item.id}`}
                aria-current={active === item.id ? "true" : undefined}
                className={clsx(
                  "relative z-10 rounded-full px-4 py-1.5 font-general text-xs uppercase tracking-wider transition-colors duration-300",
                  active === item.id ? "text-black" : "text-blue-50 hover:text-yellow-300"
                )}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Button
              id="talk-button"
              title="Let's talk"
              href="#contact"
              rightIcon={<TiLocationArrow />}
              containerClass="!bg-yellow-300 hidden sm:flex items-center gap-1 !py-2.5"
            />
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((o) => !o)}
              className="flex-center relative z-[60] size-10 rounded-full border border-white/20 bg-black/40 backdrop-blur md:hidden"
            >
              <span
                className={clsx(
                  "absolute h-0.5 w-4 bg-white transition-transform duration-300",
                  menuOpen ? "rotate-45" : "-translate-y-1"
                )}
              />
              <span
                className={clsx(
                  "absolute h-0.5 w-4 bg-white transition-transform duration-300",
                  menuOpen ? "-rotate-45" : "translate-y-1"
                )}
              />
            </button>
          </div>
        </nav>
      </div>

      <div
        ref={menuRef}
        style={{ display: "none" }}
        className="fixed inset-0 z-40 flex-col justify-between bg-black px-6 pb-10 pt-28 text-blue-50 md:hidden"
      >
        <ul className="flex flex-col gap-2">
          {navItems.map((item, i) => (
            <li key={item.id} className="overflow-hidden">
              <a
                href={`#${item.id}`}
                onClick={() => setMenuOpen(false)}
                className="menu-link special-font block font-zentry text-6xl uppercase leading-[1.05]"
              >
                <span className="mr-3 align-top font-general text-xs text-yellow-300">
                  0{i + 1}
                </span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-x-6 gap-y-2 font-general text-xs uppercase tracking-wider text-blue-50/70">
          <a href={asset("Dhruv_Shricharan_Resume.pdf")} download>Résumé</a>
          <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={GITHUB} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={`mailto:${EMAIL}`}>Email</a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
