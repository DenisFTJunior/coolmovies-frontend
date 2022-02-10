import React from "react";
import { Box, Stack } from "@mui/material";

import MovieListSection from "./_sections/MovieListSection";
import Loading from "../../components/Loading";
import MovieCard from "../../pagePieces/cards/MovieCard";
import useFetchingMovies from "../../utils/hooks/useFetchMovies";
import { Movie } from "../../schema/api/Movie";

const LandingPage = () => {
  const [movies, action] = useFetchingMovies({});
  if (!movies) return <Loading />;
  return (
    <>
      <Box
        justifyContent="center"
        sx={{
          display: { xs: "none", md: "flex" },
          width: "80%",
          minWidth: "20rem",
          margin: "0 auto",
        }}
      >
        <MovieListSection movies={movies} refetch={action} />
      </Box>

      <Stack
        sx={{
          width: "100%",
          display: { xs: "flex", md: "none" },
        }}
        direction="row"
        justifyContent="center"
        justifyItems="center"
        alignItems="center"
        id="aleatoryMovies"
        flexWrap="wrap"
      >
        {movies.allMovies?.movies.map((movie: Movie) => (
          <MovieCard movie={movie} />
        ))}
      </Stack>
    </>
  );
};

export default LandingPage;
