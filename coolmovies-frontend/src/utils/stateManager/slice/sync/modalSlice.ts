import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Item, DetailItem } from "../../../../schema/components/Modal";

interface InitialState {
  modal: {
    edit: {
      isOpen: boolean;
      data?: Object;
      request?: any;
    };
    detail: {
      isOpen: boolean;
      data?: Object;
    };
  };
}

const initialState: InitialState = {
  modal: {
    edit: { isOpen: false },
    detail: { isOpen: false },
  },
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
        items: Item | DetailItem;
      }>
    ) => {
      (state.modal as any)[action.payload.modal].isOpen = true;
      (state.modal as any)[action.payload.modal].data = action.payload.data;
    },
    closeModal: (state) => {
      state.modal.detail.isOpen = false;
      state.modal.edit.isOpen = false;
    },
    setRequest: (state, action: PayloadAction<any>) => {
      state.modal.edit.request = action.payload;
    },
  },
});

export const { actions } = modalSlice;
export type ModalSliceAction = typeof actions;
export default modalSlice.reducer;
