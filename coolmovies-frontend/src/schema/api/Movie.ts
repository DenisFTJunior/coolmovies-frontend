import { Director } from "./Director";
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
}

export interface MovieVars {
  id: string;
}
