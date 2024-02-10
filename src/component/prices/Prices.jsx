import "./Prices.css";
import React from "react";

function Prices() {
  return (
    <div className="prices-bg">
      <div className="max-w-screen-2xl mx-auto px-[5vw] py-16">
        <h3 className="text-center text-6xl font-semibold text-white">
          PRIZES
        </h3>
        <div className="flex justify-around items-center max-md:flex-col gap-5 mt-12 max-md:mb-0  mb-[200px]">
          <div className="order-2 max-md:order-1">
            <div className="inline-block  w-52 h-52 border-white border-[12px] rounded-md"></div>
          </div>
          <div className="mb-[-200px] max-md:mb-0 justify-start order-1 max-md:order-2">
            <svg
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              className="w-52"
            >
              <polygon
                points="50,5 95,95 5,95"
                fill="none"
                stroke="#DB0000"
                strokeWidth="6"
              />
            </svg>
          </div>
          <div className="mb-[-200px] max-md:mb-0 order-3">
            <div className="inline-block  w-52 h-52 border-[#DB0000] border-[12px] rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prices;
