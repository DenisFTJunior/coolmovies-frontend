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

const useMovieQuery = ({ id }: MovieVars) => {
  const query = useQuery<Movie, MovieVars>(QUERY, {
    fetchPolicy: "network-only",
    nextFetchPolicy: "cache-first",
    variables: { id },
    skip: !id,
    client: moviesClient,
  });
  return query;
};

export default useMovieQuery;
