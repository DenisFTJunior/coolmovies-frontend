import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  search: string | undefined;
}

const initialState: InitialState = {
  search: "",
};

export const searchSlice = createSlice({
  initialState,
  name: "search",
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    clearSearch: (state) => {
      state.search = undefined;
    },
  },
});

export const { actions } = searchSlice;
export type SearchSliceAction = typeof actions;
export default searchSlice.reducer;
