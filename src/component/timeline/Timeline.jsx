import { useEffect, useState } from "react";
import "./Timeline.css";

function Timeline() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const targetDiv = document.getElementById("timeline");
    const handleScroll = () => {
      const position = -targetDiv.getBoundingClientRect().top;
      if (position < 1000 && position > 0) setScrollPosition(position);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="timeline" className="timeline-wpr">
      <div>
        <h2 className="text-white text-4xl text-center w-full py-5 px-[5vw]">
          TIMELINE
        </h2>
        <div className="h-[10vh]"></div>
        <div
          style={{ transform: `translateX(${scrollPosition}px)` }}
          className="train"
        >
          <div className="absolute w-60 bg-white p-2 rounded-2xl rounded-tl-none rounded-br-none top-0 right-[1120px] text-center">
            <p className=" font-semibold text-xl ">Registration Start</p>
            <p className="font-normal text-md">10 March 2023</p>
            <span className="absolute bg-white w-[2px] h-[58px] top-full right-0">
            <span className="absolute bg-white w-[2px] h-[120px] top-[180px] right-0"></span>
            </span>
          </div>
          <div className="absolute w-60 bg-white p-2 rounded-2xl rounded-tl-none rounded-br-none top-0 right-[1427px] font-semibold text-xl text-center">
            Registration End
            <br /> <span className="font-normal text-md">30 March 2023</span>
            <span className="absolute bg-white w-[2px] h-[295px] top-full right-0">
            </span>
          </div>
          <div className="absolute w-60 bg-white p-2 rounded-2xl rounded-tl-none rounded-br-none top-0 left-[26px] font-semibold text-xl text-center">
            Event Start
            <br /> <span className="font-normal text-md">31 March 2023</span>
            <span className="absolute bg-white w-[2px] h-[295px] top-full right-0">
            </span>
          </div>
        </div>
        <div className="track"></div>
      </div>
    </div>
  );
}

export default Timeline;
