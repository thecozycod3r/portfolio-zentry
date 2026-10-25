import AnimatedTitle from "./AnimatedTitle";
import { BentoTilt, BentoCard } from "./Features";
import { asset, GITHUB, TABLE_NIGHT, CASE_STUDIES } from "../lib";

const SideProjects = () => (
  <section id="side" className="w-screen bg-black pb-32 text-blue-50">
    <div className="container mx-auto px-3 md:px-10">
      <div className="flex flex-col items-center gap-5 py-28">
        <p className="font-general text-sm uppercase">After hours</p>
        <AnimatedTitle
          title="side pr<b>o</b>jects"
          containerClass="text-center"
          as="h2"
        />
        <p className="mt-4 max-w-xl text-center font-circular-web text-lg leading-relaxed text-blue-50/75 md:text-xl">
          Things I built for myself and my friends. Both are open: one you can
          play tonight, one you can read the code of.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
        <BentoTilt className="border-hsla relative h-[32rem] md:h-[70vh] overflow-hidden rounded-md">
          <BentoCard
            src={asset("media/tablenight.mp4")}
            meta="Multiplayer games · free to play"
            title={<>t<b>a</b>ble night</>}
            description="Fourteen card and party games played on your own phone. No accounts, no app store, and the table keeps going if the host leaves."
            chip={{ label: "play free", href: TABLE_NIGHT }}
            dim="brightness-[.8]"
          />
        </BentoTilt>
        <BentoTilt className="border-hsla relative h-[32rem] md:h-[70vh] overflow-hidden rounded-md">
          <BentoCard
            src={asset("media/arthur.mp4")}
            meta="Voice assistant · open source"
            title={<>a<b>r</b>thur</>}
            description="A voice assistant for my Mac that reads email, Slack and the calendar, briefs me twice a day and acts only after I say yes."
            chip={{ label: "source code", href: `${GITHUB}/arthur` }}
            dim="brightness-[.7]"
          />
        </BentoTilt>
      </div>

      <p className="mt-10 text-center font-general text-sm text-blue-50/60">
        Longer write-ups:{" "}
        <a href={`${CASE_STUDIES}/projects/table-night/`} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-yellow-300">Table Night</a>
        {" · "}
        <a href={`${CASE_STUDIES}/projects/arthur/`} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-yellow-300">Arthur</a>
      </p>
    </div>
  </section>
);

export default SideProjects;
