import { path } from "ramda";
import React from "react";

import Table from "../../../components/table";
import TableActions from "../../../components/table/TableActions";
import { Movie } from "../../../schema/api/Movie";
import { Movies } from "../../../schema/api/Movies";
import { Review } from "../../../schema/api/Review";
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
      type: {
        asc: true,
        desc: true,
      },
    },
  },
  {
    id: "releaseDateMovie",
    label: "Release Data",
    prop: path(["allMovies", "movies", "releaseDate"]),
    sortOption: {
      entity: "RELEASE_DATE",
      type: {
        asc: true,
        desc: true,
      },
    },
  },
  {
    id: "ratingMovie",
    label: "Rating",
    prop: path(["allReviews", "movies", "releaseDate"]),
    sortOption: {
      entity: "",
      type: {
        asc: false,
        desc: false,
      },
    },
  },
  {
    id: "actions",
    label: "Actions",
    prop: path([""]),
    sortOption: {
      entity: "",
      type: {
        asc: false,
        desc: false,
      },
    },
    render: (data: Movie | Review) => (
      <TableActions item={data} actions={movieListActions()} />
    ),
  },
];

const MovieListSection = () => {
  const dispatch = useStateDispatch();
  const stateMovie = useStateSelector((state) => state.movie);
  const { clearMovieData, fetchMovies } = movieActions;
  if (stateMovie) dispatch(clearMovieData());
  dispatch(fetchMovies({ vars: {} }));
  return <Table data={stateMovie} columns={columns} />;
};

export default MovieListSection;
