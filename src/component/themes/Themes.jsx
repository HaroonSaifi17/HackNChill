import "./Themes.css";
import React, { useEffect, useRef } from "react";

function Themes() {
  const scrollRef = useRef(null);
  let scrollLength = 0;

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
        cards.forEach((card) => {
          const cardRect = card.getBoundingClientRect();
          const cardCenter = cardRect.left + cardRect.width / 2;
          const distanceFromCenter = Math.abs(cardCenter - center);
          const maxScaleFactor = 1.3;
          const scaleFactor =
            1 - (distanceFromCenter / center) * (maxScaleFactor - 1);
          card.style.transform = `scale(${scaleFactor})`;
        });
      }
    };
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = window.innerWidth / 2;
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
    <div id="theme" className="bg-[#0E0E11] overflow-hidden">
      <div className="max-w-screen-2xl mx-auto py-16 overflow-hidden">
        <h2 className="text-center text-white text-4xl">
          THEMES FOR HACKATHON
        </h2>
        <div
          ref={scrollRef}
          className="overflow-x-scroll max-md:gap-1 flex gap-4 w-[100vw] hide-scroll mt-5 snap-x snap-mandatory"
        >
          <div className="w-[250px] duration-75 flex-grow-1 flex-shrink-0 overflow-hidden snap-center rounded-3xl">
            <img
              className="w-[250px] h-[150px] object-cover"
              src="https://placehold.co/250x150"
              alt=""
            />
            <h3 className="bg-white text-[#831010] text-center p-2 text-2xl font-semibold pb-0">
              Health
            </h3>
            <p className="p-2 bg-white text-center text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              fugit mollitia assumenda quia illum dolorum corporis maxime eaque
            </p>
          </div>
          <div className="w-[250px]  duration-75  flex-grow-1 flex-shrink-0  overflow-hidden snap-center  rounded-3xl">
            <img
              className="w-[250px] h-[150px] object-cover"
              src="https://placehold.co/250x150"
              alt=""
            />
            <h3 className="bg-white text-[#831010] text-center p-2 text-2xl font-semibold pb-0">
              Health
            </h3>
            <p className="p-2 bg-white text-center text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              fugit mollitia assumenda quia illum dolorum corporis maxime eaque
            </p>
          </div>
          <div className="w-[250px] duration-75   flex-grow-1 flex-shrink-0  overflow-hidden snap-center  rounded-3xl">
            <img
              className="w-[250px] h-[150px] object-cover"
              src="https://placehold.co/250x150"
              alt=""
            />
            <h3 className="bg-white text-[#831010] text-center p-2 text-2xl font-semibold pb-0">
              Health
            </h3>
            <p className="p-2 bg-white text-center text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              fugit mollitia assumenda quia illum dolorum corporis maxime eaque
            </p>
          </div>
          <div className="w-[250px]  duration-75 overflow-hidden   flex-grow-1 flex-shrink-0  snap-center rounded-3xl">
            <img
              className="w-[250px] h-[150px] object-cover"
              src="https://placehold.co/250x150"
              alt=""
            />
            <h3 className="bg-white text-[#831010] text-center p-2 text-2xl font-semibold pb-0">
              Health
            </h3>
            <p className="p-2 bg-white text-center text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              fugit mollitia assumenda quia illum dolorum corporis maxime eaque
            </p>
          </div>
          <div className="w-[250px] overflow-hidden duration-75   flex-grow-1 flex-shrink-0  snap-center  rounded-3xl">
            <img
              className="w-[250px] h-[150px] object-cover"
              src="https://placehold.co/250x150"
              alt=""
            />
            <h3 className="bg-white text-[#831010] text-center p-2 text-2xl font-semibold pb-0">
              Health
            </h3>
            <p className="p-2 bg-white text-center text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              fugit mollitia assumenda quia illum dolorum corporis maxime eaque
            </p>
          </div>
          <div className="w-[250px] overflow-hidden  duration-75  flex-grow-1 flex-shrink-0  snap-center  rounded-3xl">
            <img
              className="w-[250px] h-[150px] object-cover"
              src="https://placehold.co/250x150"
              alt=""
            />
            <h3 className="bg-white text-[#831010] text-center p-2 text-2xl font-semibold pb-0">
              Health
            </h3>
            <p className="p-2 bg-white text-center text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              fugit mollitia assumenda quia illum dolorum corporis maxime eaque
            </p>
          </div>
          <div className="w-[250px] overflow-hidden  flex-grow-1  duration-75 flex-shrink-0  snap-center  rounded-3xl">
            <img
              className="w-[250px] h-[150px] object-cover"
              src="https://placehold.co/250x150"
              alt=""
            />
            <h3 className="bg-white text-[#831010] text-center p-2 text-2xl font-semibold pb-0">
              Health
            </h3>
            <p className="p-2 bg-white text-center text-black">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
              fugit mollitia assumenda quia illum dolorum corporis maxime eaque
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Themes;
