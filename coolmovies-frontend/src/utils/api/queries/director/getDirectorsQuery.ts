import { gql, useQuery } from "@apollo/client";

import { moviesClient } from "../../client/movieClient";
import { Directors, DirectorsVars } from "../../../../schema/query/Directors";

const QUERY = gql`
  query AllDirectors(
    $orderBy: [MovieDirectorsOrderBy!] = NATURAL
    $offset: Int = 10
    $last: Int = 10
    $first: Int = 10
    $filter: MovieDirectorFilter = {}
    $condition: MovieDirectorCondition = {}
  ) {
    allMovieDirectors(
      orderBy: $orderBy
      offset: $offset
      last: $last
      first: $first
      filter: $filter
      condition: $condition
    ) {
      directors: nodes {
        age
        id
        name
        nodeId
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
    }
  }
`;

const getDirectorsQuery = (vars: DirectorsVars) => {
  return useQuery<Directors, DirectorsVars>(QUERY, {
    fetchPolicy: "network-only",
    nextFetchPolicy: "cache-first",
    variables: vars,
    client: moviesClient,
  });
};

export default getDirectorsQuery;
