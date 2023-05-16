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
        <Box sx={{ width: '55vw' }}>
            <Stack mb='2rem'>
                <Typography><b>Customer Followup</b></Typography>
            </Stack>
            <Stack gap='1rem'>
                <Stack direction='row' alignItems='center'>
                    <Stack sx={{ width: '50%' }}>
                        <Typography>Followup Date :</Typography>
                    </Stack>
                    <Stack direction='row' width='100%'>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            {/* <DemoItem label="Start Date"> */}
                            <DatePicker fullWidth defaultValue={dayjs('2022-04-17')} sx={{ width: '100%' }} />
                            {/* </DemoItem> */}
                        </LocalizationProvider>
                        <Button variant="contained" endIcon={<TelegramIcon />} sx={{ fontSize: '17px', ml: '25px', height: '50px', width: '22%',px: '20px' }}>Clear</Button>
                    </Stack>
                </Stack>
                <Stack direction='row' alignItems='center'>
                    <Stack sx={{ width: '50%' }}>
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
                    <Button variant="contained" endIcon={<TelegramIcon />} sx={{ fontSize: '15px', height: '50px', width: '15%' }}>
                        Update</Button>
                </Stack>
            </Stack>
        </Box>
    )
}

export default CustomerFollowUp
