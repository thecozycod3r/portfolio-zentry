import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";
import { asset, EMAIL, LINKEDIN } from "../lib";

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-4 sm:px-10">
      <div className="relative grid items-center gap-10 overflow-hidden rounded-lg bg-black px-6 py-16 text-blue-50 md:px-12 md:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,22rem)] lg:gap-14">
        <div className="order-2 flex flex-col items-center text-center lg:order-1">
          <p className="mb-10 font-general text-sm uppercase">
            Say hello
          </p>

          <AnimatedTitle
            title="let&#39;s b<b>u</b>ild <br /> s<b>o</b>mething <br /> that sh<b>i</b>ps."
            containerClass="special-font w-full !text-5xl md:!text-[6.2rem] !leading-[1.02]"
          as="h2"
          />

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button title="email me" href={`mailto:${EMAIL}`} />
            <Button title="linkedin" href={LINKEDIN} containerClass="!bg-yellow-300" />
            <Button title="résumé" href={asset("Dhruv_Shricharan_Resume.pdf")} download containerClass="!bg-blue-50" />
          </div>
        </div>

        <figure className="order-1 mx-auto w-56 sm:w-64 lg:order-2 lg:w-full">
          <img
            src={asset("img/me-small.webp")}
            alt="Dhruv Shricharan above the Bay of Kotor, Montenegro"
            loading="lazy"
            className="w-full -rotate-2 rounded-2xl border border-white/15 object-cover shadow-2xl transition-transform duration-500 hover:rotate-0"
          />
        </figure>
      </div>
    </div>
  );
};

export default Contact;
