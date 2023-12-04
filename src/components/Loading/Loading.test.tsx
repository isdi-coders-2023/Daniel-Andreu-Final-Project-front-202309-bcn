import { screen } from "@testing-library/react";
import Loading from "./Loading";
import { renderWithProviders } from "../../testUtils/testUtils";

describe("Given a Loading component", () => {
  describe("When it's rendered", () => {
    test("Then it should show 'Loading' in a heading", () => {
      renderWithProviders(<Loading />);

      const expectedText = "Loading";

      const loadingElement = screen.getByText(expectedText);

      expect(loadingElement).toBeInTheDocument();
    });
  });
});
