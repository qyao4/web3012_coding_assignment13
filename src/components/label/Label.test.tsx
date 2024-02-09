// src/components/label/Label.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
// import '@testing-library/jest-dom/extend-expect';
import Label from "./Label";

describe("Label", () => {
  it("is visible", () => {
    render(<Label text="Visible Label" />);
    expect(screen.getByText("Visible Label")).toBeVisible();
  });

  it("changes color when disabled", () => {
    render(<Label text="Disabled Label" disabled={true} />);
    const label = screen.getByText("Disabled Label");
    expect(label).toHaveStyle("color: #888");
  });
});
