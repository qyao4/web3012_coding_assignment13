// src/components/table/Table.stories.tsx
import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Table, TableHeader, TableRow, TableCell, TableFooter } from './index'; // 确保正确导入组件
import { TableProps } from './Table.types';

export default {
  title: 'Components/Table',
  component: Table,
  subcomponents: { TableHeader, TableRow, TableCell, TableFooter },
  argTypes: {
    backgroundColor: { control: 'color' },
    disabled: { control: 'boolean' },
  },
} as Meta;

const Template: Story<TableProps> = (args) => (
  <Table {...args}>
    <TableHeader>
      <TableRow>
        <TableCell>Header Cell 1</TableCell>
        <TableCell>Header Cell 2</TableCell>
      </TableRow>
    </TableHeader>
    <tbody>
      <TableRow>
        <TableCell>Body Cell 1</TableCell>
        <TableCell>Body Cell 2</TableCell>
      </TableRow>
    </tbody>
    <TableFooter>
      <TableRow>
        <TableCell>Footer Cell 1</TableCell>
        <TableCell>Footer Cell 2</TableCell>
      </TableRow>
    </TableFooter>
  </Table>
);

export const Default = Template.bind({});
Default.args = {
  backgroundColor: 'skyblue',
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  backgroundColor: '#f0f0f0',
  disabled: true,
};
