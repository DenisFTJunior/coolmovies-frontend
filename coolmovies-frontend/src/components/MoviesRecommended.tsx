import { Alert, Box } from "@mui/material";
import React from "react";

import { useStateDispatch } from "../utils/stateManager/hooks/useDispatch";
import { useStateSelector } from "../utils/stateManager/hooks/useSelector";
import { actions as movieActions } from "../utils/stateManager/slice/async/movie/movieSlice";
import Loading from "./Loading";
import MovieCard from "./MovieCard";

const MoviesRecommended = () => {
  const dispatch = useStateDispatch();

  const stateMovie = useStateSelector((state) => state.movie);
  const { fetchMovies, clearMovieData } = movieActions;

  const fetchedMovies = stateMovie.fetchedMovies;
  if (fetchedMovies) dispatch(clearMovieData());
  if (!fetchedMovies) return <Loading />;

  dispatch(fetchMovies({ vars: {} }));

  if (stateMovie.error)
    return <Alert severity="error">{stateMovie.error}</Alert>;

  const recommendedFilmsIndex = [1, 2, 3].map(() =>
    Math.ceil(Math.random() * fetchedMovies.totalCount)
  );

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        flexDirection = "row",
      }}
      id="recommendedMovies"
    >
      {recommendedFilmsIndex.map((v) => (
        <MovieCard movie={fetchedMovies.allMovies.movies[v]} />
      ))}
    </Box>
  );
};

export default MoviesRecommended;
