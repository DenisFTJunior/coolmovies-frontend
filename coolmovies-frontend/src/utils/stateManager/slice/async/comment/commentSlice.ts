import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Comment, CommentVars } from "../../../../../schema/api/Comment";
import { Comments, CommentsVars } from "../../../../../schema/api/Comments";
import {
  DeleteCommentVars,
  SaveCommentVars,
  UpdateCommentVars,
} from "../../../../../schema/api/mutation/Comment";

interface ExampleState {
  fetchedComments?: Comments | Comment | Object | undefined;
}

const initialState: ExampleState = {
  fetchedComments: [],
};

export const commentSlice = createSlice({
  initialState,
  name: "comment",
  reducers: {
    fetchComment: (
      state,
      action: PayloadAction<{ vars: CommentVars }>
    ) => {},
    fetchComments: (
      state,
      action: PayloadAction<{ fetchMore?: boolean; vars: CommentsVars }>
    ) => {},
    saveComment: (
      state,
      action: PayloadAction<{ vars: SaveCommentVars }>
    ) => {},
    deleteComment: (
      state,
      action: PayloadAction<{ vars: DeleteCommentVars }>
    ) => {},
    updateComment: (
      state,
      action: PayloadAction<{ vars: UpdateCommentVars }>
    ) => {},
    clearCommentData: (state) => {
      state.fetchedComments = undefined;
    },
    loadedComment: (
      state,
      action: PayloadAction<{ data: Comments | Comment | undefined }>
    ) => {
      state.fetchedComments = action.payload.data;
    },
    loadCommentError: (state, action: PayloadAction<{ error: string }>) => {
      state.fetchedComments = [{ error: action.payload.error }];
    },
  },
});

export const { actions } = commentSlice;
export type CommentSliceAction = typeof actions;
export default commentSlice.reducer;
