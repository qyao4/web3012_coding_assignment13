// src/components/table/TableHeader.tsx
import React from 'react';
import styled from 'styled-components';
import { TableHeaderProps } from './TableHeader.types';

const StyledTableHeader = styled.thead<TableHeaderProps>`
  background-color: ${(props) => props.backgroundColor || '#eee'};
`;

export const TableHeader: React.FC<TableHeaderProps> = ({ children, backgroundColor }) => {
  return <StyledTableHeader backgroundColor={backgroundColor}>{children}</StyledTableHeader>;
};
