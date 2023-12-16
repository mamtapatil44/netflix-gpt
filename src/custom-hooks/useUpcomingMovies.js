import { useDispatch } from "react-redux";
import { GET_NOW_PLAYING_MOVIE_URL, OPTION_URL, UPCOMING_MOVIE_URL } from "../utils/constants";
import { useEffect } from "react";
import { addNowPlayingMovies, addUpcomingMovies } from "../utils/movieSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const getUpcomingMoview = async () => {
  
    const data = await fetch(UPCOMING_MOVIE_URL, OPTION_URL);
    const json = await data.json();
    dispatch(addUpcomingMovies(json?.results))
  };

  useEffect(() => {
    getUpcomingMoview();
  }, []);


};
export default useUpcomingMovies;
