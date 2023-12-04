import { UiStateStructure } from "../types";
import { showLoadingActionCreator, uiReducer } from "../uiSlice";

describe("Given a showLoading uiReducer", () => {
  describe("When it's called", () => {
    test("Then it should change the Loading state into true", () => {
      const expectedIsLoading: UiStateStructure = {
        isLoading: true,
      };

      const currentState: UiStateStructure = { isLoading: false };

      const isLoadingState = uiReducer(
        currentState,
        showLoadingActionCreator(),
      );

      expect(isLoadingState).toStrictEqual(expectedIsLoading);
    });
  });
});
