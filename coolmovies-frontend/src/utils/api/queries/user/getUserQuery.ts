import { gql, useQuery } from "@apollo/client";

import { moviesClient } from "../../client/movieClient";
import { User, UserVars } from "../../../../schema/api/User";

const USER_BY_ID_QUERY = gql`
  query User($id: ID!) {
    userById(id: $id) {
      id
      nodeId
      name
    }
  }
`;

const USER_BY_NODE_ID_QUERY = gql`
  query User($id: ID!) {
    user(nodeId: $id) {
      id
      nodeId
      name
    }
  }
`;

const getUserQuery = ({ id, nodeId }: UserVars) => {
  const query = nodeId ? USER_BY_NODE_ID_QUERY : USER_BY_ID_QUERY;
  return useQuery<User, UserVars>(query, {
    fetchPolicy: "network-only",
    nextFetchPolicy: "cache-first",
    variables: { id: nodeId || id },
    skip: !id && !nodeId,
    client: moviesClient,
  });
};

export default getUserQuery;
