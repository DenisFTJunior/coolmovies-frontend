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

const getCommentsQuery = (vars: CommentsVars) =>
  moviesClient.query({
    query: QUERY,
    variables: vars,
    fetchPolicy: "network-only",
  });

export default getCommentsQuery;
