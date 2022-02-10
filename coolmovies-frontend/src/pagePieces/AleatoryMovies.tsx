import { Alert, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";

import MovieCard from "./cards/MovieCard";
import useFetchingMovies from "../utils/hooks/useFetchMovies";
import { Movies } from "../schema/api/Movies";

const aleatoryFilmsIndex = (data: Movies) =>
  [1, 2, 3].map(() =>
    Math.ceil(Math.random() * data?.allMovies.totalCount - 1)
  );

const AleatoryMovies = (): JSX.Element => {
  const [movies, updateQuery, state] = useFetchingMovies({});
  const [indexs, setIndexs] = useState([1, 2, 3]);

  useEffect(() => {
    if (movies) setIndexs(aleatoryFilmsIndex(movies));
  }, [movies]);

  if (state.error && !movies)
    return <Alert severity="error">{state.error}</Alert>;

  return (
    <Stack
      sx={{ width: "100%" }}
      direction="row"
      justifyContent="center"
      justifyItems="center"
      alignItems="center"
      id="aleatoryMovies"
      flexWrap="wrap"
    >
      {indexs.map((v) => (
        <MovieCard movie={movies?.allMovies?.movies[v]} />
      ))}
    </Stack>
  );
};

export default AleatoryMovies;
