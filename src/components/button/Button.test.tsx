import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';
// Import the specific props type if you have one
// import { ButtonProps } from './Button.types'; // Uncomment if ButtonProps is defined

describe('Button Component', () => {
  // Test to check that the Button is visible
  it('should be visible', () => {
    render(<Button text="Visible Button" onClick={() => {}} />);
    const buttonElement = screen.getByRole('button', { name: /visible button/i });
    expect(buttonElement).toBeVisible();
  });

  // Test to check the background color when the button is disabled
  it('should have the correct background color when disabled', () => {
    const { rerender } = render(<Button text="Disabled Button" onClick={() => {}} disabled={false} />);
    let buttonElement = screen.getByRole('button', { name: /disabled button/i });
    expect(buttonElement).toHaveStyle(`background-color: green`); // Replace 'initial' with the actual initial color if known

    // Now, re-render the same button with the disabled prop set to true
    rerender(<Button text="Disabled Button" onClick={() => {}} disabled={true} />);
    buttonElement = screen.getByRole('button', { name: /disabled button/i });
    expect(buttonElement).toHaveStyle(`background-color: grey`); // Replace 'grey' with the color you expect when disabled
  });
});
