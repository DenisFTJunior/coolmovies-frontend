import { gql, useQuery } from "@apollo/client";

import { moviesClient } from "../../client/movieClient";
import { Users, UsersVars } from "../../../../schema/api/Users";

const QUERY = gql`
  query Users(
    $orderBy: [UsersOrderBy!]
    $condition: UserCondition = {}
    $filter: UserFilter = {}
    $offset: Int
    $last: Int
    $first: Int
  ) {
    allUsers(
      condition: $condition
      filter: $filter
      orderBy: $orderBy
      offset: $offset
      last: $last
      first: $first
    ) {
      users: nodes {
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

const getUsersQuery = (vars: UsersVars) =>
  moviesClient.query({
    query: QUERY,
    variables: vars,
    fetchPolicy: "network-only",
  });

export default getUsersQuery;
