import "./Prices.css";
import React from "react";

function Prices() {
  return (
    <div id="prizes" className="prices-bg">
      <div className="max-w-screen-2xl mx-auto px-[5vw] py-16">
        <h3 className="text-center font-semibold text-white text-5xl font-ubuntu">
          PRIZES
        </h3>
        <div className="flex justify-around items-center max-md:flex-col gap-7 mt-12 max-md:mb-0  mb-[200px]">
          <div className="flex-col flex items-center max-w-[320px] gap-4 max-md:order-1 order11  order-2">
            <div className="inline-block mx-auto  w-48 h-48 border-white border-[12px] rounded-md"></div>
            <h1 className="text-white text-4xl text-center font-semibold mt-2">Winner: $300</h1>
            <p className="text-white text-center  px-2">
              Winners will be awarded with cash prize and Many more surprises for the winners
            </p>
          </div>
          <div className="mb-[-200px] max-md:mb-0  max-w-[320px] justify-start flex-col flex gap-4 items-center max-md:order-2  order-1 ">
            <svg
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              className="w-48 mx-auto"
            >
              <polygon
                points="50,5 95,95 5,95"
                fill="none"
                stroke="#DB0000"
                strokeWidth="6"
              />
            </svg>
            <h1 className="text-white text-4xl font-semibold text-center mt-2">2nd Place: $200</h1>
            <p className="text-white text-center px-2">
              Runner Up team will be awarded with cash prize along with gifts too.
            </p>
          </div>
          <div className="mb-[-200px] flex-col flex items-center  max-w-[320px] gap-4 max-md:mb-0 order-3">
            <div className=" w-48 h-48 border-[#DB0000] border-[12px] inline-block rounded-full"></div>
            <h1 className="text-white text-center text-4xl font-semibold mt-2">3rd Place: $150</h1>
            <p className="text-white text-center px-2">
              Team acquires Third place will be awarded with cash prize along with surprise gifts
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prices;
