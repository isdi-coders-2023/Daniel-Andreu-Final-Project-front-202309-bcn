import { screen } from "@testing-library/react";
import ShoesList from "./ShoesList";
import shoesMock from "../../mocks/shoesMock";
import { renderWithProviders } from "../../testUtils/testUtils";

describe("Given a ShoesList component", () => {
  describe("When it receives an array of shoes with 'Nike Blazer Blancas' and 'Air Jordan Retro 1'", () => {
    test("Then it should create 2 listitems", () => {
      const expectedListItems = 2;

      renderWithProviders(<ShoesList />);
      const listItems = screen.getAllByRole("listitem").length;

      expect(listItems).toBe(expectedListItems);
    });

    test("Then it should create 2 shoe articles, one with 'Nike Blazer Blancas' and the other with 'Air Jordan Retro 1'", () => {
      const expectedFirstShoe = shoesMock[0].title;
      const expectedSecondShoe = shoesMock[1].title;

      renderWithProviders(<ShoesList />);
      const firstShoe = screen.getByRole("heading", {
        name: expectedFirstShoe,
      });
      const secondShoe = screen.getByRole("heading", {
        name: expectedSecondShoe,
      });

      expect(firstShoe).toBeInTheDocument();
      expect(secondShoe).toBeInTheDocument();
    });
  });
});
