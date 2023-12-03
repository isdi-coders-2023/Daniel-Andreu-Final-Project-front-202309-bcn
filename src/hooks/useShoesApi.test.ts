import { renderHook } from "@testing-library/react";
import { ShoesStateStructure } from "../store/features/shoes/types";
import shoesMock from "../mocks/shoesMock";
import useShoesApi from "./useShoesApi";
import { providerWrapper } from "../testUtils/testUtils";

describe("Given a useShoesApi custom hook", () => {
  describe("When it uses it's method getShoes to fetch from te API", () => {
    test("Then it should return the available shoes in the API", async () => {
      const expectedShoes: ShoesStateStructure = { shoes: shoesMock };

      const {
        result: {
          current: { getShoes },
        },
      } = renderHook(() => useShoesApi(), { wrapper: providerWrapper });

      const shoes = await getShoes();

      expect(shoes).toStrictEqual(expectedShoes);
    });
  });
});
