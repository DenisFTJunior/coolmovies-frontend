import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import dateFormatter from "../../components/helper/dateFormatter";
import { ShowDirector } from "../../components/show/ShowDirector";
import { Movie } from "../../schema/api/Movie";
import CardActions from "./CardActions";
import { Stack } from "@mui/material";
import { Action } from "../../schema/components/Card";
import movieListActions from "../_actions/movieListActions";

const MovieCard = ({ movie }: { movie: Movie }) => {
  if (!movie) return <></>;

  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "18rem", md: "24rem" },
        minWidth: "18rem",
        margin: 2,
      }}
    >
      <CardContent sx={{ flex: "1" }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Stack
            direction="row"
            justifyItems="space-between"
            justifyContent="space-between"
          >
            <Typography
              component="span"
              variant="h5"
              sx={{ fontSize: { xs: "1rem", md: "1.5rem" } }}
            >
              {movie?.title}
            </Typography>
            <CardActions item={movie} actions={movieListActions()} />
          </Stack>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
            }}
          >
            {movie?.director && <ShowDirector director={movie?.director} />}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            >
              {" "}
              <Typography
                component="span"
                sx={{ fontSize: { xs: ".6rem", md: "1rem" } }}
              >
                {dateFormatter(movie?.releaseDate)}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              width: "15rem",
              height: 1,
              backgroundColor: "#d3d3d3",
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
