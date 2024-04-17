import "./Sponser.css";
import React from "react";

const SponsorCard = ({imgName, alt, className}) => (
    <div className={"h-44 w-80 lg:w-80 lg:h-44  cursor-pointer bg-line " + className}>
      <img
          src={imgName}
          alt={alt}
          className="h-full bg-white w-full  translate-x-2 -translate-y-2"
      />
    </div>
)

function Sponsor({head, id}) {
  return (
      <div id={id}>
        <div className="max-w-screen-2xl mx-auto px-[5vw] pb-[8rem] pt-[4rem]">
          <div className="headingDivSponsor px-2 md:px-0">
            <div className="headingDivSponsorMain">
              {head
                  .split(" ")
              .slice(0, head.split(" ").length - 1)
              .join(" ")}
          </div>
          <div className="headingDivSponsorSub">
            {head.split(" ")[head.split(" ").length - 1]}
          </div>
        </div>

        <h2 className="my-5 mb-4 text-3xl text-center font-semibold text-indigo-300 uppercase">
          Platinum
        </h2>
        <div className="flex justify-center items-center flex-wrap gap-4">
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <SponsorCard imgName={"assets/Sponsors/devfolio.png"} alt={"DEVFOLIO LOGO"} />
            <SponsorCard imgName={"assets/Sponsors/ethindia.png"} alt={"ETHINDIA LOGO"} />
            <SponsorCard imgName={"assets/Sponsors/polygon.png"} alt={"POLYGON LOGO"} />
            <SponsorCard imgName="assets/Sponsors/Bobble-AI.jpg" alt="BobbleAI LOGO" /><SponsorCard imgName={"assets/community/xyz.jpeg"} alt={"DOT XYZ"} />

          </div>
        </div>

        {/* <h2 className="my-5 mb-2 text-3xl text-center font-semibold  text-amber-300 uppercase">
          Gold
        </h2>
        <div>
          {" "}
          <h1 className="text-white text-center pt-20 lg:text-6xl mb-16 text-3xl ">
            Coming Soon...{" "}
          </h1>
        </div> */}

          {/*<h2 className="my-5 mb-4 text-3xl text-center font-semibold  text-gray-300 uppercase">
            Silver
          </h2>
          <div>
            {" "}
            <h1 className="text-white text-center pt-20 lg:text-6xl mb-16 text-3xl ">
              Coming Soon...{" "}
            </h1>
          </div>*/}


        {/*
        <h2 className="my-5 mb-4 text-3xl text-center font-semibold  text-stone-400 uppercase">
          Bronze
      </h2>*/}

      </div>
    </div>
  );
}

export default Sponsor;
