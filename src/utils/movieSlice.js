import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: [],
    trailerMovies:null
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerMovies :(state, action)=>{
        state.trailerMovies = action.payload;
    }
  }, 
});

export const  {addNowPlayingMovies,addTrailerMovies} = movieSlice.actions;
 export default movieSlice.reducer;