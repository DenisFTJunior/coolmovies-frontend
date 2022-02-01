import { gql, useQuery } from "@apollo/client";

import { moviesClient } from "../../client/movieClient";
import { Comment, CommentVars } from "../../../../schema/api/Comment";

const COMMENT_BY_ID_QUERY = gql`
  query Comment($id: ID!) {
    commentById(id: $id) {
      id
      nodeId
      title
      body
      movieReviewId
      userId
    }
  }
`;

const COMMENT_BY_NODE_ID_QUERY = gql`
  query Comment($id: ID!) {
    comment(nodeId: $id) {
      id
      nodeId
      title
      body
      movieReviewId
      userId
    }
  }
`;

const getCommentQuery = ({ id, nodeId }: CommentVars) => {
  const QUERY = nodeId ? COMMENT_BY_NODE_ID_QUERY : COMMENT_BY_ID_QUERY;
  return moviesClient.query({
    query: QUERY,
    variables: { id: nodeId || id },
    fetchPolicy: "network-only",
  });
};

export default getCommentQuery;
