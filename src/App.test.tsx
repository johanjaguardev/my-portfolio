import { describe, expect, it } from "vitest";
import App from "./App";
import { render, screen, userEvent } from "./utils/test-utils";

describe("Simple working test", () => {
  it("the title is visible", () => {
    render(<App />);
    expect(screen.getByText(/Portfolio - Johan Vargas/i)).toBeInTheDocument();
  });
});
