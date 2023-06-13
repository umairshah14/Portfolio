import React from "react";
import Project from "./Project";
import ReactTag from "./Tags/ReactTag";
import TailwindTag from "./Tags/TailwindTag";
import ApiTag from "./Tags/ApiTag";
import HTMLTag from "./Tags/HTMLTag";
import JsTag from "./Tags/JsTag";
import NodeTag from "./Tags/NodejsTag";
import CssTag from "./Tags/CssTag";


const Work = () => {
  const NetflixImg =
    "https://i.ibb.co/yQxQJ38/Screenshot-2023-05-01-at-18-06-13.png";
  const fitmaxImg =
    "https://i.ibb.co/FKBd5sD/Screenshot-2023-05-01-at-22-09-36.png";
  const PremImg =
    "https://raw.githubusercontent.com/umairshah14/Premier-League-Info/main/assets/images/Screenshot%202023-02-07%20at%2018.28.54.png";
  const ForecastImg =
    "https://i.ibb.co/MkbcRh3/Screenshot-2023-05-23-at-13-53-23.png";
  const TranslatorAppImg =
    "https://i.ibb.co/Nm06gtz/Screenshot-2023-05-23-at-13-58-01.png";
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

          <Project
            image={NetflixImg}
            name="Netflix Clone"
            github="https://github.com/umairshah14/NetflixClone-FE-ONLY"
            deployed="https://umairshah14.github.io/NetflixClone-FE-ONLY/#/login"
            tagOne = {<ReactTag/>}
            tagTwo = {<TailwindTag/>}
            tagThree = {<JsTag/>}
            tagFour = {<ApiTag/>}
            position = "left"
          />
          <Project
            image={TranslatorAppImg}
            name="Google Translate Clone"
            github="https://github.com/umairshah14/Translator-App-React"
            deployed="https://umairtranslate.netlify.app/"
            tagOne = {<ReactTag/>}
            tagTwo = {<TailwindTag/>}
            tagThree = {<JsTag/>}
            tagFour = {<ApiTag/>}
            position = "center"
          />
          <Project
            image={ForecastImg}
            name="Weather Forecast"
            github="https://github.com/umairshah14/Weather-Forecast-React"
            deployed="https://weatherforecastumair.netlify.app/"
            tagOne = {<ReactTag/>}
            tagTwo = {<TailwindTag/>}
            tagThree = {<JsTag/>}
            tagFour = {<ApiTag/>}
            position = "center"


          />
          <Project
            image={fitmaxImg}
            name="FITMAX"
            github="https://github.com/umairshah14/FitMax"
            deployed="https://fitmaxproject.netlify.app/"
            tagOne = {<ReactTag/>}
            tagTwo = {<TailwindTag/>}
            tagThree = {<JsTag/>}
            tagFour = {<ApiTag/>}
            position = "center"

          />
          <Project
            image={PremImg}
            name="Premier League Table"
            github="https://github.com/umairshah14/Premier-League-Info"
            deployed="https://umairshah14.github.io/Premier-League-Info"
            tagOne = {<HTMLTag/>}
            tagTwo = {<CssTag/>}
            tagThree = {<JsTag/>}
            tagFour = {<ApiTag/>}
            position = "center"

          />
          <Project
            image={ReadMeGen}
            name="ReadMe Generator"
            github="https://github.com/umairshah14/README-Generator"
            tagOne = {<NodeTag/>}
            tagTwo = {<JsTag/>}
            position = "left"

          />
        </div>
      </div>
    </div>
  );
};

export default Work;
