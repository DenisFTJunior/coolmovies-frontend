import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Item, DetailItem } from "../../../../schema/components/Modal";
import modalItems from "./config/modalItems";

interface InitialState {
  modal: {
    [key: string]: {
      isOpen: boolean;
      data?: Object;
      name: string;
    };
  };
}

const initialState: InitialState = {
  modal: modalItems
};

export const modalSlice = createSlice({
  initialState,
  name: "modal",
  reducers: {
    toogleModal: (
      state,
      action: PayloadAction<{
        modal: string;
        data?: Object;
      }>
    ) => {
      (state.modal as any)[action.payload.modal].isOpen = true;
      (state.modal as any)[action.payload.modal].data = action.payload.data;
    },
    closeModal: (
      state,
      action: PayloadAction<{
        modal: string;
      }>
    ) => {
      (state.modal as any)[action.payload.modal].isOpen = false;
    },
  },
});

export const { actions } = modalSlice;
export type ModalSliceAction = typeof actions;
export default modalSlice.reducer;
