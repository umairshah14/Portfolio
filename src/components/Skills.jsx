import React from "react";

import Github from "../assets/github.png";
import HTML from "../assets/html.png";
import JS from "../assets/javascript.png";
import Node from "../assets/node.png";
import ReactIcon from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";

const Skills = () => {
  return (
    <div name="skills" className=" w-full h-screen bg-black  text-gray-200">
      {/* CONTAINER */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-5xl font-bold inline border-b-4 border-yellow-600">
            Tech Stack
          </p>
          <p className="py-4">
            Here are a few of the technologies that i've worked with
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8">
          <div className="hover:scale-110 duration-200">
            <img src={HTML} alt="html pic" className="w-20 mx-auto" />
            <p className="my-2">HTML</p>
          </div>
          <div className="hover:scale-110 duration-200">
            <img src={Github} alt="github pic" className="w-20 mx-auto" />
            <p className="my-2">Github</p>
          </div>
          <div className="hover:scale-110 duration-200">
            <img src={JS} alt="js pic" className="w-20 mx-auto" />
            <p className="my-2">Javascript</p>
          </div>
          <div className="hover:scale-110 duration-200">
            <img src={Node} alt="node pic" className="w-20 mx-auto" />
            <p className="my-2">Node</p>
          </div>
          <div className="hover:scale-110 duration-200">
            <img src={ReactIcon} alt="react pic" className="w-20 mx-auto" />
            <p className="my-2">React</p>
          </div>
          <div className="hover:scale-110 duration-200">
            <img src={Tailwind} alt="tailwind pic" className="w-20 mx-auto" />
            <p className="my-2">Tailwind</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
