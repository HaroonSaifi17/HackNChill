import React from "react";

const Certificate = ({ head, id }) => {
  return (
    <div>
      <div id={id}>
        <div className="max-w-screen-2xl mx-auto px-[5vw] pb-[8rem] hover:border-t-2 pt-[3rem]">
          <div className="headingDivSponsor">
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
          <h1 className="text-white text-center  lg:text-6xl mb-16 text-3xl "></h1>
          <div className="flex justify-center items-center flex-wrap gap-4">
            <div className="flex flex-wrap gap-4  items-center justify-center">
              <div className="h-20 w-85 lg:w-85 lg:h-20  cursor-pointer bg-line">
                <img
                  src="assets/Sponsors/gmc.png"
                  alt="GIVE MY CERTIFICATE LOGO"
                  className="h-full bg-white w-full  translate-x-2 -translate-y-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
