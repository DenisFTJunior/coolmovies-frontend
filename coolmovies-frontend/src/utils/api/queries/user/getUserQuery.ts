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
  const QUERY = nodeId ? USER_BY_NODE_ID_QUERY : USER_BY_ID_QUERY;
  return moviesClient.query({
    query: QUERY,
    variables: { id: nodeId || id },
    fetchPolicy: "network-only",
  });
};

export default getUserQuery;
