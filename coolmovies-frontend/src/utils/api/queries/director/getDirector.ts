import { gql, useQuery } from "@apollo/client";

import { moviesClient } from "../../client/movieClient";
import { Review, ReviewVars } from "../../../../schema/Review";

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

const getReviewQuery = ({ id, nodeId }: ReviewVars) => {
  const query = nodeId ? DIRECTOR_BY_NODE_ID_QUERY : DIRECTOR_BY_ID_QUERY;
  return useQuery<Review, ReviewVars>(query, {
    fetchPolicy: "network-only",
    nextFetchPolicy: "cache-first",
    variables: { id: nodeId || id },
    skip: !id && !nodeId,
    client: moviesClient,
  });
};

export default getReviewQuery;
