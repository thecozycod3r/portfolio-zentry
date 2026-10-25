import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";
import { asset, EMAIL, LINKEDIN } from "../lib";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} alt="" />
  </div>
);

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen  px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            src={asset("img/card-dragon.webp")}
            clipClass="contact-clip-path-1"
          />
          <ImageClipBox
            src={asset("img/card-wizard.webp")}
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
          />
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            src={asset("img/me-small.webp")}
            clipClass="sword-man-clip-path md:scale-110"
          />
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="mb-10 font-general text-[10px] uppercase">
            Say hello
          </p>

          <AnimatedTitle
            title="let&#39;s b<b>u</b>ild <br /> s<b>o</b>mething <br /> that sh<b>i</b>ps."
            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
          />

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button title="email me" href={`mailto:${EMAIL}`} />
            <Button title="linkedin" href={LINKEDIN} containerClass="!bg-yellow-300" />
            <Button title="résumé" href={asset("Dhruv_Shricharan_Resume.pdf")} download containerClass="!bg-blue-50" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
