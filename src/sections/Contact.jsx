import { useState } from "react";
import Globe from "react-globe.gl";
import Button from "../components/Button.jsx";

const Contact = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("asmashaik040@gmail.com");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space py-20" id="contact">
      <h3 className="head-text mb-16">Contact Me</h3>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className=" my-16 w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container pt-8" onClick={handleCopy}>
                <img
                  src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="copy"
                />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  asmashaik040@gmail.com
                </p>
              </div>
              <div className="copy-container pt-8">
                <a
                  className="flex items-center gap-2 cursor-pointer text-white-600"
                  href='https://github.com/asmashaik040'
                  target="_blank"
                  rel="noreferrer"
                >
                  <p>GitHub Link</p>
                  <img
                    src="/assets/arrow-up.png"
                    alt="arrow"
                    className="w-3 h-3"
                  />
                </a>
              </div>
              <div className="copy-container pt-8">
              <a
                  className="flex items-center gap-2 cursor-pointer text-white-600"
                  href='https://www.linkedin.com/in/asma-shaik/'
                  target="_blank"
                  rel="noreferrer"
                >
                  <p>LinkedIn</p>
                  <img
                    src="/assets/arrow-up.png"
                    alt="arrow"
                    className="w-3 h-3"
                  />
                </a>
              </div>
              <div className="copy-container py-8">
              <a
                  className="flex items-center gap-2 cursor-pointer text-white-600"
                  href='https://drive.google.com/file/d/1KnyjRAUx6F5lnMHA7jwmVA9OqjJNr4cv/view'
                  target="_blank"
                  rel="noreferrer"
                >
                  <p>Resume</p>
                  <img
                    src="/assets/arrow-up.png"
                    alt="arrow"
                    className="w-3 h-3"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-2">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 15,
                    lng: 78,
                    text: "Kadapa, India",
                    color: "red",
                    size: 15,
                  },
                ]}
              />
            </div>
            <div>
              <p className="grid-headtext">
                I’m very flexible with time zone communications & locations
              </p>
              <p className="grid-subtext">
                I&apos;m based in Kadapa, India and open to remote work
                worldwide.
              </p>
              <a href="mailto:asmashaik040@gmail.com">
                <Button
                  name="Contact Me"
                  isBeam
                  containerClass="w-full mt-10"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
