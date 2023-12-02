import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";
import renderWithProviders from "../../testUtils/renderWithProviders";

beforeEach(() => {
  vi.resetAllMocks();
});

describe("Given a Button component", () => {
  describe("When it receives a text 'Modificar'", () => {
    test("Then it should show a button with 'Modificar' inside", async () => {
      const expectedText = "Modificar";

      renderWithProviders(<Button type="button" text={expectedText} />);
      const button = screen.getByRole("button", { name: expectedText });

      expect(button).toBeInTheDocument();
    });
  });

  describe("When it receives an action and the user clicks the button", () => {
    test("Then it should call the received action", async () => {
      const expectedAction = vi.fn();

      renderWithProviders(
        <Button type="button" actionOnClick={expectedAction} text="test" />,
      );
      const button = screen.getByRole("button", { name: "test" });
      await userEvent.click(button);

      expect(expectedAction).toHaveBeenCalled();
    });
  });
});
