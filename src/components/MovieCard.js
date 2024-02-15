import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterpath }) => {
    if(!posterpath) return null
  return (
    <div className="m-2 p-2">
     <img className="h-36 md:h-48 max-w-none" alt="card" src={IMG_CDN_URL+ posterpath}/>
    </div>
  );
};

export default MovieCard;
