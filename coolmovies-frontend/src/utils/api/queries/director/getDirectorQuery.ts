import { gql, useQuery } from "@apollo/client";

import { moviesClient } from "../../client/movieClient";
import { Director, DirectorVars } from "../../../../schema/api/Director";

const DIRECTOR_BY_ID_QUERY = gql`
  query MovieDirector($id: UUID!) {
    movieDirectorById(id: $id) {
      id
      nodeId
      age
      name
    }
  }
`;

const DIRECTOR_BY_NODE_ID_QUERY = gql`
  query MovieDirector($id: UUID!) {
    movieDirector(nodeId: $id) {
      id
      nodeId
      age
      name
    }
  }
`;

const getDirectorQuery = (vars: DirectorVars) => {
  const {nodeId, id} = vars
  const QUERY = nodeId ? DIRECTOR_BY_NODE_ID_QUERY : DIRECTOR_BY_ID_QUERY;
  return moviesClient.query({
    query: QUERY,
    variables: { id: nodeId || id },
    fetchPolicy: "network-only",
  });
};

export default getDirectorQuery;
