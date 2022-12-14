import { screen } from "@testing-library/react";
import LoginForm from "../../components/LoginForm/LoginForm";
import { wrappedRender } from "../../test-utils/render/WrappedRender";
import Wrapper from "../../utils/Wrapper";
import LoginPage from "./LoginPage";

describe("Given a LoginPage component", () => {
  describe("When it is instanciated", () => {
    test("Then it should show a heading with 'Log in' as a text and a button with 'Create an account' as a text inside", () => {
      const titleText = "Sign in";
      const linkText = "Register";

      wrappedRender(<LoginPage />, { wrapper: Wrapper });

      const headingName = screen.getByRole("heading", { name: titleText });
      const createAccountButton = screen.getByRole("link", {
        name: linkText,
      });

      expect(headingName).toBeInTheDocument();
      expect(createAccountButton).toBeInTheDocument();
    });
  });
  test("Then it should show a form component with a userName and password as a labels and a button with login as a text", () => {
    wrappedRender(<LoginForm />, { wrapper: Wrapper });

    const registerForm = [
      screen.getByText("Username"),
      screen.getByText("Password"),
      screen.getByRole("button", { name: "LOGIN" }),
    ];

    registerForm.forEach((element) => expect(element).toBeInTheDocument());
  });
});
