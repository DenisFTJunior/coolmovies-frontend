import { path } from "ramda";
import React, { useEffect } from "react";

import Table from "../../../pagePieces/table";
import TableActions from "../../../pagePieces/table/TableActions";
import { Movie } from "../../../schema/api/Movie";
import { Movies } from "../../../schema/api/Movies";
import { Review } from "../../../schema/api/Review";
import useFetchingMovies from "../../../utils/hooks/useFetchMovies";
import { useStateDispatch } from "../../../utils/stateManager/hooks/useDispatch";
import { useStateSelector } from "../../../utils/stateManager/hooks/useSelector";
import { actions as movieActions } from "../../../utils/stateManager/slice/async/movie/movieSlice";
import movieListActions from "./_actions/movieListActions";

const columns = [
  {
    id: "titleMovie",
    label: "Title",
    prop: (value: Movies, index: number) =>
      path(["allMovies", "movies", index, "title"]),
    sortOption: {
      entity: "TITLE",
      direction: "ASC",
    },
  },
  {
    id: "releaseDateMovie",
    label: "Release Data",
    prop: path(["allMovies", "movies", "releaseDate"]),
    sortOption: {
      entity: "RELEASE_DATE",
      direction: "ASC",
    },
  },
  {
    id: "ratingMovie",
    label: "Rating",
    prop: path(["allReviews", "movies", "releaseDate"]),
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
    render: (data: Movie | Review) => (
      <TableActions item={data} actions={movieListActions()} />
    ),
  },
];

const MovieListSection = () => {
  const [movies, updateQuery, stateMovie] = useFetchingMovies({ vars: {} });
  return <Table data={movies} columns={columns} />;
};

export default MovieListSection;
