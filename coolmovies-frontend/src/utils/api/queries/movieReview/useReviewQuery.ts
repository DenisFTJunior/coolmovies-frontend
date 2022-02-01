import { gql, useQuery } from "@apollo/client";

import { moviesClient } from "../../client/movieClient";
import { Review, ReviewVars } from "../../../../schema/api/Review";

const REVIEW_BY_ID_QUERY = gql`
  query MovieReview($id: ID!) {
    movieReviewById(id: $id) {
      id
      body
      movieId
      rating
      title
      userReviewerId
    }
  }
`;

const REVIEW_BY_NODE_ID_QUERY = gql`
  query MovieReview($id: ID!) {
    movieReviewById(nodeId: $id) {
      id
      body
      movieId
      rating
      title
      userReviewerId
    }
  }
`;

const useReviewQuery = ({ id, nodeId }: ReviewVars) => {
  const QUERY = nodeId ? REVIEW_BY_NODE_ID_QUERY : REVIEW_BY_ID_QUERY;
  const query = useQuery<Review, ReviewVars>(QUERY, {
    fetchPolicy: "network-only",
    nextFetchPolicy: "cache-first",
    variables: { id: nodeId || id },
    skip: !id && !nodeId,
    client: moviesClient,
  });
  return query
};

export default useReviewQuery;
