import React, { useState } from 'react'
import { Box, Typography, Button, Stack, MenuItem, Select, TextField } from '@mui/material'
import { Icon } from '@iconify/react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { SingleInputDateRangeField } from '@mui/x-date-pickers-pro/SingleInputDateRangeField';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { GstTableRows } from '../../../../_mock/GstInvoiceTableData';


const GstInvoiceWater = () => {
    const [invoice, setInvoice] = useState('');
    const [gstInvoice, setGstInvoice] = useState('');
    const [createDate, setCreateDate] = useState('');


    const handleInvoice = (event) => {
        setInvoice(event.target.value);
    };
    const handleGstInvoice = (event) => {
        setGstInvoice(event.target.value);
    };
    const handleCreateDate = (event) => {
        setCreateDate(event.target.value);
    };

    return (
        <Stack sx={{ border: '1px solid #D8D8D8', borderRadius: '10px 10px 10px 10px', bgcolor: '#F5F5F5',flexGrow: 1,width: '100%' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #D8D8D8', px: '14px', py: '10px', borderRadius: '10px 10px 0 0', bgcolor: '#F5F5F5' }}>
                <Typography sx={{ textTransform: 'capitalize', fontWeight: '500', fontSize: '16px' }}>GST Invoice</Typography>
                <Button // onClick={handleDownload}
                    color="success" variant="outlined"
                    sx={{ height: "40px", color: "#229A16" }}
                    endIcon={<Icon icon="prime:file-excel" width='30px' />}
                >
                    Download Bill
                </Button>
            </Box>
            <Stack direction='column' gap='1rem' py='5%' px='3%' bgcolor='white'>
                <Stack gap='1rem'>
                    <Stack direction='row' flexWrap='wrap' alignItems='center' justifyContent='space-between'>
                        <Select
                            displayEmpty
                            value={invoice}
                            onChange={handleInvoice}
                        >
                            <MenuItem value="">
                                <em>All Invoice</em>
                            </MenuItem>
                            <MenuItem value='With Tax Invoice'>With Tax Invoice</MenuItem>
                            <MenuItem value='Without GST No'>Without Tax Invoice</MenuItem>
                        </Select>
                        <Select
                            displayEmpty
                            value={gstInvoice}
                            onChange={handleGstInvoice}
                        >
                            <MenuItem value="">
                                <em>Select GST Invoice</em>
                            </MenuItem>
                            <MenuItem value='With GST No'>With GST No. Invoice</MenuItem>
                            <MenuItem value='Without GST No'>Without GST No. Invoice</MenuItem>
                        </Select>
                        <Select
                            displayEmpty
                            value={createDate}
                            onChange={handleCreateDate}
                        >
                            <MenuItem value="">
                                <em>Create Date</em>
                            </MenuItem>
                            <MenuItem value='StartDate'>Start Date</MenuItem>
                            <MenuItem value='EndDate'>End Date</MenuItem>
                        </Select>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['SingleInputDateRangeField']} sx={{padding: 0}}>
                                <Box sx={{
                                    overflow: 'auto', maxWidth: '100%', mt: '0px'
                                }}>
                                    <DateRangePicker slots={{ field: SingleInputDateRangeField }} />
                                </Box>
                            </DemoContainer>
                        </LocalizationProvider>
                    </Stack>
                    <Stack direction='row' alignItems='center' gap='5%'>
                        <TextField fullWidth placeholder='Search Bill' />
                    </Stack>
                </Stack>
                <TableContainer sx={{ border: '1px solid #D8D8D8' }}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ border: '1px solid #D8D8D8' }}>Name</TableCell>
                                <TableCell sx={{ border: '1px solid #D8D8D8' }}>Bill NO</TableCell>
                                <TableCell sx={{ border: '1px solid #D8D8D8' }}>GST NO</TableCell>
                                <TableCell sx={{ border: '1px solid #D8D8D8' }}>Date</TableCell>
                                <TableCell sx={{ border: '1px solid #D8D8D8' }}>Sub Total</TableCell>
                                <TableCell sx={{ border: '1px solid #D8D8D8' }}>SGST</TableCell>
                                <TableCell sx={{ border: '1px solid #D8D8D8' }}>CGST</TableCell>
                                <TableCell sx={{ border: '1px solid #D8D8D8' }}>Total</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {GstTableRows.map((row) => (
                                <TableRow key={row.name}>
                                    <TableCell sx={{ border: '1px solid #D8D8D8' }}>
                                        <Typography sx={{ color: '#007bff', fontSize: '15px' }}>{row.name}</Typography>
                                        <Typography sx={{ fontSize: '12px' }}>{row.number}</Typography>
                                    </TableCell>
                                    <TableCell sx={{ border: '1px solid #D8D8D8' }}>{row.billNo}</TableCell>
                                    <TableCell sx={{ border: '1px solid #D8D8D8' }}>{row.gstNo}</TableCell>
                                    <TableCell sx={{ border: '1px solid #D8D8D8' }}>
                                        <Typography sx={{ whiteSpace: 'nowrap', fontSize: '15px' }}>{row.date}</Typography>
                                        <Typography sx={{ fontSize: '11px', color: 'grey' }}>{row.dateBilled}</Typography>
                                    </TableCell>
                                    <TableCell sx={{ border: '1px solid #D8D8D8', whiteSpace: 'nowrap' }}>{row.subTotal}</TableCell>
                                    <TableCell sx={{ border: '1px solid #D8D8D8', whiteSpace: 'nowrap' }}>{row.SGst}</TableCell>
                                    <TableCell sx={{ border: '1px solid #D8D8D8', whiteSpace: 'nowrap' }}>{row.CGst}</TableCell>
                                    <TableCell sx={{ border: '1px solid #D8D8D8', whiteSpace: 'nowrap' }}>{row.total}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Stack>
        </Stack>
    )
}

export default GstInvoiceWater
