import React from "react";

const Project = (props) => {
  return (
    <div
      style={{
        backgroundImage: `url(${props.image})`,
        backgroundPosition: `${props.position}`
      }}
      className="group container flex justify-center items-center mx-auto content-div text-center relative hover:scale-105 duration-300 rounded-md"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-0 transition duration-300 z-10 group-hover:bg-opacity-80"></div>
      <div className="relative z-20 opacity-0 group-hover:opacity-100 transition duration-300">
        <span className="text-2xl font-bold text-white tracking-wider mt-4">
          {props.name}
        </span>
        <div className="pt-2 text-center">
          <a href={props.github}>
            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg transition duration-200 z-10 hover:bg-gray-500 hover:text-white">
              Github
            </button>
          </a>
          {props.deployed ? (
            <a href={props.deployed}>
              <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg transition duration-200 z-10 hover:bg-gray-500 hover:text-white">
                Deployed
              </button>
            </a>
          ) : null}
        </div>
        <div className=" flex pt-2 justify-evenly flex-col">
          {/* <h3 className=" text-xs pb-2">Using:</h3> */}
          <div className=" flex flex-row justify-evenly text-black mt-2">
            {props.tagOne}
            {props.tagTwo}
            {props.tagThree}
            {props.tagFour}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
