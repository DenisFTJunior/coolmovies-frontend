import { gql, useQuery } from "@apollo/client";

import { moviesClient } from "../../client/movieClient";
import { Movies, MoviesVars } from "../../../../schema/query/Movies";

const QUERY = gql`
  query Movies(
    $condition: MovieCondition = {}
    $filter: MovieFilter = {}
    $orderBy: [MoviesOrderBy!] = NATURAL
    $offset: Int = 10
    $last: Int = 10
    $first: Int = 10
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
    }
  }
`;

const getMoviesQuery = (vars: MoviesVars) => {
  return useQuery<Movies, MoviesVars>(QUERY, {
    fetchPolicy: "network-only",
    nextFetchPolicy: "cache-first",
    variables: vars,
    client: moviesClient,
  });
};

export default getMoviesQuery;
