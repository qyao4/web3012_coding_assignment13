// src/components/img/Img.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Img from "./Img";

describe("Img", () => {
  it("is visible", () => {
    render(<Img src="path/to/your/image.jpg" alt="Description" />);
    expect(screen.getByAltText("Description")).toBeVisible();
  });

  it("changes opacity when disabled", () => {
    render(<Img src="path/to/your/image.jpg" alt="Description" disabled />);
    expect(screen.getByAltText("Description")).toHaveStyle("opacity: 0.5");
  });
});
