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
      <div className="">
        <h1 className="text-red-700 text-2xl md:text-3xl font-bold border-b-2 border-b-white pb-5 md:pr-5">Let's get you registered!</h1>
      </div>
      <div className="footer-menu">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Timeline</a>
        <a href="#">FAQs</a>
      </div>
      <div className="footer-menu">
        <a href="#">Sponsors</a>
        <a href="#">Prizes</a>
        <a href="#">Events</a>
      </div>
      <div className="footer-menu md:items-start md:gap-4">
        <h2 className="font-semibold text-lg">EXPLORE US!</h2>
        <p>hello.hacknchill@gmail.com</p>
        <div className="footer-icon">
          <a href="#">
            <FontAwesomeIcon size="xl" icon={faInstagram} />
          </a>
          <a href="#">
            <FontAwesomeIcon size="xl" icon={faGithub} />
          </a>
          <a href="#">
            <FontAwesomeIcon size="xl" icon={faLinkedin} />
          </a>
          <a href="#">
            <FontAwesomeIcon size="xl" icon={faXTwitter} />
          </a>
          <a href="#">
            <FontAwesomeIcon size="xl" icon={faMedium} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
