import "./Themes.css";
import React, { useEffect, useRef, useState } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLeftLong, faRightLong} from "@fortawesome/free-solid-svg-icons";

function Themes() {
  const themes = [
    {
      img: "assets/Themes/sustainability.jpg",
      title: "Sustainability",
    },
    {
      img: "assets/Themes/culture and heritage .jpg",
      title: "Culture and Heritage",
    },
    {
      img: "assets/Themes/cyber security .jpg",
      title: "Cyber Security",
    },
    {
      img: "assets/Themes/Healthcare .jpg",
      title: "HealthCare",
    },
    {
      img: "assets/Themes/open innovation .jpg",
      title: "Open Innovation",
    },
    {
      img: "assets/Themes/smart Education .jpg",
      title: "Smart Education",
    },
  ];
  const [select, setSelect] = useState(Math.floor(themes.length / 2));
  const scrollRef = useRef(null);
  let scrollLength = 0;
  let padding = window.innerWidth / 2 - 125;

  useEffect(() => {
    const handleScroll = () => {
      if (
        scrollRef.current &&
        (scrollLength + 5 < scrollRef.current.scrollLeft ||
          scrollLength - 5 > scrollRef.current.scrollLeft)
      ) {
        const windowWidth = window.innerWidth;
        const cards = scrollRef.current.querySelectorAll(".snap-center");
        const center = windowWidth / 2;
        scrollLength = scrollRef.current.scrollLeft;
        cards.forEach((card, index) => {
          const cardRect = card.getBoundingClientRect();
          const cardCenter = cardRect.left + cardRect.width / 2;
          const distanceFromCenter = Math.abs(cardCenter - center);
          const maxScaleFactor = 1.4;
          const scaleFactor = Math.min(
            1,
            1 - (distanceFromCenter / (center * 1.5)) * (maxScaleFactor - 1)
          );
          if (scaleFactor > 0.99) {
            setSelect(index);
          }
          card.style.transform = `scale(${scaleFactor})`;
        });
      }
    };
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = (themes.length / 2) * 250 - 125;
      scrollLength = scrollRef.current.scrollLeft;
      scrollRef.current.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);
  return (
    <div id="theme" className="relative overflow-hidden">
      <button className={"themeNavigationButtons left-10"} onClick={()=> scrollRef.current.scrollBy({left:-5, behavior: "smooth"})}>
        <FontAwesomeIcon icon={faLeftLong} />
      </button>
      <button className={"themeNavigationButtons right-10"} onClick={()=> scrollRef.current.scrollBy({left:5, behavior: "smooth"})}>
        <FontAwesomeIcon icon={faRightLong} />
      </button>
      <div className=" py-16 overflow-hidden">
        <h3 className="text-center text-white font-semibold text-5xl font-ubuntu">
          THEMES FOR HACKATHON
        </h3>
        <div
          ref={scrollRef}
          style={{
            paddingLeft:
              window.innerWidth < 1024
                ? padding + 10 * themes.length + "px"
                : window.innerWidth < 768
                ? padding + 15 * themes.length + "px"
                : window.innerWidth < 640
                ? padding + 20 * themes.length + "px"
                : padding + "px",
            paddingRight:
              window.innerWidth < 1024
                ? padding + 10 * themes.length + "px"
                : window.innerWidth < 768
                ? padding + 15 * themes.length + "px"
                : window.innerWidth < 640
                ? padding + 20 * themes.length + "px"
                : padding + "px",
          }}
          className={`overflow-x-scroll max-md:gap-0 flex gap-4 w-[100vw] hide-scroll mt-5 snap-x snap-mandatory`}
        >
          {themes.map((item, index) => {
            return (
              <div
                key={index}
                className="w-[250px] bg-white max-sm:mx-[-20px] max-md:mx-[-15px] max-lg:mx-[-10px] duration-75 flex-grow-1 flex-shrink-0 overflow-hidden snap-center rounded-3xl"
              >
                <img
                  className="w-[250px] h-[80%] object-cover"
                  src={item.img}
                  alt=""
                />
                <h3 className="bg-white text-[#831010] text-center p-2 text-2xl font-semibold pb-0 text-nowrap mt-3 ">
                  {item.title}
                </h3>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center gap-2 my-8">
          {themes.map((item, index) => {
            return (
              <span
                className={`w-3 h-3 rounded-full ${
                  select == index ? "bg-[#831010]" : "bg-white"
                }`}
                key={index}
              ></span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Themes;
