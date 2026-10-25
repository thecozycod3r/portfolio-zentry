import { useEffect, useRef, useState } from "react";

const reducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Loads its source only near the viewport and pauses offscreen.
// Under reduced motion it stays on the first frame.
const LazyVideo = ({ src, className, ...rest }) => {
  const ref = useRef(null);
  const [near, setNear] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setNear(true);
          if (!reducedMotion()) el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { rootMargin: "300px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={near ? src : undefined}
      muted
      loop
      playsInline
      preload="none"
      className={className}
      {...rest}
    />
  );
};

export default LazyVideo;
