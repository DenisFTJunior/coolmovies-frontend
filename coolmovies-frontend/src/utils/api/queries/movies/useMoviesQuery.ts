import { gql, useQuery } from "@apollo/client";

import { moviesClient } from "../../client/movieClient";
import { Movies, MoviesVars } from "../../../../schema/api/Movies";

const QUERY = gql`
  query Movies(
    $condition: MovieCondition = {}
    $filter: MovieFilter = {}
    $orderBy: [MoviesOrderBy!]
    $offset: Int
    $last: Int
    $first: Int
  ) {
    allMovies(
      condition: $condition
      filter: $filter
      orderBy: $orderBy
      offset: $offset
      last: $last
      first: $first
    ) {
      movies: nodes {
        id
        nodeId
        movieDirectorId
        releaseDate
        title
        userCreatorId
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      totalCount
    }
  }
`;

const useMoviesQuery = (vars: MoviesVars) => {
  const query = useQuery<Movies, MoviesVars>(QUERY, {
    fetchPolicy: "network-only",
    nextFetchPolicy: "cache-first",
    variables: vars,
    client: moviesClient,
  });
  return query;
};

export default useMoviesQuery;
