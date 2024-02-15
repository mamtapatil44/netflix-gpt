import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggetions from "./GptMovieSuggetions";
import { BG_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <>
    <div className="fixed -z-10">
        <img className="xs:h-screen object-fit" alt="logo" src={BG_URL} />
      </div>
    <div className="">
      <GptSearchBar />
      <GptMovieSuggetions />
    </div></>
  );
};

export default GptSearch;
