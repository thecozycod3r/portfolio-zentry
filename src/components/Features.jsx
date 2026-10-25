import { useState, useRef } from "react";
import { TiLocationArrow, TiLockClosed } from "react-icons/ti";
import { Link, useNavigate } from "react-router-dom";

import { asset, requestAccess } from "../lib";
import LazyVideo from "./LazyVideo";

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({ src, img, title, description, meta, chip, to, label, dim = "brightness-[.45] saturate-[.8]" }) => {
  const navigate = useNavigate();
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  const ChipIcon = chip?.locked ? TiLockClosed : TiLocationArrow;
  const external = chip && /^https?:/.test(chip.href);

  const open = (e) => {
    if (!to || e.target.closest("a")) return;
    navigate(to);
  };

  return (
    <div
      className={`group/card relative size-full ${to ? "cursor-pointer" : ""}`}
      onClick={open}
      {...(to
        ? {
            role: "link",
            tabIndex: 0,
            "aria-label": label,
            onKeyDown: (e) => e.key === "Enter" && e.target === e.currentTarget && navigate(to),
          }
        : {})}
    >
      {to && (
        <span className="pointer-events-none absolute right-4 top-4 z-20 flex items-center gap-1 rounded-full bg-yellow-300 px-4 py-2 font-general text-xs uppercase text-black opacity-0 transition duration-300 group-hover/card:opacity-100 group-focus-visible/card:opacity-100 max-md:opacity-100">
          view <TiLocationArrow />
        </span>
      )}
      {src && (
        <LazyVideo
          src={src}
          poster={src.replace("/media/", "/media/posters/").replace(".mp4", ".jpg")}
          className={`absolute left-0 top-0 size-full object-cover object-left-top ${dim} transition-transform duration-700 group-hover/card:scale-[1.03]`}
        />
      )}
      {img && (
        <img
          src={img}
          alt=""
          className="absolute left-0 top-0 size-full object-cover object-center"
        />
      )}
      {/* keeps the white text readable over bright paintings */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/40" />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div className="w-fit max-w-md rounded-lg bg-black/70 p-4 backdrop-blur-md">
          {meta && (
            <p className="mb-2 font-general text-xs uppercase tracking-wider text-yellow-300">
              {meta}
            </p>
          )}
          <h3 className="bento-title special-font">{title}</h3>
          {description && (
            <p className="mt-3 font-general text-base leading-relaxed text-white md:text-lg">{description}</p>
          )}
        </div>

        {chip && (
          <a
            ref={hoverButtonRef}
            href={chip.href}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="border-hsla relative flex min-h-11 w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white"
          >
            {/* Radial gradient hover effect */}
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
              style={{
                opacity: hoverOpacity,
                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
              }}
            />
            <ChipIcon className="relative z-20" />
            <p className="relative z-20">{chip.label}</p>
          </a>
        )}
      </div>
    </div>
  );
};

const TextTile = ({ className, meta, title, description, to, cta = "view" }) => (
  <Link
    to={to}
    className={`group/tile flex size-full flex-col justify-between p-5 ${className}`}
  >
    <div>
      <p className="mb-2 font-general text-xs uppercase tracking-wider opacity-80">{meta}</p>
      <h3 className="bento-title special-font max-w-64">{title}</h3>
      <p className="mt-3 max-w-xs font-general text-base leading-relaxed md:text-lg">{description}</p>
    </div>
    <span className="flex items-center gap-1 self-end font-general text-xs uppercase">
      {cta}
      <TiLocationArrow className="text-2xl transition-transform group-hover/tile:-translate-y-1 group-hover/tile:translate-x-1" />
    </span>
  </Link>
);

const access = (name, repo) => ({
  label: "request access",
  href: requestAccess(name, `thecozycod3r/${repo}`),
  locked: true,
});

const Features = () => (
  <section id="work" className="bg-black pb-52">
    <div className="container mx-auto px-3 md:px-10">
      <div className="px-5 py-32">
        <p className="font-circular-web text-xl text-blue-50 md:text-2xl">
          Selected work
        </p>
        <p className="mt-2 max-w-xl font-circular-web text-lg leading-relaxed text-blue-50/75 md:text-xl">
          Software I designed and shipped for a growing agency. The code sits
          in private repos; ask for access on any card.
        </p>
      </div>

      <BentoTilt className="border-hsla relative mb-7 h-[28rem] w-full overflow-hidden rounded-md md:h-[65vh]">
        <BentoCard
          src={asset("media/cerno.mp4")}
          meta="Analytics platform · 2026"
          title={
            <>
              c<b>e</b>rno
            </>
          }
          description="Meta, Google and client CRMs in one pipeline, feeding dashboards, AI insights and monthly reports. One login for staff, clients and self-serve businesses."
          chip={access("Cerno", "DAMClaude")}
          to="/work/cerno"
          label="Cerno: read the project"
        />
      </BentoTilt>

      <div className="grid w-full grid-cols-1 gap-7 md:h-[135vh] md:grid-cols-2 md:grid-rows-3">
        <BentoTilt className="bento-tilt_1 h-[28rem] md:col-span-1 md:row-span-2 md:h-auto">
          <BentoCard
            src={asset("media/neo.mp4")}
            meta="SEO + GEO content · 2026"
            title={
              <>
                n<b>e</b>o
              </>
            }
            description="Briefs to published drafts, rank and AI-visibility tracking across ChatGPT, Gemini and Perplexity, and editable client reports. Runs on the team's own Claude plans."
            chip={access("Neo", "neo")}
            to="/work/neo"
            label="Neo: read the project"
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 h-[28rem] md:col-span-1 md:h-auto">
          <BentoCard
            src={asset("media/tempo.mp4")}
            meta="Operations · 2026"
            title={
              <>
                t<b>e</b>mpo
              </>
            }
            description="The agency's own task manager. Replaced Asana with the same routing rules, Slack approvals and late-work reports."
            chip={access("Tempo", "tempo")}
            to="/work/tempo"
            label="Tempo: read the project"
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 h-[28rem] md:col-span-1 md:h-auto">
          <BentoCard
            src={asset("media/studio.mp4")}
            meta="Creative tooling · 2026"
            title={
              <>
                st<b>u</b>dio
              </>
            }
            description="An AI image and video studio for the creative team: seven models, spend limits, approvals and a UGC ad workflow."
            to="/work/creative-studio"
            label="Creative Studio: read the project"
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_2 min-h-[18rem] md:min-h-0">
          <TextTile
            className="bg-violet-300 text-blue-50"
            meta="Social · 2025"
            title={
              <>
                s<b>o</b>cial planner
              </>
            }
            description="Brief to approval to auto-post, replacing a Slack-and-WhatsApp chain."
            to="/work/social-planner"
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_2 min-h-[18rem] md:min-h-0">
          <TextTile
            className="bg-yellow-300 text-black"
            meta="Finance · 2025"
            title={
              <>
                p&amp;l d<b>a</b>shboard
              </>
            }
            description="A live BigQuery view of revenue, costs and margin. Monthly close became weekly."
            to="/work/pl-dashboard"
          />
        </BentoTilt>
      </div>
    </div>
  </section>
);

export default Features;
