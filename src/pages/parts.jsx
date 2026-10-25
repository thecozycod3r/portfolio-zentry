import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { TiLocationArrow, TiArrowLeft } from "react-icons/ti";

import AnimatedTitle from "../components/AnimatedTitle";
import Button from "../components/Button";
import LazyVideo from "../components/LazyVideo";
import { asset } from "../lib";

export const poster = (key) => asset(`media/posters/${key}.jpg`);

// Full-bleed footage that pinches into a clipped frame as you scroll, like the home hero
export const DetailHero = ({ video, back, meta, title, summary, actions, scrim = "from-black/90 via-black/50 to-black/20" }) => {
  const frame = useRef(null);
  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    gsap.set(frame.current, { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" });
    gsap.to(frame.current, {
      clipPath: "polygon(6% 0, 94% 0, 100% 92%, 0 100%)",
      borderRadius: "0 0 24px 24px",
      ease: "none",
      scrollTrigger: { trigger: frame.current, start: "top top", end: "bottom top", scrub: true },
    });
  }, [video]);

  return (
    <header ref={frame} className="relative h-dvh w-screen overflow-hidden bg-black">
      {video && (
        <video
          key={video}
          src={asset(`media/${video}.mp4`)}
          poster={poster(video)}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 size-full object-cover object-left-top"
        />
      )}
      <div className={`absolute inset-0 bg-black/55 bg-gradient-to-tr md:bg-black/0 ${scrim}`} />
      <div className="relative z-10 flex h-full flex-col justify-end px-5 pb-14 sm:px-10 md:pb-20">
        <Link to={back.to} state={back.state} className="mb-auto mt-28 flex w-fit items-center gap-1 font-general text-xs uppercase tracking-wider text-blue-50/80 hover:text-yellow-300">
          <TiArrowLeft className="text-lg" /> {back.label}
        </Link>
        <p className="font-general text-xs uppercase tracking-wider text-yellow-300 md:text-sm">{meta}</p>
        <h1
          className="special-font mt-2 font-zentry text-6xl uppercase leading-[.9] text-blue-50 sm:text-8xl md:text-[9rem]"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p className="mt-5 max-w-2xl font-general text-lg leading-relaxed text-blue-50 md:text-xl">{summary}</p>
        {actions?.length > 0 && (
          <div className="mt-8 flex flex-wrap gap-3">
            {actions.map((a, i) => (
              <Button
                key={a.href}
                title={a.label}
                href={a.href}
                rightIcon={<TiLocationArrow />}
                containerClass={`flex items-center gap-1 ${i === 0 ? "!bg-yellow-300" : "!bg-blue-50"}`}
              />
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export const Stats = ({ stats }) =>
  stats?.length > 0 && (
    <section className="bg-blue-50 px-5 py-16 sm:px-10 md:py-24">
      <dl className="container mx-auto grid grid-cols-2 gap-6 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.l} className="border-l-2 border-violet-300 pl-4">
            <dt className="font-zentry text-4xl leading-none text-black md:text-6xl">{s.v}</dt>
            <dd className="mt-2 font-general text-sm leading-snug text-gray-700 md:text-base">{s.l}</dd>
          </div>
        ))}
      </dl>
    </section>
  );

// Two-column section: sticky label on the left, content on the right
export const Section = ({ label, title, dark = false, children }) => (
  <section className={dark ? "bg-black px-5 py-20 text-blue-50 sm:px-10 md:py-28" : "bg-blue-50 px-5 py-20 text-black sm:px-10 md:py-28"}>
    <div className="container mx-auto grid gap-8 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-16">
      <div className="self-start lg:sticky lg:top-28">
        <p className={`font-general text-xs uppercase tracking-wider ${dark ? "text-yellow-300" : "text-violet-300"}`}>{label}</p>
        {title && (
          <h2 className="special-font mt-2 font-zentry text-4xl uppercase leading-[.95] md:text-5xl" dangerouslySetInnerHTML={{ __html: title }} />
        )}
      </div>
      <div className="min-w-0">{children}</div>
    </div>
  </section>
);

export const Prose = ({ paras, dark }) => (
  <div className="max-w-3xl space-y-5">
    {paras.map((p, i) => (
      <p key={i} className={`font-general text-lg leading-relaxed md:text-xl ${dark ? "text-blue-50/90" : "text-gray-800"}`}>{p}</p>
    ))}
  </div>
);

export const FeatureGrid = ({ items }) => (
  <div className="grid gap-4 sm:grid-cols-2">
    {items.map((f) => (
      <div key={f.title} className="rounded-xl border border-white/15 bg-white/[.04] p-6 transition-colors hover:border-yellow-300/60">
        <h3 className="font-zentry text-2xl uppercase leading-tight text-blue-50">{f.title}</h3>
        <p className="mt-3 font-general text-base leading-relaxed text-blue-50/80">{f.body}</p>
      </div>
    ))}
  </div>
);

export const Numbered = ({ items, dark }) => (
  <ol className="space-y-8">
    {items.map((t, i) => (
      <li key={i} className="grid grid-cols-[3rem_minmax(0,1fr)] gap-4 md:grid-cols-[4.5rem_minmax(0,1fr)]">
        <span className={`font-zentry text-3xl leading-none md:text-5xl ${dark ? "text-yellow-300" : "text-violet-300"}`}>{String(i + 1).padStart(2, "0")}</span>
        {typeof t === "string" ? (
          <p className={`font-general text-lg leading-relaxed ${dark ? "text-blue-50/90" : "text-gray-800"}`}>{t}</p>
        ) : (
          <div>
            <h3 className="font-zentry text-2xl uppercase leading-tight">{t.title}</h3>
            <p className={`mt-2 font-general text-lg leading-relaxed ${dark ? "text-blue-50/85" : "text-gray-800"}`}>{t.body}</p>
          </div>
        )}
      </li>
    ))}
  </ol>
);

export const Pills = ({ items, dark }) => (
  <ul className="flex flex-wrap gap-2">
    {items.map((s) => (
      <li key={s} className={`rounded-full border px-4 py-2 font-general text-sm ${dark ? "border-white/20 text-blue-50" : "border-black/15 bg-white text-black"}`}>{s}</li>
    ))}
  </ul>
);

// Big "next" band: the whole thing is a link, footage of the next item behind it
export const NextUp = ({ to, eyebrow, title, video }) => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current?.querySelector("video");
    return () => el?.pause();
  }, [to]);
  return (
    <Link ref={ref} to={to} className="group relative block overflow-hidden bg-black px-5 py-28 text-center text-blue-50 sm:px-10 md:py-40">
      {video && (
        <LazyVideo
          key={video}
          src={asset(`media/${video}.mp4`)}
          poster={poster(video)}
          className="absolute inset-0 size-full object-cover object-left-top opacity-30 transition duration-700 group-hover:scale-105 group-hover:opacity-50"
        />
      )}
      <p className="relative font-general text-xs uppercase tracking-wider text-yellow-300">{eyebrow}</p>
      <AnimatedTitle key={to} title={title} containerClass="relative mt-4 !text-blue-50" />
      <span className="relative mt-8 inline-flex items-center gap-1 rounded-full bg-yellow-300 px-6 py-3 font-general text-xs uppercase text-black">
        open <TiLocationArrow />
      </span>
    </Link>
  );
};
