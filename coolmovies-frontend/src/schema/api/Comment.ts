export interface Comment {
  id: string;
  nodeId: string;
  title: string;
  body: string;
  movieReviewId: string;
  userId: string;
}

export interface CommentVars {
  id?: string;
  nodeId?: string;
}

