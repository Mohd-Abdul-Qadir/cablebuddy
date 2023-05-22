import React, { useState } from 'react'
import { Box, Typography, Button, Stack, Paper, Dialog, Divider, TextField } from '@mui/material'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import { complaintRows } from '../../_mock/ComplaintTableData';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Edit } from '@mui/icons-material';

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


const OpenTable = () => {
    const [value, setValue] = useState('Open');
    const [agent, setAgent] = useState('Kishore');
    const [open, setOpen] = useState(false)

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const handleAgent = (event) => {
        setAgent(event.target.value);
    };
    const openclose = ['Open', 'Close']

    return (
        <ThemeProvider theme={theme}>
            <TableContainer sx={{ border: '1px solid #D8D8D8', width: '100%', overflowX: 'auto', whiteSpace: 'nowrap' }}>
                <Table sx={{ width: '135%' }} aria-label="a dense table">
                    <TableHead>
                        <TableRow sx={{ borderBottom: '1px solid #D8D8D8' }}>
                            <TableCell sx={{ fontWeight: '600', fontSize: '14px', borderRight: '1px solid #D8D8D8', py: '10px' }}>S.No</TableCell>
                            <TableCell sx={{ fontWeight: '600', fontSize: '14px', borderRight: '1px solid #D8D8D8', py: '10px' }}>Name</TableCell>
                            <TableCell sx={{ fontWeight: '600', fontSize: '14px', borderRight: '1px solid #D8D8D8', py: '10px' }}>Mobile No</TableCell>
                            <TableCell sx={{ fontWeight: '600', fontSize: '14px', borderRight: '1px solid #D8D8D8', py: '10px' }}>Address</TableCell>
                            <TableCell sx={{ fontWeight: '600', fontSize: '14px', borderRight: '1px solid #D8D8D8', py: '10px' }}>Message</TableCell>
                            <TableCell sx={{ fontWeight: '600', fontSize: '14px', borderRight: '1px solid #D8D8D8', py: '10px' }}>Agent</TableCell>
                            <TableCell sx={{ fontWeight: '600', fontSize: '14px', borderRight: '1px solid #D8D8D8', py: '10px' }}>Status</TableCell>
                            <TableCell sx={{ fontWeight: '600', fontSize: '14px', borderRight: '1px solid #D8D8D8', py: '10px' }}>Start Date</TableCell>
                            <TableCell sx={{ fontWeight: '600', fontSize: '14px', borderRight: '1px solid #D8D8D8', py: '10px' }}>Last Update Date</TableCell>
                            <TableCell sx={{ fontWeight: '600', fontSize: '14px', py: '10px' }}>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {complaintRows.map((row, index) => (
                            <TableRow key={index} sx={{ bgcolor: index % 2 == 0 ? '#F8F8F8' : undefined, borderBottom: '1px solid #D8D8D8' }}>
                                <TableCell sx={{ fontWeight: '400', fontSize: '12px', borderRight: '1px solid #D8D8D8' }}>{row.sno}</TableCell>
                                <TableCell sx={{ borderRight: '1px solid #D8D8D8' }}>
                                    {row.name}
                                </TableCell>
                                <TableCell sx={{ borderRight: '1px solid #D8D8D8' }}>
                                    {row.mobile}
                                </TableCell>
                                <TableCell sx={{ borderRight: '1px solid #D8D8D8' }}>
                                    {row.address}
                                </TableCell>
                                <TableCell sx={{ borderRight: '1px solid #D8D8D8', whiteSpace: 'normal', width: '500px' }}>
                                    {row.message}
                                </TableCell>
                                <TableCell sx={{ display: 'flex', alignItems: 'center', padding: '30px', borderBottom: '0', borderRight: '1px solid #D8D8D8' }}>
                                    <Select
                                        value={agent}
                                        sx={{ display: 'flex', borderRadius: '25px', height: '32px', width: '6rem' }}
                                        onChange={handleAgent}
                                    >
                                        <MenuItem value={'KK Cable Network-(Admin)'}>KK Cable Network-(Admin)</MenuItem>
                                        <MenuItem value={'Kishore'}>Kishore</MenuItem>
                                        <MenuItem value={'Praveen'}>Praveen</MenuItem>
                                        <MenuItem value={'PANTULUGARU'}>PANTULUGARU</MenuItem>
                                        <MenuItem value={'Tarun Kotagiri'}>Tarun Kotagiri</MenuItem>
                                        <MenuItem value={'Badineni'}>Badineni</MenuItem>
                                        <MenuItem value={'KSR'}>KSR</MenuItem>
                                        <MenuItem value={'Shanti'}>Shanti</MenuItem>
                                        <MenuItem value={'Tarun'}>Tarun</MenuItem>
                                    </Select>
                                </TableCell>
                                <TableCell sx={{ color: '#A5A4A4', borderRight: '1px solid #D8D8D8' }}>
                                    <Select
                                        value={value}
                                        onChange={handleChange}
                                        sx={{ borderRadius: '25px', height: '32px', width: '6rem' }}>
                                        <MenuItem value='Open'>Open</MenuItem>
                                        <MenuItem value='Close'>Close</MenuItem>
                                    </Select>
                                </TableCell>
                                <TableCell sx={{ borderRight: '1px solid #D8D8D8' }}>
                                    {row.startdate}
                                </TableCell>
                                <TableCell sx={{ borderRight: '1px solid #D8D8D8' }}>{row.lastdate}</TableCell>
                                <TableCell sx={{ borderRight: '1px solid #D8D8D8' }}>
                                    <Stack direction='row' gap='10px'>
                                        <DeleteIcon sx={{ color: '#FF4842' }} />
                                        <Edit onClick={() => { setOpen(true) }} sx={{ color: '#212B36' }} />
                                    </Stack>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Dialog
                open={open}
                onClose={() => { setOpen(false) }}
                sx={{ '& .MuiDialog-paper': { width: '400px' } }}
            >
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '15px', px: '14px', py: '12px' }}>
                    <Typography sx={{ fontSize: '20px' }}>Write New Message Here</Typography>
                    <Divider />
                    <Stack gap='5px'>
                        <Typography sx={{ fontSize: '14px' }}>Message:</Typography>
                        <TextField
                            placeholder="Please type your message here"
                            multiline
                            minRows={4}
                        />
                    </Stack>
                    <Button variant='contained'>Update Message</Button>
                </Box>
            </Dialog>
        </ThemeProvider>
    )
}

export default OpenTable
