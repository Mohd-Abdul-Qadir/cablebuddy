import React, { useState } from 'react';
import { Box, Typography, Button, Stack, Link } from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';

const CompaniesContent = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Box sx={{ width: '100%', px: '20px' }}>
        <Box>
          <Typography sx={{ color: '#0C3547', fontWeight: '400', fontSize: '48px' }}>Companies</Typography>
          <Box sx={{ display: 'flex', gap: '1rem' }}>
            <Button
              variant="outlined"
              startIcon={<BusinessIcon />}
              sx={{ textTransform: 'capitalize', color: '#0C3547', border: '1px solid #0C3547' }}
            >
              Add new companies
            </Button>
          </Box>
        </Box>
      </Box>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        padding="1rem"
        width="100%"
        gap="2rem"
        mt="20px"
      >
        <Stack sx={{ borderRadius: '10px', width: '100%', gap: '20px' }}>
          <Stack direction={{ xs: 'column', sm: 'row' }} gap="2%" rowGap='12px'>
            <Paper
              elevation={4}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                height: '126px',
                padding: '20px',
                flex: 1,
                bgcolor: 'white',
                borderRadius: '8px',
              }}
            >
              <Typography sx={{ fontWeight: '500', fontSize: '20px', color: '#0C3547' }}>0</Typography>
              <Typography>Companies Allowed</Typography>
              <BusinessIcon sx={{ position: 'absolute', right: 10, top: 30, fontSize: '60px', color: '#0C3547' }} />
            </Paper>
            <Paper
              elevation={4}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                height: '126px',
                padding: '20px',
                flex: 1,
                bgcolor: 'white',
                borderRadius: '8px',
              }}
            >
              <Typography sx={{ fontWeight: '500', fontSize: '20px', color: '#0C3547' }}>0</Typography>
              <Typography>Companies Used</Typography>
              <BusinessIcon sx={{ position: 'absolute', right: 10, top: 30, fontSize: '60px', color: '#0C3547' }} />
            </Paper>
            <Paper
              elevation={4}
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                position: 'relative',
                height: '126px',
                padding: '20px',
                flex: 1,
                bgcolor: 'rgb(12, 53, 71)',
                color: 'white',
                borderRadius: '8px',
                cursor: 'pointer',
                '&:hover': { bgcolor: '#0C3547' },
              }}
            >
              <Typography sx={{ fontWeight: '500', fontSize: '20px' }}>Get Companies</Typography>
              <AddCircleOutlinedIcon sx={{ fontSize: '60px' }} />
            </Paper>
          </Stack>
        </Stack>
        <Stack sx={{ border: '1px solid #D8D8D8', boxShadow: '3px 3px 8px #D8D8D8', borderRadius: '10px', bgcolor: 'white', width: '100%' }}>
          <Box sx={{ bgcolor: '#F5F5F5', border: '1px solid #D8D8D8', padding: '14px', borderRadius: '10px 10px 0 0' }}>
            <Typography sx={{ fontWeight: '600', fontSize: '16px' }}>Filters And Option</Typography>
          </Box>
          <Stack padding="1rem" gap="10px">
            <Stack direction="row" justifyContent="space-between" gap="2rem" px="5px">
              <Box
                sx={{
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  width: '100%',
                  bgcolor: '#F8F8F8',
                  border: '1px solid #D8D8D8',
                }}
              >
                <InputBase type="number" sx={{ ml: 2, flex: 1 }} placeholder="9720940484" />
                <IconButton
                  type="button"
                  sx={{
                    height: 'fit-content',
                    px: '18px',
                    color: 'white',
                    bgcolor: '#2065D1',
                    borderRadius: '2px',
                    '&:hover': { bgcolor: '#0C3547' },
                  }}
                  aria-label="search"
                >
                  <SearchIcon />
                </IconButton>
              </Box>
            </Stack>
          </Stack>
        </Stack>
        <Paper
          elevation={3}
          sx={{ border: '1px solid #D8D8D8', bgcolor: 'white', width: '100%', padding: '5px', borderRadius: '3px' }}
        >
          <Typography sx={{ fontWeight: '400', fontSize: '16px', textAlign: 'center' }}>
            You have no collection companies :<Link sx={{ display: 'inline-block', color: '#F7941D' }}>click here</Link>{' '}
            to add companys
          </Typography>
        </Paper>
      </Stack>
    </Box>
  );
};

export default CompaniesContent;
