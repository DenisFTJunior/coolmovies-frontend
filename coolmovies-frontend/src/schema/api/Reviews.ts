import { Review } from "./Review";

enum OrderType {
  ID_ASC,
  ID_DESC,
  TITLE_ASC,
  TITLE_DESC,
  BODY_ASC,
  BODY_DESC,
  RATING_ASC,
  RATING_DESC,
  MOVIE_ID_ASC,
  MOVIE_ID_DESC,
  USER_REVIEWER_ID_ASC,
  USER_REVIEWER_ID_DESC,
}

export interface Reviews {
  allMovieReviews: {
    reviews: Review[];
  };
  totalCount: number;
  pageInfo: {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
}

export interface ReviewsVars {
  condition?: {
    id?: string;
    nodeId?: string;
    body?: string;
    movieId?: string;
    rating?: string;
    title?: string;
    userReviewerId?: string;
  };
  filter?: Filter;
  orderBy?: OrderType;
  offset?: number;
  last?: number;
  first?: number;
}

interface Filter {
  id?: string;
  nodeId?: string;
  body?: string;
  movieId?: string;
  rating?: string;
  title?: string;
  userReviewerId?: string;
  and?: Filter;
  or?: Filter;
  not?: Filter;
}
