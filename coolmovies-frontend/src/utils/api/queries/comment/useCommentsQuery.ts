import { gql, useQuery } from "@apollo/client";

import { moviesClient } from "../../client/movieClient";
import { Comments, CommentsVars } from "../../../../schema/api/Comments";

const QUERY = gql`
  query AllComments(
    $condition: CommentCondition
    $filter: CommentFilter
    $orderBy: [CommentsOrderBy!]
    $offset: Int
    $last: Int
    $first: Int
  ) {
    allComments(
      orderBy: $orderBy
      offset: $offset
      last: $last
      first: $first
      filter: $filter
      condition: $condition
    ) {
      comments: nodes {
        id
        nodeId
        title
        body
        movieReviewId
        userId
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
    }
  }
`;

const useCommentsQuery = (vars: CommentsVars) => {
  const query = useQuery<Comments, CommentsVars>(QUERY, {
    fetchPolicy: "network-only",
    nextFetchPolicy: "cache-first",
    variables: vars,
    client: moviesClient,
  });
  return query;
};

export default useCommentsQuery;
