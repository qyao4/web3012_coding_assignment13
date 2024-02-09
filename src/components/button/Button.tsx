import React from "react";
import styled from "styled-components";
import { ButtonProps } from "./Button.types";

// styled-components  style
const StyledButton = styled.button`
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: darkblue;
  }
`;

// Button rending by StyledButton
const Button: React.FC<ButtonProps> = ({
  text,
  backgroundColor,
  onClick,
  disabled,
}) => {
  // Apply styles conditionally based on the disabled prop
  const style = {
    backgroundColor: disabled
      ? "grey"
      : backgroundColor
      ? backgroundColor
      : "green", // Greyed out if disabled
    cursor: disabled ? "not-allowed" : "pointer", // Cursor indicates if the button is clickable
  };
  // const style = backgroundColor ? { backgroundColor } : {};

  return (
    <StyledButton style={style} onClick={onClick} disabled={disabled}>
      {text}
    </StyledButton>
  );

  // return <StyledButton onClick={onClick}>{text}</StyledButton>;
};

export default Button;
