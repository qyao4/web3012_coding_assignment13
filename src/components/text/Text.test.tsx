// src/components/text/Text.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import Text from "./Text";

describe("Text", () => {
  it("is visible", () => {
    render(<Text content="Visible Text" />);
    expect(screen.getByText("Visible Text")).toBeVisible();
  });

  it("changes color when disabled", () => {
    render(<Text content="Disabled Text" disabled={true} />);
    const textElement = screen.getByText("Disabled Text");
    expect(textElement).toHaveStyle("color: #888");
  });
});
