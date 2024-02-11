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
            In the fall semester of 2023 our president i.e. Andrew petre also known as Ruswal on discord
            registered this club in order to fill in the gap of the actual
            experience that we need in order to get into cyber security and what
            we were learning at uofr, he started this club with our operation
            lead i.e. Raj also known as Flux on discord
            {'\n'}
            <p>
                For a semester we operated via discord, built a small community of 100+ students, gradually some really experienced hackers from the regina community joined us and started helping people to get into cyber security with the help of their own experience.
            </p>
            <p>
                Fast forward to 2024 winter semester we participated in University of Regina's club fair and introduced new and existing students about our club and onboarded them as well.
            </p>
            <p>Now in the first week of February we have planed to host our first in-person event about which we wil be psoting infromation shortly so stay tuned!</p>
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
