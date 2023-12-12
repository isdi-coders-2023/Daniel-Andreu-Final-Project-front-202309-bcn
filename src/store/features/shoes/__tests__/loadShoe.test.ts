import { shoesMock } from "../../../../mocks/shoesMock";
import { loadShoeActionCreator, shoesReducer } from "../shoesSlice";
import { ShoeStructure, ShoesStateStructure } from "../types";

describe("Given a shoesSlice's loadShoe reducer", () => {
  describe("When it's called with a correct shoe like 'Nike Blazer Blancas'", () => {
    test("Then it should return a new state with the shoe as 'Nike Blazer Blancas'", () => {
      const initialState: ShoesStateStructure = { shoes: shoesMock };
      const expectedShoe: ShoeStructure = shoesMock[0];

      const actualShoesState = shoesReducer(
        initialState,
        loadShoeActionCreator(expectedShoe),
      );

      expect(actualShoesState.shoe).toStrictEqual(expectedShoe);
    });
  });
});
