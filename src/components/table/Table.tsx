// src/components/table/Table.tsx
import React from "react";
import styled from "styled-components";
import { TableProps } from "./Table.types";

const StyledTable = styled.table<TableProps>`
  width: 100%;
  border-collapse: collapse;
  background-color: ${(props) => props.backgroundColor || "transparent"};
  opacity: ${(props) => (props.disabled ? 0.4 : 1)};
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

export const Table: React.FC<TableProps> = ({
  children,
  disabled,
  backgroundColor,
}) => {
  return (
    <StyledTable
      data-testid="table"
      disabled={disabled}
      backgroundColor={backgroundColor}
    >
      {children}
    </StyledTable>
  );
};
