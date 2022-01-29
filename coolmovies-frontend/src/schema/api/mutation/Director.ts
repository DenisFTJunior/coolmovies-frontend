export interface DirectorInput {
  movieDirector: {
    name: string;
    age: number;
  };
}

export interface UpdateDirectorInput {
  id?: string;
  nodeId?: string;
  movieDirectorPatch: {
    name: string;
    age: number;
  };
}

export interface DeleteDirectorInput {
  id?: string;
  nodeId?: string;
}
