import { gql, useQuery } from "@apollo/client";

import { moviesClient } from "../../client/movieClient";
import { Director, DirectorVars } from "../../../../schema/api/Director";

const DIRECTOR_BY_ID_QUERY = gql`
  query MovieDirector($id: ID!) {
    movieReviewById(id: $id) {
      id
      nodeId
      age
      name
    }
  }
`;

const DIRECTOR_BY_NODE_ID_QUERY = gql`
  query MovieDirector($id: ID!) {
    movieDirector(nodeId: $id) {
      id
      nodeId
      age
      name
    }
  }
`;

const getDirectorQuery = ({ id, nodeId }: DirectorVars) => {
  const QUERY = nodeId ? DIRECTOR_BY_NODE_ID_QUERY : DIRECTOR_BY_ID_QUERY;
  return moviesClient.query({
    query: QUERY,
    variables: { id: nodeId || id },
    fetchPolicy: "network-only",
  });
};

export default getDirectorQuery;
