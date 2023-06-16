import React from 'react'
import { Box, Typography, Stack, Button, TextField, InputAdornment, MenuItem, Divider } from '@mui/material'
import ShareIcon from '@mui/icons-material/Share';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import TelegramIcon from '@mui/icons-material/Telegram';


const CustomerFollowUp = () => {
    return (
        <Box sx={{ width: { xs: '100%', md: '55vw' } }}>
            <Stack mb='2rem'>
                <Typography><b>Customer Followup</b></Typography>
            </Stack>
            <Stack gap='1rem'>
                <Stack direction={{ xs: 'column', sm: 'row' }} gap='5px' alignItems='center'>
                    <Stack sx={{ width: '50%', mr: 'auto' }}>
                        <Typography>Followup Date :</Typography>
                    </Stack>
                    <Stack direction='row' width='100%'>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            {/* <DemoItem label="Start Date"> */}
                            <DatePicker fullWidth defaultValue={dayjs('2022-04-17')} sx={{ width: '100%' }} />
                            {/* </DemoItem> */}
                        </LocalizationProvider>
                        <Button variant="contained" endIcon={<TelegramIcon />} sx={{ fontSize: '17px', ml: '25px', height: '50px', px: '10%' }}>Clear</Button>
                    </Stack>
                </Stack>
                <Stack direction={{ xs: 'column', sm: 'row' }} alignItems='center' gap='5px'>
                    <Stack sx={{ width: '50%', mr: 'auto' }}>
                        <Typography>Followup Comment :</Typography>
                    </Stack>
                    <TextField
                        fullWidth
                        id="outlined-multiline-flexible"
                        placeholder="Enter Reason Of Change"
                        multiline
                        rows={3}
                    />
                </Stack>
                <Stack direction='row' justifyContent='center' mt='15px'>
                    <Button variant="contained" endIcon={<TelegramIcon />} sx={{ fontSize: '15px', height: '50px', px: '8%' }}>
                        Update</Button>
                </Stack>
            </Stack>
        </Box>
    )
}

export default CustomerFollowUp
