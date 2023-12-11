import { shoesMock } from "../../../../mocks/shoesMock";
import { addShoeActionCreator, shoesReducer } from "../shoesSlice";
import { ShoesStateStructure } from "../types";

describe("Given a shoesSlice's addShoe reducer", () => {
  describe("When it's called with a correct new shoe like 'Nike Blazer Blancas'", () => {
    test("Then it should return a list of movies with 'Nike Blazer Blancas' inside", () => {
      const initialState: ShoesStateStructure = { shoes: [] };
      const newShoe = shoesMock[0];

      const actualShoesState = shoesReducer(
        initialState,
        addShoeActionCreator(newShoe),
      );

      const expectedShoesState: ShoesStateStructure = { shoes: [newShoe] };

      expect(actualShoesState).toStrictEqual(expectedShoesState);
    });
  });
});
