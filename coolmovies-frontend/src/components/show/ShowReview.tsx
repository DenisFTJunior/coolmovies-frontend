import React from "react";
import { Box, Rating, Stack, Typography } from "@mui/material";

import { useStateDispatch } from "../../utils/stateManager/hooks/useDispatch";
import { actions as reviewActions } from "../../utils/stateManager/slice/async/review/reviewSlice";
import { useStateSelector } from "../../utils/stateManager/hooks/useSelector";
import Loading from "../Loading";

export const ShowReviewByMovieId = ({
  movieId,
  onlyRating,
  rating,
  gradient,
  editPermited,
}: {
  movieId: string;
  onlyRating?: boolean;
  rating?: boolean;
  gradient?: boolean;
  editPermited?: boolean;
}) => {
  const dispatch = useStateDispatch();
  const stateReview = useStateSelector((state) => state.review);
  const { clearReviewData, fetchReviews } = reviewActions;
  const review = stateReview.fetchedReview;
  if (review) dispatch(clearReviewData());
  if (!review) return <Loading />;
  dispatch(fetchReviews({ vars: { condition: { movieId } } }));
  if (onlyRating) return <Rating value={review.rating} readOnly />;
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}
      sx={{
        backgroundImage: gradient
          ? "linear-gradient(to top, white ,transparent)"
          : "",
      }}
    >
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h6" gutterBottom component="div">
          Review - {review.title}
        </Typography>
        {rating && <Rating value={review.rating} readOnly />}
        {/* {editPermited} */}
      </Stack>
      <Typography component="div">{review.body}</Typography>
    </Stack>
  );
};
