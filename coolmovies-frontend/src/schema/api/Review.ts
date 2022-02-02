import { Movie } from "./Movie";

export interface Review {
  id: string;
  nodeId: string;
  body: string;
  movieId: string;
  rating: string;
  title: string;
  userReviewerId: string;
  movieByMovieId: Movie;
}

export interface ReviewVars {
  id?: string;
  nodeId?: string;
}
