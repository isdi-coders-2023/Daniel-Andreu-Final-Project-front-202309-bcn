import { screen, waitFor } from "@testing-library/react";
import { shoesMock } from "../../mocks/shoesMock";
import { ShoeStructure } from "../../store/features/shoes/types";
import { renderWithProviders } from "../../testUtils/testUtils";
import ShoeDetail from "./ShoeDetail";
import userEvent from "@testing-library/user-event";
import { server } from "../../mocks/node";
import { errorHandlers } from "../../mocks/errorHandlers";

import { shoesReducer } from "../../store/features/shoes/shoesSlice";
import { configureStore } from "@reduxjs/toolkit";
import { uiReducer } from "../../store/features/ui/uiSlice";

beforeEach(() => {
  vi.resetAllMocks();
  vi.clearAllMocks();
});

describe("Given a ShoeDetail component", () => {
  describe("When it's rendered with a shoe like 'Nike Blazer Blancas'", () => {
    const expectedShoe: ShoeStructure = shoesMock[0];

    test("Then it should shoe 'Nike Blazer Blancas' in a heading", () => {
      const expectedTitle = expectedShoe.title;

      renderWithProviders(<ShoeDetail />);
      const heading = screen.getByRole("heading", { name: expectedTitle });

      expect(heading).toBeInTheDocument();
    });
  });

  describe("When it's rendered with a shoe like 'Nike Blazer Blancas' and a user press the 'Eliminar Calzado' button", () => {
    test("Then it should show a toastify feedback with 'Calzado eliminado correctamente'", async () => {
      const expectedMessage = "Calzado eliminado correctamente";
      const expectedButtonText = "Eliminar calzado";

      renderWithProviders(<ShoeDetail />);
      const button = screen.getByRole("button", { name: expectedButtonText });

      await userEvent.click(button);

      await waitFor(() => {
        expect(screen.getByText(expectedMessage)).toBeInTheDocument();
      });
    });
  });

  describe("When it's rendered with a shoe like 'Nike Blazer Blancas' and a user press the 'Eliminar Calzado' button but an error occurs", () => {
    test("Then it should show a toastify feedback with 'No hemos podido eliminar el calzado'", async () => {
      const expectedMessage = "No hemos podido eliminar el calzado";
      const expectedButtonText = "Eliminar calzado";

      server.use(...errorHandlers);
      renderWithProviders(<ShoeDetail />);
      const button = screen.getByRole("button", { name: expectedButtonText });

      await userEvent.click(button);

      await waitFor(() => {
        expect(screen.getByText(expectedMessage)).toBeInTheDocument();
      });
    });
  });

  describe("When it's rendered with a shoe that doesn't admit changes and doesn't include box like 'Air Jordan Retro 1'", () => {
    test("Then it shouldn't show any element with text 'Acepta cambios' or 'Incluye la caja original'", () => {
      const expectedShoe: ShoeStructure = shoesMock[1];
      const isChangesAcceptedText = "Acepta cambios";
      const isBoxIncludedText = "Incluye la caja original";

      const mockStore = configureStore({
        reducer: {
          shoesState: shoesReducer,
          uiState: uiReducer,
        },
        preloadedState: {
          shoesState: { shoes: shoesMock, shoe: expectedShoe },
          uiState: { isLoading: false },
        },
      });

      renderWithProviders(<ShoeDetail />, mockStore);

      const changesText = screen.queryByText(isChangesAcceptedText);
      const boxText = screen.queryByText(isBoxIncludedText);

      expect(changesText).not.toBeInTheDocument();
      expect(boxText).not.toBeInTheDocument();
    });
  });
});
