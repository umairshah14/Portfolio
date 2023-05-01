import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-black text-gray-200">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-5xl font-bold inline border-b-4 border-yellow-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full sm:grid grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold pl-2 ">
            <p>
              Hi, Im Umair nice to meet yopu nice to meet you please take a look
              around
            </p>
          </div>
          <div className="sm:text-left pl-2 ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore
            repellat rerum sequi repellendus asperiores earum fugit delectus
            aliquid magnam, obcaecati dicta, illo velit tempora praesentium
            repudiandae cupiditate voluptatibus tenetur nesciunt.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
