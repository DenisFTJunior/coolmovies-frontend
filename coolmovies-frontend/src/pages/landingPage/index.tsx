import React from "react";

import MovieListSection from "./_sections/MovieListSection";
import { Stack } from "@mui/material";
import { Movies } from "../../schema/api/Movies";

const LandingPage = ({ movies }: { movies: Movies  }) => {
  return (
    <Stack
      justifyContent="center"
      sx={{
        width: "80%",
        minWidth: "20rem",
        margin: "0 auto",
      }}
    >
      <MovieListSection movies={movies} />
    </Stack>
  );
};

export default LandingPage
