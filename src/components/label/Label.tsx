// src/components/label/Label.tsx
import React from "react";
import styled from "styled-components";
import { LabelProps } from "./Label.types";

const StyledLabel = styled.label<{ disabled?: boolean }>`
  color: ${(props) => (props.disabled ? "#888" : "#000")};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

const Label: React.FC<LabelProps> = ({
  text,
  backgroundColor,
  disabled = false,
}) => {
  const style = backgroundColor ? { backgroundColor } : {};
  return (
    <StyledLabel disabled={disabled} style={style}>
      {text}
    </StyledLabel>
  );
};

export default Label;
