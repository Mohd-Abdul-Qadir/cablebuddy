import React, { useState } from 'react'
import { Box, Stack, Typography, TextField, Switch, MenuItem, Button, FormControl, FormControlLabel, Radio, RadioGroup, InputAdornment, FormLabel, InputLabel, Divider } from '@mui/material'
import { styled } from '@mui/material/styles';
import TelegramIcon from '@mui/icons-material/Telegram';



const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(12px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
  },
}));

const BillingReminder = () => {
  return (
    <Stack gap={5}>
      <Stack direction='column' justifyContent='center' alignItems='center' gap='2rem' sx={{ width: '100%', border: '1px solid #D8D8D8', bgcolor: 'white', borderRadius: '10px' }}>
        <Typography sx={{ px: '2%', py: '1%', fontWeight: '600', fontSize: '16px', width: '100%', borderRadius: '10px 10px 0 0', borderBottom: '1px solid #D8D8D8', bgcolor: 'rgba(145, 158, 171, 0.12)' }}>Message Preference
        </Typography>
        <Stack gap='1rem' sx={{ width: '100%', padding: '1rem' }}>
          <Stack direction='row' alignItems='center'>
            <Typography sx={{ width: '50%' }}>Prefered mobile number for message</Typography>
            <TextField variant="outlined" fullWidth
              type='number'
              autoComplete="off"
              // name='name'
              // value={inputData.name}
              // onChange={handleInputs}
              sx={{ bgcolor: 'white', width: '50%' }}
            />
          </Stack>
          <Stack direction='row' alignItems='center'>
            <Typography sx={{ width: '50%' }}>Preferred name for message</Typography>
            <TextField variant="outlined" fullWidth
              autoComplete="off"
              // name='name'
              // value={inputData.name}
              // onChange={handleInputs}
              sx={{ bgcolor: 'white', width: '50%' }}
            />
          </Stack>
        </Stack>
      </Stack>
      <Stack direction='column' justifyContent='center' alignItems='center' gap='2rem' sx={{ width: '100%', border: '1px solid #D8D8D8', bgcolor: 'white', borderRadius: '10px' }}>
        <Typography sx={{ px: '2%', py: '1%', fontWeight: '600', fontSize: '16px', width: '100%', borderRadius: '10px 10px 0 0', borderBottom: '1px solid #D8D8D8', bgcolor: 'rgba(145, 158, 171, 0.12)' }}>Message Detail
        </Typography>
        <Stack gap='22px' sx={{ width: '100%', padding: '1rem' }}>
          <Stack gap='1rem'>
            <Typography>Enter your customised Message :</Typography>
            <TextField
              multiline
              placeholder='Message'
              rows={3}
              // name='remark'
              // value={inputData.remark}
              // onChange={handleInputs}
              sx={{ bgcolor: 'white' }}
            />
          </Stack>
          <Stack gap='1rem'>
            <Typography>Message Type</Typography>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography sx={{ fontSize: '14px' }}>Payment</Typography>
              <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
              <Typography sx={{ fontSize: '14px' }}>Balance</Typography>
            </Stack>
          </Stack>
          <Stack gap='20px'>
            <Typography>Demo Message :</Typography>
            <Typography sx={{ fontSize: '14px' }}>Hi Jagdish Sharma Your payment of Rs. 100 has been received on 10-Oct-17 Thanks -</Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack direction='column' justifyContent='center' alignItems='center' gap='2rem' sx={{ width: '100%', border: '1px solid #D8D8D8', bgcolor: 'white', borderRadius: '10px' }}>
        <Typography sx={{ px: '2%', py: '1%', fontWeight: '600', fontSize: '16px', width: '100%', borderRadius: '10px 10px 0 0', borderBottom: '1px solid #D8D8D8', bgcolor: 'rgba(145, 158, 171, 0.12)' }}>Bill Message
        </Typography>
        <Stack gap='1rem' sx={{ width: '100%', padding: '1rem' }}>
          <Stack gap='1rem'>
            <Typography>Message :</Typography>
            <TextField
              multiline
              placeholder='Message'
              rows={3}
              // name='remark'
              // value={inputData.remark}
              // onChange={handleInputs}
              sx={{ bgcolor: 'white' }}
            />
          </Stack>
        </Stack>
      </Stack>
      <Stack direction='column' justifyContent='center' alignItems='center' gap='2rem' sx={{ width: '100%', border: '1px solid #D8D8D8', bgcolor: 'white', borderRadius: '10px' }}>
        <Typography sx={{ px: '2%', py: '1%', fontWeight: '600', fontSize: '16px', width: '100%', borderRadius: '10px 10px 0 0', borderBottom: '1px solid #D8D8D8', bgcolor: 'rgba(145, 158, 171, 0.12)' }}>Bill Number Prefix
        </Typography>
        <Stack gap='1rem' sx={{ width: '100%', padding: '1rem' }}>
          <Stack gap='1rem'>
            <Typography sx={{ width: '50%' }}>Prefix :</Typography>
            <TextField variant="outlined" fullWidth
              placeholder='Enter Prefix'
              autoComplete="off"
              // name='name'
              // value={inputData.name}
              // onChange={handleInputs}
              sx={{ bgcolor: 'white' }}
            />
          </Stack>
        </Stack>
      </Stack>
      <Stack mt='10px'>
        <Button variant="contained" endIcon={<TelegramIcon />} sx={{ width: 'fit-content', mx: 'auto', padding: '12px' }}>Update</Button>
      </Stack>
    </Stack>
  )
}

export default BillingReminder
