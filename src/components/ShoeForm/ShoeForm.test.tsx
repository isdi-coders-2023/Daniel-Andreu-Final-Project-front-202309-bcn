import { fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "../../testUtils/testUtils";
import ShoeForm from "./ShoeForm";
import userEvent from "@testing-library/user-event";

describe("Given a ShoeForm component", () => {
  const onSubmit = vi.fn();

  describe("When it's rendered", () => {
    test("Then it should show 7 empty inputs", () => {
      const expectedInputNumber = 7;

      renderWithProviders(<ShoeForm actionOnSubmit={onSubmit} />);
      const inputs = screen.getAllByRole("textbox").length;

      expect(inputs).toBe(expectedInputNumber);
    });

    test("Then it should show 75 options in total", () => {
      const expectedSelectsNumber = 75;

      renderWithProviders(<ShoeForm actionOnSubmit={onSubmit} />);
      const selects = screen.getAllByRole("option").length;

      expect(selects).toBe(expectedSelectsNumber);
    });

    test("Then it should show 2 checkboxes", () => {
      const expectedCheckboxesNumber = 2;

      renderWithProviders(<ShoeForm actionOnSubmit={onSubmit} />);
      const Checkboxes = screen.getAllByRole("checkbox").length;

      expect(Checkboxes).toBe(expectedCheckboxesNumber);
    });

    test("Then it should show a button with the text 'Añadir Calzado'", () => {
      const expectedButtonText = "Añadir Calzado";

      renderWithProviders(<ShoeForm actionOnSubmit={onSubmit} />);
      const button = screen.getByRole("button", {
        name: expectedButtonText,
      });

      expect(button).toBeInTheDocument();
    });

    test("Then it should show an image with the alteranive text 'calzado subido'", () => {
      const expectedAlternativeText = "calzado subido";

      renderWithProviders(<ShoeForm actionOnSubmit={onSubmit} />);
      const image = screen.getByAltText(expectedAlternativeText);

      expect(image).toBeInTheDocument();
    });
  });

  describe("When it's rendered and a user writes 'Amazing website' in the title input", () => {
    test("Then it should show 'Amazing website' in the title input", async () => {
      const textWritten = "Amazing website";

      renderWithProviders(<ShoeForm actionOnSubmit={onSubmit} />);
      const titleInput = screen.getByLabelText("Título");
      await userEvent.type(titleInput, textWritten);

      expect(titleInput).toHaveValue(textWritten);
    });
  });

  describe("When it's rendered and a user clicks on the 'Bien' status option", () => {
    test("Then it should show the 'Bien' option checked", async () => {
      const statusInputText = "Bien";

      renderWithProviders(<ShoeForm actionOnSubmit={onSubmit} />);

      const statusInput = screen.getByLabelText(statusInputText);

      await userEvent.click(statusInput);

      expect(statusInput).toBeChecked();
    });
  });

  describe("When it's rendered but an error occurs loading the image", () => {
    test("Then it should show the 'imageNotFound' placeholder instead", () => {
      const initialAltText = "calzado subido";

      renderWithProviders(<ShoeForm actionOnSubmit={onSubmit} />);

      const imageElement = screen.getByAltText(
        initialAltText,
      ) as HTMLImageElement | null;

      if (imageElement) {
        fireEvent.error(imageElement);
        expect(imageElement.src).toContain("images/imageNotFound.svg");
        expect(imageElement.alt).toEqual("imagen no encontrada");
      }
    });
  });
});
