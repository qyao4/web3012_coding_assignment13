// src/components/card/Card.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from "./Card";

describe("Card", () => {
  it("is visible", () => {
    render(<Card title="Visible Card" content="This card is visible." />);
    expect(screen.getByText("Visible Card")).toBeVisible();
    expect(screen.getByText("This card is visible.")).toBeVisible();
  });

  it("changes background color when disabled", () => {
    render(
      <Card
        title="Disabled Card"
        content="This card is disabled."
        disabled
        backgroundColor="#eee"
      />
    );
    // const card = screen.getByText("Disabled Card").parentNode;
    // const card = screen.getByText("Disabled Card").closest("div");
    const card = screen.getByTestId("card");
    expect(card).toHaveStyle("opacity: 0.5");
    expect(card).toHaveStyle("background-color: #eee");
  });
});
