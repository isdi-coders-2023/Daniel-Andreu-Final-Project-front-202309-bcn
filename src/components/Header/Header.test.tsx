import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "../../styles/mainTheme";

describe("Given a Header component", () => {
  describe("When it's rendered", () => {
    test("Then it should show an image with 'ReSteps logo' accessible text", () => {
      const expectedAccesibleText = "ReSteps logo";

      render(
        <ThemeProvider theme={mainTheme}>
          <Header />
        </ThemeProvider>,
      );

      const accesibleText = screen.getByRole("img", {
        name: expectedAccesibleText,
      });

      expect(accesibleText).toBeInTheDocument();
    });
  });
});
