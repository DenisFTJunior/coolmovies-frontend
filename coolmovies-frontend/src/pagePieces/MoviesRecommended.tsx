import { Alert, Stack } from "@mui/material";
import React from "react";

import MovieCard from "./MovieCard";
import useFetchingMovies from "../utils/hooks/useFetchMovies";

const MoviesRecommended = () => {
  const stateMovie = useFetchingMovies();
  const fetchedMovies = stateMovie.fetchedMovies;
  console.log("stateMovie", stateMovie)
  console.log("fetchedMovies", fetchedMovies)

  if (stateMovie.error && !stateMovie.allMovies)
    return <Alert severity="error">{stateMovie.error}</Alert>;

  const recommendedFilmsIndex = [1, 2, 3].map(() =>
    Math.ceil(Math.random() * fetchedMovies?.totalCount)
  );

  return (
    <Stack direction="row" id="recommendedMovies">
      {recommendedFilmsIndex.map((v) => (
        <MovieCard movie={fetchedMovies?.allMovies?.movies[v]} />
      ))}
    </Stack>
  );
};

export default MoviesRecommended;
