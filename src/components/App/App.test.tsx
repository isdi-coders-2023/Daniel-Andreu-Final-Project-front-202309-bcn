import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "../../styles/mainTheme";
import App from "./App";

describe("Given an App component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a Header with an image with 'ReSteps logo' accessible text", () => {
      const expectedAccesibleText = "ReSteps logo";

      render(
        <ThemeProvider theme={mainTheme}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ThemeProvider>,
      );

      const accesibleText = screen.getByRole("img", {
        name: expectedAccesibleText,
      });

      expect(accesibleText).toBeInTheDocument();
    });
  });
});
