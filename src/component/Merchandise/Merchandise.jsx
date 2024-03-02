import React from "react";

const Merchandise = ({ head, id }) => {
  return (
    <div>
      <div id={id}>
        <div className="max-w-screen-2xl mx-auto px-[5vw] pb-[4rem]">
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

          <div id={id}>
            {" "}
            <div className="pt-20 mb-8 flex justify-center items-center">
              <div className="h-44 w-80 lg:w-80 lg:h-44  cursor-pointer bg-line">
                <img
                  src="assets/Sponsors/Bobble-AI.jpg"
                  alt="BobbleAI LOGO"
                  className="object-contain h-full bg-white w-full  translate-x-2 -translate-y-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Merchandise;
