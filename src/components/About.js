import Typewriter from "typewriter-effect";

const About = () => {
  return (
    <div className="flex-columns ">
      <div className="m-3 w-80 flex-columns ">
        <p className="text-3xl p-3 m-3">
          <Typewriter
            options={{
              strings: ["Message Wall", "Share thoughts"],
              autoStart: true,
              loop: true,
            }}
          />
        </p>
        <p className="text-md m-2 md:text-lg">
          "Share and see different thoughts from people around the world"
        </p>
        <p className="p-2 text-center text-xs md:text-sm">
          This project is created to unite different minds by being creative
          with their thoughts and feelings. Feel free to submit a message! It is
          either about yourself, your loved ones or ANYthing. Be creative. Share
          thoughts through a short message of 150 characters. Enjoy!
        </p>
        <div class="flex-rows mt-5">
          <img
            class="w-20 mt-5"
            src="https://assets.website-files.com/5e51c674258ffe10d286d30a/5e535956e35d380d2b67a11f_peep-66.svg"
            alt=""
          />
          <img
            class="w-20 mt-5"
            src="https://assets.website-files.com/5e51c674258ffe10d286d30a/5e535997e35d380ada67ad80_peep-68.svg"
            alt=""
          />
          <img
            class="w-20 mt-5"
            src="https://assets.website-files.com/5e51c674258ffe10d286d30a/5e535b3ad399233aa855d221_peep-82.svg"
            alt=""
          />
        </div>
      </div>
      <div className="bg-indigo-800 text-white p-2 absolute bottom-0 w-full">
        <p className="text-xs m-1">This project was inspired by </p>
        <a
          className="text-md"
          href="https://theunsentproject.com"
          target="_blank"
        >
          #TheUnsentProject
        </a>
      </div>
    </div>
  );
};

export default About;
