import { renderWithProviders } from "../../testUtils/testUtils";
import HomePage from "./HomePage";
import { screen } from "@testing-library/react";

describe("Given a HomePage page component", () => {
  describe("When it's called", () => {
    test("Then it should show a heading with the text 'Lo mejor, al mejor precio'", () => {
      const expectedText = "Lo mejor, al mejor precio";

      renderWithProviders(<HomePage />);

      const text = screen.getByRole("heading", { name: expectedText });

      expect(text).toBeInTheDocument();
    });
  });
});
