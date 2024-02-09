// src/components/radio-button/RadioButton.tsx
import React from "react";
import styled from "styled-components";
import { RadioButtonProps } from "./RadioButton.types";

const StyledRadioButton = styled.label<
  Pick<RadioButtonProps, "disabled" | "backgroundColor">
>`
  padding: 0.5em 1em;
  margin: 0.5em;
  background-color: ${(props) => props.backgroundColor || "transparent"};
  border-radius: 4px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};

  input {
    margin-right: 0.5em;
  }

  input:disabled {
    cursor: not-allowed;
  }
`;

const RadioButton: React.FC<RadioButtonProps> = ({
  label,
  name,
  disabled,
  backgroundColor,
}) => {
  return (
    <StyledRadioButton
      data-testid="radio"
      disabled={disabled}
      backgroundColor={backgroundColor}
    >
      <input type="radio" name={name} disabled={disabled} />
      {label}
    </StyledRadioButton>
  );
};

export default RadioButton;
