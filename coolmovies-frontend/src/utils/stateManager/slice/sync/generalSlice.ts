import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  localValue?: any;
  modal: {
    isOpen: boolean;
    data?: Object;
  };
  handleTable: {
    filter: Object | undefined;
    sort: { entity: string; direction: string } | undefined;
    page: number;
  };
}

const initialState: InitialState = {
  localValue: {},
  modal: {
    isOpen: false,
  },
  handleTable: {
    filter: undefined,
    sort: undefined,
    page: 1,
  },
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
    setSort: (
      state,
      action: PayloadAction<{ entity: string; direction: string }>
    ) => {
      state.handleTable.sort = action.payload;
    },
    setFilter: (state, action: PayloadAction<Object>) => {
      state.handleTable.filter = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.handleTable.page = action.payload;
    },
    clearAllForTable: (state) => {
      state.handleTable.filter = undefined;
      state.handleTable.sort = undefined;
      state.handleTable.page = 1;
    },
  },
});

export const { actions } = generalSlice;
export type GeneralSliceAction = typeof actions;
export default generalSlice.reducer;
