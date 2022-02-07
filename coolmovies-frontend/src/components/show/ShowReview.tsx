import React from "react";
import { Icon, Rating, Stack, Typography, Box } from "@mui/material";
import VideocamIcon from "@mui/icons-material/Videocam";

import Loading from "../Loading";
import useFetchingReviews from "../../utils/hooks/useFetchReview";
import { Review } from "../../schema/api/Review";

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
  const [review] = useFetchingReviews({
    condition: condition,
  });
  if (!review) return <Loading />;
  if (onlyRating) return <Rating value={review.rating} readOnly />;
  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      spacing={2}
      sx={{
        width: "100%",
        backgroundImage: gradient
          ? "linear-gradient(to top, white ,transparent)"
          : "",
      }}
    >
      {!!rating && (
        <Stack justifyContent="flex-end">
          <Rating value={review.rating} readOnly />
        </Stack>
      )}

      <Typography variant="h6" gutterBottom component="div">
        Review - {review.title}
      </Typography>

      {!!review.movieByMovieId && (
        <Stack direction="row" justifyContent="flex-start" gap={2}>
          <Icon>
            <VideocamIcon />
          </Icon>
          <Typography>{review.movieByMovieId.title}</Typography>
        </Stack>
      )}

      <Typography component="p">{review.body}</Typography>
    </Stack>
  );
};

export const ShowReview = ({
  review,
  rating,
  gradient,
}: {
  review: Review;
  onlyRating?: boolean;
  rating?: boolean;
  gradient?: boolean;
  editPermited?: boolean;
}) => {
  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      spacing={2}
      sx={{
        backgroundImage: gradient
          ? "linear-gradient(to top, white ,transparent)"
          : "",
      }}
    >
      {!!rating && (
        <Stack justifyContent="flex-end">
          <Rating value={review.rating} readOnly />
        </Stack>
      )}

      <Typography variant="h6" gutterBottom component="div">
        Review - {review.title}
      </Typography>

      {!!review.movieByMovieId && (
        <Stack direction="row" justifyContent="flex-start" gap={2}>
          <Icon>
            <VideocamIcon />
          </Icon>
          <Typography>{review.movieByMovieId.title}</Typography>
        </Stack>
      )}

      <Typography component="p">{review.body}</Typography>
    </Stack>
  );
};
