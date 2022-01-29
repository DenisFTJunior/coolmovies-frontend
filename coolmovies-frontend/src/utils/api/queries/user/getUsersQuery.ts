import { gql, useQuery } from "@apollo/client";

import { moviesClient } from "../../client/movieClient";
import { Users, UsersVars } from "../../../../schema/api/Users";

const QUERY = gql`
  query Users(
    $orderBy: [UsersOrderBy!] = NATURAL
    $condition: UserCondition = {}
    $filter: UserFilter = {}
    $offset: Int = 10
    $last: Int = 10
    $first: Int = 10
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

const getUsersQuery = (vars: UsersVars) => {
  return useQuery<Users, UsersVars>(QUERY, {
    fetchPolicy: "network-only",
    nextFetchPolicy: "cache-first",
    variables: vars,
    client: moviesClient,
  });
};

export default getUsersQuery;
