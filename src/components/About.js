import Typewriter from "typewriter-effect";

const About = () => {
  return (
    <div className="flex-columns h-96">
      <div className="m-3 w-96 ">
        <p className="text-4xl p-3 m-3">
          <Typewriter
            options={{
              strings: ["Message Wall", "Share thoughts"],
              autoStart: true,
              loop: true,
            }}
          />
        </p>
        <p className="text-xl m-2">
          "Share and see different thoughts from people around the world"
        </p>
        <p className="p-2 text-center">
          This project is created to unite different minds by being creative
          with their thoughts and feelings. Feel free to submit a message! It is
          either about yourself, your loved ones or ANYthing. Be creative. Share
          thoughts through a short message of 200 characters. Enjoy!
        </p>
      </div>
      <div className="bg-indigo-800 text-white p-2 absolute bottom-0 w-full">
        <p className="text-sm m-1">This project was inspired by </p>
        <a
          className="text-lg"
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
