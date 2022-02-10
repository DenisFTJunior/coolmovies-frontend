import { Stack } from "@mui/material";
import React from "react";

import Loading from "../../components/Loading";
import ReviewCard from "../../pagePieces/cards/ReviewCard";
import { Review } from "../../schema/api/Review";
import useFetchingReviews from "../../utils/hooks/useFetchReview";

const Reviews = () => {
  const [reviews] = useFetchingReviews({});
  if (!reviews) return <Loading />;

  return (
    <Stack
      sx={{ width: "100%" }}
      direction="row"
      justifyContent="center"
      justifyItems="center"
      alignItems="center"
      id="aleatoryMovies"
      flexWrap="wrap"
    >
      {reviews?.allMovieReviews?.reviews.map((review: Review) => (
        <ReviewCard review={review} />
      ))}
    </Stack>
  );
};

export default Reviews;
