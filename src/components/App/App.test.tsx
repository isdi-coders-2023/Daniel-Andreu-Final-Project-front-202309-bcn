import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { store } from "../../store";
import GlobalStyle from "../../styles/GlobalStyle";
import { mainTheme } from "../../styles/mainTheme";

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
});
