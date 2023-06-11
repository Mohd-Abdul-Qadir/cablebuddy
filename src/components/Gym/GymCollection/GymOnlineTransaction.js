import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Stack,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
} from '@mui/material';
import Chip from '@mui/material/Chip';
import { GymOnlineTransactionData } from '../../../_mock/GymOnlineTransactionData';

const GymOnlineTransaction = (props) => {
  const data = props.balanceHistoriesOnline;
  return (
    <TableContainer sx={{ border: '1px solid #D8D8D8', width: '100%', overflowX: 'auto', whiteSpace: 'nowrap' }}>
      <Table sx={{ borderRadius: '10px' }}>
        <TableHead>
          <TableRow>
            <TableCell
              sx={{
                border: '1px solid #D8D8D8',
                width: 'fit-content',
                fontWeight: '600',
                fontSize: '12px',
                textAlign: 'center',
              }}
            >
              #
            </TableCell>
            <TableCell sx={{ border: '1px solid #D8D8D8', width: 'fit-content', fontWeight: '600', fontSize: '12px' }}>
              Name
            </TableCell>
            <TableCell sx={{ border: '1px solid #D8D8D8', width: 'fit-content', fontWeight: '600', fontSize: '12px' }}>
              Amount
            </TableCell>
            <TableCell sx={{ border: '1px solid #D8D8D8', width: 'fit-content', fontWeight: '600', fontSize: '12px' }}>
              Message
            </TableCell>
            <TableCell sx={{ border: '1px solid #D8D8D8', width: 'fit-content', fontWeight: '600', fontSize: '12px' }}>
              Customer Code
            </TableCell>
            <TableCell sx={{ border: '1px solid #D8D8D8', width: 'fit-content', fontWeight: '600', fontSize: '12px' }}>
              STB_No
            </TableCell>
            <TableCell sx={{ border: '1px solid #D8D8D8', width: 'fit-content', fontWeight: '600', fontSize: '12px' }}>
              Card No
            </TableCell>
            <TableCell sx={{ border: '1px solid #D8D8D8', width: 'fit-content', fontWeight: '600', fontSize: '12px' }}>
              Date
            </TableCell>
            <TableCell sx={{ border: '1px solid #D8D8D8', width: 'fit-content', fontWeight: '600', fontSize: '12px' }}>
              Status
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item, index) => (
            <TableRow key={index} sx={{ borderBottom: 'none' }}>
              <TableCell sx={{ border: '1px solid #D8D8D8', py: '5px', px: '10px', color: '#59B6EA' }}>
                {item.name}
              </TableCell>
              <TableCell sx={{ border: '1px solid #D8D8D8', py: '5px', px: '10px' }}>35</TableCell>
              <TableCell sx={{ border: '1px solid #D8D8D8', py: '5px', px: '10px' }}>52</TableCell>
              <TableCell sx={{ border: '1px solid #D8D8D8', py: '5px', px: '10px' }}>
                {item.transactionAmount}
              </TableCell>
              <TableCell sx={{ border: '1px solid #D8D8D8', py: '5px', px: '10px' }}>0</TableCell>
              <TableCell sx={{ border: '1px solid #D8D8D8', py: '5px', px: '10px' }}>{item.remainingAmount}</TableCell>
              <TableCell sx={{ border: '1px solid #D8D8D8', py: '5px', px: '10px' }}>{item.collectedBy}</TableCell>
              <TableCell sx={{ border: '1px solid #D8D8D8', py: '5px', px: '10px' }}>{item.stbNo}</TableCell>
              <TableCell sx={{ border: '1px solid #D8D8D8', py: '5px', px: '10px' }}>{item.cardNo}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default GymOnlineTransaction;
