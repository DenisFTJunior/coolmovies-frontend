import { gql, useMutation } from "@apollo/client";

import { moviesClient } from "../../client/movieClient";
import { Comment } from "../../../../schema/api/Comment";
import { UpdateCommentInput } from "../../../../schema/api/mutation/Comment";

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

const updateComment = ({ nodeId, id, commentPatch }: UpdateCommentInput) => {
  const query = nodeId
    ? UPDATE_COMMENT_BY_NODEID_MUTATION
    : UPDATE_COMMENT_BY_ID_MUTATION;
  if (!id && !nodeId) return { error: "Impossible update :(" };
  return useMutation<Comment, UpdateCommentInput>(query, {
    variables: { nodeId, id, commentPatch },
    client: moviesClient,
    refetchQueries: ["Comment", "Comments"],
  });
};

export default updateComment;