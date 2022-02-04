import { Director } from "./Director";
import { ReviewsContent } from "./Reviews";
import { User } from "./User";

export interface Movie {
  id: string;
  nodeId: string;
  movieDirectorId: string;
  director: Director;
  user: User;
  releaseDate: Date;
  title: string;
  userCreatorId: string;
  reviewsQuery: ReviewsContent;
}

export interface MovieVars {
  id: string;
}
