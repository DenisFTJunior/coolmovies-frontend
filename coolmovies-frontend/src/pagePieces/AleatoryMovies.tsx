import { Alert, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";

import MovieCard from "./cards/MovieCard";
import useFetchingMovies from "../utils/hooks/useFetchMovies";
import { Movies } from "../schema/api/Movies";

const recommendedFilmsIndex = (data: Movies) =>
  [1, 2, 3].map(() =>
    Math.ceil(Math.random() * data?.allMovies.totalCount - 1)
  );

const AleatoryMovies = (): JSX.Element => {
  const [movies, updateQuery, state] = useFetchingMovies();
  const [data, setData] = useState(movies);
  const [indexs, setIndexs] = useState([1, 2, 3]);
  useEffect(() => {
    setData(movies);
    if (movies) setIndexs(recommendedFilmsIndex(movies));
    console.log("indexs", indexs);
  }, [movies]);

  if (state.error && !data)
    return <Alert severity="error">{state.error}</Alert>;

  return (
    <Stack
      sx={{ height: "100%", width: "90%" }}
      direction="row"
      justifyContent="center"
      alignItems="center"
      id="aleatoryMovies"
      spacing={3}
      flexWrap="wrap"
    >
      {indexs.map((v) => (
        <MovieCard movie={data?.allMovies?.movies[v]} />
      ))}
    </Stack>
  );
};

export default AleatoryMovies;
