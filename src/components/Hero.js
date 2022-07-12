import Typewriter from "typewriter-effect";
import Data from "./Data";
import { FaGithub, FaLinkedin, FaInstagram, FaArrowDown } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
const Hero = () => {
  return (
    <div>
      <div className=" p-2 my-8 flex-columns ">
        <div className="flex-rows">
          <LazyLoadImage
            effect="blur"
            className="w-28 md:w-32"
            src="https://assets.website-files.com/5e51c674258ffe10d286d30a/5e535398d87131adfd0c974a_peep-25.svg"
            alt=""
          />
          <LazyLoadImage
            effect="blur"
            className="w-28 md:w-32 "
            src="https://assets.website-files.com/5e51c674258ffe10d286d30a/5e53596f8e24933d7a06b0c7_peep-67.svg"
            alt=""
          />
          <LazyLoadImage
            effect="blur"
            className="w-28 md:w-32"
            src="https://assets.website-files.com/5e51c674258ffe10d286d30a/5e5358878e2493fbea064dd9_peep-59.svg"
            alt=""
          />
        </div>

        <p className="text-4xl p-2 m-5 md:text-5xl">
          <Typewriter
            options={{
              strings: ["Message Wall", "Share thoughts"],
              autoStart: true,
              loop: true,
            }}
          />
        </p>
        <p className="m-5">
          Made with <span class="text-indigo-700 font-bold">React</span>,
          <span class="text-indigo-700 font-bold">Tailwind </span> and
          <span class="text-indigo-700 font-bold"> Firebase</span>{" "}
        </p>
        <p>Follow me:</p>
        <div className="flex-rows mt-4  text-xl">
          <a
            href="https://github.com/giamnesia"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="mx-2" />
          </a>
          <a
            href="https://www.linkedin.com/in/gia-marqueses-6a5368203/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className=" " />
          </a>

          <a
            href="https://instagram.com/giamnesia"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="mx-2" />
          </a>
        </div>
        <div className="flex-columns mt-5 ">
          <FaArrowDown
            onClick={() => {
              window.scrollTo({
                top: window.innerHeight,
                behavior: "smooth",
              });
            }}
            className=" text-indigo-600 animate-bounce mt-8 text-2xl"
          />
        </div>
      </div>

      <Data />
    </div>
  );
};

export default Hero;
