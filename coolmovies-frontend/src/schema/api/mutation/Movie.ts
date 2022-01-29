export interface SaveMovieInput {
  input: SaveMovieVars;
}

export interface SaveMovieVars {
  movie: {
    movieDirectorId: string;
    releaseDate: string;
    title: string;
    userCreatorId: string;
  };
}

export interface UpdateMovieInput {
  input: UpdateMovieVars;
}

export interface UpdateMovieVars {
  id?: string;
  nodeId?: string;
  moviePatch: {
    movieDirectorId: string;
    releaseDate: string;
    title: string;
    userCreatorId: string;
  };
}

export interface DeleteMovieInput {
  input: DeleteMovieVars;
}

export interface DeleteMovieVars {
  id?: string;
  nodeId?: string;
}
