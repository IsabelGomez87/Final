import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RegisterForm from "./RegisterForm";

const mockUser = jest.fn();

jest.mock("../../hooks/user/useUser", () => () => ({
  register: mockUser,
}));

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
      const userName = "usertext";
      const userPassword = "userPasswd";
      render(<RegisterForm />);

      const usernameInput = screen.getByLabelText(
        "Username"
      ) as HTMLInputElement;
      const passwordInput = screen.getByLabelText(
        "Password"
      ) as HTMLInputElement;

      await userEvent.type(usernameInput, userName);
      await userEvent.type(passwordInput, userPassword);

      expect(usernameInput.value).toBe(userName);
      expect(passwordInput.value).toBe(userPassword);
    });
  });
  describe("When all inputs are fullfiled and the user clicks on the submit button", () => {
    test("Then the register function will be called", async () => {
      const userName = "usertext";
      const userPassword = "userPasswd";
      render(<RegisterForm />);

      const usernameInput = screen.getByLabelText(
        "Username"
      ) as HTMLInputElement;
      const passwordInput = screen.getByLabelText(
        "Password"
      ) as HTMLInputElement;

      const submitButton = screen.getByRole("button", { name: "SING UP" });

      await userEvent.type(usernameInput, userName);
      await userEvent.type(passwordInput, userPassword);
      await userEvent.click(submitButton);

      expect(mockUser).toHaveBeenCalled();
    });
  });
  describe("When the user type a name with less than 4 letters", () => {
    test("Then it shouldn't call the register function", async () => {
      const userName = "Ali";
      const userPassword = "12345678";

      render(<RegisterForm />);

      const usernameInput = screen.getByLabelText(
        "Username"
      ) as HTMLInputElement;
      const passwordInput = screen.getByLabelText(
        "Password"
      ) as HTMLInputElement;

      const submitButton = screen.getByRole("button", { name: "SING UP" });

      await userEvent.type(usernameInput, userName);
      await userEvent.type(passwordInput, userPassword);
      await userEvent.click(submitButton);

      expect(mockUser).not.toHaveBeenCalled();
    });
  });
  describe("When the user type a password with less than 8 characters", () => {
    test("Then it shouldn't call the register function", async () => {
      const userName = "Alibaba";
      const userPassword = "12345";

      render(<RegisterForm />);

      const usernameInput = screen.getByLabelText(
        "Username"
      ) as HTMLInputElement;
      const passwordInput = screen.getByLabelText(
        "Password"
      ) as HTMLInputElement;

      const submitButton = screen.getByRole("button", { name: "SING UP" });

      await userEvent.type(usernameInput, userName);
      await userEvent.type(passwordInput, userPassword);
      await userEvent.click(submitButton);

      expect(mockUser).not.toHaveBeenCalled();
    });
  });
});
