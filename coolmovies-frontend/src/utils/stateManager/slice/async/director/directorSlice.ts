import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Director, DirectorVars } from "../../../../../schema/api/Director";
import { Directors, DirectorsVars } from "../../../../../schema/api/Directors";
import {
  DeleteDirectorVars,
  SaveDirectorVars,
  UpdateDirectorVars,
} from "../../../../../schema/api/mutation/Director";

interface InitialState {
  fetchedDirectors?: Directors | Director | Object | undefined;
}

const initialState: InitialState = {
  fetchedDirectors: [],
};

export const directorSlice = createSlice({
  initialState,
  name: "director",
  reducers: {
    fetchDirector: (state, action: PayloadAction<{ data: DirectorVars }>) => {},
    fetchDirectors: (
      state,
      action: PayloadAction<{ fetchMore?: boolean; data: DirectorsVars }>
    ) => {},
    saveDirector: (
      state,
      action: PayloadAction<{ data: SaveDirectorVars }>
    ) => {},
    deleteDirector: (
      state,
      action: PayloadAction<{ data: DeleteDirectorVars }>
    ) => {},
    updateDirector: (
      state,
      action: PayloadAction<{ data: UpdateDirectorVars }>
    ) => {},
    clearDirectorData: (state) => {
      state.fetchedDirectors = undefined;
    },
    loadedDirector: (
      state,
      action: PayloadAction<{ data: Directors | Director | undefined }>
    ) => {
      state.fetchedDirectors = action.payload.data;
    },
    loadDirectorError: (state, action: PayloadAction<{ error: string }>) => {
      state.fetchedDirectors = [{ error: action.payload.error }];
    },
  },
});

export const { actions } = directorSlice;
export type DirectorSliceAction = typeof actions;
export default directorSlice.reducer;
