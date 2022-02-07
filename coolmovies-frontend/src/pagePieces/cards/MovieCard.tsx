import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import dateFormatter from "../../components/helper/dateFormatter";
import { ShowDirector } from "../../components/show/ShowDirector";
import { Movie } from "../../schema/api/Movie";

const MovieCard = ({ movie }: { movie: Movie }) => {
  if (!movie) return <></>;

  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "24rem",
        margin: 2,
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
            <Typography component="h5" variant="h5">
              {movie?.title}
            </Typography>
          </Box>
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
              <Typography component="span">
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
