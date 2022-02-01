import { gql, useQuery } from "@apollo/client";

import { moviesClient } from "../../client/movieClient";
import { Directors, DirectorsVars } from "../../../../schema/api/Directors";

const QUERY = gql`
  query AllDirectors(
    $orderBy: [MovieDirectorsOrderBy!]
    $offset: Int
    $last: Int
    $first: Int
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
        id
        nodeId
        age
        name
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
    }
  }
`;

const useDirectorsQuery = (vars: DirectorsVars) => {
  const query = useQuery<Directors, DirectorsVars>(QUERY, {
    fetchPolicy: "network-only",
    nextFetchPolicy: "cache-first",
    variables: vars,
    client: moviesClient,
  });
  return query;
};

export default useDirectorsQuery;
