import shoesMock from "../../../mocks/shoesMock";
import { loadShoesActionCreator, shoesReducer } from "./shoesSlice";
import { ShoesStateStructure } from "./types";

describe("Given a shoesReducer", () => {
  describe("When it receives the action of loading 2 shoes and an initial state with any shoe", () => {
    test("Then it should update the state with the new shoes", () => {
      const currentShoesList: ShoesStateStructure = {
        shoes: [],
      };
      const expectedShoesList: ShoesStateStructure = {
        shoes: shoesMock,
      };

      const shoesList = shoesReducer(
        currentShoesList,
        loadShoesActionCreator(shoesMock),
      );

      expect(shoesList).toStrictEqual(expectedShoesList);
    });
  });
});
