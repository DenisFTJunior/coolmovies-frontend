import { gql, useMutation, useQuery } from "@apollo/client";

import { moviesClient } from "../../client/movieClient";
import {
  SaveReviewInput,
  SaveReviewVars,
} from "../../../../schema/api/mutation/Review";
import { Review } from "../../../../schema/api/Review";

const SAVE_REVIEW_MUTATION = gql`
  mutation CreateMovieReview($input: CreateMovieReviewInput) {
    createMovieReview(input: $input) {
      id: clientMutationId
    }
  }
`;

const saveReview = (input: SaveReviewVars) => {
  return useMutation<Review, SaveReviewInput>(SAVE_REVIEW_MUTATION, {
    variables: { input },
    client: moviesClient,
    refetchQueries: ["MovieReview"],
  });
};

export default saveReview;
