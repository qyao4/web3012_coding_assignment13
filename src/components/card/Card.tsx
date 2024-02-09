// src/components/card/Card.tsx
import React from "react";
import styled from "styled-components";
import { CardProps } from "./Card.types";

const StyledCard = styled.div<Pick<CardProps, "backgroundColor" | "disabled">>`
  padding: 20px;
  margin: 10px;
  border-radius: 8px;
  background-color: ${(props) => props.backgroundColor || "#fff"};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};

  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

const Card: React.FC<CardProps> = ({
  title,
  content,
  backgroundColor,
  disabled,
}) => {
  return (
    <StyledCard
      data-testid="card"
      backgroundColor={backgroundColor}
      disabled={disabled}
    >
      <h3>{title}</h3>
      <p>{content}</p>
    </StyledCard>
  );
};

export default Card;
