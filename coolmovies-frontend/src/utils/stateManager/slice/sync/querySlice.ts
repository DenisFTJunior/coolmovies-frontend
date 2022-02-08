import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  filter: Object | undefined;
  sort: {
    entity: string;
    direction: string;
  };
  page: number;
}

const initialState: InitialState = {
  filter: undefined,
  sort: {
    entity: "",
    direction: "ASC",
  },
  page: 1,
};

export const generalSlice = createSlice({
  initialState,
  name: "query",
  reducers: {
    setSort: (
      state,
      action: PayloadAction<{
        entity: string;
        direction: string;
      }>
    ) => {
      state.sort = action.payload;
    },
    setFilter: (state, action: PayloadAction<Object>) => {
      state.filter = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    clearAll: (state) => {
      state.filter = initialState.filter;
      state.sort = initialState.sort;
      state.page = 1;
    },
  },
});

export const { actions } = generalSlice;
export type GeneralSliceAction = typeof actions;
export default generalSlice.reducer;
