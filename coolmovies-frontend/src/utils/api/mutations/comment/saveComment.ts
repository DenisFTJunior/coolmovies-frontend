import { gql, useMutation, useQuery } from "@apollo/client";

import { moviesClient } from "../../client/movieClient";
import { Comment } from "../../../../schema/api/Comment";
import { CommentInput } from "../../../../schema/api/mutation/Comment";

const SAVE_COMMENT_MUTATION = gql`
  mutation CreateComment($input: CreateCommentInput) {
    createComment(input: $input) {
      id: clientMutationId
    }
  }
`;

const saveComment = (input: CommentInput) => {
  return useMutation<Comment, CommentInput>(SAVE_COMMENT_MUTATION, {
    variables: input,
    client: moviesClient,
    refetchQueries: ["Comment", "Comments"],
  });
};

export default saveComment;
