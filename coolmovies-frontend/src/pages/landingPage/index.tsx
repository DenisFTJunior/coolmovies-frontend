import React from "react";
import DetailsModal from "../../pagePieces/modal/DetailsModal";
import EditModal from "../../pagePieces/modal/EditModal";
import { DetailItem, Item } from "../../schema/components/Modal";

import MovieListSection from "./_sections/MovieListSection";
import RecommendedSection from "./_sections/RecommendedSection";
import { ShowDirectorById } from "../../components/show/ShowDirector";
import { ShowReviewByMovieId } from "../../components/show/ShowReview";
import { Box, Stack } from "@mui/material";

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
  <Box
   
    sx={{
      width: "80%",
      minWidth: "20rem",
    }}
  >
    <MovieListSection />
    {/* <RecommendedSection /> */}
    <EditModal items={editModalItems} />
    <DetailsModal items={detailModalItems} />
  </Box>
);

export default LandingPage;
