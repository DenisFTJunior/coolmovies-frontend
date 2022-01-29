import { Comment } from "./Comment";

enum OrderType {
  ID_ASC,
  ID_DESC,
  TITLE_ASC,
  TITLE_DESC,
  BODY_ASC,
  BODY_DESC,
  USER_ID_ASC,
  USER_ID_DESC,
  MOVIE_REVIEW_ID_ASC,
  MOVIE_REVIEW_ID_DESC
}

export interface Comments {
  allComments: {
    comments: Comment[];
  };
}

export interface CommentsVars {
  condition?: {
    id: string;
    title: string;
    body: string;
    movieReviewId: string;
    userId: string;
  };
  filter?: Filter;
  orderBy?: OrderType;
  offset?: number;
  last?: number;
  first?: number;
}

interface Filter {
  id: string;
  title: string;
  body: string;
  movieReviewId: string;
  userId: string;
  and: Filter;
  or: Filter;
  not: Filter;
}
