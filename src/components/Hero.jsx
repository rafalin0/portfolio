import { curve } from "../assets";
import { NodeIcon, ReactIcon, TailwindIcon } from "../assets/svg/Icons";
import Avatar from "./Avatar";

import Button from "./Button";
import Section from "./Section";

const Hero = () => {
  return (
    <Section
      decorPosition="left"
      grid
      className="-mt-[5.25rem]"
      id="home"
      customPaddings
    >
      <div className=" min-h-screen container flex flex-col lg:items-center lg:w-3/4 lg:flex-row py-5 lg:py-12 xl:py-20">
        <div className="relative flex flex-col justify-between my-auto right-0 z-1 h-full order-2 lg:order-1 lg:w-1/2 xl:max-w-[62rem]">
          <div className="lg:mb-[6rem] text-left mb-6">
            <p className="body-1 text-n-2">hello,</p>
            <h1 className="h1 mb-6">
              I'm{" "}
              <span className="inline-block relative">
                Rafa{" "}
                <img
                  src={curve}
                  className="absolute top-full left-0 w-full xl:-mt-2"
                  width={624}
                  height={28}
                  alt="Curve"
                />
              </span>
            </h1>

            <p className="body-2 max-w-3xl mx-auto lg:left-auto mb-6 text-n-2 lg:mb-8">
              a frontend web developer who loves intuitive, clean and modern UI
              design.
            </p>

            <Button href="/contact">Get in Touch</Button>
          </div>

          <div className="p-1">
            <p className="mb-2.5 text-sm text-n-2">
              current favorite tech stack:
            </p>
            <ul className="flex items-center gap-3.5 text-n-2 h-6 w-6">
              {[
                <ReactIcon key="react" />,
                <NodeIcon key="node" />,
                <TailwindIcon key="tailwind" />,
              ].map((Icon) => (
                <li
                  className=" transition-colors hover:text-color-1"
                  key={Icon.key}
                >
                  {Icon}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:w-1/2 order-1 lg:h-full lg:order-2 m-auto">
          <Avatar />
        </div>
      </div>
    </Section>
  );
};

export default Hero;
