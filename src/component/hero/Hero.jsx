import "./Hero.css";
import React, { useState } from "react";
import RegisterNow from "./registerNow/RegisterNow.jsx";
import HeroTimer from "./timer/HeroTimer.jsx";

function Hero() {
  const [navStatus, setNavStatus] = useState(false);

  const toggleNav = () => {
    setNavStatus(!navStatus);
    if (!navStatus && window.innerWidth <= 770) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <div id="home" className="bg-wpr overflow-hidden relative">
      <div className="px-[5vw] max-w-screen-2xl mx-auto h-[100vh] relative">
        <div className="flex gap-4 px-[5vw] w-full justify-end py-3 text-white absolute top-0 left-0 text-xl">
          <div
            className={`max-md:fixed max-md:w-[60vw] max-md:text-lg flex-1 z-10 max-md:h-full max-md:bg-[#1a1a1a] max-md:flex-col items-center max-md:justify-center max-md:shadow flex gap-4 justify-between duration-100 max-md:top-0 ${
              navStatus ? "right-0" : "-right-[60vw]"
            }`}
          >
            <a
              className="hover:scale-[1.1] duration-500 "
              onClick={toggleNav}
              href="#home"
            >
              Home
            </a>
            <a
              className="hover:scale-[1.1] duration-500 "
              onClick={toggleNav}
              href="#theme"
            >
              Theme
            </a>
            <a
              className="hover:scale-[1.1] duration-500 "
              onClick={toggleNav}
              href="#event"
            >
              Event
            </a>
            <a
              className="hover:scale-[1.1] duration-500 "
              onClick={toggleNav}
              href="#sponser"
            >
              Sponser
            </a>
            <a
              className="hover:scale-[1.1] duration-500 "
              onClick={toggleNav}
              href="#help"
            >
              FAQs
            </a>
          </div>
          <div className="md:ml-[-18px]">
            <a
              onClick={toggleNav}
              className="hidden max-md:flex  items-center z-10  relative"
            >
              <div className="w-10  flex flex-col justify-center gap-2 items-end">
                <div
                  className={`h-1 rounded-md w-full  duration-100 bg-white ${
                    navStatus ? "rotate-45 translate-y-3" : ""
                  }`}
                ></div>
                <div
                  className={`h-1 w-[75%] rounded-md  duration-100${
                    navStatus ? "bg-transparent" : " bg-white "
                  }`}
                ></div>
                <div
                  className={`h-1 rounded-md bg-white  duration-100 ${
                    navStatus
                      ? "-rotate-45 w-[100%] -translate-y-3 duration-100"
                      : " w-[50%] "
                  }`}
                ></div>
              </div>
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2 h-full pt-[60px] pb-[35px] flex-col">
          <h1 className="text-white mt-4 text-center text-2xl max-md:text-lg font-semibold  ">
            A GDSC ADGIPS EXCLUSIVE
          </h1>
          <div className="max-w-[600px]">
            <img src="/assets/Logo1.png" alt="logo" />
          </div>
          <a
            className="px-6 py-2 font-bold  flex-nowrap rounded-md bg-white text-black  flex justify-center gap-2 items-center "
            href=""
          >
            Apply With
            <svg
              className="h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="black"
              viewBox="0 0 619.1 129"
            >
              <defs></defs>
              <title>Devfolio - Dark</title>
              <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                  <path
                    class="cls-1"
                    d="M156,24h33.8a52.81,52.81,0,0,1,23.75,4.93,34.94,34.94,0,0,1,15.26,14.3,44.35,44.35,0,0,1,5.3,22.2,45,45,0,0,1-5.25,22.34,34.63,34.63,0,0,1-15.21,14.3A53.13,53.13,0,0,1,189.81,107H156Zm31.67,65a24.59,24.59,0,0,0,18.08-6,24.41,24.41,0,0,0,6-18.08,24.18,24.18,0,0,0-6-18.08A24.72,24.72,0,0,0,187.67,41H177V89Z"
                  />
                  <path
                    class="cls-1"
                    d="M298,82H262a12.66,12.66,0,0,0,4.34,8.09,14.45,14.45,0,0,0,9.09,2.45,28.89,28.89,0,0,0,16.26-5.27L297,100.9a34,34,0,0,1-10.45,5,42.52,42.52,0,0,1-12.17,1.82,38.07,38.07,0,0,1-17.22-3.63,26,26,0,0,1-11.18-10.45A31.3,31.3,0,0,1,242,77.68a32.21,32.21,0,0,1,3.68-15.54A26.58,26.58,0,0,1,256,51.47,29.39,29.39,0,0,1,271,47.66a25.44,25.44,0,0,1,19.53,8A32.07,32.07,0,0,1,298,77ZM262,72H280.2q-.68-10.31-9.09-10.31T262,72Z"
                  />
                  <path
                    class="cls-1"
                    d="M345.58,49h20.55l-25.91,58H322.88l-25.5-58h22l12.77,32.69Z"
                  />
                  <path
                    class="cls-1"
                    d="M403,50h13V65H402v42H381V65H371V50h10.71a23.35,23.35,0,0,1,8-17.86A38.06,38.06,0,0,1,412,25.31l7.22-.45,1.2,14.87-5.56.22a19.37,19.37,0,0,0-9.2,2A6.74,6.74,0,0,0,403,48Z"
                  />
                  <path
                    class="cls-1"
                    d="M434.43,104A26.48,26.48,0,0,1,423.3,93.51a31.3,31.3,0,0,1-3.91-15.95,31,31,0,0,1,3.91-15.9A26.3,26.3,0,0,1,434.38,51.3a40.48,40.48,0,0,1,33.53,0A26.3,26.3,0,0,1,479,61.66a31,31,0,0,1,3.91,15.9A31.3,31.3,0,0,1,479,93.51,26.58,26.58,0,0,1,467.68,104a39.75,39.75,0,0,1-33.43,0Zm27.85-26.26q0-14.54-11.13-14.54T440,77.74q0,14.54,11.13,14.54T462.27,77.74Z"
                  />
                  <path class="cls-1" d="M492,107V24h21v83Z" />
                  <path
                    class="cls-1"
                    d="M525,20h22V39H525Zm0,86.86V49h21v58Z"
                  />
                  <path d="M570.62,104a26.48,26.48,0,0,1-11.13-10.49,31.3,31.3,0,0,1-3.91-15.95,31,31,0,0,1,3.91-15.9A26.3,26.3,0,0,1,570.57,51.3a40.48,40.48,0,0,1,33.53,0,26.3,26.3,0,0,1,11.08,10.36,31,31,0,0,1,3.91,15.9,31.3,31.3,0,0,1-3.91,15.95A26.58,26.58,0,0,1,604,104a39.75,39.75,0,0,1-33.43,0Zm27.85-26q0-14.54-11.13-14.54T576.21,78q0,14.54,11.13,14.54T598.42,78Z" />
                  <path
                    fill="#bD0b12"
                    class="cls-1"
                    d="M118,70.7c.26,29.53-21.71,54.87-50.95,58.2a16.34,16.34,0,0,1-1.86.1c-5.82,0-37.28,0-48.9-.47a12.9,12.9,0,0,1-10.36-7.81,15.81,15.81,0,0,0,5.5,1.32c4,.36,11.06,0,20.69,0,10.25,0,21.33.09,26.64.14a46.78,46.78,0,0,0,8.46-.65A60.65,60.65,0,0,0,102,102.23a63.6,63.6,0,0,0,16-35.07Z"
                  />
                  <path
                    fill="#bD0b12"
                    d="M113.34,58A58,58,0,0,1,61,116H12A14,14,0,0,1,0,102V14C0,7,5,0,12,0H62A57,57,0,0,1,113.34,58Z"
                  />
                </g>
              </g>
            </svg>
          </a>
          <div>
            <HeroTimer />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 flex border-black border-2">
        <a className="bg-white text-red-700 inline-block cursor-pointer whitespace-nowrap py-[2px] text-lg ">
          <RegisterNow />
        </a>
      </div>
    </div>
  );
}

export default Hero;
