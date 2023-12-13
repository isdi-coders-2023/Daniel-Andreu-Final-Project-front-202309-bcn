import { screen } from "@testing-library/react";
import { shoesMock } from "../../mocks/shoesMock";
import { ShoeStructure } from "../../store/features/shoes/types";
import { renderWithProviders } from "../../testUtils/testUtils";
import ShoeDetail from "./ShoeDetail";

describe("Given a ShoeDetail component", () => {
  describe("When it's rendered with shoe like 'Nike Blazer Blancas'", () => {
    const expectedShoe: ShoeStructure = shoesMock[0];

    test("Then it should shoe 'Nike Blazer Blancas' in a heading", () => {
      const expectedTitle = expectedShoe.title;

      renderWithProviders(<ShoeDetail />);
      const heading = screen.getByRole("heading", { name: expectedTitle });

      expect(heading).toBeInTheDocument();
    });
  });
});
