import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Movie, MovieVars } from "../../../../../schema/api/Movie";
import { Movies, MoviesVars } from "../../../../../schema/api/Movies";
import {
  DeleteMovieVars,
  SaveMovieVars,
  UpdateMovieVars,
} from "../../../../../schema/api/mutation/Movie";

interface InitialState {
  fetchedMovies?: Movies | Movie | undefined;
  error?: string | undefined;
}

const initialState: InitialState = {
  fetchedMovies: undefined,
};

export const movieSlice = createSlice({
  initialState,
  name: "movie",
  reducers: {
    fetchMovie: (state, action: PayloadAction<{ vars: MovieVars }>) => {},
    fetchMovies: (state, action: PayloadAction<{ vars: MoviesVars }>) => {},
    saveMovie: (state, action: PayloadAction<{ vars: SaveMovieVars }>) => {},
    deleteMovie: (
      state,
      action: PayloadAction<{ vars: DeleteMovieVars }>
    ) => {},
    updateMovie: (
      state,
      action: PayloadAction<{ vars: UpdateMovieVars }>
    ) => {},
    clearMovieData: (state) => {
      state.fetchedMovies = undefined;
      state.error = undefined;
    },
    loadedMovie: (
      state,
      action: PayloadAction<{ data: Movies | Movie | undefined }>
    ) => {
      state.fetchedMovies = action.payload.data;
    },
    processedRequest: (state) => {
      state.error = undefined;
    },
    loadMovieError: (state, action: PayloadAction<{ error: string }>) => {
      state.error = action.payload.error;
    },
  },
});

export const { actions } = movieSlice;
export type MovieSliceAction = typeof actions;
export default movieSlice.reducer;
