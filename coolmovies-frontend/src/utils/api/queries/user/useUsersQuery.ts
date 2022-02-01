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

const useUsersQuery = (vars: UsersVars) => {
  const query = useQuery<Users, UsersVars>(QUERY, {
    fetchPolicy: "network-only",
    nextFetchPolicy: "cache-first",
    variables: vars,
    client: moviesClient,
  });
  return query;
};

export default useUsersQuery;
