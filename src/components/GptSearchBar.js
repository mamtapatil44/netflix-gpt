import React, { useRef } from "react";
import {
  BG_URL,
  OPTION_URL,
  SEARCH_HALF_QUEARY,
  TMDB_SEARCH_QUERY,
} from "../utils/constants";
import openai from "../utils/openai";
import { useDispatch } from "react-redux";
import { addGptMovies } from "../utils/gptSlice";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  // seach movies in TMDB Database

  const searchMoviesTMDB = async (movie) => {
    const url = TMDB_SEARCH_QUERY + movie + SEARCH_HALF_QUEARY;
    const data = await fetch(url, OPTION_URL);
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log("searchText== ", searchText.current.value);
    // Chat gpt api calling

    const searchQuery =
      "Act as mpvie recommendation sysntem and suggest some movies for query : " +
      searchText.current.value +
      ". Give only five movies, comma separeted like the example  result ahead.Example result : apnapn,sholey";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: { searchQuery } }],
      model: "gpt-3.5-turbo",
    });

    console.log("gptResults==== ", gptResults.choices?.[0].message?.content);
    const getMovies = gptResults.choices?.[0].message?.content.split(",");
    const promiseArray = getMovies.map((movie) => searchMoviesTMDB(movie));

    const promiseResult = await Promise.all(promiseArray);
    dispatch(addGptMovies({movieNames:getMovies, movieResults:promiseResult}))
     
  };

  return (
    <div className="pt-[30%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="p-2 m-4  col-span-9"
          type="text"
          placeholder="What would you like to watch today?"
        />
        <button
          className="bg-red-700 p-2 m-4 col-span-3 rounded-lg"
          onClick={handleGptSearchClick}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
