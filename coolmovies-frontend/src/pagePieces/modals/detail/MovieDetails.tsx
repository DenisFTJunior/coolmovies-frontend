import React from "react";
import DetailsModal from "../../../components/modal/DetailsModal";

import { ShowDirector } from "../../../components/show/ShowDirector";
import { ShowReview } from "../../../components/show/ShowReview";
import { Review } from "../../../schema/api/Review";
import { DetailItem } from "../../../schema/components/Modal";

const ITEMS: DetailItem[] = [
  { label: "Title", prop: "title" },
  { label: "Release Date", prop: "releaseDate" },
  {
    prop: "directorId",
    label: "Director",
    render: (data, item) => <ShowDirector director={data?.director} />,
  },
  {
    prop: "reviews",
    label: "Reviews",
    render: (data, item) =>
      data?.reviewsQuery.reviews.map((review:Review) => <ShowReview review={review} />),
  },
];

const DetailMovieModal = () => (
  <DetailsModal name="detailMovie" items={ITEMS} />
);

export default DetailMovieModal;
