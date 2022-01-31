import React, { useEffect } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import { Movie } from "../schema/api/Movie";
import { useStateDispatch } from "../utils/stateManager/hooks/useDispatch";
import { actions } from "../utils/stateManager/slice/async/director/directorSlice";

const MovieCard = ({ movie }: { movie: Movie }) => {
  const dispatch = useStateDispatch();
  const { fetchDirector } = actions;
  
  useEffect(() =>
    dispatch(fetchDirector({ vars: { id: movie.movieDirectorId } }))
  );
  return (
    <Card sx={{ display: "flex" }}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="/static/images/cards/live-from-space.jpg"
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {movie.title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Mac Miller
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default MovieCard;
