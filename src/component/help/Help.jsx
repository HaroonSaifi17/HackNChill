import "./Help.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, {useRef, useState} from "react";
import {
  faFileInvoice,
  faWrench,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import {sendForm} from "@emailjs/browser";
import {Alert} from "react-bootstrap";

function Help() {
  const [answersVisible, setAnswersVisible] = useState({});
  const [inputValue, setInputValue] = useState("");
  const formRef = useRef(null);
  const [sendEmailSuccess, setSendEmailSuccess] = useState(null);

  const toggleAnswer = (question) => {
    setAnswersVisible((prevState) => ({
      ...prevState,
      [question]: !prevState[question],
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    sendForm('service_cfqbgtu', 'template_uvi4g37', formRef.current, '49d2lQplNu6mw181N')        .then((result) => {
          console.log(result.text);
          console.log("message sent!!");
          setInputValue("");
          setSendEmailSuccess(true);

        }, (error) => {
          console.log(error.text);
          setSendEmailSuccess(false);
        });
  };

  return (
    <div id="help" className="help-wpr">
      <div className="px-[5vw] py-16 mx-auto max-w-screen-2xl">
        <h3 className="text-white text-4xl text-center">
          Hello there! How can we help?
        </h3>
        <div className="max-w-[700px] my-10 mx-auto ">
          <form ref={formRef} className=" w-full rounded-lg ">
              <textarea
                placeholder="Your message"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                className=" w-[100%] px-4 py-2 h-25  border border-5 border-solid border-image border-gradient border-gradient-slice-1"
              />
            {(sendEmailSuccess === true) ?
                <Alert variant={"success"} dismissible>
                  Message sent successfully!
                </Alert> : (sendEmailSuccess === false) ?
                <Alert variant={"danger"} dismissible>
                  There was some error while sending your message!
                </Alert> : null
            }
              <button
                onClick={sendEmail}
                className="flex items-center justify-center bg-[#db0000] py-1 text-white px-4 rounded-lg"
              >
                Send
              </button>
          </form>
          <div className="w-full duration-500 overflow-hidden  bg-white rounded-lg mt-5">
            <p className="p-2 px-4">
              <FontAwesomeIcon
                className="mr-2 text-[#821010]"
                icon={faFileInvoice}
              />
              Registration Process
            </p>
            <div className="h-[0.5px] bg-gray-400 mx-4"></div>
            <a
              className="p-2 px-4 flex cursor-pointer justify-between"
              onClick={() => toggleAnswer("eligible")}
            >
              <span> Who's eligible to participate?</span>
              <FontAwesomeIcon
                className={`mr-2 text-gray duration-200 ${
                  answersVisible["eligible"] ? "rotate-180" : ""
                }`}
                icon={faChevronDown}
              />
            </a>
            {answersVisible["eligible"] && (
              <div className="px-4 py-2 bg-gray-100 rounded-b-md text-gray-500">
                <p>
                  Any student pursuing a degree or tech enthusiast can
                  participate in the GDSC ADGIPS Hack&Chill 1.0.
                </p>
              </div>
            )}
            <div className="h-[0.5px] bg-gray-400 mx-4"></div>
            <a
              className="p-2 px-4 flex justify-between cursor-pointer"
              onClick={() => toggleAnswer("participate")}
            >
              <span>How to participate?</span>
              <FontAwesomeIcon
                className={`mr-2 text-gray duration-200 ${
                  answersVisible["participate"] ? "rotate-180" : ""
                }`}
                icon={faChevronDown}
              />
            </a>
            {answersVisible["participate"] && (
              <div className="px-4 py-2  bg-gray-100 rounded-b-md text-gray-500">
                <p>Click on Apply with Devfolio button on home page.</p>
              </div>
            )}
            <div className="h-[0.5px] bg-gray-400 mx-4"></div>
            <a
              className="p-2 px-4 flex justify-between cursor-pointer"
              onClick={() => toggleAnswer("updated")}
            >
              <span>
                How can I stay updated on the latest information about
                Hack&Chill
              </span>
              <FontAwesomeIcon
                className={`mr-2 text-gray duration-200 ${
                  answersVisible["updated"] ? "rotate-180" : ""
                }`}
                icon={faChevronDown}
              />
            </a>
            {answersVisible["updated"] && (
              <div className="px-4 py-2  bg-gray-100 rounded-b-md text-gray-500">
                <p>
                  Follow our official social media handles and our website, for
                  the latest updates, announcements, and important information
                  leading up to and during Hack&Chill 1.0.
                </p>
              </div>
            )}
            <div className="h-[0.5px] bg-gray-400 mx-4"></div>
            <a
              className="p-2 px-4 flex justify-between cursor-pointer"
              onClick={() => toggleAnswer("themes")}
            >
              <span>
                Are there any specific themes or challenges for the hackathon?
              </span>
              <FontAwesomeIcon
                className={`mr-2 text-gray duration-200 ${
                  answersVisible["themes"] ? "rotate-180" : ""
                }`}
                icon={faChevronDown}
              />
            </a>
            {answersVisible["themes"] && (
              <div className="px-4 py-2  bg-gray-100 rounded-b-md text-gray-500">
                <p>
                  Yes, there are various themes, including sustainability,
                  healthcare, smart education, open innovation, blockchain,
                  cybersecurity, heritage and culture, and robotics.
                </p>
              </div>
            )}
            <div className="h-[0.5px] bg-gray-400 mx-4"></div>
            <a
              className="p-2 px-4 flex justify-between cursor-pointer"
              onClick={() => toggleAnswer("participants")}
            >
              <span>
                Can I participate as an individual, or is it mandatory to form a
                team?
              </span>
              <FontAwesomeIcon
                className={`mr-2 text-gray duration-200 ${
                  answersVisible["participants"] ? "rotate-180" : ""
                }`}
                icon={faChevronDown}
              />
            </a>
            {answersVisible["participants"] && (
              <div className="px-4 py-2  bg-gray-100 rounded-b-md text-gray-500">
                <p>
                  Definitely, participating as an individual is allowed for
                  Hack&Chill. However, you can certainly form a team to join the
                  hackathon. So gather your peers and collaborate to make the
                  most out of this exciting event!
                </p>
              </div>
            )}{" "}
            <div className="h-[0.5px] bg-gray-400 mx-4"></div>
            <a
              className="p-2 px-4 flex justify-between cursor-pointer"
              onClick={() => toggleAnswer("prizes")}
            >
              <span>Will there be prizes for the winners of Hack&Chill?</span>
              <FontAwesomeIcon
                className={`mr-2 text-gray duration-200 ${
                  answersVisible["prizes"] ? "rotate-180" : ""
                }`}
                icon={faChevronDown}
              />
            </a>
            {answersVisible["prizes"] && (
              <div className="px-4 py-2  bg-gray-100 rounded-b-md text-gray-500">
                <p>
                  Yes, there will be prize money awarded to the top performers
                  of Hack&Chill. Stay tuned for more details on the prize
                  categories and amounts.
                </p>
              </div>
            )}{" "}
            <div className="h-[0.5px] bg-gray-400 mx-4"></div>
            <a
              className="p-2 px-4 flex justify-between cursor-pointer"
              onClick={() => toggleAnswer("mentor")}
            >
              <span>
                Will there be mentors available to assist participants during
                the hackathon?
              </span>
              <FontAwesomeIcon
                className={`mr-2 text-gray duration-200 ${
                  answersVisible["mentor"] ? "rotate-180" : ""
                }`}
                icon={faChevronDown}
              />
            </a>
            {answersVisible["mentor"] && (
              <div className="px-4 py-2  bg-gray-100 rounded-b-md text-gray-500">
                <p>
                  Yes, there will be mentors available to assist participants
                  during the hackathon. We have a dedicated team of mentors
                  assigned to provide guidance and support.
                </p>
              </div>
            )}
          </div>
        </div>
        <p className="text-center">
          {/* <p className="mx-auto mt-8 inline-block mb-4 text-white ">
            Need more help?
          </p> */}
          <a
            className="mx-auto mt-8 inline-block mb-4 text-white underline"
            href="#"
          >
            {" "}
            Need more help?
          </a>
          <br />
          <a
            className="bg-[#db0000] py-2 px-4 rounded-md text-white mx-auto"
            href="mailto:dscadgitm@gmail.com  "
          >
            Contact Us
          </a>
        </p>
      </div>
    </div>
  );
}

export default Help;
