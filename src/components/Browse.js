import React, { useEffect } from "react";
import Header from "./Header";
import {useSelector } from "react-redux";
import useNowPlayingMovies from "../custom-hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../custom-hooks/usePopularMovies";
import useTopRatedMovies from "../custom-hooks/useTopRatedMovies";
import useUpcomingMovies from "../custom-hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";

const Browse = () => {
  const showGptSeach = useSelector((store) => store?.gpt?.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header></Header>
      {showGptSeach ? (
        <GptSearch />
      ) : (
        <div>
          <MainContainer></MainContainer>
          <SecondaryContainer></SecondaryContainer>
        </div>
      )}
    </div>
  );
};

export default Browse;
