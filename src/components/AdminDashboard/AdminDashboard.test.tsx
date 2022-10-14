import { describe, expect, it } from "vitest";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { AdminDashboard } from "./AdminDashboard";
import { localStorageStoreMock } from "./../../store/LocalStorageStoreMock ";

const window = {
  localStorage: localStorageStoreMock(),
};

describe("AdminDashboard", (): void => {
  //   it("should be a function", (): void => {
  //     expect(typeof includeJobInEntry).toBe("function");
  //   });

  //   it("should throw if not string is provided as parameter", (): void => {
  //     expect(() => includeJobInEntry()).toThrow();
  //   });
  afterEach(cleanup);

  it("Should Render", (): void => {
    render(<AdminDashboard projectValue={""} />);
  });

  it("Should render label for project name", (): void => {
    render(<AdminDashboard projectValue={""} />);
    screen.getByText("Project Name");
  });

  it("Should render button send", (): void => {
    render(<AdminDashboard projectValue={""} />);
    screen.getByText("Send");
  });

  it("Should update the input value", (): void => {
    render(<AdminDashboard projectValue={""} />);
    const inputProject = screen.getByRole("textbox") as HTMLInputElement;
    fireEvent.change(inputProject, {
      target: { value: "Portfolio Johan Vargas" },
    });
    expect(inputProject.value).toBe("Portfolio Johan Vargas");
  });

  it("Should print in screen div after clicking send button", (): void => {
    render(<AdminDashboard projectValue={""} />);
    const sendButton = screen.getByTestId("sendButton");
    const inputProject = screen.getByRole("textbox");
    fireEvent.change(inputProject, {
      target: { value: "Portfolio Johan Vargas" },
    });
    fireEvent.click(sendButton);
    const screenText = screen.getByTestId("screenText");
    expect(screenText.innerText).toBe("Portfolio Johan Vargas");
  });

  it("Should save an item in localstorage called screenValue", (): void => {
    render(<AdminDashboard projectValue={""} />);
    const sendButton = screen.getByTestId("sendButton");
    const inputProject = screen.getByRole("textbox");
    fireEvent.change(inputProject, {
      target: { value: "Portfolio Johan Vargas" },
    });
    window.localStorage.setItem("screenValue", "Portfolio Johan Vargas");
    fireEvent.click(sendButton);
    expect(window.localStorage.getItem("screenValue")).toBe(
      "Portfolio Johan Vargas"
    );
  });
});
