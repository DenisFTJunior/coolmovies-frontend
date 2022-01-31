import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Director, DirectorVars } from "../../../../../schema/api/Director";
import { Directors, DirectorsVars } from "../../../../../schema/api/Directors";
import {
  DeleteDirectorVars,
  SaveDirectorVars,
  UpdateDirectorVars,
} from "../../../../../schema/api/mutation/Director";

interface InitialState {
  fetchedDirectors?: Directors | Director | undefined;
  error?: string;
}

const initialState: InitialState = {
  fetchedDirectors: undefined,
};

export const directorSlice = createSlice({
  initialState,
  name: "director",
  reducers: {
    fetchDirector: (state, action: PayloadAction<{ vars: DirectorVars }>) => {},
    fetchDirectors: (
      state,
      action: PayloadAction<{ fetchMore?: boolean; vars: DirectorsVars }>
    ) => {},
    saveDirector: (
      state,
      action: PayloadAction<{ vars: SaveDirectorVars }>
    ) => {},
    deleteDirector: (
      state,
      action: PayloadAction<{ vars: DeleteDirectorVars }>
    ) => {},
    updateDirector: (
      state,
      action: PayloadAction<{ vars: UpdateDirectorVars }>
    ) => {},
    clearDirectorData: (state) => {
      state.fetchedDirectors = undefined;
      state.error = undefined;
    },
    loadedDirector: (
      state,
      action: PayloadAction<{ data: Directors | Director | undefined }>
    ) => {
      state.fetchedDirectors = action.payload.data;
    },
    loadDirectorError: (state, action: PayloadAction<{ error: string }>) => {
      state.error = action.payload.error;
    },
  },
});

export const { actions } = directorSlice;
export type DirectorSliceAction = typeof actions;
export default directorSlice.reducer;
