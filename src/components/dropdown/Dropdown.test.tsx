// src/components/dropdown/Dropdown.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import Dropdown from './Dropdown';

describe('Dropdown', () => {
  const options = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ];

  // A test that checks that the component is visible
  it('is visible', () => {
    render(<Dropdown options={options} />);

    expect(screen.getByText('Option 1')).toBeVisible();
  });

  // A test that checks that the background color changed when the component is in the ‘disabled’ state
  it('has changed background color when disabled', () => {
    const backgroundColor = 'white';
    const disabledBackgroundColor = '#eee';
    render(<Dropdown options={options} disabled={true} />);


    const selectElement = screen.getByRole('combobox');
    expect(selectElement).toHaveStyle(`background-color: ${disabledBackgroundColor}`);
  });
});
