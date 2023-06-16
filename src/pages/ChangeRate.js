import React, { useState } from 'react';
import { FormControl, TextField, Button, Box, Stack } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import TelegramIcon from '@mui/icons-material/Telegram';

const ChangeRate = () => {
  return (
    <>
      <Stack direction={{ xs: 'column', sm: 'row' }} justifyContent='space-between'>
        <h2>BCN Basic RYP</h2>
        <Button
          variant="outlined"
          onClick={() => handleDelete(props.id)}
          startIcon={<DeleteIcon />}
          sx={{
            ml: 'auto',
            width: 'fit-content',
            height: 'fit-content',
            borderColor: '#ff3333',
            color: '#ff3333',
            '&:hover': {
              backgroundColor: '#ff3333',
              color: '#fff',
              borderColor: '#fff',
            },
          }}
        >
          Delete
        </Button>
      </Stack>
      <div
        style={{ backgroundColor: '#F9FAFB', height: '100%', width: '100%', paddingRight: '10px', paddingLeft: '10px' }}
      >
        <Box
          sx={{
            width: '100%',
            borderRadius: '10px',
            backgroundColor: 'white',
            border: '1px solid rgba(0,0,0,.125)',
            mt: '12px'
          }}
        >
          <div
            style={{
              fontWeight: 'bold',
              backgroundColor: 'rgba(145, 158, 171, 0.12)',
              borderRadius: '10px 10px 0 0',
              padding: '0.75rem 1.25rem',
              borderBottom: '1px solid rgba(0,0,0,.125)',
            }}
          >
            Change Rate
          </div>
          <div style={{ padding: '20px' }}>
            <FormControl fullWidth sx={{ display: 'flex', flexDirection: 'row', gap: '12px' }}>
              <TextField
                id="outlined-basic"
                label="New Rate"
                variant="outlined"
                sx={{ bgcolor: '#F8F8F8', width: '100%' }}
                autoComplete="off"
              />
            </FormControl>

            <Button
              variant="contained"
              startIcon={<TelegramIcon />}
              sx={{
                marginTop: '20px',
              }}
            >
              Update
            </Button>
          </div>
        </Box>
      </div>
    </>
  );
};

export default ChangeRate;
