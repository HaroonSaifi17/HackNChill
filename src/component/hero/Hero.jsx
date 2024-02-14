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
  const targetDate = "2025-02-28T00:00:00";
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  const { days, hours, minutes, seconds } = timeLeft;
  return (
    <div id="home" className="bg-wpr overflow-x-hidden relative">
      <div className="h-full max-w-screen-2xl px-[5vw] mx-auto flex justify-center items-center relative">
        <div className="flex gap-4 absolute top-0 left-0  px-[5vw] w-full justify-end py-8 text-white  max-h-[100px] text-2xl">
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
        <div className="flex justify-center items-center gap-4 h-full flex-col">
          <h1 className="text-white text-center text-2xl max-md:text-lg font-semibold  ">
            A GDSC ADGIPS EXCLUSIVE
          </h1>
          <div className="max-w-[500px]">
            <img src="/assets/Logo.png" alt="logo" />
          </div>
          <a
            className="px-4 py-2 rounded-full bg-white text-black font-semibold inline-block "
            href=""
          >
            Apply-With-Devfolio
          </a>
          <div className="mt-6">
            {" "}
            {Object.entries(timeLeft).length === 0 ? (
              <span className="text-4xl text-white">Countdown expired!</span>
            ) : (
              <div className="flex  max-md:gap-1 gap-2 text-center">
                <span className="bg-white w-[70px] p-2">
                  <span className="text-2xl font-semibold">{days}</span>
                  <br />
                  Days
                </span>
                <span className="bg-white  w-[70px] p-2">
                  <span className="text-2xl font-semibold">{hours}</span>
                  <br />
                  Hours
                </span>
                <span className="bg-white  w-[70px] p-2">
                  <span className="text-2xl font-semibold">{minutes}</span>
                  <br />
                  Minutes
                </span>
                <span className="bg-white  w-[70px] p-2">
                  <span className="text-2xl font-semibold">{seconds}</span>
                  <br />
                  seconds
                </span>
              </div>
            )}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 border-black border-2">
          <a className="bg-white text-red-700 inline-block cursor-pointer whitespace-nowrap py-[2px] text-lg ">
            <RegisterNow />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
