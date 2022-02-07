import { Box } from "@mui/material";
import { path } from "ramda";
import React, { useEffect, useState } from "react";

import Table from "../../../pagePieces/table";
import TableActions from "../../../pagePieces/table/TableActions";
import { Movie } from "../../../schema/api/Movie";
import { Movies } from "../../../schema/api/Movies";
import movieListActions from "./_actions/movieListActions";

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
  },
  {
    id: "actions",
    label: "Actions",
    prop: path([""]),
    sortOption: {
      entity: "",
      direction: "",
    },
    render: (data: Movie) => {
      const actions = movieListActions();
      return <TableActions item={data} actions={actions} />;
    },
  },
];

const MovieListSection = ({ movies }: { movies: Movies }) => {
  const [data, setData] = useState(movies);
  useEffect(() => setData(movies), [movies]);
  return <Table data={data} columns={columns} />;
};

export default MovieListSection;
