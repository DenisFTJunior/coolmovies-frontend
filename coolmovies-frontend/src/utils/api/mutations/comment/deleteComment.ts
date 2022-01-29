import { gql, useMutation } from "@apollo/client";

import { moviesClient } from "../../client/movieClient";
import { Comment } from "../../../../schema/api/Comment";
import {
  DeleteCommentInput
} from "../../../../schema/api/mutation/Comment";

const DELETE_COMMENT_BY_ID_MUTATION = gql`
  mutation DeleteCommentById($input: CreateCommentInput) {
    deleteCommentById(input: $input) {
      id: clientMutationId
    }
  }
`;

const DELETE_COMMENT_BY_NODEID_MUTATION = gql`
  mutation DeleteComment($input: CreateCommentInput) {
    deleteComment(input: $input) {
      id: clientMutationId
    }
  }
`;

const deleteComment = ({ nodeId, id }: DeleteCommentInput) => {
  const query = nodeId
    ? DELETE_COMMENT_BY_NODEID_MUTATION
    : DELETE_COMMENT_BY_ID_MUTATION;
  if (!id && !nodeId) return { error: "Impossible delete :(" };
  return useMutation<Comment, DeleteCommentInput>(query, {
    variables: { nodeId, id },
    client: moviesClient,
    refetchQueries: ["Comment", "AllComments"],
  });
};

export default deleteComment;
