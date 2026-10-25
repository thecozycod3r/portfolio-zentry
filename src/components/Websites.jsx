import AnimatedTitle from "./AnimatedTitle";
import { BentoTilt, BentoCard } from "./Features";
import { asset } from "../lib";

const sites = {
  yercaud: {
    slug: "yercaud-club",
    url: "https://yercaudclub.com/",
    meta: "Heritage members' club · Yercaud",
    title: <>y<b>e</b>rcaud club</>,
    description: "A hill club founded in 1897 with no website. Rebuilt from its tariff card, souvenir booklet and photographs; live on the club's own domain.",
  },
  nandipura: {
    slug: "nandipura",
    url: "https://nandipuracoffee.com/",
    meta: "Coffee estate · Chikmagalur",
    title: <>n<b>a</b>ndipura</>,
    description: "A fifth-generation estate selling green coffee to roasters, positioned as the producer it is, not another café brand.",
  },
  bhramari: {
    slug: "bhramari",
    url: "https://bhramarisakleshpur.com/",
    meta: "Private pool villa · Sakleshpur",
    title: <>bhr<b>a</b>mari</>,
    description: "One page that sells a weekend: open the gates, walk the path, check a date, message the owner.",
  },
  antilabs: {
    slug: "anti-labs",
    url: "https://thecozycod3r.github.io/anti-labs-preview/anti-light.html",
    meta: "Studios + café · Bengaluru",
    title: <>a<b>n</b>ti labs</>,
    description: "A photo studio, dance studio and café under one roof. A pixel-accurate rebuild plus two new pages in the same language.",
  },
  unravel: {
    slug: "unravel-experiences",
    url: "https://unravelexperiences.com/",
    meta: "Curated luxury travel",
    title: <>u<b>n</b>ravel</>,
    description: "Each trip reads like an itinerary with a price, plus a members' area. Rebuilt with the Unravel team.",
  },
};

const Site = ({ id }) => {
  const s = sites[id];
  return (
    <BentoCard
      src={asset(`media/site-${id}.mp4`)}
      meta={s.meta}
      title={s.title}
      description={s.description}
      chip={{ label: "visit site", href: s.url }}
      to={`/websites/${s.slug}`}
      label={`${s.slug.replace(/-/g, " ")}: read how it was designed`}
      dim="brightness-[.75]"
    />
  );
};

const Websites = () => (
  <section id="websites" className="bg-blue-50 pb-40">
    <div className="container mx-auto px-3 md:px-10">
      <div className="flex flex-col items-center gap-5 py-28">
        <p className="font-general text-sm uppercase">Client websites</p>
        <AnimatedTitle
          title="sites th<b>a</b>t <br /> feel l<b>i</b>ke the brand"
          containerClass="!text-black text-center"
          as="h2"
        />
        <p className="mt-4 max-w-xl text-center font-circular-web text-lg leading-relaxed text-gray-700 md:text-xl">
          Designed and built end to end, each in its own type and colour.
          Open any site to see the palette, type and decisions behind it.
        </p>
      </div>

      <BentoTilt className="relative mb-7 h-[28rem] w-full overflow-hidden rounded-md md:h-[65vh]">
        <Site id="yercaud" />
      </BentoTilt>

      <div className="grid w-full grid-cols-1 gap-7 md:h-[135vh] md:grid-cols-2 md:grid-rows-3">
        <BentoTilt className="bento-tilt_1 h-[28rem] md:col-span-1 md:row-span-2 md:h-auto">
          <Site id="nandipura" />
        </BentoTilt>
        <BentoTilt className="bento-tilt_1 h-[28rem] md:col-span-1 md:h-auto">
          <Site id="bhramari" />
        </BentoTilt>
        <BentoTilt className="bento-tilt_1 h-[28rem] md:col-span-1 md:h-auto">
          <Site id="antilabs" />
        </BentoTilt>
        <BentoTilt className="bento-tilt_1 h-[28rem] md:col-span-2 md:h-auto">
          <Site id="unravel" />
        </BentoTilt>
      </div>
    </div>
  </section>
);

export default Websites;
