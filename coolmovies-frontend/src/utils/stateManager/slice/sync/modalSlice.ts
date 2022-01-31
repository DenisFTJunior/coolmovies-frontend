import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  modal: {
    edit: {
      isOpen: boolean;
      data?: Object;
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
    toogleModalEdit: (state) => {
      state.modal.edit.isOpen = !state.modal.edit.isOpen;
    },
    toogleModalDetail: (state) => {
      state.modal.detail.isOpen = !state.modal.detail.isOpen;
    },
    transferDataToModal: (
      state,
      action: PayloadAction<{ modal: string; data: Object }>
    ) => {
      (state.modal as any)[action.payload.modal].data = action.payload.data;
    },
  },
});

export const { actions } = modalSlice;
export type ModalSliceAction = typeof actions;
export default modalSlice.reducer;
