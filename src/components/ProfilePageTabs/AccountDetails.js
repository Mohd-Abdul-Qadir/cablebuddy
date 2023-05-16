import React, { useState } from 'react'
import { Stack, Typography, TextField, Button, Divider, Box } from '@mui/material'
import TelegramIcon from '@mui/icons-material/Telegram';


const AccountDetails = () => {
    return (
        <Stack gap='20px'>
            <Stack>
                <Typography><b>Manage your online banking account, Pan Card and Address proof details for Online Transactions</b></Typography>
            </Stack>
            <Stack gap='20px' sx={{ width: '100%', padding: '1rem' }}>
                <Stack fullWidth direction='row' gap='20px'>
                    <TextField variant="outlined"
                        label="Account Holder Name"
                        autoComplete="off"
                        // name='name'
                        // value={inputData.name}
                        // onChange={handleInputs}
                        sx={{ bgcolor: 'white', height: 'fit-content', width: '50%' }}
                    />
                    <Stack direction='row'>
                        <Typography>Account Status</Typography>
                        <Typography sx={{ color: 'green', bgcolor: '#bdddf6', border: '1px solid #c3e6cb', py: '5px', px: '5%' }}>Account Addition to Payment Gateway Successfull</Typography>
                    </Stack>
                </Stack>
                <Stack fullWidth direction='row' gap='20px'>
                    <TextField fullWidth variant="outlined"
                        type='number'
                        label="Account Number"
                        autoComplete="off"
                        // name='billingNo'
                        // value={inputData.billingNo}
                        // onChange={handleInputs}
                        sx={{ bgcolor: 'white' }}
                    />
                    <TextField fullWidth
                        label="Bank IFSC"
                        variant="outlined"
                        autoComplete="off"
                        // name='billingNo'
                        // value={inputData.billingNo}
                        // onChange={handleInputs}
                        sx={{ bgcolor: 'white' }}
                    />
                </Stack>
                <Stack fullWidth direction='row' gap='20px'>
                    <TextField fullWidth
                        label="Pan Card Number"
                        type='number'
                        variant="outlined"
                        autoComplete="off"
                        // name='mobileNo1'
                        // value={inputData.mobileNo1}
                        // onChange={handleInputs}
                        sx={{ bgcolor: 'white' }}
                    />
                    <TextField fullWidth
                        type='email'
                        label="Email Address"
                        variant="outlined"
                        autoComplete="off"
                        // name='mobileNo2'
                        // value={inputData.mobileNo2}
                        // onChange={handleInputs}
                        sx={{ bgcolor: 'white' }}
                    />
                </Stack>
            </Stack>
            <Divider />
            <Stack gap='1rem'>
                <Typography>Upload Pan Card</Typography>
                <Button variant="contained" component="label" sx={{ width: 'fit-content', padding: '12px' }}>
                    Choose File
                    <input hidden accept="image/*" multiple type="file" />
                </Button>
                <Box sx={{ border: '1px solid lightgrey', height: 'fit-content', padding: '10px', borderRadius: '5px' }} />
            </Stack>
            <Stack gap='1rem'>
                <Typography>Bank Passbook photo / Cancelled Cheque photo</Typography>
                <Button variant="contained" component="label" sx={{ width: 'fit-content', padding: '12px' }}>
                    Choose File
                    <input hidden accept="image/*" multiple type="file" />
                </Button>
                <Box sx={{ border: '1px solid lightgrey', height: 'fit-content', padding: '10px', borderRadius: '5px' }} />
            </Stack>
            <Stack mt='10px'>
                <Button variant="contained" endIcon={<TelegramIcon />} sx={{ width: 'fit-content', mx: 'auto', padding: '12px' }}>Update</Button>
            </Stack>
        </Stack>
    )
}

export default AccountDetails
