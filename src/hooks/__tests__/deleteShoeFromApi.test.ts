import { renderHook } from "@testing-library/react";
import { providerWrapper } from "../../testUtils/testUtils";
import useShoesApi from "../useShoesApi";

describe("Given a useShoesApi hook deleteShoe method", () => {
  describe("When it's called with a correct id like '6566146eb17321660f118c7b'", () => {
    test("Then it should delete the shoe 'Nike Blazer Blancas'", async () => {
      const shoeId = "6566146eb17321660f118c7b";
      const expectedMessage = {};

      const {
        result: {
          current: { deleteShoe },
        },
      } = renderHook(() => useShoesApi(), { wrapper: providerWrapper });

      const response = await deleteShoe(shoeId);

      expect(response).toStrictEqual(expectedMessage);
    });
  });
});
