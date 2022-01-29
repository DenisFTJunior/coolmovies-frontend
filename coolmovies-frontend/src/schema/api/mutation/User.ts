export interface SaveUserInput {
  input: SaveUserVars;
}

export interface SaveUserVars {
  user: {
    name: string;
  };
}

export interface UpdateUserInput {
  input: UpdateUserVars;
}

export interface UpdateUserVars {
  id?: string;
  nodeId?: string;
  userPatch: {
    name: string;
  };
}

export interface DeleteUserInput {
  input: DeleteUserVars;
}

export interface DeleteUserVars {
  id?: string;
  nodeId?: string;
}
