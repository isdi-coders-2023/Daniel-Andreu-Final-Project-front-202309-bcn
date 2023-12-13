import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { store } from "../../store";
import GlobalStyle from "../../styles/GlobalStyle";
import { mainTheme } from "../../styles/mainTheme";
import { renderWithProvidersAndPath } from "../../testUtils/testUtils";
import { shoesMock } from "../../mocks/shoesMock";
import userEvent from "@testing-library/user-event";

describe("Given an App component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a Header with an image with 'ReSteps logo' accessible text", () => {
      const expectedAccesibleText = "ReSteps logo";

      render(
        <Provider store={store}>
          <ThemeProvider theme={mainTheme}>
            <BrowserRouter>
              <GlobalStyle />
              <App />
            </BrowserRouter>
          </ThemeProvider>
          ,
        </Provider>,
      );

      const accesibleText = screen.getByRole("img", {
        name: expectedAccesibleText,
      });

      expect(accesibleText).toBeInTheDocument();
    });
  });

  describe("When it's rendered and a user navigates to the detail page of 'Nike Blazer Blancas'", () => {
    test("Then it should show 'Daniel Andreu' in a heading", async () => {
      const shoe = shoesMock[0];
      const path = `/detalle/${shoe._id}`;
      const expectedHeading = shoe.name;

      await renderWithProvidersAndPath(<App />, path);

      const heading = screen.getByRole("heading", { name: expectedHeading });

      await waitFor(() => {
        expect(heading).toBeInTheDocument();
      });
    });
  });

  describe("When it's rendered on the NewShoePage and a user fills de form and click on the 'Añadir calzado' button", () => {
    test("Then it should navigate to the HomePage showing a toastify feedback message", async () => {
      const buttonText = "Añadir Calzado";
      const expectedFeedbackText = "Calzado añadido correctamente";
      const path = "/añadir-calzado";

      await renderWithProvidersAndPath(<App />, path);

      const priceInputElement = screen.getByRole("textbox", {
        name: "Precio €",
      });
      const imageUrlInputElement = screen.getByRole("textbox", {
        name: "URL de la imagen",
      });
      const titleInputElement = screen.getByRole("textbox", {
        name: "Título",
      });
      const descriptionInputElement = screen.getByRole("textbox", {
        name: "Descripción",
      });
      const nameInputElement = screen.getByRole("textbox", {
        name: "Nombre completo",
      });
      const phoneInputElement = screen.getByRole("textbox", {
        name: "Número de teléfono",
      });
      const locationInputElement = screen.getByRole("textbox", {
        name: "Localidad",
      });
      const sizeSelectElement = screen.getByDisplayValue("Talla");
      const brandSelectElement = screen.getByDisplayValue("Marca");
      const buttonElement = screen.getByRole("button", { name: buttonText });

      await userEvent.type(priceInputElement, "1");
      await userEvent.type(imageUrlInputElement, "1");
      await userEvent.type(titleInputElement, "1");
      await userEvent.type(descriptionInputElement, "1");
      await userEvent.type(nameInputElement, "1");
      await userEvent.type(phoneInputElement, "1");
      await userEvent.type(locationInputElement, "1");
      await userEvent.selectOptions(sizeSelectElement, "38");
      await userEvent.selectOptions(brandSelectElement, "Nike");

      await userEvent.click(buttonElement);

      const feedbackMessage = await screen.getAllByText(expectedFeedbackText);

      expect(feedbackMessage[0]).toBeInTheDocument();
    });
  });
});
