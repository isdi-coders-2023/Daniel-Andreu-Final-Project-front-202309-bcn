import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/testUtils";
import NotFoundPage from "./NotFoundPage";

describe("Given a NotFoundPage page component", () => {
  describe("When it's called", () => {
    test("Then it should show 'Vaya, parece que no hemos encontrado lo que buscas...' in a heading", () => {
      const expectedHeading =
        "Vaya, parece que no hemos encontrado lo que buscas...";

      renderWithProviders(<NotFoundPage />);

      const heading = screen.getByRole("heading", {
        name: expectedHeading,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
