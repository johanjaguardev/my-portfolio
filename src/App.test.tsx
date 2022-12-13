import { describe, expect, it } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";

import App from "./App";
import { Page } from "./components/Page/Page";

describe("Simple working test", () => {
  beforeEach(() => {
    render(<App />);
  });
  afterEach(cleanup);
  it("Should render", (): void => {});
  it("the title is visible", () => {
    expect(screen.getByText(/Portfolio - Johan Vargas/i)).toBeInTheDocument();
  });
  it("Render Page", () => {
    render(<Page />);
  });
});
