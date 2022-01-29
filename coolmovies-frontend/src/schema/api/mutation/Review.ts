export interface SaveReviewInput {
  input: SaveReviewVars;
}

export interface SaveReviewVars {
  movieReview: {
    title: string;
    movieId: string;
    userReviewerId: string;
    rating: number;
    body: string;
  };
}

export interface UpdateReviewInput {
  input: UpdateReviewVars;
}

export interface UpdateReviewVars {
  id?: string;
  nodeId?: string;
  movieReviewPatch: {
    title: string;
    movieId: string;
    userReviewerId: string;
    rating: number;
    body: string;
  };
}

export interface DeleteReviewInput {
  input: DeleteReviewVars;
}

export interface DeleteReviewVars {
  id?: string;
  nodeId?: string;
}
