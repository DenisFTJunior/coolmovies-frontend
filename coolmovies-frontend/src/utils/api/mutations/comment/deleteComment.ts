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
  const mutation = nodeId
    ? DELETE_COMMENT_BY_NODEID_MUTATION
    : DELETE_COMMENT_BY_ID_MUTATION;
  return moviesClient.mutate({
    mutation,
    variables: { input: { nodeId, id } },
    refetchQueries: ["Comment", "AllComments"],
  });
};

export default deleteComment;
