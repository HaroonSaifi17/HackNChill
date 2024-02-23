import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";
import React from "react";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faMedium,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
      <img className="w-[300px] mx-auto p-8" src="/assets/LogoRed.png" alt="" />
      <div>
        <div>
          <h1 className="text-red-700 text-2xl md:text-3xl font-bold border-b-2 border-b-white pb-5 md:pr-5">
            Let's get you registered!
          </h1>
        </div>
        <div className="footer-menu">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#timeline">Timeline</a>
          <a href="#help">FAQs</a>
        </div>
        <div className="footer-menu">
          <a href="#sponser">Sponsors</a>
          <a href="#prizes">Prizes</a>
          <a href="#event">Events</a>
        </div>
        <div className="footer-menu md:items-start md:gap-4">
          <h2 className="font-semibold text-lg">EXPLORE US!</h2>
          <a href="mailto:hacknchill1.0@gmail.com">hacknchill1.0@gmail.com</a>
          <div className="footer-icon">
            <a href="https://www.instagram.com/hacknchill_1.0?igsh=MWIxb2dnMGxlZ25nMQ==">
              <FontAwesomeIcon size="xl" icon={faInstagram} />
            </a>
            {/* <a href="#">
              <FontAwesomeIcon size="xl" icon={faLinkedin} />
            </a> */}
            <a href="https://x.com/GdscAdgips?t=FfjGzz9JrGp-qNlSXqv_3A&s=09">
              <FontAwesomeIcon size="xl" icon={faXTwitter} />
            </a>
            <a href="#">
              <FontAwesomeIcon size="xl" icon={faMedium} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
