import { shoesMock } from "../../../../mocks/shoesMock";
import { deleteShoeActionCreator, shoesReducer } from "../shoesSlice";
import { ShoesStateStructure } from "../types";

describe("Given a shoesSlice's deleteShoe reducer", () => {
  describe("When it's called with a correct shoe id: '6566146eb17321660f118c7b'", () => {
    test("Then it should return thWe list of shoes without 'Nike Blazer Blancas'", () => {
      const initialState: ShoesStateStructure = { shoes: shoesMock };
      const expectedDeletedTitle = "Nike Blazer Blancas";

      const actualShoesState = shoesReducer(
        initialState,
        deleteShoeActionCreator("6566146eb17321660f118c7b"),
      );

      actualShoesState.shoes.forEach((shoe) => {
        expect(shoe).not.toHaveProperty("title", expectedDeletedTitle);
      });
    });
  });
});
