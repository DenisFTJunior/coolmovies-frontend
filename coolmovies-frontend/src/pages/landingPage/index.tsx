import React from "react";
import DetailsModal from "../../components/modal/DetailsModal";
import EditModal from "../../components/modal/EditModal";
import { DetailItem, Item } from "../../schema/components/Modal";

import MovieListSection from "./_sections/MovieListSection";
import { ShowDirectorById } from "../../components/show/ShowDirector";
import { ShowReviewByMovieId } from "../../components/show/ShowReview";
import { Stack } from "@mui/material";

const editModalItems: Item[] = [
  { prop: "title", label: "Title", required: true },
  { prop: "releaseDate", label: "Release Date" },
  // {  prop:"directorId", label: "Director", render:(data, item) => },
  // {  prop:"userCreatorId",label: "User", render:(data, item) => },
];

const detailModalItems: DetailItem[] = [
  { label: "Title", prop: "title" },
  { label: "Release Date", prop: "releaseDate" },
  {
    prop: "directorId",
    label: "Director",
    render: (data, item) => (
      <ShowDirectorById directorId={data.movieDirectorId} />
    ),
  },
  {
    prop: "reviewId",
    label: "Review",
    render: (data, item) => <ShowReviewByMovieId movieId={data.id} />,
  },
];

const LandingPage = () => (
  <Stack
    justifyContent="center"
    sx={{
      width: "80%",
      minWidth: "20rem",
      margin: "0 auto",
    }}
  >
    <MovieListSection />
  </Stack>
);

export default LandingPage;
