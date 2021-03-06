import { path } from "ramda";
import React from "react";

import Table from "../../../pagePieces/table";
import TableActions from "../../../pagePieces/table/TableActions";
import { Movie } from "../../../schema/api/Movie";
import { Movies } from "../../../schema/api/Movies";

const columns = [
  {
    id: "titleMovie",
    label: "Title",
    prop: path(["title"]),
    sortOption: {
      entity: "TITLE",
      direction: "ASC",
    },
  },
  {
    id: "releaseDateMovie",
    label: "Release Data",
    prop: path(["releaseDate"]),
    sortOption: {
      entity: "RELEASE_DATE",
      direction: "ASC",
    },
  },
  {
    id: "ratingMovie",
    label: "Rating",
    prop: (data: Movie) => {
      const ratings = data.reviewsQuery.reviews.reduce(
        (acc, review) => acc + review.rating,
        0
      );
      return ratings / data.reviewsQuery.totalCount;
    },
    sortOption: {
      entity: "",
      direction: "",
    },
    disableSortOption: true,
  },
  {
    id: "actions",
    label: "Actions",
    prop: path([""]),
    sortOption: {
      entity: "",
      direction: "",
    },
    disableSortOption: true,
    render: (data: Movie) => {
      return <TableActions item={data} />;
    },
  },
];

const MovieListSection = ({
  movies,
  refetch,
}: {
  movies: Movies;
  refetch: any;
}) => {
  return <Table data={movies} columns={columns} refetch={refetch} />;
};

export default MovieListSection;
