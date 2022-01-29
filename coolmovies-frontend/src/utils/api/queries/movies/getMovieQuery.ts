import { gql, useQuery } from "@apollo/client";

import { moviesClient } from "../../client/movieClient";
import { Movie, MovieVars } from "../../../../schema/api/Movie";

const QUERY = gql`
  query Movie($id: ID!) {
    movieById: movie(id: $id) {
      id
      movieDirectorId
      releaseDate
      title
      userCreatorId
    }
  }
`;

const getMovieQuery = ({ id }: MovieVars) => {
  return useQuery<Movie, MovieVars>(QUERY, {
    fetchPolicy: "network-only",
    nextFetchPolicy: "cache-first",
    variables: { id },
    skip: !id,
    client: moviesClient,
  });
};

export default getMovieQuery;
