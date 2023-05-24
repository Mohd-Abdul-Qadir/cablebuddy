import React, { useState } from 'react'
import { Box, Typography, Button, Stack, Link, Paper, Pagination, Dialog, Divider, TextField } from '@mui/material'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import OpenTable from './OpenTable';
import InProgressTable from './InProgressTable';
import ResolvedTable from './ResolvedTable';



const ComplaintsContent = () => {
    const [agent, setAgent] = useState('');
    const [status, setStatus] = useState('');
    const [value, setValue] = React.useState(dayjs('2022-04-17'));
    const [open, setOpen] = useState(false)
    const [dialogStatus, setDialogStatus] = useState('')
    const [active, setActive] = useState('Open')

    const handleAgent = (event) => {
        setAgent(event.target.value);
    };
    const handleStatus = (event) => {
        setStatus(event.target.value);
    };
    const handleDate = (event) => {
        setDate(event.target.value);
    };
    const handleDialogStatus = (event) => {
        setDialogStatus(event.target.value);
    }
    return (
        <Box sx={{
            display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
            position: 'relative'
        }}>                                
            <Box sx={{ width: '100%', px: '20px' }}>
                <Box>
                    <Typography sx={{ color: '#0C3547', fontWeight: '400', fontSize: '48px' }}>
                        Complaints
                    </Typography>
                    <Box sx={{ display: 'flex', gap: '1rem' }}>
                        <Button variant='outlined' startIcon={<PersonAddAltOutlinedIcon />} onClick={() => { setOpen(true) }}
                            sx={{ textTransform: 'capitalize', color: '#0C3547', border: '1px solid #0C3547' }}
                        >
                            Add complaints
                        </Button>
                    </Box>
                    <Dialog
                        open={open}
                        onClose={() => { setOpen(false) }}
                        sx={{ '& .MuiDialog-paper': { width: '500px' } }}
                    >
                        <Box sx={{ padding: '16px', height: 'fit-content' }}>
                            <Typography variant='h4'>Add Complaint</Typography>
                            <Divider sx={{ my: '15px' }} />
                            <Stack gap='1rem'>
                                <Stack direction='row' alignItems='center' gap='1rem'>
                                    <TextField fullWidth size='small' placeholder='Search name, mobile, etc..' />
                                    <SearchIcon />
                                </Stack>
                                <Stack gap='5px'>
                                    <Typography sx={{ fontSize: '14px' }}>Customer Name</Typography>
                                    <TextField size='small' placeholder='Please enter the name' />
                                </Stack>
                                <Stack gap='5px'>
                                    <Typography sx={{ fontSize: '14px' }}>Status:</Typography>
                                    <Select
                                        size='small'
                                        value={dialogStatus}
                                        onChange={handleDialogStatus}
                                        displayEmpty
                                    >
                                        <MenuItem value=''>Select Status</MenuItem>
                                        <MenuItem value='Open'>Open</MenuItem>
                                        <MenuItem value='InProgress'>In Progress</MenuItem>
                                        <MenuItem value='Resolved'>Resolved</MenuItem>
                                    </Select>
                                </Stack>
                                <Stack gap='5px'>
                                    <Typography sx={{ fontSize: '14px' }}>Message:</Typography>
                                    <TextField multiline minRows={3} size='small' placeholder='Please type comment here' />
                                </Stack>
                                <Stack gap='5px'>
                                    <Typography sx={{ fontSize: '14px' }}>Assign Agent:</Typography>
                                    <Select
                                        size='small'
                                        id="demo-select-small"
                                        value={agent}
                                        onChange={handleAgent}
                                        displayEmpty
                                    >
                                        <MenuItem value={''}>Select Agent</MenuItem>
                                        <MenuItem value={'Kishore'}>Kishore</MenuItem>
                                        <MenuItem value={'Praveen'}>Praveen</MenuItem>
                                        <MenuItem value={'PANTULUGARU'}>PANTULUGARU</MenuItem>
                                        <MenuItem value={'Tarun Kotagiri'}>Tarun Kotagiri</MenuItem>
                                        <MenuItem value={'Badineni'}>Badineni</MenuItem>
                                        <MenuItem value={'KSR'}>KSR</MenuItem>
                                        <MenuItem value={'Shanti'}>Shanti</MenuItem>
                                        <MenuItem value={'Tarun'}>Tarun</MenuItem>
                                    </Select>
                                </Stack>
                                <Button variant='contained' sx={{ width: 'fit-content', ml: 'auto', mt: '5px' }}>Add Complaint</Button>
                            </Stack>
                        </Box>
                    </Dialog>
                </Box>
            </Box>
            <Stack direction='column' justifyContent='center' alignItems='center' width='100%' gap='2rem' mt='30px'>
                <Stack sx={{ border: '1px solid #D8D8D8', borderRadius: '10px', bgcolor: 'white', width: '100%', gap: '10px' }}>
                    <Stack direction='row' alignItems='center' gap='20px' sx={{ py: '10px', px: '2rem', bgcolor: '#FBFBFB', borderRadius: '10px 10px 0px 0px', borderBottom: '1px solid #D6D6D6' }}>
                        <Button onClick={() => setActive('Open')}
                            sx={{
                                borderRadius: '8px', textTransform: 'capitalize', fontWeight: '600', fontSize: '13px', color: active === 'Open' ? 'white' : 'black', background: active === 'Open' ? '#2065D1' : '',
                                '&:hover': { background: active === 'Open' ? '#2065D1' : '' },
                            }}>Open</Button>
                        <Button onClick={() => setActive('InProgress')}
                            sx={{
                                borderRadius: '8px', textTransform: 'capitalize', fontWeight: '600', fontSize: '13px', color: active === 'InProgress' ? 'white' : 'black',
                                background: active === 'InProgress' ? '#2065D1' : '',
                                '&:hover': { background: active === 'InProgress' ? '#2065D1' : '' },
                            }}>In Progress</Button>
                        <Button onClick={() => setActive('Resolved')}
                            sx={{
                                borderRadius: '8px', textTransform: 'capitalize', fontWeight: '600', fontSize: '13px', color: active === 'Resolved' ? 'white' : 'black', background: active === 'Resolved' ? '#2065D1' : '',
                                '&:hover': { background: active === 'Resolved' ? '#2065D1' : '' },
                            }}>Resolved</Button>
                    </Stack>

                    <Stack gap='1rem' px='16px' pt='10px' pb='16px'>
                        <Stack direction='row' alignItems='center' justifyContent='space-between'>
                            <FormControl sx={{ m: 1, minWidth: '26%' }}>
                                <InputLabel id="demo-select-small" sx={{ color: 'black', fontWeight: '400', fontSize: '15px' }}>Select Agent</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={agent}
                                    label="Select Agent"
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
                            </FormControl>
                            <FormControl sx={{ m: 1, minWidth: '26%' }} >
                                <InputLabel id="demo-select-small" sx={{ color: 'black', fontWeight: '400', fontSize: '15px' }}>Select Status</InputLabel>
                                <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={status}
                                    label="Select Status"
                                    onChange={handleStatus}
                                >
                                    <MenuItem value={10}>Active</MenuItem>
                                    <MenuItem value={20}>Inactive</MenuItem>
                                </Select>
                            </FormControl>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker', 'DatePicker']} sx={{ padding: '0px' }}>
                                    <Box sx={{ overflow: 'auto', maxWidth: '100%' }}>
                                        <DatePicker
                                            label="Select Date"
                                            onChange={(newValue) => setValue(newValue)}
                                        />
                                    </Box>
                                </DemoContainer>
                            </LocalizationProvider>
                            <IconButton type="button" sx={{ px: '4%', height: 'fit-content', width: 'fit-content', color: 'white', bgcolor: '#0C3547', borderRadius: '3px', '&:hover': { bgcolor: '#0C3547' } }} aria-label="search">
                                <Typography sx={{ fontWeight: '400', fontSize: '16px' }}>Reset</Typography>
                            </IconButton>
                        </Stack>
                        <Stack direction='row' justifyContent='space-between' gap='2rem' px='5px'>
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
                    </Stack>
                </Stack>
                <Stack sx={{ border: '1px solid #D8D8D8', borderRadius: '10px', bgcolor: 'white', width: '100%' }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', bgcolor: '#F5F5F5', border: '1px solid #D8D8D8', padding: '14px', py: '10px', borderRadius: '10px 10px 0 0' }}>
                        <Typography sx={{ fontWeight: '500', fontSize: '16px', textTransform: 'capitalize' }}>
                            {
                                active === 'Open' ? 'Complaints queries open' : active === 'InProgress' ? 'Complaints queries working' : active === 'Resolved' ? 'Complaints queries resolved' : null
                            }
                        </Typography>
                    </Box>
                    <Stack padding='1rem'>
                        {
                            active === 'Open' ? <OpenTable /> : active === 'InProgress' ? <InProgressTable /> : active === 'Resolved' ? <ResolvedTable /> : null
                        }
                    </Stack>
                    <Box sx={{ display: 'flex', justifyContent: 'end', border: '1px solid #D8D8D8', padding: '14px', borderRadius: '0 0 0 0' }}>
                        <Pagination count={10} variant="outlined" shape="rounded" color="primary" />
                    </Box>
                </Stack>
            </Stack>
        </Box >
    )
}

export default ComplaintsContent
