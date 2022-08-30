import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RegisterForm from "./RegisterForm";

describe("Given a Register component", () => {
  describe("When its instantiaded", () => {
    test("Then it show a unsername and password inputs and a SING UP button", () => {
      render(<RegisterForm />);

      const registerForm = [
        screen.getByText("Username"),
        screen.getByText("Password"),
        screen.getByRole("button", { name: "SING UP" }),
      ];

      registerForm.forEach((element) => expect(element).toBeInTheDocument());
    });
  });

  describe("When a user fills every input", () => {
    test("Then every input should have what the users filled inside", async () => {
      const filledText1 = "usertext";
      const filledText2 = "userPasswd";
      render(<RegisterForm />);

      const usernameInput = screen.getByLabelText(
        "Username"
      ) as HTMLInputElement;
      const passwordInput = screen.getByLabelText(
        "Password"
      ) as HTMLInputElement;

      await userEvent.type(usernameInput, filledText1);
      await userEvent.type(passwordInput, filledText2);

      expect(usernameInput.value).toBe(filledText1);
      expect(passwordInput.value).toBe(filledText2);
    });
  });
});
