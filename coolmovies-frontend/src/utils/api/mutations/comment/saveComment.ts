import { gql } from "@apollo/client";

import { moviesClient } from "../../client/movieClient";
import { SaveCommentVars } from "../../../../schema/api/mutation/Comment";

const SAVE_COMMENT_MUTATION = gql`
  mutation CreateComment($input: CreateCommentInput) {
    createComment(input: $input) {
      id: clientMutationId
    }
  }
`;

const saveComment = (input: SaveCommentVars) =>
  moviesClient.mutate({
    mutation: SAVE_COMMENT_MUTATION,
    variables: { input },
    refetchQueries: ["Comment", "AllComments"],
  });

export default saveComment;
