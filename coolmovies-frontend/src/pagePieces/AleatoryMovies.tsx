import { Alert, Stack } from "@mui/material";
import React from "react";

import MovieCard from "./MovieCard";
import useFetchingMovies from "../utils/hooks/useFetchMovies";

const AleatoryMovies = (): JSX.Element => {
  const [fetchedMovies, updateQuery, state] = useFetchingMovies();

  if (state.error && !fetchedMovies)
    return <Alert severity="error">{state.error}</Alert>;

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

export default AleatoryMovies;
