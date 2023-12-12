import { renderHook } from "@testing-library/react";
import { shoesMock } from "../../mocks/shoesMock";
import useShoesApi from "../useShoesApi";
import {
  providerWrapper,
  renderWithProviders,
} from "../../testUtils/testUtils";
import { server } from "../../mocks/node";
import { errorHandlers } from "../../mocks/errorHandlers";
import { screen, waitFor } from "@testing-library/react";
import App from "../../components/App/App";

describe("Given a useShoesApi hook getShoe method", () => {
  describe("When it's called with a valid id like '6566146eb17321660f118c7b'", () => {
    test("Then it should return 'Nike Blazer Blancas'shoe", async () => {
      const expectedShoe = shoesMock[0];
      const shoeId = "6566146eb17321660f118c7b";

      const {
        result: {
          current: { getShoe },
        },
      } = renderHook(() => useShoesApi(), { wrapper: providerWrapper });

      const actualShoe = await getShoe(shoeId);

      expect(actualShoe).toStrictEqual(expectedShoe);
    });
  });

  describe("When it's called with an incorrect id", () => {
    test("Then it should show a toast error message", async () => {
      server.use(...errorHandlers);

      const shoeId = "wrongId";
      const expectedToastMessage = "No se ha podido cargar el calzado";

      renderWithProviders(<App />);

      const {
        result: {
          current: { getShoe },
        },
      } = renderHook(() => useShoesApi(), { wrapper: providerWrapper });

      await getShoe(shoeId);

      await waitFor(() => {
        const toast = screen.getAllByText(expectedToastMessage)[0];
        expect(toast).toBeInTheDocument();
      });
    });
  });
});
