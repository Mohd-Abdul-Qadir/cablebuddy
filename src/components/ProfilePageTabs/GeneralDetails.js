import React, { useState } from 'react'
import { Stack, Typography, TextField, Button } from '@mui/material'
import TelegramIcon from '@mui/icons-material/Telegram';


const GeneralDetails = () => {
  return (
    <Stack gap='20px'>
      <Stack>
        <Typography><b>Manage your Office Name, Address, Location and GST Details</b></Typography>
      </Stack>
      <Stack gap='20px' sx={{ width: '100%', padding: '1rem' }}>
        <Stack fullWidth direction='row' gap='20px'>
          <TextField variant="outlined" fullWidth
            type='number'
            label="Mobile Number"
            autoComplete="off"
            // name='name'
            // value={inputData.name}
            // onChange={handleInputs}
            sx={{ bgcolor: 'white' }}
          />
          <TextField
            fullWidth
            label="Owner Name"
            variant="outlined"
            autoComplete="off"
            // name='billingName'
            // value={inputData.billingName}
            // onChange={handleInputs}
            sx={{ bgcolor: 'white' }}
          />
        </Stack>
        <Stack fullWidth direction='row' gap='20px'>
          <TextField fullWidth variant="outlined"
            label="Agency Name"
            autoComplete="off"
            // name='billingNo'
            // value={inputData.billingNo}
            // onChange={handleInputs}
            sx={{ bgcolor: 'white' }}
          />
          <TextField fullWidth
            label="GST Number"
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
            label="State"
            variant="outlined"
            autoComplete="off"
            // name='mobileNo1'
            // value={inputData.mobileNo1}
            // onChange={handleInputs}
            sx={{ bgcolor: 'white' }}
          />
          <TextField fullWidth
            label="City"
            variant="outlined"
            autoComplete="off"
            // name='mobileNo2'
            // value={inputData.mobileNo2}
            // onChange={handleInputs}
            sx={{ bgcolor: 'white' }}
          />
        </Stack>
        <Stack fullWidth direction='row'>
          <TextField
            label="Address"
            multiline
            rows={4}
            // name='remark'
            // value={inputData.remark}
            // onChange={handleInputs}
            sx={{ bgcolor: 'white', width: '49%' }}
          />
        </Stack>
      </Stack>
      <Stack mt='10px'>
        <Button variant="contained" endIcon={<TelegramIcon />} sx={{ width: 'fit-content', mx: 'auto', padding: '10px' }}>Update</Button>
      </Stack>
    </Stack>
  )
}

export default GeneralDetails
