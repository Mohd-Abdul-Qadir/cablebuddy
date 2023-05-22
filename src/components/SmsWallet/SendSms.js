import React, { useState } from 'react'
import { Box, Typography, Button, Stack, InputAdornment, IconButton, TextField, Pagination } from '@mui/material'
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ChatIcon from '@mui/icons-material/Chat';


const SendSms = () => {
    return (
        <Stack>
            <Stack direction='row' gap='3%' sx={{ padding: '1rem' }}>
                <TextField sx={{ width: '100%' }}
                    value='Select Message Template'
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <ArrowDropUpIcon />
                                    <ArrowDropDownIcon />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                <Stack direction='column' gap='10px' sx={{ width: '100%' }}>
                    <TextField sx={{ bgcolor: '#F8F8F8' }}
                        id="outlined-multiline-flexible"
                        placeholder='Message'
                        multiline
                        rows={4}
                    />
                    <Typography sx={{ fontWeight: '400', fontSize: '12px' }}>Total Characters : <Typography component='span' sx={{ fontWeight: '500', fontSize: '12px', color: '#F7941D' }}>0</Typography></Typography>
                    <Typography sx={{ fontWeight: '400', fontSize: '12px' }}>Credit Used : <Typography component='span' sx={{ fontWeight: '500', fontSize: '12px', color: '#F7941D' }}>1</Typography></Typography>
                </Stack>
            </Stack>
            <Stack direction='row' alignItems='center' padding='1rem' gap='1rem' justifyContent='end'>
                <Typography sx={{ fontWeight: '400', fontSize: '12px' }}>Total sms credit used : <Typography component='span' sx={{ fontWeight: '500', fontSize: '12px', color: '#F7941D' }}>1</Typography></Typography>
                <Button variant='outlined' sx={{
                    textTransform: 'capitalize', gap: '5px', bgcolor: '#63C78B', color: 'white', border: '1px solid #63F09B', '&:hover': { backgroundColor: '#63C78B', border: '1px solid #63F09B' }
                }}>Send Message<ChatIcon /></Button>
            </Stack>
        </Stack>
    )
}

export default SendSms
