import { screen } from "@testing-library/react";
import renderWithProviders from "../../testUtils/renderWithProviders";
import ShoesList from "./ShoesList";

describe("Given a ShoesList component", () => {
  describe("When it receives an array of movies with 'Nike Blazer Blancas' and 'Air Jordan Retro 1'", () => {
    test("Then it should create 2 listitems", () => {
      const expectedListItems = 2;

      renderWithProviders(<ShoesList />);
      const listItems = screen.getAllByRole("listitem").length;

      expect(listItems).toBe(expectedListItems);
    });
  });
});
