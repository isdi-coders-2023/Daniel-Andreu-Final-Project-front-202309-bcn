import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { shoesReducer } from "./features/shoes/shoesSlice";
import { uiReducer } from "./features/ui/uiSlice";

export const store = configureStore({
  reducer: {
    shoesState: shoesReducer,
    uiState: uiReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
