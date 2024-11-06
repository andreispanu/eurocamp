import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from '@mui/material';
import { ReusableTableProps } from './ReusableTable.types';

const ReusableTable: React.FC<ReusableTableProps> = ({ data, columns, onDelete }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.headers.map((header, index) => (
              <TableCell key={index}>{header}</TableCell>
            ))}
            {onDelete && <TableCell>Actions</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id}>
              {columns.cells.map((cell, index) => (
                <TableCell key={index}>{item[cell]}</TableCell>
              ))}
              {onDelete && (
                <TableCell>
                  <Button variant="contained" color="secondary" onClick={() => onDelete(item.id)}>
                    Delete
                  </Button>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ReusableTable;
