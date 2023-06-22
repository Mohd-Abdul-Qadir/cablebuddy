import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Stack, Paper, Autocomplete, TextField } from '@mui/material';
import SupportAgentOutlinedIcon from '@mui/icons-material/SupportAgentOutlined';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const AgentCard = (props) => {
  const [total, setTotal] = useState();
  const agent = props.agents;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/total-agents', {
          headers: { 'x-access-token': `${localStorage.getItem('accessToken')}`, 'Content-Type': 'application/json' },
        });
        const data = await response.json();
        setTotal(data.totalAgents);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <Stack direction="column" justifyContent="center" alignItems="center" width="100%" marginBottom="20px">
        <Stack sx={{ borderRadius: '10px', width: '100%', gap: '20px' }}>
          <Stack direction={{ xs: 'column', sm: 'row' }} gap="2%" rowGap='10px'>
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
              <Typography sx={{ fontWeight: '500', fontSize: '20px', color: '#0C3547' }}>{total}</Typography>
              <Typography>Agent Allowed</Typography>
              <SupportAgentOutlinedIcon
                sx={{ position: 'absolute', right: 10, top: 30, fontSize: '60px', color: '#0C3547' }}
              />
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
              <Typography sx={{ fontWeight: '500', fontSize: '20px', color: '#0C3547' }}>{total}</Typography>
              <Typography>Agent Used</Typography>
              <SupportAgentOutlinedIcon
                sx={{ position: 'absolute', right: 10, top: 30, fontSize: '60px', color: '#0C3547' }}
              />
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
              }}
            >
              <Typography sx={{ fontWeight: '500', fontSize: '20px' }}>Get Agents</Typography>
              <AddCircleOutlinedIcon sx={{ fontSize: '60px' }} />
            </Paper>
          </Stack>
          {/* <Stack sx={{ border: '1px solid #D8D8D8', borderRadius: '10px' }}>
            <Box
              sx={{ bgcolor: '#F5F5F5', border: '1px solid #D8D8D8', padding: '14px', borderRadius: '10px 10px 0 0' }}
            >
              <Typography sx={{ fontWeight: '600', fontSize: '16px' }}>Filters And Option</Typography>
            </Box>
            <Stack direction="row" justifyContent="space-between" gap="2rem" px="1rem" py="20px">
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
                <InputBase
                  sx={{ ml: 2, flex: 1 }}
                  placeholder="9720940484"
                  inputProps={{ 'aria-label': 'search google maps' }}
                />
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
          </Stack> */}
        </Stack>
      </Stack>
    </Box>
  );
};

export default AgentCard;
