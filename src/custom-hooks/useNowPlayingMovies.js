import { useDispatch } from "react-redux";
import { GET_NOW_PLAYING_MOVIE_URL, OPTION_URL } from "../utils/constants";
import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMoview = async () => {
  
    const data = await fetch(GET_NOW_PLAYING_MOVIE_URL, OPTION_URL);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json?.results))
  };

  useEffect(() => {
    getNowPlayingMoview();
  }, []);


};
export default useNowPlayingMovies;
