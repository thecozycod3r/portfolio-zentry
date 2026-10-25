import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from "./AnimatedTitle";
import { asset } from "../lib";
import LazyVideo from "./LazyVideo";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to("#clip .mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="font-general text-sm uppercase">
          Hi, I&apos;m Dhruv Shricharan
        </p>

        <AnimatedTitle
          title="I b<b>u</b>ild the <br /> s<b>y</b>stems behind <br /> the b<b>u</b>siness"
          containerClass="mt-5 !text-black text-center"
          as="h2"
        />

        <div className="about-subtext">
          <p>Founders&apos; Office at Digital Advantage Media, Bengaluru.</p>
          <p className="mt-2 text-gray-700">
            Before that, a decision scientist on Mars Inc. supply chains. Now I
            win clients, run the work, prove results and watch the money, and
            I write the software for each step.
          </p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <LazyVideo
            src={asset("media/montage.mp4")}
            poster={asset("img/poster.jpg")}
            aria-label="Montage of Cerno, Neo, Tempo and Table Night"
            className="absolute left-0 top-0 size-full object-cover object-left-top"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
