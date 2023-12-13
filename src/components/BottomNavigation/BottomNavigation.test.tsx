import { screen } from "@testing-library/react";
import BottomNavigation from "./BottomNavigation";
import {
  renderWithProviders,
  renderWithProvidersAndPath,
} from "../../testUtils/testUtils";

describe("Given a BottomNavigation component", () => {
  describe("When it's rendered", () => {
    test("Then it should show 3 list items", () => {
      const expectedListItemsNumber = 3;

      renderWithProviders(<BottomNavigation />);

      const listItemsNumber = screen.getAllByRole("listitem").length;

      expect(listItemsNumber).toStrictEqual(expectedListItemsNumber);
    });
  });

  describe("When it's rendered in favourites page", () => {
    test("Then it should show an image with the alt text 'icono de favoritos'", () => {
      const expectedAltText = "icono de favoritos";
      const path = "/favoritos";

      renderWithProvidersAndPath(<BottomNavigation />, path);

      const altText = screen.getByAltText(expectedAltText);

      expect(altText).toBeInTheDocument();
    });
  });
});
