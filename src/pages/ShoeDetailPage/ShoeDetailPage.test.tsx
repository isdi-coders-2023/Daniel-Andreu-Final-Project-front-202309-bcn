import { screen } from "@testing-library/react";
import { renderWithProvidersAndPath } from "../../testUtils/testUtils";
import ShoeDetailPage from "./ShoeDetailPage";
import { shoesMock } from "../../mocks/shoesMock";
import { ShoeStructure } from "../../store/features/shoes/types";

describe("Given a ShoeDetailPage page component", () => {
  describe("When it's called with a correct shoe id like '6566146eb17321660f118c7b'", () => {
    test("Then it should show 'Nike Blazer Blancas' in a heading", () => {
      const shoe: ShoeStructure = shoesMock[0];
      const path = `/${shoe._id}`;
      const expectedTitle = shoe.title;

      renderWithProvidersAndPath(<ShoeDetailPage />, path);

      const heading = screen.getByRole("heading", {
        name: expectedTitle,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
