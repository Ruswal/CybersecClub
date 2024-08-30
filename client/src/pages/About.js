import React from "react";
import Typewriter from "typewriter-effect";

const About = () => {
  return (
    <div className="min-h-[80vh] w-[90%] md:w-[90%] sm:w-[70%] flex-col gap-4 m-auto flex items-center justify-center">
      <div>
        <h1 className="text-green-400 text-2xl font-semibold">Who are we?</h1>
      </div>
      <div className="flex items-center justify-center border-[3px] border-green-500 p-1">
        <div className="flex items-center justify-center border-[3px] border-green-400 p-4">
          <h1 className="text-green-400 text-xl">
            In the fall semester of 2023, our president, known as Ruswal on Discord, registered this club in order to close the gap between entry-level knowledge and becoming formidable security specialists. Alongside our operations lead, Flux, the club was founded to help guide our members in the right steps to achieve success in the cybersecurity industry. {'\n'}
            <p>
              For a semester, we operated via Discord, built a small community of 100+ students, and gradually attracted experienced experts, hackers, engineers, and teachers from the Regina community who started helping people get into cybersecurity guided by their own experiences.
            </p>
            <p>
              Fast forward to the 2024 winter semester, we showcased our club at the University of Regina's club fair, introducing new and returning students to our mission and onboarding them into our community.
            </p>
            <h2 className="text-green-400 text-xl mt-4 font-semibold">Recent Achievements</h2>
            <ul className="list-disc list-inside text-green-400">
              <li>We secured 1st prize at BSides Saskatoon, triumphing over the University of Saskatchewan's team.</li>
              <li>We hosted a mini CTF at the end of the winter semester.</li>
              <li>We won 2nd prize at BSides Regina.</li>
            </ul>
            <p className="mt-2">
              Looking ahead, we are excited to plan more events for the fall semester and continue building our community.
            </p>

            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("...")
                  .callFunction(() => {
                    console.log("String typed out!");
                  })
                  .pauseFor(2500)
                  .deleteAll()
                  .typeString("...")
                  .start();
              }}
              options={{
                loop: true,
              }}
            />
          </h1>
        </div>
      </div>
    </div>

  );
};

export default About;
