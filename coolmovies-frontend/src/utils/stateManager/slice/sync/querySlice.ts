import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import queryHandlerItems from "./config/queryHandlerItems";

interface InitialState {
  queries: {
    [key: string]: {
      filter: Object | undefined;
      sort:
        | {
            entity: string;
            direction: string;
          }
        | undefined;
      page: number;
    };
  };
}

const initialState: InitialState = {
  queries: queryHandlerItems,
};

export const querySlice = createSlice({
  initialState,
  name: "query",
  reducers: {
    setSort: (
      state,
      action: PayloadAction<{
        data: {
          entity:string,
          direction:string
        };
        query: string;
      }>
    ) => {
      (state.queries as any)[action.payload.query].sort = action.payload.data;
    },
    setFilter: (
      state,
      action: PayloadAction<{
        data: Object;
        query: string;
      }>
    ) => {
      (state.queries as any)[action.payload.query].filter = action.payload;
    },
    setPage: (
      state,
      action: PayloadAction<{
        data: number;
        query: string;
      }>
    ) => {
      (state.queries as any)[action.payload.query].page = action.payload;
    },
  },
});

export const { actions } = querySlice;
export type QuerySliceAction = typeof actions;
export default querySlice.reducer;
