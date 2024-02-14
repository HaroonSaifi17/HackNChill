import "./Prices.css";
import React from "react";

function Prices() {
  return (
    <div id="prizes" className="prices-bg">
      <div className="max-w-screen-2xl mx-auto px-[5vw] py-16">
        <h3 className="text-center text-6xl font-semibold text-white">
          PRIZES
        </h3>
        <div className="flex justify-around items-center max-md:flex-col gap-7 mt-12 max-md:mb-0  mb-[200px]">
          <div className="flex-col flex items-center gap-5 max-md:order-1 order11  order-2">
            <div className="inline-block mx-auto  w-52 h-52 border-white border-[12px] rounded-md"></div>
            <h1 className="text-white text-4xl font-semibold">#1</h1>
            <p className="text-white text-center ">
              Our premium product with top-notch performance and durability.
              Ideal for demanding tasks and long-term use.
            </p>
          </div>
          <div className="mb-[-200px] max-md:mb-0 justify-start flex-col flex gap-5 items-center max-md:order-2  order-1 ">
            <svg
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
              className="w-52 mx-auto"
            >
              <polygon
                points="50,5 95,95 5,95"
                fill="none"
                stroke="#DB0000"
                strokeWidth="6"
              />
            </svg>
            <h1 className="text-white text-4xl font-semibold">#2</h1>
            <p className="text-white text-center">
              This is a high-quality product with advanced features. It's
              perfect for professionals and enthusiasts alike.
            </p>
          </div>
          <div className="mb-[-200px] flex-col flex items-center gap-5 max-md:mb-0 order-3">
            <div className=" w-52 h-52 border-[#DB0000] border-[12px] inline-block rounded-full"></div>
            <h1 className="text-white text-4xl font-semibold">#3</h1>
            <p className="text-white text-center">
              A budget-friendly option without compromising on quality. Great
              for beginners and casual users.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prices;
