import { renderHook } from "@testing-library/react";
import { ShoesStateStructure } from "../../store/features/shoes/types";
import { shoesMock } from "../../mocks/shoesMock";
import useShoesApi from "../useShoesApi";
import { providerWrapper } from "../../testUtils/testUtils";

describe("Given a useShoesApi hook getShoes method", () => {
  describe("When it's called and there aren't any errors", () => {
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
