import { screen } from "@testing-library/react";
import BottomNavigation from "./BottomNavigation";
import { renderWithProviders } from "../../testUtils/testUtils";

describe("Given a BottomNavigation component", () => {
  describe("When it's rendered", () => {
    test("Then it should show 3 list items", () => {
      const expectedListItemsNumber = 3;

      renderWithProviders(<BottomNavigation />);

      const listItemsNumber = screen.getAllByRole("listitem").length;

      expect(listItemsNumber).toStrictEqual(expectedListItemsNumber);
    });
  });
});
