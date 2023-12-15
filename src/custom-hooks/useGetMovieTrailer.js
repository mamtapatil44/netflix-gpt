import { useEffect, useState } from "react";
import { GET_MOVIE_VIDEO, OPTION_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerMovies } from "../utils/movieSlice";

const useGetMovieTrailer = (movieId) => {
  const dispatch  = useDispatch();

  const getMovies = async () => {
    const data = await fetch(GET_MOVIE_VIDEO + movieId + "/videos", OPTION_URL);
    const json = await data.json();
    const filterData = json?.results.filter((item) => item.type === "Trailer");
    const finalTrailerData = filterData.length ? filterData[0] : json?.results[0];
    dispatch(addTrailerMovies(finalTrailerData))
  
  };
  useEffect(() => {
    getMovies();
  }, []);

  
};
export default useGetMovieTrailer;
