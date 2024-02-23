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
      <div className={"flex flex-col"}>
        <h2 className="text-white text-center w-full py-5 px-[5vw]  font-semibold text-5xl font-ubuntu">
          TIMELINE
        </h2>
        <div
          style={{ transform: `translateX(${scrollPosition}px)` }}
          className="train"
        >
        </div>
        <div className="track"></div>
      </div>
    </div>
  );
}

export default Timeline;
