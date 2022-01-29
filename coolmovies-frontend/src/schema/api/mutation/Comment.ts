export interface SaveCommentInput {
  input: SaveCommentVars
}

export interface SaveCommentVars {
  comment: {
    title: string;
    body: string;
    userId: string;
    movieReviewId: string;
  };
}

export interface UpdateCommentInput {
  input: UpdateCommentVars;
}

export interface UpdateCommentVars {
  id?: string;
  nodeId?: string;
  commentPatch: {
    title: string;
    body: string;
    userId: string;
    movieReviewId: string;
  };
}

export interface DeleteCommentInput {
  input:DeleteCommentVars
}

export interface DeleteCommentVars {
  id?: string;
  nodeId?: string;
}
