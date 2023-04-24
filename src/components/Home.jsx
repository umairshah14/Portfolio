import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-black">
      {/* Container */}

      <div className="max-w[1000px] mx-auto px-8 flex flex-col justify-center h-full lg:ml-36">
        <p className="text-yellow-500 text-2xl">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-white">Umair Shah</h1>
        <h2 className="text-3xl sm:text-6xl font-bold text-yellow-700">A Junior Full Stack Developer</h2>
        <p className="text-slate-400 py-4 max-w-[700px] ">I've been coding for just under 2 years now, im passionate about learning, enthusiastic about tech and hungry for an opportunity to show what i can bring to the table</p>
        <div>
            <button className="text-white group border-2 px-4 py-3 my-2 flex items-center rounded-lg hover:bg-slate-600 hover:border-slate-600"> View work 
            <span className="group-hover:rotate-90 duration-300">
            <HiArrowNarrowRight className="ml-3"/>
            </span>
            </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
