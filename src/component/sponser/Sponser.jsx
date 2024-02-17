import "./Sponser.css";
import React from "react";

function Sponser({head, id}) {
  return (
    <div id={id}>
      <div className="max-w-screen-2xl mx-auto px-[5vw] py-[50px]">
        <div className="flex text-3xl sm:text-5xl mx-[-5vw] justify-center ">
          <div className="bg-gradient-to-r from-gray-500 to-white text-transparent bg-clip-text">
            {head.split(" ").slice(0, head.split(" ").length - 1).join(" ")}
          </div>
          <div className="bg-gradient-to-r from-red-600 to-red-900 ml-2 sm:ml-4 px-1">
            {head.split(" ")[head.split(" ").length - 1]}
          </div>
        </div>
        <h2 className="my-5 mb-4 text-3xl text-center font-semibold text-indigo-300 uppercase">
          Platinum
        </h2>
        <div className="flex justify-center items-center flex-wrap gap-4">
          <div className="flex gap-4 max-md:flex-wrap items-center justify-center">
          <div className="h-64 w-64 lg:w-44 lg:h-44  cursor-pointer bg-line">
            <img
              src="https://placehold.co/400"
              alt="sponsor_image"
              className="h-full bg-white w-full object-cover translate-x-2 -translate-y-2"
            />
          </div>
          <div className="h-64 w-64 lg:w-44 lg:h-44  cursor-pointer bg-line">
            <img
              src="https://placehold.co/400"
              alt="sponsor_image"
              className="h-full bg-white w-full object-cover translate-x-2 -translate-y-2"
            />
          </div>
          </div>
          <div className="flex gap-4 max-md:flex-wrap items-center justify-center">
          <div className="h-64 w-64 lg:w-44 lg:h-44  cursor-pointer bg-line">
            <img
              src="https://placehold.co/400"
              alt="sponsor_image"
              className="h-full bg-white w-full object-cover translate-x-2 -translate-y-2"
            />
          </div>
          <div className="h-64 w-64 lg:w-44 lg:h-44  cursor-pointer bg-line">
            <img
              src="https://placehold.co/400"
              alt="sponsor_image"
              className="h-full bg-white w-full object-cover translate-x-2 -translate-y-2"
            />
          </div>
          </div>
        </div>
        <h2 className="my-5 mb-4 text-3xl text-center font-semibold  text-amber-300 uppercase">
          Gold
        </h2>
        <div className="flex justify-center items-center flex-wrap gap-4">
          <div className="flex gap-4 max-md:flex-wrap items-center justify-center">
          <div className="h-64 w-64 lg:w-44 lg:h-44  cursor-pointer bg-line">
            <img
              src="https://placehold.co/400"
              alt="sponsor_image"
              className="h-full bg-white w-full object-cover translate-x-2 -translate-y-2"
            />
          </div>
          <div className="h-64 w-64 lg:w-44 lg:h-44  cursor-pointer bg-line">
            <img
              src="https://placehold.co/400"
              alt="sponsor_image"
              className="h-full bg-white w-full object-cover translate-x-2 -translate-y-2"
            />
          </div>
          </div>
          <div className="flex gap-4 max-md:flex-wrap items-center justify-center">
          <div className="h-64 w-64 lg:w-44 lg:h-44  cursor-pointer bg-line">
            <img
              src="https://placehold.co/400"
              alt="sponsor_image"
              className="h-full bg-white w-full object-cover translate-x-2 -translate-y-2"
            />
          </div>
          <div className="h-64 w-64 lg:w-44 lg:h-44  cursor-pointer bg-line">
            <img
              src="https://placehold.co/400"
              alt="sponsor_image"
              className="h-full bg-white w-full object-cover translate-x-2 -translate-y-2"
            />
          </div>
          </div>
        </div>
        <h2 className="my-5 mb-4 text-3xl text-center font-semibold  text-gray-300 uppercase">
          Silver
        </h2>
                <div className="flex justify-center items-center flex-wrap gap-4">
          <div className="flex gap-4 max-md:flex-wrap items-center justify-center">
          <div className="h-64 w-64 lg:w-44 lg:h-44  cursor-pointer bg-line">
            <img
              src="https://placehold.co/400"
              alt="sponsor_image"
              className="h-full bg-white w-full object-cover translate-x-2 -translate-y-2"
            />
          </div>
          <div className="h-64 w-64 lg:w-44 lg:h-44  cursor-pointer bg-line">
            <img
              src="https://placehold.co/400"
              alt="sponsor_image"
              className="h-full bg-white w-full object-cover translate-x-2 -translate-y-2"
            />
          </div>
          </div>
          <div className="flex gap-4 max-md:flex-wrap items-center justify-center">
          <div className="h-64 w-64 lg:w-44 lg:h-44  cursor-pointer bg-line">
            <img
              src="https://placehold.co/400"
              alt="sponsor_image"
              className="h-full bg-white w-full object-cover translate-x-2 -translate-y-2"
            />
          </div>
          <div className="h-64 w-64 lg:w-44 lg:h-44  cursor-pointer bg-line">
            <img
              src="https://placehold.co/400"
              alt="sponsor_image"
              className="h-full bg-white w-full object-cover translate-x-2 -translate-y-2"
            />
          </div>
          </div>
        </div>

        <h2 className="my-5 mb-4 text-3xl text-center font-semibold  text-stone-400 uppercase">
          Bronze
        </h2>
                <div className="flex justify-center items-center flex-wrap gap-4">
          <div className="flex gap-4 max-md:flex-wrap items-center justify-center">
          <div className="h-64 w-64 lg:w-44 lg:h-44  cursor-pointer bg-line">
            <img
              src="https://placehold.co/400"
              alt="sponsor_image"
              className="h-full bg-white w-full object-cover translate-x-2 -translate-y-2"
            />
          </div>
          <div className="h-64 w-64 lg:w-44 lg:h-44  cursor-pointer bg-line">
            <img
              src="https://placehold.co/400"
              alt="sponsor_image"
              className="h-full bg-white w-full object-cover translate-x-2 -translate-y-2"
            />
          </div>
          </div>
          <div className="flex gap-4 max-md:flex-wrap items-center justify-center">
          <div className="h-64 w-64 lg:w-44 lg:h-44  cursor-pointer bg-line">
            <img
              src="https://placehold.co/400"
              alt="sponsor_image"
              className="h-full bg-white w-full object-cover translate-x-2 -translate-y-2"
            />
          </div>
          <div className="h-64 w-64 lg:w-44 lg:h-44  cursor-pointer bg-line">
            <img
              src="https://placehold.co/400"
              alt="sponsor_image"
              className="h-full bg-white w-full object-cover translate-x-2 -translate-y-2"
            />
          </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Sponser;
