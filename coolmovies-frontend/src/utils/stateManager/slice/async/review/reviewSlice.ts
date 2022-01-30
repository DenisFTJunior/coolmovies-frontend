import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  DeleteReviewVars,
  UpdateReviewVars,
  SaveReviewVars,
} from "../../../../../schema/api/mutation/Review";
import { Review, ReviewVars } from "../../../../../schema/api/Review";

interface InitialState {
  fetchedReview?: Review | Object | undefined;
}

const initialState: InitialState = {
  fetchedReview: [],
};

export const reviewSlice = createSlice({
  initialState,
  name: "review",
  reducers: {
    fetchReview: (state, action: PayloadAction<{ vars: ReviewVars }>) => {},
    saveReview: (state, action: PayloadAction<{ vars: SaveReviewVars }>) => {},
    deleteReview: (
      state,
      action: PayloadAction<{ vars: DeleteReviewVars }>
    ) => {},
    updateReview: (
      state,
      action: PayloadAction<{ vars: UpdateReviewVars }>
    ) => {},
    clearReviewData: (state) => {
      state.fetchedReview = undefined;
    },
    loadedReview: (
      state,
      action: PayloadAction<{ data: Review | undefined }>
    ) => {
      state.fetchedReview = action.payload.data;
    },
    loadReviewError: (state, action: PayloadAction<{ error: string }>) => {
      state.fetchedReview = [{ error: action.payload.error }];
    },
  },
});

export const { actions } = reviewSlice;
export type ReviewSliceAction = typeof actions;
export default reviewSlice.reducer;
