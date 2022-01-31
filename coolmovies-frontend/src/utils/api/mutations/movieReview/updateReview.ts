import { gql, useMutation } from "@apollo/client";

import { moviesClient } from "../../client/movieClient";
import {
  UpdateReviewInput,
  UpdateReviewVars,
} from "../../../../schema/api/mutation/Review";
import { Review } from "../../../../schema/api/Review";

const UPDATE_REVIEW_BY_ID_MUTATION = gql`
  mutation UpdateMovieReviewById($input: UpdateMovieReviewByIdInput) {
    updateMovieReviewById(input: $input) {
      id: clientMutationId
    }
  }
`;

const UPDATE_REVIEW_BY_NODEID_MUTATION = gql`
  mutation updateMovieReview($input: UpdateMovieReviewInput) {
    updateMovieReview(input: $input) {
      id: clientMutationId
    }
  }
`;

const updateReview = ({ nodeId, id, movieReviewPatch }: UpdateReviewVars) => {
  const query = nodeId
    ? UPDATE_REVIEW_BY_NODEID_MUTATION
    : UPDATE_REVIEW_BY_ID_MUTATION;
  return useMutation<Review, UpdateReviewInput>(query, {
    variables: { input: { nodeId, id, movieReviewPatch } },
    client: moviesClient,
    refetchQueries: ["MovieReview", "MovieReviews"],
  });
};

export default updateReview;
