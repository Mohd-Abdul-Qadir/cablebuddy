import React from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import TelegramIcon from '@mui/icons-material/Telegram';


const AdjustBalance = () => {
    return (
        <Box sx={{ width: '55vw' }}>
            <Stack mb='1rem'>
                <Typography><b>Adjust Balance</b></Typography>
            </Stack>
            <Stack alignItems='center' gap='1rem'>
                <Stack direction='row' alignItems='center' gap='1rem'>
                    <Stack justifyContent='start' sx={{ width: '50%' }}>
                        <Typography>New Balance</Typography>
                    </Stack>
                    <TextField
                        fullWidth
                        placeholder='New Balance'
                        id="outlined-start-adornment"
                        sx={{ width: '100%' }}
                    />
                </Stack>
                <TextField
                    fullWidth
                    id="outlined-multiline-flexible"
                    placeholder="Enter Reason of Change"
                    multiline
                    rows={3}
                />
            </Stack>
            <Stack sx={{ paddingY: '1rem' }}>
                <Button variant='contained' endIcon={<TelegramIcon />} sx={{ mx: 'auto' }}>Update</Button>
            </Stack>
        </Box>
    )
}

export default AdjustBalance
