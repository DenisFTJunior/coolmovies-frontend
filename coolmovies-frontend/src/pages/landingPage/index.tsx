import React from "react";
import DetailsModal from "../../components/modal/DetailsModal";
import EditModal from "../../components/modal/EditModal";
import { DetailItem, Item } from "../../schema/components/Modal";

import MovieListSection from "./_sections/MovieListSection";
import RecommendedSection from "./_sections/RecommendedSection";

const editModalItems: Item[] = [
  { prop: "title", label: "Title", required: true },
  { prop: "releaseDate", label: "Release Date", required: false },
];

const detailModalItems: DetailItem[] = [
  { label: "Title", prop: "title" },
  { label: "Release Date", prop: "releaseDate" },
];

const LandingPage = () => (
  
  <>
    <MovieListSection />
    <RecommendedSection />
    <EditModal items={editModalItems} />
    <DetailsModal items={detailModalItems} />
  </>
);

export default LandingPage;
