import React from 'react'
import { Box, Stack, Typography, TextField, Select, MenuItem, Button, FormControl, FormControlLabel, Radio, RadioGroup, InputAdornment, FormLabel, InputLabel, Divider } from '@mui/material'
import TelegramIcon from '@mui/icons-material/Telegram';

const BillingArea = [
    {
        value: 'Elaprolu APSFL',
    },
    {
        value: 'Elaprolu SSLC',
    },
    {
        value: 'Elaprolu V DIGITAL',
    },
    {
        value: 'GANGINENI ',
    },
    {
        value: 'GANGINENI SSLC',
    },
    {
        value: 'GANGINENI V DIGITAL',
    },
    {
        value: 'GOLLAPUDI',
    },
];

const Months = [
    {
        value: 'Every 1 Month',
    },
    {
        value: 'Every 2 Month',
    },
    {
        value: 'Every 3 Month',
    },
    {
        value: 'Every 4 Month',
    },
    {
        value: 'Every 5 Month',
    },
    {
        value: 'Every 6 Month',
    },
    {
        value: 'Every 7 Month',
    },
    {
        value: 'Every 8 Month',
    },
    {
        value: 'Every 9 Month',
    },
    {
        value: 'Every 10 Month',
    },
    {
        value: 'Every 11 Month',
    },
    {
        value: 'Every 12 Month',
    },
];

const CustomerEdit = () => {
    return (
        <Stack gap='3rem' sx={{ width: '55vw' }}>
            <Stack direction='column' justifyContent='center' alignItems='center' gap='2rem' sx={{ width: '100%', border: '1px solid #D8D8D8', bgcolor: 'white', borderRadius: '10px' }}>
                <Typography sx={{ px: '2%', py: '1%', fontWeight: '600', fontSize: '16px', width: '100%', borderRadius: '10px 10px 0 0', borderBottom: '1px solid #D8D8D8', bgcolor: 'rgba(145, 158, 171, 0.12)' }}>General Detail
                </Typography>
                <Stack gap='1rem' fullWidth sx={{ width: '100%', padding: '1rem' }}>
                    <Stack direction='row' alignItems='center'>
                        <Typography sx={{ width: '50%' }}>Customer Name* :</Typography>
                        <TextField
                            fullWidth
                            id="outlined-basic"
                            variant="outlined"
                            sx={{ bgcolor: '#F8F8F8', width: '100%' }}
                            autoComplete="off"
                        />
                    </Stack>
                    <Stack direction='row' alignItems='center'>
                        <Typography sx={{ width: '50%' }}>Customer Billing Name* :</Typography>
                        <TextField
                            fullWidth
                            id="outlined-basic"
                            variant="outlined"
                            sx={{ bgcolor: '#F8F8F8', width: '100%' }}
                            autoComplete="off"
                        />
                    </Stack>
                    <Stack direction='row' alignItems='center'>
                        <Typography sx={{ width: '50%' }}>Billing Area :</Typography>
                        <TextField
                            fullWidth
                            label='Billing Area'
                            id="outlined-select-currency"
                            select
                            sx={{ bgcolor: '#F8F8F8' }}
                        >
                            {BillingArea.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.value}
                                </MenuItem>
                            ))}
                        </TextField>
                    </Stack>
                    <Stack direction='row' alignItems='center'>
                        <Typography sx={{ width: '50%' }}>Billing No :</Typography>
                        <TextField type='number'
                            fullWidth
                            id="outlined-basic"
                            variant="outlined"
                            sx={{ bgcolor: '#F8F8F8', width: '100%' }}
                            autoComplete="off"
                        />
                    </Stack>
                    <Stack direction='row' alignItems='center'>
                        <Typography sx={{ width: '50%' }}>GST No :</Typography>
                        <TextField type='number'
                            fullWidth
                            id="outlined-basic"
                            variant="outlined"
                            sx={{ bgcolor: '#F8F8F8', width: '100%' }}
                            autoComplete="off"
                        />
                    </Stack>
                    <Stack direction='row' alignItems='center'>
                        <Typography sx={{ width: '50%' }}>Mobile Number 1 :</Typography>
                        <TextField type='number'
                            fullWidth
                            id="outlined-basic"
                            variant="outlined"
                            sx={{ bgcolor: '#F8F8F8', width: '100%' }}
                            autoComplete="off"
                        />
                    </Stack>
                    <Stack direction='row' alignItems='center'>
                        <Typography sx={{ width: '50%' }}>Mobile Number 2 :</Typography>
                        <TextField type='number'
                            fullWidth
                            id="outlined-basic"
                            variant="outlined"
                            sx={{ bgcolor: '#F8F8F8', width: '100%' }}
                            autoComplete="off"
                        />
                    </Stack>
                    <Stack direction='row' alignItems='center'>
                        <Typography sx={{ width: '50%' }}>Email :</Typography>
                        <TextField type='email'
                            fullWidth
                            id="outlined-basic"
                            variant="outlined"
                            sx={{ bgcolor: '#F8F8F8', width: '100%' }}
                            autoComplete="off"
                        />
                    </Stack>
                    <Stack direction='row' alignItems='center'>
                        <Typography sx={{ width: '50%' }}>Address :</Typography>
                        <TextField
                            fullWidth
                            id="outlined-multiline-flexible"
                            placeholder="Address"
                            multiline
                            rows={4}
                            sx={{ bgcolor: '#F8F8F8' }}
                        />
                    </Stack>
                    <Stack direction='row' alignItems='center'>
                        <Typography sx={{ width: '50%' }}>Security Deposit :</Typography>
                        <TextField
                            fullWidth
                            id="outlined-basic"
                            variant="outlined"
                            sx={{ bgcolor: '#F8F8F8', width: '100%' }}
                            autoComplete="off"
                        />
                    </Stack>
                    <Stack direction='row' alignItems='center'>
                        <Typography sx={{ width: '50%' }}>Customer Code :</Typography>
                        <TextField
                            fullWidth
                            id="outlined-basic"
                            variant="outlined"
                            sx={{ bgcolor: '#F8F8F8', width: '100%' }}
                            autoComplete="off"
                        />
                    </Stack>
                    <Stack direction='row' alignItems='center'>
                        <Typography sx={{ width: '50%' }}>Remark :</Typography>
                        <TextField
                            fullWidth
                            id="outlined-multiline-flexible"
                            multiline
                            rows={4}
                            sx={{ bgcolor: '#F8F8F8' }}
                        />
                    </Stack>
                </Stack>
            </Stack>
            <Stack direction='column' justifyContent='center' alignItems='center' gap='2rem' sx={{ width: '100%', border: '1px solid #D8D8D8', bgcolor: 'white', borderRadius: '10px' }}>
                <Typography sx={{ px: '2%', py: '1%', fontWeight: '600', fontSize: '16px', width: '100%', borderRadius: '10px 10px 0 0', borderBottom: '1px solid #D8D8D8', bgcolor: 'rgba(145, 158, 171, 0.12)' }}>Billing Detail
                </Typography>
                <Stack direction='row' gap='1rem' fullWidth sx={{ width: '100%', padding: '1rem' }}>
                    <Stack sx={{ border: '1px solid #D8D8D8', borderRadius: '10px', padding: '1rem', width: '50%' }}>
                        <Stack fullWidth gap='2rem'>
                            <FormControl>
                                <FormLabel id="demo" sx={{ color: 'black', fontWeight: '600', fontSize: '20px' }}>Bill Duration</FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo"
                                    defaultValue="female"
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel value="endofeverymonth" control={<Radio />} label="End of every month" />
                                    <FormControlLabel value="days" control={<Radio />} label="Days" />
                                    <FormControlLabel value="month" control={<Radio />} label="Month" />
                                </RadioGroup>
                            </FormControl>
                            <TextField
                                id="outlined-select-currency"
                                select
                                defaultValue="Every 1 Month"
                            >
                                {Months.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.value}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Stack>
                    </Stack>
                    <Stack sx={{ border: '1px solid #D8D8D8', borderRadius: '10px', padding: '1rem', width: '50%' }}>
                        <Stack fullWidth gap='1rem'>
                            <FormControl>
                                <FormLabel sx={{ color: 'black', fontWeight: '600', fontSize: '20px' }}>Bill Type</FormLabel>
                                <RadioGroup
                                    defaultValue="female"
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel value="postpaid" control={<Radio />} label="Postpaid" />
                                    <FormControlLabel value="prepaid" control={<Radio />} label="Prepaid" />
                                </RadioGroup>
                            </FormControl>
                        </Stack>
                    </Stack>
                    <Stack sx={{ border: '1px solid #D8D8D8', borderRadius: '10px', padding: '1rem', width: '50%' }}>
                        <Stack fullWidth gap='1rem'>
                            <FormControl>
                                <FormLabel sx={{ color: 'black', fontWeight: '600', fontSize: '20px' }}>GST Type</FormLabel>
                                <RadioGroup
                                    defaultValue="female"
                                    name="radio-buttons-group"
                                >
                                    <FormControlLabel value="noGST" control={<Radio />} label="No GST" />
                                    <FormControlLabel value="CGST+SGST" control={<Radio />} label="CGST + SGST - Customer from same state" />
                                    <FormControlLabel value="IGST" control={<Radio />} label="IGST - Customer from different state" />
                                </RadioGroup>
                            </FormControl>
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>
            <Stack direction='row' justifyContent='center' mt='15px'>
                <Button variant="contained" endIcon={<TelegramIcon />} sx={{ fontSize: '15px', height: '50px', width: '15%' }}>
                    Update
                </Button>
            </Stack>
        </Stack>
    )
}

export default CustomerEdit
