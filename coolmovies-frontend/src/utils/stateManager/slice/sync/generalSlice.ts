import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  localValue: any;
  modal: {
    isOpen: boolean;
    data?: Object;
  };
}

const initialState: InitialState = {
  localValue: {},
  modal: {
    isOpen: false,
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
    openModal: (state) => {
      state.modal.isOpen = true;
    },
    closeModal: (state) => {
      state.modal.isOpen = false;
    },
    transferDataToModal: (state, action: PayloadAction<Object>) => {
      state.modal.data = action.payload;
    },
  },
});

export const { actions } = generalSlice;
export type GeneralSliceAction = typeof actions;
export default generalSlice.reducer;
