import React from "react";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";

const MovieList = ({ title, movies }) => {
  console.log("movies== ", movies);
  return (
    <div className="py-4">
      <h1 className=" text:xs md:text-ms text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movies &&
            movies?.map((movie) => (
              <MovieCard key={movie?.id} posterpath={movie?.poster_path}  movie={movie}/>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
