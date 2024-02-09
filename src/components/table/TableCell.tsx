// src/components/table/TableCell.tsx
import React from "react";
import styled from "styled-components";
import { TableCellProps } from "./TableCell.types";

const StyledTableCell = styled.td<TableCellProps>`
  padding: 8px;
  border: 1px solid #ddd;
  background-color: ${(props) => props.backgroundColor || "transparent"};
  color: ${(props) => (props.disabled ? "#aaa" : "#000")};
`;

export const TableCell: React.FC<TableCellProps> = ({
  children,
  disabled,
  backgroundColor,
}) => {
  return (
    <StyledTableCell disabled={disabled} backgroundColor={backgroundColor}>
      {children}
    </StyledTableCell>
  );
};
