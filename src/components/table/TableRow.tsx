// src/components/table/TableRow.tsx
import React from "react";
import styled from "styled-components";
import { TableRowProps } from "./TableRow.types";

const StyledTableRow = styled.tr<TableRowProps>`
  background-color: ${(props) => props.backgroundColor || "transparent"};
  &:hover {
    background-color: ${(props) => props.hoverBackgroundColor || "#f5f5f5"};
  }
  // more style...
`;

export const TableRow: React.FC<TableRowProps> = ({
  children,
  backgroundColor,
  hoverBackgroundColor,
}) => {
  return (
    <StyledTableRow
      backgroundColor={backgroundColor}
      hoverBackgroundColor={hoverBackgroundColor}
    >
      {children}
    </StyledTableRow>
  );
};
