import React, { useState } from 'react'
import { Box, Button, Typography, Select, MenuItem, Stack, IconButton, InputBase, Dialog, Divider, TextField } from '@mui/material'
import dayjs from 'dayjs';
import PaymentsIcon from '@mui/icons-material/Payments';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { SingleInputDateRangeField } from '@mui/x-date-pickers-pro/SingleInputDateRangeField';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import SearchIcon from '@mui/icons-material/Search';
import { Icon } from '@iconify/react';
import ExpensesTable from './AgentExpensesTable';

const AgentExpenses = () => {
    const [category, setCategory] = useState('');
    const [open, setOpen] = useState(false);
    const [value, setValue] = React.useState(dayjs('2022-04-17'));

    const handleCategory = (e) => {
        setCategory(e.target.value);
    }

    return (
        <Box>
            <Box>
                <Typography sx={{ color: '#0C3547', fontWeight: '400', fontSize: '48px' }}>Expenses</Typography>
                <Box sx={{ display: 'flex', gap: '1rem' }}>
                    <Button
                        onClick={() => { setOpen(true) }}
                        variant="outlined"
                        startIcon={<PaymentsIcon />}
                        sx={{ textTransform: 'capitalize', color: '#0C3547', border: '1px solid #0C3547' }}
                    >
                        Add Expenses
                    </Button>
                    <Dialog
                        open={open}
                        onClose={() => { setOpen(false) }}
                        sx={{ '& .MuiDialog-paper': { width: '500px' } }}
                    >
                        <Box sx={{ padding: '16px', height: 'fit-content' }}>
                            <Typography variant='h4'>Add Expenses</Typography>
                            <Divider sx={{ my: '15px' }} />
                            <Stack gap='1rem'>
                                <Stack gap='5px'>
                                    <Typography sx={{ fontSize: '14px' }}>Enter Amount :</Typography>
                                    <TextField type='number' size='small' defaultValue='0' />
                                </Stack>
                                <Stack gap='5px'>
                                    <Typography sx={{ fontSize: '14px' }}>Enter Category:</Typography>
                                    <TextField type='number' size='small' placeholder='Please type Expenses category here' />
                                </Stack>
                                <Stack gap='5px'>
                                    <Typography sx={{ fontSize: '14px' }}>Comment:</Typography>
                                    <TextField multiline minRows={3} size='small' placeholder='Please type comment here' />
                                </Stack>
                                <Stack gap='5px'>
                                    <Typography sx={{ fontSize: '14px' }}>Date :</Typography>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DemoContainer components={['DatePicker', 'DatePicker']} sx={{ padding: '0px' }}>
                                            <DatePicker
                                                sx={{ width: '100%' }}
                                                value={value}
                                                onChange={(newValue) => setValue(newValue)}
                                            />
                                        </DemoContainer>
                                    </LocalizationProvider>
                                </Stack>
                                <Stack gap='5px'>
                                    <Typography sx={{ fontSize: '14px' }}>Image:</Typography>
                                    <TextField size='small' type='file' placeholder='Choose File' />
                                </Stack>
                                <Button variant='contained' sx={{ width: 'fit-content', ml: 'auto', mt: '5px' }}>Add Expenses</Button>
                            </Stack>
                        </Box>
                    </Dialog>
                    <Button
                        variant="contained"
                        sx={{ textTransform: 'capitalize' }}
                    >
                        Total Expenses ₹ 0
                    </Button>
                </Box>
            </Box>
            <Stack gap='20px' mt='20px'>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px', mt: '20px', border: '1px solid #D8D8D8', borderRadius: '10px', padding: '16px', bgcolor: 'white' }}>
                    <Stack direction='row' alignItems='center' justifyContent='space-between'>
                        <Select
                            sx={{ minWidth: '30%' }}
                            value={category}
                            onChange={handleCategory}
                            displayEmpty
                        >
                            <MenuItem value=''>Select Category</MenuItem>
                            <MenuItem value='category1'>category1</MenuItem>
                            <MenuItem value='category2'>category2</MenuItem>
                        </Select>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['SingleInputDateRangeField']} sx={{ padding: '0px' }}>
                                <DateRangePicker slots={{ field: SingleInputDateRangeField }} />
                            </DemoContainer>
                        </LocalizationProvider>
                        <IconButton type="button" sx={{ height: '45px', width: '25%', color: 'white', bgcolor: '#0C3547', borderRadius: '4px', '&:hover': { bgcolor: '#0C3547' } }} aria-label="search">
                            <Typography sx={{ fontWeight: '400', fontSize: '16px' }}>Reset</Typography>
                        </IconButton>
                    </Stack>
                    <Stack>
                        <Box sx={{ height: '40px', display: 'flex', alignItems: 'center', width: '100%', bgcolor: '#F8F8F8', border: '1px solid #D8D8D8' }}>
                            <InputBase
                                sx={{ ml: 2, flex: 1 }}
                                placeholder="Search For..."
                                inputProps={{ 'aria-label': 'search google maps' }}
                            />
                            <IconButton type="button" sx={{ height: 'fit-content', px: '18px', color: 'white', bgcolor: '#0C3547', borderRadius: '2px', '&:hover': { bgcolor: '#0C3547' } }} aria-label="search">
                                <SearchIcon />
                            </IconButton>
                        </Box>
                    </Stack>
                </Box>
                <Stack sx={{ border: '1px solid #D8D8D8', borderRadius: '10px' }}>
                    <Stack direction='row' justifyContent='space-between' alignItems='center' sx={{ borderBottom: '1px solid #D8D8D8', bgcolor: '#F5F5F5', padding: '16px', borderRadius: '10px 10px 0 0' }}>
                        <Typography sx={{ fontWeight: '600' }}>List</Typography>
                        <Button
                            color="success" variant="outlined"
                            sx={{ height: "40px", color: "#229A16" }}
                            endIcon={<Icon icon="prime:file-excel" width='30px' />}
                        >
                            Download
                        </Button>
                    </Stack>
                    <Stack sx={{ padding: '16px' }}>
                        <ExpensesTable />
                    </Stack>
                </Stack>
            </Stack>
        </Box >
    )
}

export default AgentExpenses
