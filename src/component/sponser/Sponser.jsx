import "./Sponser.css";
import React from "react";

function Sponser() {
  return (
    <div className="bg-black pb-10 sm:pb-20">
      <div className="flex text-3xl sm:text-5xl justify-center py-6 sm:py-10">
        <div className="bg-gradient-to-r from-gray-500 to-white text-transparent bg-clip-text">
          MEET OUR
        </div>
        <div className="bg-gradient-to-r from-red-600 to-red-900 ml-2 sm:ml-4 px-1">
          SPONSORS
        </div>
      </div>

      <div className="flex justify-center px-4 py-10 sm:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-14 ">
          <div className="h-64 w-64 lg:w-44 lg:h-44  cursor-pointer bg-line">
            <img
              src=""
              alt="sponsor_image"
              className="h-full bg-white w-full object-cover translate-x-2 -translate-y-2"
            />
          </div>
          <div className="h-64 w-64 lg:w-44 lg:h-44  cursor-pointer bg-line">
            <img
              src=""
              alt="sponsor_image"
              className="h-full bg-white w-full object-cover translate-x-2 -translate-y-2"
            />
          </div>
          <div className="h-64 w-64 lg:w-44 lg:h-44  cursor-pointer bg-line">
            <img
              src=""
              alt="sponsor_image"
              className="h-full bg-white w-full object-cover translate-x-2 -translate-y-2"
            />
          </div>
          <div className="h-64 w-64 lg:w-44 lg:h-44  cursor-pointer bg-line">
            <img
              src=""
              alt="sponsor_image"
              className="h-full bg-white w-full object-cover translate-x-2 -translate-y-2"
            />
          </div>
          <div className="h-64 w-64 lg:w-44 lg:h-44  cursor-pointer bg-line">
            <img
              src=""
              alt="sponsor_image"
              className="h-full bg-white w-full object-cover translate-x-2 -translate-y-2"
            />
          </div>
          <div className="h-64 w-64 lg:w-44 lg:h-44  cursor-pointer bg-line">
            <img
              src=""
              alt="sponsor_image"
              className="h-full bg-white w-full object-cover translate-x-2 -translate-y-2"
            />
          </div>
          <div className="h-64 w-64 lg:w-44 lg:h-44  cursor-pointer bg-line">
            <img
              src=""
              alt="sponsor_image"
              className="h-full bg-white w-full object-cover translate-x-2 -translate-y-2"
            />
          </div>
          <div className="h-64 w-64 lg:w-44 lg:h-44  cursor-pointer bg-line">
            <img
              src=""
              alt="sponsor_image"
              className="h-full bg-white w-full object-cover translate-x-2 -translate-y-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sponser;
