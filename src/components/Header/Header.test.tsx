import { screen } from "@testing-library/react";
import Header from "./Header";
import renderWithProviders from "../../testUtils/renderWithProviders";

describe("Given a Header component", () => {
  describe("When it's rendered", () => {
    test("Then it should show an image with 'ReSteps logo' accessible text", () => {
      const expectedAccesibleText = "ReSteps logo";

      renderWithProviders(<Header />);

      const accesibleText = screen.getByRole("img", {
        name: expectedAccesibleText,
      });

      expect(accesibleText).toBeInTheDocument();
    });
  });
});
