import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Me from "../assets/memoji.png";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-black">
      {/* Container */}

      <div className="max-w[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <div className="flex items-center">
          <img src={Me} alt="" className="mr-20 ml-[10%] hidden lg:flex" />
          <div>
            <p className="text-yellow-500 text-2xl">Hi, my name is</p>
            <h1 className="text-4xl sm:text-7xl font-bold text-white">
              Umair Shah
            </h1>
            <h2 className="text-3xl sm:text-6xl font-bold text-yellow-700">
              A Junior Full Stack Developer
            </h2>
            <p className="text-gray-200 py-4 max-w-[700px] ">
              I've been coding for just under 2 years now and have attended
              multiple bootcamps. Originally coming from a musical background, i
              decided to make a shift into Tech, and well, here i am. I'm
              passionate about learning, enthusiastic about tech and hungry for
              an opportunity to show what i can bring to the table
            </p>
            <div>
              <Link
                activeClass="active" to="work" smooth={true}
                duration={500}>
                <button className="text-white group border-2 px-4 py-3 my-2 flex items-center rounded-lg hover:bg-neutral-800 hover:border-neutral-800">
                  View Work
                  <span className="group-hover:rotate-90 duration-300">
                    <HiArrowNarrowRight className="ml-3" />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
