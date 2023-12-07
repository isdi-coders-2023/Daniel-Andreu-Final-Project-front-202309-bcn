import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/testUtils";
import NewShoePage from "./NewShoePage";

describe("Given a NewShoePage page component", () => {
  describe("When it's called", () => {
    test("Then it should show a heading with the text 'Añade un calzado y véndelo o cambialo por otro'", () => {
      const expectedText = "Añade un calzado y véndelo o cambialo por otro";

      renderWithProviders(<NewShoePage />);

      const text = screen.getByRole("heading", { name: expectedText });

      expect(text).toBeInTheDocument();
    });
  });
});
