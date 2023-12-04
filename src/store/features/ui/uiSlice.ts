import { createSlice } from "@reduxjs/toolkit";
import { UiStateStructure } from "./types";

const initialState: UiStateStructure = { isLoading: false };

const uiSlice = createSlice({
  name: "ui",
  initialState: initialState,
  reducers: {
    showLoading: (currentUistate: UiStateStructure) => ({
      ...currentUistate,
      isLoading: true,
    }),
    hideLoading: (currentUistate: UiStateStructure) => ({
      ...currentUistate,
      isLoading: false,
    }),
  },
});

export const {
  showLoading: showLoadingActionCreator,
  hideLoading: hideLoadingActionCreator,
} = uiSlice.actions;

export const uiReducer = uiSlice.reducer;
