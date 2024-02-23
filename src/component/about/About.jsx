import "./About.css";
import React from "react";

function About() {
  return (
    <div id="about">
      <div className="max-w-screen-2xl mx-auto px-[5vw] py-16">
        <h3 className="text-center text-5xl font-semibold text-white font-ubuntu">
          ABOUT HACK&CHILL
        </h3>
        <div className="flex gap-10 flex-row max-md:!flex-col-reverse my-10 justify-center items-center">
          <p className="min-w-[300px] max-w-[400px] text-white max-md:max-w-none text-base text-justify">
            Get ready for an exciting dive into innovation and collaboration as
            we proudly unveil the grandest event of our GDSC ADGIPS – Hack&Chill
            1.0! It's time to announce the most anticipated Hackathon of the
            year, coming to you this March with promises of unparalleled thrills
            and a celebration of technology like never before. Hack&Chill 1.0
            introduces a spectrum of captivating themes, offering substantial
            prize money for outstanding projects in each theme.
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
