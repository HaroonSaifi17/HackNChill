import React from "react";

const Certificate = ({ head, id }) => {
  return (
    <div>
      <div id={id}>
        <div className="max-w-screen-2xl mx-auto px-[5vw] py-[50px]">
          <div className="flex text-3xl sm:text-5xl mx-[-5vw] justify-center ">
            <div className="bg-gradient-to-r from-gray-500 to-white text-transparent bg-clip-text font-semibold text-5xl font-ubuntu">
              {head
                .split(" ")
                .slice(0, head.split(" ").length - 1)
                .join(" ")}
            </div>
            <div className="bg-gradient-to-r from-red-600 to-red-900 ml-2 sm:ml-4 px-1 text-white font-semibold text-5xl font-ubuntu">
              {head.split(" ")[head.split(" ").length - 1]}
            </div>
          </div>

          <div id={id}>
            {" "}
            <h1 className="text-white text-center pt-20 lg:text-6xl mb-16 text-3xl ">
              Coming Soon...{" "}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
