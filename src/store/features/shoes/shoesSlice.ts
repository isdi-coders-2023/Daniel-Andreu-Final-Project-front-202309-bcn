import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ShoeStructure, ShoesStateStructure } from "./types";

const initialShoesState: ShoesStateStructure = {
  shoes: [],
};

const shoesSlice = createSlice({
  name: "shoes",
  initialState: initialShoesState,
  reducers: {
    loadShoes: (
      currentState: ShoesStateStructure,
      action: PayloadAction<ShoeStructure[]>,
    ): ShoesStateStructure => ({ ...currentState, shoes: action.payload }),

    deleteShoe: (
      currentState: ShoesStateStructure,
      action: PayloadAction<string>,
    ): ShoesStateStructure => ({
      ...currentState,
      shoes: currentState.shoes.filter((shoe) => shoe._id !== action.payload),
    }),
  },
});
export const {
  loadShoes: loadShoesActionCreator,
  deleteShoe: deleteShoeActionCreator,
} = shoesSlice.actions;

export const shoesReducer = shoesSlice.reducer;
