export interface Review {
  id: string;
  body: string;
  movieId: string;
  rating: string;
  title: string;
  userReviewerId: string;
}

export interface ReviewVars {
  id?: string;
  nodeId?:string
}
