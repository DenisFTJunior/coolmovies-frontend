import { gql, useQuery } from "@apollo/client";

import { moviesClient } from "../../client/movieClient";
import { ReviewsVars, Reviews } from "../../../../schema/api/Reviews";

const QUERY = gql`
  query MovieReviews(
    $condition: MovieReviewCondition = {}
    $filter: MovieReviewFilter = {}
    $first: Int
    $last: Int
    $offset: Int
    $orderBy: [MovieReviewsOrderBy!]
  ) {
    allMovieReviews(
      condition: $condition
      filter: $filter
      first: $first
      last: $last
      offset: $offset
      orderBy: $orderBy
    ) {
      totalCount
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      nodes {
        body
        id
        nodeId
        rating
        title
        userReviewerId
      }
    }
  }
`;

const getReviewsQuery = (vars: ReviewsVars) => {
  return useQuery<Reviews, ReviewsVars>(QUERY, {
    fetchPolicy: "network-only",
    nextFetchPolicy: "cache-first",
    variables: vars,
    client: moviesClient,
  });
};

export default getReviewsQuery;
