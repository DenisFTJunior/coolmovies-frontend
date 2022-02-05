import { gql, useQuery } from "@apollo/client";

import { moviesClient } from "../../client/movieClient";
import { Directors, DirectorsVars } from "../../../../schema/api/Directors";

const QUERY = gql`
  query AllDirectors(
    $orderBy: [MovieDirectorsOrderBy!]
    $offset: Int
    $last: Int
    $first: Int
    $filter: MovieDirectorFilter
    $condition: MovieDirectorCondition
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

const getDirectorsQuery = (vars: DirectorsVars) =>
  moviesClient.query({
    query: QUERY,
    variables: vars,
    fetchPolicy: "network-only",
  });

export default getDirectorsQuery;
