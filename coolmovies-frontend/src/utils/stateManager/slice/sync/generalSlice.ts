import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  localValue?: any;
}

const initialState: InitialState = {
  localValue: {},
};

export const generalSlice = createSlice({
  initialState,
  name: "general",
  reducers: {
    setLocalValue: (state, action: PayloadAction<Object>) => {
      state.localValue = action.payload;
    },
    clearLocalValue: (state) => {
      state.localValue = undefined;
    },
  },
});

export const { actions } = generalSlice;
export type GeneralSliceAction = typeof actions;
export default generalSlice.reducer;
