import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  DeleteReviewVars,
  UpdateReviewVars,
  SaveReviewVars,
} from "../../../../../schema/api/mutation/Review";
import { Review, ReviewVars } from "../../../../../schema/api/Review";
import { Reviews, ReviewsVars } from "../../../../../schema/api/Reviews";

interface InitialState {
  fetchedReview?: Review | Reviews | undefined;
  error?: string | undefined;
}

const initialState: InitialState = {
  fetchedReview: undefined,
};

export const reviewSlice = createSlice({
  initialState,
  name: "review",
  reducers: {
    fetchReview: (state, action: PayloadAction<{ vars: ReviewVars }>) => {},
    fetchReviews: (
      state,
      action: PayloadAction<{ fetchMore?: boolean; vars: ReviewsVars }>
    ) => {},
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
      state.error = undefined;
    },
    loadedReview: (
      state,
      action: PayloadAction<{ data: Review | Reviews | undefined }>
    ) => {
      state.fetchedReview = action.payload.data;
    },
    loadReviewError: (state, action: PayloadAction<{ error: string }>) => {
      state.error = action.payload.error;
    },
  },
});

export const { actions } = reviewSlice;
export type ReviewSliceAction = typeof actions;
export default reviewSlice.reducer;
