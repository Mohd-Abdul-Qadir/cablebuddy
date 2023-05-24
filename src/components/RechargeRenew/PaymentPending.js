import React, { useState } from 'react'
import { Box, Typography, Button, Stack, MenuItem, Select, TextField } from '@mui/material'
import { Icon } from '@iconify/react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { AllRecharged } from '../../_mock/AllRechargedData';


const PaymentPending = () => {
  return (
    <Stack height='fit-content' sx={{ border: '1px solid #D8D8D8', borderRadius: '10px 10px 10px 10px', bgcolor: '#F5F5F5', width: '100%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #D8D8D8', px: '14px', py: '10px', borderRadius: '10px 10px 0 0', bgcolor: '#F5F5F5' }}>
        <Typography sx={{ textTransform: 'capitalize', fontWeight: '500', fontSize: '16px' }}>
          Recharged but Payment Pending
        </Typography>
        <Button // onClick={handleDownload}
          color="success" variant="outlined"
          sx={{ height: "40px", color: "#229A16" }}
          endIcon={<Icon icon="prime:file-excel" width='30px' />}
        >
          Download Bill
        </Button>
      </Box>
      <Stack flexDirection='column' gap='1rem' padding='2%' bgcolor='white'>
        <TableContainer sx={{ border: '1px solid #D8D8D8' }}>
          <Table sx={{ width: '110%' }}>
            <TableHead>
              <TableRow>
                <TableCell sx={{ border: '1px solid #D8D8D8' }}>S.No</TableCell>
                <TableCell sx={{ border: '1px solid #D8D8D8' }}>Name</TableCell>
                <TableCell sx={{ border: '1px solid #D8D8D8' }}>Mobile</TableCell>
                <TableCell sx={{ border: '1px solid #D8D8D8' }}>Area</TableCell>
                <TableCell sx={{ border: '1px solid #D8D8D8' }}>Balance Amount</TableCell>
                <TableCell sx={{ border: '1px solid #D8D8D8' }}>Last Payment Amount</TableCell>
                <TableCell sx={{ border: '1px solid #D8D8D8' }}>Bill Amount</TableCell>
                <TableCell sx={{ border: '1px solid #D8D8D8' }}>Generated On</TableCell>
                <TableCell sx={{ border: '1px solid #D8D8D8' }}>Generated By</TableCell>
                <TableCell sx={{ border: '1px solid #D8D8D8' }}>STB</TableCell>
                <TableCell sx={{ border: '1px solid #D8D8D8' }}>CARD</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {AllRecharged.map((row) => (
                <TableRow key={row.name}>
                  <TableCell sx={{ border: '1px solid #D8D8D8' }}>{row.sNo}</TableCell>
                  <TableCell sx={{ border: '1px solid #D8D8D8' }}>{row.name}</TableCell>
                  <TableCell sx={{ border: '1px solid #D8D8D8' }}>{row.mobile}</TableCell>
                  <TableCell sx={{ border: '1px solid #D8D8D8' }}>{row.area}</TableCell>
                  <TableCell sx={{ border: '1px solid #D8D8D8' }}>{row.balanceAmount}</TableCell>
                  <TableCell sx={{ border: '1px solid #D8D8D8', whiteSpace: 'nowrap' }}>
                    {row.lastPayment}</TableCell>
                  <TableCell sx={{ border: '1px solid #D8D8D8', whiteSpace: 'nowrap' }}>
                    {row.billAmount}</TableCell>
                  <TableCell sx={{ border: '1px solid #D8D8D8', whiteSpace: 'nowrap' }}>
                    {row.generatedOn}</TableCell>
                  <TableCell sx={{ border: '1px solid #D8D8D8', whiteSpace: 'nowrap' }}>
                    {row.generatedBy}</TableCell>
                  <TableCell sx={{ border: '1px solid #D8D8D8', whiteSpace: 'nowrap' }}>
                    {row.stb}</TableCell>
                  <TableCell sx={{ border: '1px solid #D8D8D8', whiteSpace: 'nowrap' }}>
                    {row.card}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </Stack>
  )
}

export default PaymentPending
