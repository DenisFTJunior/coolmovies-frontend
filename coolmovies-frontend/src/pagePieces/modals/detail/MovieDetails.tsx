import React from "react";
import DetailsModal from "../../../components/modal/DetailsModal";

import { ShowDirector } from "../../../components/show/ShowDirector";
import { ShowReview } from "../../../components/show/ShowReview";
import { DetailItem } from "../../../schema/components/Modal";

const ITEMS: DetailItem[] = [
  { label: "Title", prop: "title" },
  { label: "Release Date", prop: "releaseDate" },
  {
    prop: "directorId",
    label: "Director",
    render: (data, item) => <ShowDirector director={data.director} />,
  },
  {
    prop: "reviewId",
    label: "Review",
    render: (data, item) => <ShowReview review={data.review} />,
  },
];

const DetailMovieModal = () =>{
  <DetailsModal name="detailMovie" items={ITEMS}/> 
}

export default DetailMovieModal