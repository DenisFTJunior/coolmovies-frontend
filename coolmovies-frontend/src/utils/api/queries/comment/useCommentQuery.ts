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

const useCommentQuery = ({ id, nodeId }: CommentVars) => {
  const QUERY = nodeId ? COMMENT_BY_NODE_ID_QUERY : COMMENT_BY_ID_QUERY;
  const query = useQuery<Comment, CommentVars>(QUERY, {
    fetchPolicy: "network-only",
    nextFetchPolicy: "cache-first",
    variables: { id: nodeId || id },
    skip: !id && !nodeId,
    client: moviesClient,
  });
  return query;
};

export default useCommentQuery;
