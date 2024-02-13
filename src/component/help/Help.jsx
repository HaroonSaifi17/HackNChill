import "./Help.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import {
  faFileInvoice,
  faWrench,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

function Help() {
  const [answersVisible, setAnswersVisible] = useState({});

  const toggleAnswer = (question) => {
    setAnswersVisible((prevState) => ({
      ...prevState,
      [question]: !prevState[question],
    }));
  };
  return (
    <div id="help" className="help-wpr">
      <div className="px-[5vw] py-16 mx-auto max-w-screen-2xl">
        <h3 className="text-white text-4xl text-center">
          Hello there! How can we help?
        </h3>
        <div className="max-w-[400px] my-10 mx-auto">
          <div className="relative pr-[68px] ">
            <input
              placeholder="Your message"
              className="w-[100%] rounded-l-lg px-4 py-1"
              type="text"
            />
            <a
              href=""
              className="absolute top-0 right-0 z-10 inline-block bg-[#db0000] py-1 text-white px-4 rounded-r-lg"
            >
              Send
            </a>
          </div>
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
              <span>Who's eligible to participate?</span>
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
                  The answer to the question "Who's eligible to participate?"
                  goes here.
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
                <p>
                  The answer to the question "How to participate?" goes here.
                </p>
              </div>
            )}
          </div>
          <div className="w-full bg-white rounded-lg overflow-hidden mt-5">
            <p className="p-2 px-4">
              <FontAwesomeIcon
                className="mr-2 text-[#821010]"
                icon={faWrench}
              />
              Fix a problem
            </p>
            <div className="h-[0.5px] bg-gray-400 mx-4"></div>
            <a
              className="p-2 px-4 flex cursor-pointer justify-between"
              onClick={() => toggleAnswer("error")}
            >
              <span>Error Codes</span>
              <FontAwesomeIcon
                className={`mr-2 text-gray duration-200 ${
                  answersVisible["error"] ? "rotate-180" : ""
                }`}
                icon={faChevronDown}
              />
            </a>
            {answersVisible["error"] && (
              <div className="px-4 py-2   bg-gray-100 rounded-b-md text-gray-500">
                <p>
                  The answer to the question "Who's eligible to participate?"
                  goes here.
                </p>
              </div>
            )}

            <div className="h-[0.5px] bg-gray-400 mx-4"></div>

            <a
              className="p-2 px-4 flex justify-between cursor-pointer"
              onClick={() => toggleAnswer("criteria")}
            >
              <span>What is the eligible criteria?</span>
              <FontAwesomeIcon
                className={`mr-2 text-gray duration-200 ${
                  answersVisible["criteria"] ? "rotate-180" : ""
                }`}
                icon={faChevronDown}
              />
            </a>
            {answersVisible["criteria"] && (
              <div className="px-4 py-2 bg-gray-100 rounded-b-md  text-gray-500">
                <p>
                  The answer to the question "How to participate?" goes here.
                </p>
              </div>
            )}
          </div>
        </div>
        <p className="text-center">
          <a
            className="mx-auto mt-8 inline-block mb-4 text-white underline"
            href="#"
          >
            Need more help?
          </a>
          <br />
          <a
            className="bg-[#db0000] py-2 px-4 rounded-md text-white mx-auto"
            href="#"
          >
            Contact Us
          </a>
        </p>
      </div>
    </div>
  );
}

export default Help;
