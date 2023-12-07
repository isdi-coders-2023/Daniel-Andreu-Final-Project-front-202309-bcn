import { errorHandlers } from "../../mocks/errorHandlers";
import { server } from "../../mocks/node";
import { renderWithProviders } from "../../testUtils/testUtils";
import HomePage from "./HomePage";
import { screen, waitFor } from "@testing-library/react";

describe("Given a HomePage page component", () => {
  describe("When it's called", () => {
    test("Then it should show a heading with the text 'Lo mejor, al mejor precio'", () => {
      const expectedText = "Lo mejor, al mejor precio";

      renderWithProviders(<HomePage />);

      const text = screen.getByRole("heading", { name: expectedText });

      expect(text).toBeInTheDocument();
    });
  });

  describe("When it's called and there is an error loading shoes", () => {
    test("Then it should call toastify with message the'Error cargando los calzados'", async () => {
      const expectedTextError = "Error cargando los calzados";
      server.use(...errorHandlers);

      renderWithProviders(<HomePage />);

      await waitFor(() => {
        expect(screen.getByText(expectedTextError)).toBeInTheDocument();
      });
    });
  });
});
