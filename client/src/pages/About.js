import React from "react";
import Typewriter from "typewriter-effect";

const About = () => {
  return (
    <div className="h-[80vh] w-[90%] md:w-[90%] sm:w-[70%] flex-col gap-4 m-auto flex items-center justify-center">
        <div>
            <h1 className="text-green-400 text-2xl font-semibold">Who are we ?</h1>
        </div>
      <div className="flex items-center justify-center border-[3px] border-green-500 p-1">
        <div className="flex items-center justify-center border-[3px] border-green-400 p-4">
          <h1 className="text-green-400 text-xl">
          In the fall semester of 2023 our president, known as Ruswal on discord, registered this club in order to close the gap of the actual experience that we need to go from entry level noobs to formidable and knowledgeable security specialists and the right steps we should take in order to achieve our pursuits in this industry. He started this club with our operation lead, known as Flux on discord.
            {'\n'}
            <p>
            For a semester we operated via discord, built a small community of 100+ students, gradually some really experienced experts, hackers, engineers, and teachers from the Regina community joined us and started helping people to get into cyber security guided by the knowledge of their own experience.
                </p>
            <p>
            Fast forward to 2024 winter semester we displayed what we had to offer when we participated in University of Regina's club fair and introduced new and existing students to what our club was about and onboarded them as well.
                </p>
            <p>Now in the coming weeks we have planed to host our first in-person event to really get personal with the students and share our resources with them. regarding the event, we will be posting information shortly so stay tuned!</p>
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
