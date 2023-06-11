import React, { useState } from 'react'
import { Box, Stack, Typography, TextField, Select, MenuItem, Button, FormControl, FormControlLabel, Radio, RadioGroup, InputAdornment, FormLabel, InputLabel, Divider } from '@mui/material'
import TelegramIcon from '@mui/icons-material/Telegram';


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

const AgentBillingPreference = () => {

    return (
        <>
            <Stack direction='column' justifyContent='center' alignItems='center' gap='2rem' sx={{ width: '100%', border: '1px solid #D8D8D8', bgcolor: 'white', borderRadius: '10px' }}>
                <Typography sx={{ px: '2%', py: '1%', fontWeight: '600', fontSize: '16px', width: '100%', borderRadius: '10px 10px 0 0', borderBottom: '1px solid #D8D8D8', bgcolor: 'rgba(145, 158, 171, 0.12)' }}>Additional Details
                </Typography>
                <Stack direction='row' gap='1rem' fullWidth sx={{ width: '100%', padding: '1rem' }}>
                    <Stack sx={{ border: '1px solid #D8D8D8', borderRadius: '10px', padding: '1rem', width: '50%' }}>
                        <Stack fullWidth gap='2rem'>
                            <FormControl>
                                <FormLabel id="demo" sx={{ color: 'black', fontWeight: '600', fontSize: '20px' }}>Bill Duration</FormLabel>
                                <RadioGroup
                                    aria-labelledby="demo"
                                    defaultValue="endofeverymonth"
                                // name="billDurationRadio"
                                // value={inputData.billDurationRadio}
                                // onChange={handleInputs}
                                >
                                    <FormControlLabel value="endofeverymonth" control={<Radio />} label="End of every month" />
                                    <FormControlLabel value="days" control={<Radio />} label="Days" />
                                    <FormControlLabel value="month" control={<Radio />} label="Month" />
                                </RadioGroup>
                            </FormControl>
                            <TextField select
                                id="outlined-select-currency"
                                defaultValue="Every 1 Month"
                            // name='billDurationSelect'
                            // value={inputData.billDurationSelect}
                            // onChange={handleInputs}

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
                                    defaultValue="postpaid"
                                // name="billTypeRadio"
                                // value={inputData.billTypeRadio}
                                // onChange={handleInputs}
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
                                    defaultValue="noGST"
                                // name="gstTypeRadio"
                                // value={inputData.gstTypeRadio}
                                // onChange={handleInputs}
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
            <Stack mt='3rem'>
                <Button variant="contained" endIcon={<TelegramIcon />} sx={{ width: 'fit-content', mx: 'auto', padding: '12px' }}>Update</Button>
            </Stack>
        </>
    )
}

export default AgentBillingPreference
