import { screen } from "@testing-library/react";
import App from "./App";
import { renderWithProviders } from "../../testUtils/testUtils";

describe("Given an App component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a Header with an image with 'ReSteps logo' accessible text", () => {
      const expectedAccesibleText = "ReSteps logo";

      renderWithProviders(<App />);

      const accesibleText = screen.getByRole("img", {
        name: expectedAccesibleText,
      });

      expect(accesibleText).toBeInTheDocument();
    });
  });
});
