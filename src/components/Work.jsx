import React from "react";

const Work = () => {
  const NetflixImg =
    "https://i.ibb.co/yQxQJ38/Screenshot-2023-05-01-at-18-06-13.png";
  const fitmaxImg =
    "https://i.ibb.co/FKBd5sD/Screenshot-2023-05-01-at-22-09-36.png";
  const PremImg =
    "https://raw.githubusercontent.com/umairshah14/Premier-League-Info/main/assets/images/Screenshot%202023-02-07%20at%2018.28.54.png";
  const ForecastImg =
    "https://raw.githubusercontent.com/umairshah14/Weather-Dashboard/main/Screenshot%202023-01-31%20at%2022.40.35.png";
  const PasswordGenImg =
    "https://raw.githubusercontent.com/umairshah14/Password-Generator/main/Screenshot%202023-01-11%20at%2019.54.33.png";
  const ReadMeGen =
    "https://raw.githubusercontent.com/umairshah14/README-Generator/main/assets/images/Screenshot%202023-02-20%20at%2016.31.00.png";

  return (
    <div name="work" className="w-full md:h-screen bg-black text-gray-200 z-0"> 
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-5xl font-bold inline border-b-4 text-gray-200 border-yellow-500">
            Work
          </p>
          <p className="py-4">Check out some of my recent projects</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* PROJECT */}
          <div
            style={{
              backgroundImage: `url(${NetflixImg})`,
              backgroundPosition: "left",
            }}
            className="group container flex justify-center items-center mx-auto content-div text-center relative hover:scale-105 duration-300 rounded-md"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-0 transition duration-300 z-10 group-hover:bg-opacity-80"></div>
            <div className="relative z-20 opacity-0 group-hover:opacity-100 transition duration-300">
              <span className="text-2xl font-bold text-white tracking-wider mt-4">
                Netflix Clone
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/umairshah14/NetflixClone-FE-ONLY">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg transition duration-200 z-10 hover:bg-gray-500 hover:text-white">
                    Github
                  </button>
                </a>
                <a href="https://umairshah14.github.io/NetflixClone-FE-ONLY/#/login">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg transition duration-200 z-10 hover:bg-gray-500 hover:text-white">
                    Deployed
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundImage: `url(${fitmaxImg})`,
              backgroundPosition: "center",
            }}
            className="group container flex justify-center items-center mx-auto content-div text-center relative hover:scale-105 duration-300 rounded-md"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-0 transition duration-300 z-10 group-hover:bg-opacity-80"></div>
            <div className="relative z-20 opacity-0 group-hover:opacity-100 transition duration-300">
              <span className="text-2xl font-bold text-white tracking-wider mt-4">
                FITMAX
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/umairshah14/FitMax">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg transition duration-200 z-10 hover:bg-gray-500 hover:text-white">
                    Github
                  </button>
                </a>
                <a href="https://fitmaxproject.netlify.app/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg transition duration-200 z-10 hover:bg-gray-500 hover:text-white">
                    Deployed
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundImage: `url(${PremImg})`,
              backgroundPosition: "center",
            }}
            className="group container flex justify-center items-center mx-auto content-div text-center relative hover:scale-105 duration-300 rounded-md"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-0 transition duration-300 z-10 group-hover:bg-opacity-90"></div>
            <div className="relative z-20 opacity-0 group-hover:opacity-100 transition duration-300">
              <span className="text-2xl font-bold text-white tracking-wider mt-4">
                Premier League Table
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/umairshah14/Premier-League-Info">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg transition duration-200 z-10 hover:bg-gray-500 hover:text-white">
                    Github
                  </button>
                </a>
                <a href="https://umairshah14.github.io/Premier-League-Info/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg transition duration-200 z-10 hover:bg-gray-500 hover:text-white">
                    Deployed
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundImage: `url(${PasswordGenImg})`,
              backgroundPosition: "left",
            }}
            className="group container flex justify-center items-center mx-auto content-div text-center relative hover:scale-105 duration-300 rounded-md"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-0 transition duration-300 z-10 group-hover:bg-opacity-70"></div>
            <div className="relative z-20 opacity-0 group-hover:opacity-100 transition duration-300">
              <span className="text-2xl font-bold text-white tracking-wider mt-4">
                Password Generator
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/umairshah14/Password-Generator">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg transition duration-200 z-10 hover:bg-gray-500 hover:text-white">
                    Github
                  </button>
                </a>
                <a href="https://umairshah14.github.io/Password-Generator/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg transition duration-200 z-10 hover:bg-gray-500 hover:text-white">
                    Deployed
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundImage: `url(${ReadMeGen})`,
              backgroundPosition: "left top",
            }}
            className="group container flex justify-center items-center mx-auto content-div text-center relative hover:scale-105 duration-300 bg-contain rounded-md"
          >
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-0 transition duration-300 z-10 group-hover:bg-opacity-70"></div>
            <div className="relative z-20 opacity-0 group-hover:opacity-100 transition duration-300">
              <span className="text-2xl font-bold text-white tracking-wider mt-4">
                Readme Generator
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/umairshah14/README-Generator">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg transition duration-200 z-10 hover:bg-gray-500 hover:text-white">
                    Github
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundImage: `url(${ForecastImg})`,
              backgroundPosition: "left",
            }}
            className="group container flex justify-center items-center mx-auto content-div text-center relative hover:scale-105 duration-300 rounded-md  "
          >
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-0 transition duration-300 z-10 group-hover:bg-opacity-70"></div>
            <div className="relative z-20 opacity-0 group-hover:opacity-100 transition duration-300">
              <span className="text-2xl font-bold text-white tracking-wider mt-4">
                Weather Forecast
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/umairshah14/Weather-Dashboard">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg transition duration-200 z-10 hover:bg-gray-500 hover:text-white">
                    Github
                  </button>
                </a>
                <a href="https://umairshah14.github.io/Weather-Dashboard/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg transition duration-200 z-10 hover:bg-gray-500 hover:text-white">
                    Deployed
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
