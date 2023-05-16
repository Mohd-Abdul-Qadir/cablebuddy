import React from 'react'
import { Box, Button, Stack, Typography } from '@mui/material'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { BalancehistoryData } from '../../_mock/BalancehistoryData';
import Image from '../Image';


const BalanceHistory = () => {
  return (
    <Box sx={{ width: '55vw' }}>
      <Stack direction='row' alignItems='center' justifyContent='space-between' width='100%'>
        <Typography><b>Balance History</b></Typography>
        <Button variant='contained'>Download</Button>
      </Stack>
      <TableContainer component={Paper} sx={{ mt: '15px' }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>DATE</TableCell>
              <TableCell>TRANSACTION AMOUNT</TableCell>
              <TableCell>FINAL</TableCell>
              <TableCell>ACTION</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {BalancehistoryData.map((row) => (
              <TableRow key={row.image} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  <Image src={row.image} alt='image' sx={{ width: '3rem', border: '1px solid #D8D8D8', p: '5px', borderRadius: '5px' }} />
                </TableCell>
                <TableCell>
                  <Typography sx={{ fontSize: '15px' }}>{row.date}</Typography>
                  <Typography sx={{ fontSize: '10px' }}>{row.dateDetail}</Typography>
                </TableCell>
                <TableCell>{row.transactionAmount}</TableCell>
                <TableCell>
                  <Typography sx={{ bgcolor: '#072534', color: 'white', width: '50px', textAlign: 'center', borderRadius: '5px' }}>
                    {row.final}
                  </Typography>
                </TableCell>
                <TableCell>.</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default BalanceHistory
