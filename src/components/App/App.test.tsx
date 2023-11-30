import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "../../styles/mainTheme";
import App from "./App";

describe("Given an App component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a Header with an image with 'ReSteps logo' accessible text", () => {
      const expectedAccesibleText = "ReSteps logo";

      render(
        <ThemeProvider theme={mainTheme}>
          <App />
        </ThemeProvider>,
      );

      const accesibleText = screen.getByRole("img", {
        name: expectedAccesibleText,
      });

      expect(accesibleText).toBeInTheDocument();
    });
  });
});
