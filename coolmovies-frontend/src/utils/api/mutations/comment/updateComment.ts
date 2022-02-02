import { gql, useMutation } from "@apollo/client";

import { moviesClient } from "../../client/movieClient";
import { Comment } from "../../../../schema/api/Comment";
import {
  UpdateCommentInput,
  UpdateCommentVars,
} from "../../../../schema/api/mutation/Comment";

const UPDATE_COMMENT_BY_ID_MUTATION = gql`
  mutation UpdateCommentById($input: CreateCommentInput) {
    updateCommentById(input: $input) {
      id: clientMutationId
    }
  }
`;

const UPDATE_COMMENT_BY_NODEID_MUTATION = gql`
  mutation UpdateComment($input: CreateCommentInput) {
    updateComment(input: $input) {
      id: clientMutationId
    }
  }
`;

const updateComment = ({ nodeId, id, commentPatch }: UpdateCommentVars) => {
  const mutation = nodeId
    ? UPDATE_COMMENT_BY_NODEID_MUTATION
    : UPDATE_COMMENT_BY_ID_MUTATION;

  return moviesClient.mutate({
    mutation,
    variables: { input: { nodeId, id, commentPatch } },
    refetchQueries: ["Comment", "AllComments"],
  });
};

export default updateComment;
