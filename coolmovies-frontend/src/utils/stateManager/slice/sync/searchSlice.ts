import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  search: string | undefined;
  isSearching: boolean;
}

const initialState: InitialState = {
  search: "",
  isSearching: false,
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
    toogleSearch: (state) => {
      state.isSearching = !state.isSearching;
    },
  },
});

export const { actions } = searchSlice;
export type SearchSliceAction = typeof actions;
export default searchSlice.reducer;