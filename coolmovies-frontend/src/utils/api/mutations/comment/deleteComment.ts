import { gql, useMutation } from "@apollo/client";

import { moviesClient } from "../../client/movieClient";
import { Comment } from "../../../../schema/api/Comment";
import {
  DeleteCommentInput,
  DeleteCommentVars,
} from "../../../../schema/api/mutation/Comment";

const DELETE_COMMENT_BY_ID_MUTATION = gql`
  mutation DeleteCommentById($input: DeleteCommentByIdInput) {
    deleteCommentById(input: $input) {
      id: clientMutationId
    }
  }
`;

const DELETE_COMMENT_BY_NODEID_MUTATION = gql`
  mutation DeleteComment($input: DeleteCommentInput) {
    deleteComment(input: $input) {
      id: clientMutationId
    }
  }
`;

const deleteComment = ({ nodeId, id }: DeleteCommentVars) => {
  const query = nodeId
    ? DELETE_COMMENT_BY_NODEID_MUTATION
    : DELETE_COMMENT_BY_ID_MUTATION;
  return useMutation<Comment, DeleteCommentInput>(query, {
    variables: { input: { nodeId, id } },
    client: moviesClient,
    refetchQueries: ["Comment", "AllComments"],
  });
};

export default deleteComment;
