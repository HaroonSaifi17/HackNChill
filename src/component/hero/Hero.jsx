import "./Hero.css";
import React, { useState } from "react";
import RegisterNow from "./registerNow/RegisterNow.jsx";
import HeroTimer from "./timer/HeroTimer.jsx";

const RegisterButton = () => (
  // <button className={"cta flex"}>
  //   <span className="hover-underline-animation">Register with Devfolio</span>
  //   <svg
  //     id="arrow-horizontal"
  //     fill={"white"}
  //     xmlns="http://www.w3.org/2000/svg"
  //     width="30"
  //     height="10"
  //     viewBox="0 0 46 16"
  //   >
  //     <path
  //       id="Path_10"
  //       data-name="Path 10"
  //       d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z"
  //       transform="translate(30)"
  //     ></path>
  //   </svg>
  // </button>
  <div
    className="apply-button"
    data-hackathon-slug="hacknchill-1"
    data-button-theme="dark-inverted"
    style={{ height: "44px", width: "312px" }}
  ></div>
);

function Hero() {
  const [navStatus, setNavStatus] = useState(false);
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
              href="#sponsor"
            >
              Sponsor
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
        <div className="flex justify-center items-center gap-4 h-full pt-[60px] pb-[35px] flex-col">
          <div className={"flex align-items-center max-md:flex-col-reverse"}>
            <h1 className="text-white text-center text-2xl max-md:text-lg font-semibold float-left">
              A GDSC ADGIPS EXCLUSIVE
            </h1>
            &nbsp;
            <img src={"/gdsc.png"} width={80} />
          </div>

          <div className="max-w-[600px]">
            <img src="/assets/Logo1.png" alt="logo" />
          </div>
          <RegisterButton />
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
