export interface CommentInput {
  comment: {
    title: string;
    body: string;
    userId: string;
    movieReviewId: string;
  };
}

export interface UpdateCommentInput {
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
  id?: string;
  nodeId?: string;
}