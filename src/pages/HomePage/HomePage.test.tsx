import { ThemeProvider } from "styled-components";
import HomePage from "./HomePage";
import { screen, render } from "@testing-library/react";
import { mainTheme } from "../../styles/mainTheme";

describe("Given a HomePage page component", () => {
  describe("When it's called", () => {
    test("Then it should show a heading with the text 'Lo mejor, al mejor precio'", () => {
      const expectedText = "Lo mejor, al mejor precio";

      render(
        <ThemeProvider theme={mainTheme}>
          <HomePage />
        </ThemeProvider>,
      );

      const text = screen.getByRole("heading", { name: expectedText });

      expect(text).toBeInTheDocument();
    });
  });
});
