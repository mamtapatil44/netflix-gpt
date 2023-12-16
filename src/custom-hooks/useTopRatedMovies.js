import { useDispatch } from "react-redux";
import { GET_NOW_PLAYING_MOVIE_URL, OPTION_URL, TOPRATED_MOVIE_URL } from "../utils/constants";
import { useEffect } from "react";
import { addNowPlayingMovies, addTopRatedMovies } from "../utils/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const getTopRatedMovie = async () => {
  
    const data = await fetch(TOPRATED_MOVIE_URL, OPTION_URL);
    const json = await data.json();
    dispatch(addTopRatedMovies(json?.results))
  };

  useEffect(() => {
    getTopRatedMovie();
  }, []);


};
export default useTopRatedMovies;
