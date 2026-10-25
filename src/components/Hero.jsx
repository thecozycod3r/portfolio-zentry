import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { TiLocationArrow } from "react-icons/ti";
import { useEffect, useRef, useState } from "react";

import Button from "./Button";
import VideoPreview from "./VideoPreview";
import { asset } from "../lib";

gsap.registerPlugin(ScrollTrigger);

// Cerno's own numbers (from the case study)
const stats = [
  { v: "28", l: "client ad accounts, refreshed nightly" },
  { v: "21", l: "client reports a month, generated" },
  { v: "58/58", l: "client-months reconciled to raw leads" },
  { v: "41%", l: "faster nightly build" },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);

  const [loading, setLoading] = useState(true);

  const totalVideos = 4;
  const nextVdRef = useRef(null);

  // Lift the loader when the background video is ready, or after 2.5s regardless
  const handleVideoLoad = () => setLoading(false);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(t);
  }, []);

  const handleMiniVdClick = () => {
    setHasClicked(true);

    setCurrentIndex((prevIndex) => (prevIndex % totalVideos) + 1);
  };

  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });
        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => nextVdRef.current?.play().catch(() => {}),
        });
        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    {
      dependencies: [currentIndex],
      revertOnUpdate: true,
    }
  );

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
      borderRadius: "0% 0% 40% 10%",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });

  const getVideoSrc = (index) => asset(`media/hero-${index}.mp4`);

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      {loading && (
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
          {/* https://uiverse.io/G4b413l/tidy-walrus-92 */}
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      )}

      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <VideoPreview>
              <button
                type="button"
                onClick={handleMiniVdClick}
                aria-label="Show the next Cerno view"
                className="block origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100 focus-visible:scale-100 focus-visible:opacity-100"
              >
                <video
                  src={getVideoSrc((currentIndex % totalVideos) + 1)}
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  id="current-video"
                  className="size-64 origin-center scale-150 object-cover object-left-top"
                />
              </button>
            </VideoPreview>
          </div>

          <video
            ref={nextVdRef}
            src={getVideoSrc(currentIndex)}
            playsInline
            loop
            muted
            id="next-video"
            className="absolute-center invisible absolute z-20 size-64 object-cover object-left-top"
          />
          <video
            src={getVideoSrc(
              hasClicked ? ((currentIndex + totalVideos - 2) % totalVideos) + 1 : currentIndex
            )}
            poster={asset("img/poster.jpg")}
            autoPlay
            loop
            muted
            playsInline
            className="absolute left-0 top-0 size-full object-cover object-left-top"
            onLoadedData={handleVideoLoad}
          />
          {/* scrim: the tools are light UIs, the headline is white */}
          <div className="pointer-events-none absolute inset-0 z-30 bg-black/70 md:bg-transparent md:bg-gradient-to-r md:from-black/90 md:via-black/55 md:to-black/15" />
          <div className="pointer-events-none absolute inset-0 z-30 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        </div>

        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
          syst<b>e</b>ms
        </h1>

        <div className="absolute left-0 top-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-blue-100">
              <span className="sr-only">Dhruv Shricharan: </span>gr<b>o</b>wth
            </h1>

            <p className="mb-6 max-w-md font-robert-regular text-base leading-relaxed text-blue-50 md:text-lg">
              I&apos;m Dhruv Shricharan. I build the software a growing agency
              runs on: analytics, content and operations. What&apos;s playing
              behind this is Cerno, the analytics platform.
            </p>

            <Button
              id="watch-trailer"
              title="See the work"
              href="#work"
              leftIcon={<TiLocationArrow />}
              containerClass="bg-yellow-300 flex-center gap-1"
            />

            <p className="mt-8 flex items-center gap-2 font-general text-xs uppercase tracking-wider text-blue-50/80">
              <span className="size-2 animate-pulse rounded-full bg-yellow-300" aria-hidden /> Now playing: Cerno, agency analytics
            </p>
            <dl className="mt-3 grid max-w-2xl grid-cols-2 gap-2 lg:grid-cols-4">
              {stats.map((s) => (
                <div
                  key={s.l}
                  className="rounded-xl border border-white/15 bg-black/40 px-3 py-2.5 backdrop-blur-md"
                >
                  <dt className="font-zentry text-2xl leading-none text-yellow-300 md:text-3xl">
                    {s.v}
                  </dt>
                  <dd className="mt-1.5 font-general text-xs leading-snug text-white md:text-sm">
                    {s.l}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black">
        syst<b>e</b>ms
      </h1>
    </div>
  );
};

export default Hero;
