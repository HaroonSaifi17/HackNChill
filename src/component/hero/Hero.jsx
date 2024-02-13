import "./Hero.css";
import React, { useEffect, useState } from "react";
import RegisterNow from "./registerNow/RegisterNow.jsx";

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
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(-window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div id="home" className="bg-wpr overflow-x-hidden relative">
      <div className="h-full max-w-screen-2xl px-[5vw] mx-auto">
        <div className="flex gap-5 justify-end py-8 text-white  max-h-[100px] text-3xl">
          <div
            className={`max-md:fixed max-md:w-[60vw] max-md:text-lg flex-1 z-10 max-md:h-full max-md:bg-[#1a1a1a] max-md:flex-col items-center max-md:justify-center max-md:shadow flex gap-5 justify-between duration-100 max-md:top-0 ${
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
          <div>
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
        <div className="flex justify-center items-center flex-col -mt-[100px] h-full">
          <h1 className="text-white text-center text-2xl font-semibold mb-16">
            A GDSC ADGIPS EXCLUSIVE
          </h1>
          <div>
            <img src="/assets/Logo.png" alt="logo" />
          </div>
        </div>
      </div>
      <div
        // style={{ left: `${scrollPosition / 2}px` }}
        className="absolute bottom-0 border-t-4 border-b-4 border-black bg-white w-screen"
      >
        <a className="bg-white text-red-700 inline-block cursor-pointer whitespace-nowrap text-lg ">
          <RegisterNow />
        </a>
      </div>
    </div>
  );
}

export default Hero;
