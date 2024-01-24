import { React } from "react";
import teamMembers from "../data/team.json";

const Team = () => {
  let teamArr = teamMembers.team;
  console.log(teamArr[2].pfp)

  return (
    <div className="flex items-center justify-center bg-white">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 h-[100vh]">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-screen md:mb-12">
          <div className="">
            <p className="inline-block px-3 py-px mb-4 text-[35px] font-bold tracking-wider text-green-500 uppercase rounded-full">
              Our Team
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-28 mx-auto h-[60vh] items-center justify-center lg:max-w-screen-xl top-50 mt-24">
        {teamArr.map(item => (
            <div className="flex">
            <img
              className="object-cover w-32 h-32 mr-4 rounded-full shadow"
              src={item.pfp == null ? process.env.PUBLIC_URL  + "/Team_Pfp/default.jpg" : process.env.PUBLIC_URL + item.pfp}
              alt="Person"
            />
            <div className="flex flex-col justify-center">
              <p className="text-2xl font-bold text-green-500">{item.name}</p>
              <p className="text-l text-gray-500">{item.position}</p>
            </div>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
