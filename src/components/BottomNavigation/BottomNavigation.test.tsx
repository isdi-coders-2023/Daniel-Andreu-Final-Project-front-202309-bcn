import { render, screen } from "@testing-library/react";
import BottomNavigation from "./BottomNavigation";
import { mainTheme } from "../../styles/mainTheme";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

describe("Given a BottomNavigation component", () => {
  describe("When it's rendered", () => {
    test("Then it should show 3 list items", () => {
      const expectedListItemsNumber = 3;

      render(
        <ThemeProvider theme={mainTheme}>
          <BrowserRouter>
            <BottomNavigation />
          </BrowserRouter>
        </ThemeProvider>,
      );

      const listItemsNumber = screen.getAllByRole("listitem").length;

      expect(listItemsNumber).toStrictEqual(expectedListItemsNumber);
    });
  });
});
