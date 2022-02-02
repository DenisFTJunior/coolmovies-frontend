import React from "react";
import { Rating, Stack, Typography } from "@mui/material";

import Loading from "../Loading";
import useFetchingReviews from "../../utils/hooks/useFetchReview";

export const ShowReviewById = ({
  movieId,
  id,
  onlyRating,
  rating,
  gradient,
  editPermited,
}: {
  movieId?: string;
  id?: string;
  onlyRating?: boolean;
  rating?: boolean;
  gradient?: boolean;
  editPermited?: boolean;
}) => {
  const condition = id ? { id } : { movieId };
  const [review, updateReviewQuery, state] = useFetchingReviews({
    condition: condition,
  });
  if (!review) return <Loading />;
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
