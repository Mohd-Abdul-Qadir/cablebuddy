import React from 'react'
import { Box, Stack, Table, TableBody, TableCell, TableHead, TableRow, Typography, TableContainer } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { SingleInputDateRangeField } from '@mui/x-date-pickers-pro/SingleInputDateRangeField';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { ProfitLossStatement } from '../../../_mock/ProfitLossStatementData';


const ProfitAndLoss = () => {
  return (
    <Stack height='fit-content' sx={{ border: '1px solid #D8D8D8', borderRadius: '10px 10px 10px 10px', bgcolor: '#F5F5F5' }}>
      <Box sx={{ borderBottom: '1px solid #D8D8D8', padding: '14px', borderRadius: '10px 10px 0 0', bgcolor: '#F5F5F5' }}>
        <Typography sx={{ textTransform: 'capitalize', fontWeight: '500', fontSize: '16px' }}>Profit And Loss Statement</Typography>
      </Box>
      <Stack direction='column' gap='1rem' py='5%' px='3%' bgcolor='white'>
        <Stack direction='row' alignItems='center' gap='2rem'>
          <Typography>Select Date: </Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['SingleInputDateRangeField']} sx={{ padding: '0px' }}>
              <Box sx={{
                overflow: 'auto', maxWidth: '100%', mt: '0px'
              }}>
                <DateRangePicker slots={{ field: SingleInputDateRangeField }} />
              </Box>
            </DemoContainer>
          </LocalizationProvider>
        </Stack>
        <TableContainer sx={{ border: '1px solid #D8D8D8' }}>
          <Table sx={{ width: '105%' }}>
            <TableHead>
              <TableRow>
                <TableCell sx={{ border: '1px solid #D8D8D8' }}>SNo</TableCell>
                <TableCell sx={{ border: '1px solid #D8D8D8' }}>Date</TableCell>
                <TableCell sx={{ border: '1px solid #D8D8D8' }}>Total Collected Amount</TableCell>
                <TableCell sx={{ border: '1px solid #D8D8D8' }}>Total Expenses Amount</TableCell>
                <TableCell sx={{ border: '1px solid #D8D8D8' }}>Net Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ProfitLossStatement.map((row, index) => (
                <TableRow key={row.name}>
                  <TableCell sx={{ border: '1px solid #D8D8D8' }}>{index + 1}</TableCell>
                  <TableCell sx={{ border: '1px solid #D8D8D8' }}>{row.Date}</TableCell>
                  <TableCell sx={{ border: '1px solid #D8D8D8', whiteSpace: 'nowrap' }}>{row.TotalCollected}</TableCell>
                  <TableCell sx={{ border: '1px solid #D8D8D8', whiteSpace: 'nowrap' }}>{row.TotalExpenses}</TableCell>
                  <TableCell sx={{ border: '1px solid #D8D8D8', whiteSpace: 'nowrap' }}>{row.NetAmount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </Stack>
  )
}

export default ProfitAndLoss
