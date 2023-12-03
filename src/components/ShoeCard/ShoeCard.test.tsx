import { screen } from "@testing-library/react";
import shoesMock from "../../mocks/shoesMock";
import { ShoeStructure } from "../../store/features/shoes/types";
import ShoeCard from "./ShoeCard";
import { renderWithProviders } from "../../testUtils/testUtils";

describe("Given a ShoeCard component", () => {
  describe("When it receives the shoe 'Nike Blazer Blancas'", () => {
    const shoe: ShoeStructure = shoesMock[0];

    test("Then it should create a 'Nike Blazer Blancas' heading", () => {
      const expectedHeading = shoe.title;

      renderWithProviders(<ShoeCard shoe={shoe} />);
      const heading = screen.getByRole("heading", { name: expectedHeading });

      expect(heading).toBeInTheDocument();
    });

    test("Then it should create an image with 'Nike Blazer Blancas' alternative text", () => {
      const expectedAltText = shoe.title;

      renderWithProviders(<ShoeCard shoe={shoe} />);
      const altText = screen.getByAltText(expectedAltText);

      expect(altText).toBeInTheDocument();
    });

    test("Then it should show '70€' in a span", () => {
      const expectedPrice = `${shoe.price}€`;

      renderWithProviders(<ShoeCard shoe={shoe} />);
      const price = screen.getByText(expectedPrice);

      expect(price).toBeInTheDocument();
    });

    test("Then it should show 'Talla 38 EU' in a span", () => {
      const expectedSize = `Talla ${shoe.size} EU`;

      renderWithProviders(<ShoeCard shoe={shoe} />);
      const size = screen.getByText(expectedSize);

      expect(size).toBeInTheDocument();
    });

    test("Then it should show 'Cornella de Llobregat' in a span", () => {
      const expectedLocation = shoe.location;

      renderWithProviders(<ShoeCard shoe={shoe} />);
      const location = screen.getByText(expectedLocation);

      expect(location).toBeInTheDocument();
    });

    test("Then it should show 'Acepta cambio' in a span", () => {
      const expectedMessage = "Acepta cambio";

      renderWithProviders(<ShoeCard shoe={shoe} />);
      const message = screen.getByText(expectedMessage);

      expect(message).toBeInTheDocument();
    });

    test("Then it should show 'Como nuevo' in a span", () => {
      const expectedStatus = shoe.shoeStatus;

      renderWithProviders(<ShoeCard shoe={shoe} />);
      const status = screen.getByText(expectedStatus);

      expect(status).toBeInTheDocument();
    });

    test("Then it should create an image with 'icono de estrella' alternative text", () => {
      const expectedAltText = "icono de estrella";

      renderWithProviders(<ShoeCard shoe={shoe} />);
      const altText = screen.getByAltText(expectedAltText);

      expect(altText).toBeInTheDocument();
    });
  });
});
