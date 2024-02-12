import "./About.css";
import React from "react";

function About() {
  return (
    <div id="about" className="bg-black">
      <div className="max-w-screen-2xl mx-auto px-[5vw] py-16">
        <h3 className="text-center text-3xl font-semibold text-white">
          ABOUT HACK & CHILL
        </h3>
        <div className="flex gap-10 flex-wrap-reverse my-10 justify-center items-center">
          <p className="min-w-[300px] max-w-[400px] text-white">
            Are you craving to code, elevate your problem solving skills and
            dwell yourself into the world of innovation? Brace yourself, as GDSC
            ADGIPS announces opportunities for the highly anticipated event
            Hack&Chill .As we prepare for an unforgettable experience, we want
            committed folks to join us in making this event a resounding
            success.🔥
          </p>
          <img
            className="flex-1 min-w-[300px]"
            src="assets/About.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default About;
