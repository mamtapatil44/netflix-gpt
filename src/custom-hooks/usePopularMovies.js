import { useDispatch } from "react-redux";
import { GET_NOW_PLAYING_MOVIE_URL, OPTION_URL, POPULAR_MOVIE_URL } from "../utils/constants";
import { useEffect } from "react";
import { addNowPlayingMovies, addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMoview = async () => {
  
    const data = await fetch(POPULAR_MOVIE_URL, OPTION_URL);
    const json = await data.json();
    dispatch(addPopularMovies(json?.results))
  };

  useEffect(() => {
    getPopularMoview();
  }, []);


};
export default usePopularMovies;
