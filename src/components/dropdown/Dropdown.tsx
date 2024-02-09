// src/components/dropdown/Dropdown.tsx
import React from 'react';
import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';

const StyledSelect = styled.select<Pick<DropdownProps, 'disabled' | 'backgroundColor'>>`
  padding: 0.5em;
  margin: 0.5em 0;
  background: ${(props) => props.disabled ? '#eee' : (props.backgroundColor || 'white')};
  border: 1px solid #ccc;
  border-radius: 3px;
  cursor: ${(props) => props.disabled ? 'not-allowed' : 'pointer'};
`;

const Dropdown: React.FC<DropdownProps> = ({ options, disabled, backgroundColor, onChange }) => {
  return (
    <StyledSelect disabled={disabled} style={{ backgroundColor }} onChange={onChange}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Dropdown;
