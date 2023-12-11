import { renderHook } from "@testing-library/react";
import { providerWrapper } from "../../testUtils/testUtils";
import useShoesApi from "../useShoesApi";
import { newShoeData, shoesMock } from "../../mocks/shoesMock";
import { errorHandlers } from "../../mocks/errorHandlers";
import { server } from "../../mocks/node";

describe("Given a useShoesApi hook addShoe method", () => {
  describe("When it's called with a correct shoe data like 'Nike Blazer Blancas'", () => {
    test("Then it should receive the new shoe 'Nike Blazer Blancas' in the response", async () => {
      const {
        result: {
          current: { addShoe },
        },
      } = renderHook(() => useShoesApi(), { wrapper: providerWrapper });

      const response = await addShoe(newShoeData);

      expect(response).toStrictEqual(shoesMock[0]);
    });
  });

  describe("When it's called with a correct shoe data but an error occurs", () => {
    test("Then it should receive undefined in the response", async () => {
      server.use(...errorHandlers);

      const {
        result: {
          current: { addShoe },
        },
      } = renderHook(() => useShoesApi(), { wrapper: providerWrapper });

      const response = await addShoe(newShoeData);

      expect(response).toBeUndefined;
    });
  });
});
