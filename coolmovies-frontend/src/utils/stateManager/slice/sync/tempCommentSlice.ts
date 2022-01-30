import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  temporaryComment: string | undefined;
}

const initialState: InitialState = {
  temporaryComment: "",
};

export const tempCommentSlice = createSlice({
  initialState,
  name: "comment",
  reducers: {
    setTemporaryComment: (state, action: PayloadAction<string>) => {
      state.temporaryComment = action.payload;
    },
    clearTemporaryComment: (state) => {
      state.temporaryComment = undefined;
    },
  },
});

export const { actions } = tempCommentSlice;
export type TempCommentSliceAction = typeof actions;
export default tempCommentSlice.reducer;
