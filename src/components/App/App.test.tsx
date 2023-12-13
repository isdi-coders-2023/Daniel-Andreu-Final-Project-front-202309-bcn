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

describe("Given an App component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a Header with an image with 'ReSteps logo' accessible text", () => {
      const expectedAccesibleText = "ReSteps logo";

      render(
        <ThemeProvider theme={mainTheme}>
          <Provider store={store}>
            <BrowserRouter>
              <GlobalStyle />
              <App />
            </BrowserRouter>
          </Provider>
        </ThemeProvider>,
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
});
