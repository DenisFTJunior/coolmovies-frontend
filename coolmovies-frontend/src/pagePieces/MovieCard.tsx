import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { Movie } from "../schema/api/Movie";
import dateFormatter from "../components/helper/dateFormatter";
import { ShowReviewByMovieId } from "../components/show/ShowReview";
import { ShowDirectorById } from "../components/show/ShowDirector";

const MovieCard = ({ movie }: { movie: Movie }) => {
  //Component -----------------------------------------------------------
  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "20rem",
      }}
    >
      <CardContent sx={{ flex: "1 0 auto" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography component="div" variant="h5">
              {movie.title}
            </Typography>
            <ShowReviewByMovieId movieId={movie.id} onlyRating />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <ShowDirectorById directorId={movie.movieDirectorId} />
            <Typography component="span">
              {dateFormatter(movie.releaseDate)}
            </Typography>
          </Box>
          <Box
            sx={{
              width: "15rem",
              height: 1,
              backgroundColor: "#d3d3d3",
            }}
          />
          <ShowReviewByMovieId movieId={movie.id} gradient />
        </Box>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
