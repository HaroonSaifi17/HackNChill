import React from "react";

const Commuinty = ({ head, id }) => {
  return (
    <div>
      <div id={id}>
        <div className="max-w-screen-2xl mx-auto px-[5vw] pb-[4rem] hover:border-t-2 pt-[3rem]">
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
            <h1 className="text-white text-center pt-20 lg:text-6xl mb-16 text-3xl ">
              Coming Soon...{" "}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Commuinty;
