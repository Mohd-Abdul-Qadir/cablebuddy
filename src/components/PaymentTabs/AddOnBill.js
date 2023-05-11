import React from 'react';
import { Box, Typography, Stack, Button, TextField, InputAdornment } from '@mui/material';
import { Telegram } from '@mui/icons-material';

const AddOnBill = () => {
  return (
    <Box>
      <Stack mb="1rem">
        <Typography>
          <b>Add On Bill</b>
        </Typography>
      </Stack>
      <Stack direction="row" gap="1rem" padding="1rem" sx={{ width: '100%' }}>
        <Stack sx={{ border: '1px solid #D8D8D8', borderRadius: '10px', width: '220px' }}>
          <Typography
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              py: '4%',
              fontSize: '14px',
              width: '100%',
              height: '40%',
              borderRadius: '10px 10px 0 0',
              borderBottom: '1px solid #D8D8D8',
            }}
          >
            <b>Current Balance :</b>
          </Typography>
          <Typography sx={{ textAlign: 'center', py: '1rem', fontWeight: 600 }}>
            ₹<span>0</span>
          </Typography>
        </Stack>
        <Stack
          sx={{
            border: '1px solid #D8D8D8',
            borderRadius: '10px',
            gap: '12px',
            width: '500px',
            py: '10px',
            px: '15px',
          }}
        >
          <Stack direction="row" alignItems="center">
            <Stack sx={{ width: '50%' }}>
              <Typography>Item Name</Typography>
            </Stack>
            <TextField fullWidth placeholder="Item" id="outlined-start-adornment" />
          </Stack>
          <Stack direction="row" alignItems="center">
            <Stack sx={{ width: '50%' }}>
              <Typography>Price</Typography>
            </Stack>
            <TextField
              fullWidth
              placeholder="Price"
              id="outlined-start-adornment"
              InputProps={{
                startAdornment: <InputAdornment position="start">₹</InputAdornment>,
              }}
            />
          </Stack>
          <Stack direction="row" alignItems="center" gap="2rem">
            <Stack sx={{ width: '28%' }}>
              <Typography>New Balance</Typography>
            </Stack>
            <Typography
              sx={{ bgcolor: '#072534', color: 'white', width: '55px', textAlign: 'center', borderRadius: '5px' }}
            >
              ₹ <span> 0</span>
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack sx={{ mx: 'auto', mt: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Button variant="contained" endIcon={<Telegram />} sx={{ width: 'fit-content' }}>
          Update
        </Button>
      </Stack>
    </Box>
  );
};

export default AddOnBill;
