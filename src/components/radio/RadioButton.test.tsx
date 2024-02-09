// src/components/radio-button/RadioButton.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RadioButton from './RadioButton';

describe('RadioButton', () => {
  test('is visible', () => {
    render(<RadioButton label="Test Radio Button" name="test-radio" />);
    expect(screen.getByLabelText('Test Radio Button')).toBeVisible();
  });

  test('background color changes when disabled', () => {
    render(<RadioButton label="Test Radio Button" name="test-radio" disabled backgroundColor="#eee" />);
    const radioButton = screen.getByLabelText('Test Radio Button').parentElement;
    expect(radioButton).toHaveStyle('background-color: #eee');
    expect(radioButton).toHaveStyle('opacity: 0.5');
  });
});
