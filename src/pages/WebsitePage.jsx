import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";

import Contact from "../components/Contact";
import { websites } from "../data/websites";
import { asset } from "../lib";
import { DetailHero, Section, Prose, Numbered, Pills, NextUp } from "./parts";

const VIDEO = {
  "yercaud-club": "site-yercaud",
  nandipura: "site-nandipura",
  bhramari: "site-bhramari",
  "anti-labs": "site-antilabs",
  "unravel-experiences": "site-unravel",
};

// "Yercaud Club" -> "y<b>e</b>rcaud club": one accent letter for the display face
const accent = (name) => {
  const s = name.toLowerCase().replace(/ & .*/, "");
  const i = s.search(/[aeiou]/);
  return i < 0 ? s : `${s.slice(0, i)}<b>${s[i]}</b>${s.slice(i + 1)}`;
};

// Load each site's own typefaces so the specimens render in them
const useFaces = (faces) => {
  useEffect(() => {
    const fam = faces.map((f) => `family=${f.replace(/ /g, "+")}`).join("&");
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = `https://fonts.googleapis.com/css2?${fam}&display=swap`;
    document.head.appendChild(link);
    return () => link.remove();
  }, [faces.join("|")]); // eslint-disable-line react-hooks/exhaustive-deps
};

const WebsitePage = () => {
  const { slug } = useParams();
  const i = websites.findIndex((w) => w.slug === slug);
  const w = websites[i];
  useFaces(w ? w.type.map((t) => t.face) : []);
  if (i < 0) return <Navigate to="/" replace />;
  const next = websites[(i + 1) % websites.length];

  return (
    <article>
      <DetailHero
        video={VIDEO[w.slug]}
        back={{ to: "/", state: { scrollTo: "websites" }, label: "All websites" }}
        meta={`${w.kind} · ${w.location} · ${w.year}`}
        title={accent(w.name)}
        summary={w.summary}
        actions={[{ label: `Visit ${w.urlLabel}`, href: w.url }]}
        scrim="from-black/95 via-black/65 to-black/30"
      />

      <section className="bg-blue-50 px-5 py-14 sm:px-10">
        <dl className="container mx-auto grid grid-cols-2 gap-6 md:grid-cols-4">
          {[["Client", w.kind], ["Where", w.location], ["Year", w.year], ["My role", w.role]].map(([k, v]) => (
            <div key={k} className="border-l-2 pl-4" style={{ borderColor: w.color }}>
              <dt className="font-general text-xs uppercase tracking-wider text-gray-600">{k}</dt>
              <dd className="mt-1 font-general text-base font-medium text-black md:text-lg">{v}</dd>
            </div>
          ))}
        </dl>
      </section>

      <Section label="The brief">
        <Prose paras={[w.brief]} />
      </Section>

      <Section label="On every screen" title="desk & ph<b>o</b>ne" dark>
        <div className="grid items-end gap-6 md:grid-cols-[minmax(0,1fr)_220px]">
          <video
            src={asset(`media/${VIDEO[w.slug]}.mp4`)}
            poster={asset(`media/posters/${VIDEO[w.slug]}.jpg`)}
            autoPlay
            muted
            loop
            playsInline
            className="w-full rounded-xl border border-white/15"
          />
          <img
            src={asset(`img/${w.slug}-mobile.jpg`)}
            alt={`${w.name} on a phone`}
            loading="lazy"
            className="mx-auto w-48 rounded-[1.75rem] border-4 border-white/20 md:w-full"
          />
        </div>
      </Section>

      <Section label="Palette" title="c<b>o</b>lour">
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {w.palette.map((c) => (
            <li key={c.hex} className="overflow-hidden rounded-xl border border-black/10 bg-white">
              <div className="h-28" style={{ background: c.hex }} />
              <div className="p-3">
                <p className="font-general text-sm font-medium text-black">{c.name}</p>
                <p className="font-general text-xs uppercase text-gray-600">{c.hex}</p>
              </div>
            </li>
          ))}
        </ul>
        {w.language?.length > 0 && (
          <ul className="mt-10 max-w-3xl space-y-4">
            {w.language.map((l) => (
              <li key={l} className="relative pl-6 font-general text-lg leading-relaxed text-gray-800">
                <span className="absolute left-0 top-3 h-0.5 w-3" style={{ background: w.color }} aria-hidden />
                {l}
              </li>
            ))}
          </ul>
        )}
      </Section>

      <Section label="Typography" title="t<b>y</b>pe" dark>
        <div className="grid gap-4 md:grid-cols-2">
          {w.type.map((t) => (
            <div key={t.face} className="rounded-xl border border-white/15 bg-white/[.04] p-6">
              <p className="font-general text-xs uppercase tracking-wider text-yellow-300">{t.role}</p>
              <p className="mt-3 text-5xl leading-tight text-blue-50 md:text-6xl" style={{ fontFamily: `"${t.face}", serif` }}>
                {w.name.split(" ")[0]}
              </p>
              <p className="mt-2 font-general text-lg font-medium text-blue-50">{t.face}</p>
              <p className="mt-2 font-general text-base leading-relaxed text-blue-50/80">{t.why}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section label="Decisions" title="why it&apos;s built th<b>i</b>s way">
        <Numbered items={w.decisions} />
        <div className="mt-12">
          <p className="mb-4 font-general text-xs uppercase tracking-wider text-violet-300">Built with</p>
          <Pills items={w.stack} />
        </div>
      </Section>

      <NextUp to={`/websites/${next.slug}`} eyebrow="Next website" title={accent(next.name)} video={VIDEO[next.slug]} />
      <Contact />
    </article>
  );
};

export default WebsitePage;
