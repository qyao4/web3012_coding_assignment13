// src/components/table/TableFooter.tsx
import React from "react";
import styled from "styled-components";
import { TableFooterProps } from "./TableFooter.types";

const StyledTableFooter = styled.tfoot<TableFooterProps>`
  background-color: ${(props) => props.backgroundColor || "#f8f8f8"};
  // more style...
`;

export const TableFooter: React.FC<TableFooterProps> = ({
  children,
  backgroundColor,
}) => {
  return (
    <StyledTableFooter backgroundColor={backgroundColor}>
      {children}
    </StyledTableFooter>
  );
};
