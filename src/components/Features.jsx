import { useState, useRef } from "react";
import { TiLocationArrow, TiLockClosed } from "react-icons/ti";

import { asset, requestAccess, GITHUB, CASE_STUDIES } from "../lib";

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

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

export const BentoCard = ({ src, img, title, description, meta, chip }) => {
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

  return (
    <div className="relative size-full">
      {src && (
        <video
          src={src}
          loop
          muted
          autoPlay
          playsInline
          className="absolute left-0 top-0 size-full object-cover object-center"
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
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/10 to-black/50" />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          {meta && (
            <p className="mb-2 font-general text-[10px] uppercase tracking-wider text-blue-50/70">
              {meta}
            </p>
          )}
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-72 text-xs md:text-base">{description}</p>
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
            className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white/60 transition-colors hover:text-white"
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

const access = (name, repo) => ({
  label: "request access",
  href: requestAccess(name, `thecozycod3r/${repo}`),
  locked: true,
});

const Features = () => (
  <section id="work" className="bg-black pb-52">
    <div className="container mx-auto px-3 md:px-10">
      <div className="px-5 py-32">
        <p className="font-circular-web text-lg text-blue-50">
          Selected work
        </p>
        <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
          Software I designed and shipped for a growing agency, plus a few
          things for myself. Company code sits in private repos; ask for access
          on any card.
        </p>
      </div>

      <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
        <BentoCard
          src={asset("media/feat-1.mp4")}
          meta="Analytics platform · 2026"
          title={
            <>
              c<b>e</b>rno
            </>
          }
          description="Meta, Google and client CRMs in one pipeline, feeding dashboards, AI insights and monthly reports. One login for staff, clients and self-serve businesses."
          chip={access("Cerno", "DAMClaude")}
        />
      </BentoTilt>

      <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
        <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
          <BentoCard
            src={asset("media/feat-2.mp4")}
            meta="SEO + GEO content · 2026"
            title={
              <>
                n<b>e</b>o
              </>
            }
            description="Briefs to published drafts, rank and AI-visibility tracking across ChatGPT, Gemini and Perplexity, and editable client reports. Runs on the team's own Claude plans."
            chip={access("Neo", "neo")}
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
          <BentoCard
            src={asset("media/feat-3.mp4")}
            meta="Operations · 2026"
            title={
              <>
                t<b>e</b>mpo
              </>
            }
            description="The agency's own task manager. Replaced Asana with the same routing rules, Slack approvals and late-work reports."
            chip={access("Tempo", "tempo")}
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
          <BentoCard
            img={asset("img/card-witch.webp")}
            meta="Personal · open source"
            title={
              <>
                a<b>r</b>thur
              </>
            }
            description="A voice assistant for my Mac that reads email, Slack and the calendar, briefs me twice a day and acts only after a yes."
            chip={{ label: "source", href: `${GITHUB}/arthur` }}
          />
        </BentoTilt>

        <BentoTilt className="bento-tilt_2">
          <a
            href={`${CASE_STUDIES}/#work`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex size-full flex-col justify-between bg-violet-300 p-5"
          >
            <h1 className="bento-title special-font max-w-64 text-black">
              M<b>o</b>re c<b>a</b>se studies.
            </h1>

            <TiLocationArrow className="m-5 scale-[5] self-end" />
          </a>
        </BentoTilt>

        <BentoTilt className="bento-tilt_2">
          <BentoCard
            src={asset("media/hero-4.mp4")}
            meta="Creative tooling · 2026"
            title={
              <>
                st<b>u</b>dio
              </>
            }
            chip={{ label: "case study", href: `${CASE_STUDIES}/projects/creative-studio/` }}
          />
        </BentoTilt>
      </div>
    </div>
  </section>
);

export default Features;
