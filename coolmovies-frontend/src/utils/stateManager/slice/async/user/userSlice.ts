import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  DeleteUserVars,
  SaveUserVars,
  UpdateUserVars,
} from "../../../../../schema/api/mutation/User";
import { User, UserVars } from "../../../../../schema/api/User";
import { Users, UsersVars } from "../../../../../schema/api/Users";

interface InitialState {
  fetchedUsers?: User | Users | undefined;
  error?: string | undefined;
}

const initialState: InitialState = {
  fetchedUsers: undefined,
};

export const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    fetchUser: (state, action: PayloadAction<{ vars: UserVars }>) => {},
    fetchUsers: (
      state,
      action: PayloadAction<{ vars: UsersVars }>
    ) => {},
    saveUser: (state, action: PayloadAction<{ vars: SaveUserVars }>) => {},
    deleteUser: (state, action: PayloadAction<{ vars: DeleteUserVars }>) => {},
    updateUser: (state, action: PayloadAction<{ vars: UpdateUserVars }>) => {},
    clearUserData: (state) => {
      state.fetchedUsers = undefined;
      state.error = undefined;
    },
    loadedUser: (
      state,
      action: PayloadAction<{ data: Users | User | undefined }>
    ) => {
      state.fetchedUsers = action.payload.data;
    },
    loadUserError: (state, action: PayloadAction<{ error: string }>) => {
      state.error = action.payload.error;
    },
  },
});

export const { actions } = userSlice;
export type UserSliceAction = typeof actions;
export default userSlice.reducer;
