import React from "react";
import { Box, Rating, Typography } from "@mui/material";

import { useStateDispatch } from "../../utils/stateManager/hooks/useDispatch";
import { actions as reviewActions } from "../../utils/stateManager/slice/async/review/reviewSlice";
import { useStateSelector } from "../../utils/stateManager/hooks/useSelector";
import Loading from "../Loading";

export const ShowReviewByMovieId = ({
  movieId,
  rating,
  gradient,
}: {
  movieId: string;
  rating?: boolean;
  gradient?: boolean;
}) => {
  const dispatch = useStateDispatch();
  const stateReview = useStateSelector((state) => state.review);
  const { clearReviewData, fetchReviews } = reviewActions;
  const review = stateReview.fetchedReview;
  if (review) dispatch(clearReviewData());
  if (!review) return <Loading />;
  dispatch(fetchReviews({ vars: { condition: { movieId } } }));
  if (rating) return <Rating value={review.rating} readOnly />;
  return (
    <Box
      sx={{
        margin: 1,
        backgroundImage: gradient
          ? "linear-gradient(to top, white ,transparent)"
          : "",
      }}
    >
      <Typography variant="h6" gutterBottom component="div">
        Review - {review.title}
      </Typography>
      <Typography component="div">{review.body}</Typography>
    </Box>
  );
};
