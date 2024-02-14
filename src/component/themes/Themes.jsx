import "./Themes.css";
import React, { useEffect, useRef, useState } from "react";

function Themes() {
  const themes = [
    {
      img: "http://placehold.it/250x150",
      title: "Health",
      discription:
        "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet.",
    },
    {
      img: "http://placehold.it/250x150",
      title: "Health",
      discription:
        "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet.",
    },
    {
      img: "http://placehold.it/250x150",
      title: "Health",
      discription:
        "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet.",
    },
    {
      img: "http://placehold.it/250x150",
      title: "Health",
      discription:
        "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet.",
    },
    {
      img: "http://placehold.it/250x150",
      title: "Health",
      discription:
        "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet.",
    },
    {
      img: "http://placehold.it/250x150",
      title: "Health",
      discription:
        "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet.",
    },
    {
      img: "http://placehold.it/250x150",
      title: "Health",
      discription:
        "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet.",
    },
  ];
  const [select, setSelect] = useState(Math.floor(themes.length / 2));
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
        cards.forEach((card,index) => {
          const cardRect = card.getBoundingClientRect();
          const cardCenter = cardRect.left + cardRect.width / 2;
          const distanceFromCenter = Math.abs(cardCenter - center);
          const maxScaleFactor = 1.4;
          const scaleFactor = Math.min(
            1,
            1 - (distanceFromCenter / (center * 1.5)) * (maxScaleFactor - 1)
          );
          if(scaleFactor>0.99){
            setSelect(index)
          }
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
          className="overflow-x-scroll max-md:gap-0 flex gap-4 w-[100vw] hide-scroll mt-5 snap-x snap-mandatory"
        >
          {themes.map((item, index) => {
            return (
              <div
                key={index}
                className="w-[250px] bg-white max-sm:mx-[-20px] max-md:mx-[-15px] max-lg:mx-[-10px] duration-75 flex-grow-1 flex-shrink-0 overflow-hidden snap-center rounded-3xl"
              >
                <img
                  className="w-[250px] h-[150px] object-cover"
                  src={item.img}
                  alt=""
                />
                <h3 className="bg-white text-[#831010] text-center p-2 text-2xl font-semibold pb-0">
                  {item.title}
                </h3>
                <p className="p-2 bg-white text-center text-black">
                  {item.discription}
                </p>
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
