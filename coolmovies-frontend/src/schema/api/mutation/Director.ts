export interface SaveDirectorInput {
  input: SaveDirectorVars;
}

export interface SaveDirectorVars {
  movieDirector: {
    name: string;
    age: number;
  };
}

export interface UpdateDirectorInput {
  input: UpdateDirectorVars;
}

export interface UpdateDirectorVars {
  id?: string;
  nodeId?: string;
  movieDirectorPatch: {
    name: string;
    age: number;
  };
}

export interface DeleteDirectorInput {
  input: DeleteDirectorVars;
}

export interface DeleteDirectorVars {
  id?: string;
  nodeId?: string;
}
