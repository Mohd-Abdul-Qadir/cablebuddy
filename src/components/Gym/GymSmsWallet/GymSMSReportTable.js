import React, { useState } from 'react'
import { Box, Typography, Button, Stack, Checkbox, IconButton, Pagination } from '@mui/material'
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { GymSMSWalletTableData } from '../../../_mock/GymSMSWalletTableData';

const theme = createTheme({
    components: {
        MuiTableCell: {
            styleOverrides: {
                root: {
                    padding: '10px',
                    paddingTop: '0px',
                    paddingBottom: '0px',
                    width: 'auto',
                    height: 'unset',
                },
            },
        },
    },
});

const GymSMSReportTable = () => {

    const [day, setDay] = useState('')
    const [status, setStatus] = useState('');
    const [area, setArea] = useState('');
    const [balance, setBalance] = useState('');
    const [expiry, setExpiry] = useState('');
    const [date, setDate] = useState('');


    const handleStatus = (event) => {
        setStatus(event.target.value);
    };
    const handleArea = (event) => {
        setArea(event.target.value);
    };
    const handleBalance = (event) => {
        setBalance(event.target.value);
    };
    const handleExpiry = (event) => {
        setExpiry(event.target.value)
    }
    const handleDay = (event) => {
        setDay(event.target.value);
    };

    return (
        <ThemeProvider theme={theme}>
            <Stack width='100%' gap='25px'>
                <Stack sx={{ border: '1px solid #D8D8D8', borderRadius: '10px', bgcolor: 'white', width: '100%' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', bgcolor: '#F5F5F5', border: '1px solid #D8D8D8', padding: '14px', borderRadius: '10px 10px 0 0' }}>
                        <Typography sx={{ fontWeight: '500', fontSize: '16px' }}>Filters And Option</Typography>
                        <Typography sx={{ fontWeight: '600', fontSize: '16px' }}>(Don’t worry! We will keep trying to add SMS report in the interval of 1 hour)
                        </Typography>
                    </Box>
                    <Stack padding='1rem' gap='10px'>
                        <Stack direction='row' alignItems='center' justifyContent='space-between'>
                            <Typography sx={{ fontWeight: '400', fontSize: '16px' }}>Total : 0
                            </Typography>
                            <IconButton type="button" sx={{ px: '2%', height: 'fit-content', width: 'fit-content', color: 'white', bgcolor: '#0C3547', borderRadius: '4px', '&:hover': { bgcolor: '#0C3547' } }} aria-label="search">
                                <Typography sx={{ fontWeight: '400', fontSize: '16px' }}>Reset</Typography>
                            </IconButton>
                        </Stack>
                        <Button variant='contained' sx={{ fontWeight: '600' }}>ALL SMS - 0</Button>
                        <Stack direction='row' justifyContent='space-between' alignItems='center' gap='2rem' px='5px'>
                            <Paper component="form" sx={{
                                height: '40px', display: 'flex', alignItems: 'center', width: '50%', bgcolor: '#F8F8F8'
                            }}>
                                <InputBase
                                    sx={{ ml: 1, flex: 1 }}
                                    placeholder="Search For..."
                                    inputProps={{ 'aria-label': 'search google maps' }}
                                />
                                <IconButton type="button" sx={{ height: 'fit-content', color: 'white', bgcolor: '#0C3547', borderRadius: '2px', '&:hover': { bgcolor: '#0C3547' } }} aria-label="search">
                                    <SearchIcon />
                                </IconButton>
                            </Paper>
                            <FormControl sx={{ m: 1, minWidth: '20%' }} size="small">
                                <Select
                                    value={day}
                                    onChange={handleDay}
                                    displayEmpty
                                >
                                    <MenuItem value=''>Select Day</MenuItem>
                                    <MenuItem value={10}>SMS Today</MenuItem>
                                    <MenuItem value={20}>SMS Tomorrow</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl sx={{ m: 1, minWidth: '30%' }} size="small">
                                {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <DemoContainer components={['DatePicker', 'DatePicker']}>
                              <Box sx={{ overflow: 'auto', maxWidth: '100%' }}>
                                  <DatePicker
                                      label="Select Date"
                                      onChange={(newValue) => setValue(newValue)}
                                  />
                              </Box>
                          </DemoContainer>
                      </LocalizationProvider> */}
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoContainer components={['DatePicker', 'DatePicker']}>
                                        <DatePicker
                                            label="Select Date"
                                            onChange={(newValue) => setValue(newValue)}
                                            sx={{
                                                '& fieldset': {
                                                    border: 'none'
                                                },
                                            }}
                                        />
                                    </DemoContainer>
                                </LocalizationProvider>
                            </FormControl>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack sx={{ border: '1px solid #D8D8D8', borderRadius: '10px', bgcolor: 'white', width: '100%', padding: '1rem' }}>
                    <TableContainer sx={{ border: '1px solid #D8D8D8' }}>
                        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow sx={{ borderBottom: '1px solid #D8D8D8' }}>
                                    <TableCell sx={{ borderRight: '1px solid #D8D8D8', padding: 0 }}>
                                        <Checkbox />
                                    </TableCell>
                                    <TableCell sx={{ fontWeight: '600', fontSize: '14px', borderRight: '1px solid #D8D8D8' }}>S.CODE</TableCell>
                                    <TableCell sx={{ fontWeight: '600', fontSize: '14px', color: '#59B6EA', borderRight: '1px solid #D8D8D8' }}>Name</TableCell>
                                    <TableCell sx={{ fontWeight: '600', fontSize: '14px', borderRight: '1px solid #D8D8D8' }}>Mobile No</TableCell>
                                    <TableCell sx={{ fontWeight: '600', fontSize: '14px', color: '#59B6EA', borderRight: '1px solid #D8D8D8' }}>Area</TableCell>
                                    <TableCell sx={{ fontWeight: '600', fontSize: '14px', color: '#59B6EA', borderRight: '1px solid #D8D8D8' }}>Status</TableCell>
                                    <TableCell sx={{ fontWeight: '600', fontSize: '14px', color: '#59B6EA', borderRight: '1px solid #D8D8D8' }}>Expiry</TableCell>
                                    <TableCell sx={{ fontWeight: '600', fontSize: '14px', color: '#59B6EA', borderRight: '1px solid #D8D8D8' }}>Balance Amount</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {GymSMSWalletTableData?.map((row, index) => (
                                    <TableRow key={index} sx={{ borderBottom: 'none' }}>
                                        <TableCell sx={{ borderRight: '1px solid #D8D8D8', padding: 0 }}>
                                            <Checkbox />
                                        </TableCell>
                                        <TableCell sx={{ border: '1px solid #D8D8D8', py: '5px', px: { lg: '1%', xl: '10px' }, color: '#59B6EA' }}
                                        >{row.scode}</TableCell>
                                        <TableCell sx={{ border: '1px solid #D8D8D8', py: '5px', px: { lg: '3px', xl: '10px' }, textTransform: 'capitalize' }}>{row.name}</TableCell>
                                        <TableCell sx={{ border: '1px solid #D8D8D8', py: '5px', px: { lg: '1%', xl: '10px' } }}>{row.mobileno}</TableCell>
                                        <TableCell sx={{ border: '1px solid #D8D8D8', py: '5px', px: { lg: '1%', xl: '10px' } }}>{row.area}</TableCell>
                                        <TableCell sx={{ borderRight: '1px solid #D8D8D8' }}>
                                            <Typography sx={{ width: 'fit-content', fontWeight: '400', fontSize: '12px', bgcolor: '#63C78B', color: 'white', px: '8px', py: '5px', borderRadius: '3px' }}>Active</Typography>
                                        </TableCell>
                                        <TableCell sx={{ border: '1px solid #D8D8D8', py: '5px', px: { lg: '1%', xl: '10px' } }}>{row.expiry}</TableCell>
                                        <TableCell sx={{ border: '1px solid #D8D8D8', py: '5px', px: { lg: '1%', xl: '10px' } }}>{row.balanceamount}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Box sx={{ display: 'flex', justifyContent: 'end', border: '1px solid #D8D8D8', padding: '14px', borderRadius: '0 0 0 0' }}>
                        <Pagination count={10} variant="outlined" shape="rounded" color="primary" />
                    </Box>
                </Stack>
            </Stack>
        </ThemeProvider>
    )
}

export default GymSMSReportTable
