import React from "react";
import { Box, Stack } from "@mui/material";

import MovieListSection from "./_sections/MovieListSection";
import { Movies } from "../../schema/api/Movies";
import Loading from "../../components/Loading";
import MovieCard from "../../pagePieces/cards/MovieCard";

const LandingPage = ({ movies }: { movies: Movies }) => {
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
        <MovieListSection movies={movies} />
      </Box>

      <Stack
        sx={{
          width: "100%",
          display: { xs: "flex", md: "none" }
        }}
        direction="row"
        justifyContent="center"
        justifyItems="center"
        alignItems="center"
        id="aleatoryMovies"
        flexWrap="wrap"
      >
        {movies.allMovies?.movies.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </Stack>
    </>
  );
};

export default LandingPage;
