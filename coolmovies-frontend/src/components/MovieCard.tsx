import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import { Movie } from "../schema/api/Movie";
import { useStateDispatch } from "../utils/stateManager/hooks/useDispatch";
import { actions as directorActions } from "../utils/stateManager/slice/async/director/directorSlice";
import { actions as reviewActions } from "../utils/stateManager/slice/async/review/reviewSlice";
import { useStateSelector } from "../utils/stateManager/hooks/useSelector";
import AvatarWithName from "./AvatarWithName";
import dateFormatter from "./helper/dateFormatter";
import { Alert, Rating } from "@mui/material";
import Loading from "./Loading";

const MovieCard = ({ movie }: { movie: Movie }) => {
  const dispatch = useStateDispatch();

  //state ---------------------------------------------------------------
  const stateDirector = useStateSelector((state) => state.director);
  const stateReview = useStateSelector((state) => state.review);

  //actions -------------------------------------------------------------
  const { fetchDirector, clearDirectorData } = directorActions;
  const { clearReviewData, fetchReview } = reviewActions;

  //clear data ----------------------------------------------------------
  if (stateDirector.fetchedDirectors) dispatch(clearDirectorData());
  if (stateReview.fetchedReview) dispatch(clearReviewData());

  //loading -------------------------------------------------------------
  if (!stateDirector.fetchedDirectors || !stateReview.fetchedReview)
    return <Loading />;

  //Fetch ---------------------------------------------------------------
  dispatch(fetchDirector({ vars: { id: movie.movieDirectorId } }));
  dispatch(fetchReview({ vars: { nodeId: movie.nodeId } }));

  //error ---------------------------------------------------------------
  if (stateDirector.error)
    return <Alert severity="error">{stateDirector.error}</Alert>;
  if (stateReview.error)
    return <Alert severity="error">{stateReview.error}</Alert>;

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
            <Rating value={stateReview.fetchedReview.rating} readOnly />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <AvatarWithName name={stateDirector.fetchedDirectors.name} />
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
          <Box
            sx={{
              backgroundImage: "linear-gradient(to top, white ,transparent)",
            }}
          >
            <Typography component="p">
              {stateReview.fetchedReview.body}
            </Typography>
          </Box>
          <Typography variant="h6">See more</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
