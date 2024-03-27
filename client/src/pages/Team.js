import { React } from "react";
import teamMembers from "../data/team.json";
import { EvervaultCard, Icon } from "../components/evervault-card";

const Team = () => {
  let teamArr = teamMembers.team;
  console.log(teamArr[2].pfp)

  return (
    // <div className="flex bg-black items-center justify-center">
    //   <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 h-[70vh]">
    //     <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-screen md:mb-12">
    //       <div className="">
    // <p className="inline-block px-3 py-px mb-4 text-[35px] font-bold tracking-wider text-green-500 uppercase rounded-full">
    //   Our Team
    // </p>
    //       </div>
    //     </div>
    //     <div className="flex flex-wrap gap-28 pb-20 items-center justify-center lg:max-w-screen-xl mt-24">
    //     {teamArr.map(item => (
    //         <div className="flex min-w-[375px] gap-2">
    //         <img
    //         loading="lazy"
    //           className="object-cover w-32 h-32 mr-4 rounded-lg shadow"
    //           src={item.pfp == null ? process.env.PUBLIC_URL  + "/Team_Pfp/default.jpg" : process.env.PUBLIC_URL + item.pfp}
    //           alt="Person"
    //         />
    //         <div className="flex flex-col justify-center">
    //           <p className="text-2xl font-bold text-green-500">{item.name}</p>
    //           <p className="text-l text-gray-500">{item.position}</p>
    //         </div>
    //       </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
    <div className="p-4">
      <p className="inline-block px-3 py-px mb-4 text-[35px] font-bold tracking-wider text-green-500 uppercase rounded-full">
        Our Team
      </p>
      <div className="flex flex-wrap">
        {teamArr.map(item => (
          <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

            <EvervaultCard text={item.pfp == null ? process.env.PUBLIC_URL + "/Team_Pfp/default.jpg" : process.env.PUBLIC_URL + item.pfp} />
            {/* <img
            className="object-cover w-32 h-32 mr-4 rounded-lg shadow"
            src={item.pfp == null ? process.env.PUBLIC_URL  + "/Team_Pfp/default.jpg" : process.env.PUBLIC_URL + item.pfp}
            alt="Person"
          /> */}

            <h2 className="dark:text-white text-black mt-4 text-sm font-light">
              {item.name}
            </h2>
            <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
              {item.position}
            </p>
          </div>
        ))
        }
      </div>
    </div>
  );
};

export default Team;
