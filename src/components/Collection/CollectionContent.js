import { useState, useEffect } from 'react';
import { Box, Typography, Paper, Stack, styled, Button, TextField, MenuItem } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { SingleInputDateRangeField } from '@mui/x-date-pickers-pro/SingleInputDateRangeField';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import SummaryTable from './SummaryTable';
import OnlineTransaction from './OnlineTransaction';
import Marquee from 'react-fast-marquee';

const scrollingText = {
  textTransform: 'capitalize',
  fontWeight: '500',
  fontSize: { xs: '13px', sm: '18px' },
  color: '#c10d0d',
  animationName: 'example',
  animationDuration: '5s',
  animationTimingFunction: 'linear',
  animationDelay: '0s',
  animationIterationCount: 'infinite',
};

const StyledButton = styled(Button)(({ theme, selected }) => ({
  // fontSize: { xs: '10px', sm: '16px' },
  lineHeight: '14px',
  padding: '14px',
  color: selected ? '#fff' : theme.palette.text.primary,
  backgroundColor: selected ? '#2065D1' : 'transparent',
  '&:hover': {
    backgroundColor: selected ? '#2065D1' : theme.palette.action.hover,
  },
}));

const CollectionContent = () => {
  const [agent, setAgent] = useState([]);
  const [tabs, setTabs] = useState('Summary');
  const [balanceHistories, setBalanceHistories] = useState([]);
  const [totalTransactionAmount, setTotalTransactionAmount] = useState(0);
  const [balanceHistoriesOnline, setBalanceHistoriesOnline] = useState([]);
  const [totalTransactionAmountOnline, setTotalTransactionAmountOnline] = useState(0);
  //   const [agent, setAgents]=useState('')

  const handleClick = (tab) => {
    setTabs(tab);
  };

  //   const handleAgent = (event) => {
  //     setAgent(event.target.value);
  //     console.log(`e.target ${event.target.value}`);
  //   };

  const handleReset = () => {
    setAgent('');
  };

  useEffect(() => {
    fetchBalanceHistory();
  }, []);

  const fetchBalanceHistory = async () => {
    try {
      const response = await fetch('/api/total-paid'); // Replace with your API endpoint URL
      const data = await response.json();

      if (response.ok) {
        setBalanceHistories(data.balanceHistories);
        setTotalTransactionAmount(data.totalTransactionAmount);
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    fetchBalanceHistoryOnline();
  }, []);

  const fetchBalanceHistoryOnline = async () => {
    try {
      const response = await fetch('/api/total-paid-online');
      const data = await response.json();

      if (response.ok) {
        setBalanceHistoriesOnline(data.balanceHistories);
        setTotalTransactionAmountOnline(data.totalTransactionAmount);
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/agents', {
          headers: { 'x-access-token': `${localStorage.getItem('accessToken')}`, 'Content-Type': 'application/json' },
        });
        const data = await response.json();
        setAgent(data);
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
      <Box sx={{ width: '100%', px: '20px', background: '' }}>
        <Typography sx={{ color: '#0C3547', fontWeight: '400', fontSize: '48px' }}>Collection</Typography>
      </Box>
      <Stack direction="column" justifyContent="center" alignItems="center" padding="1rem" width="100%" gap="2rem">
        <Stack sx={{ width: '100%', bgcolor: 'white', border: '1px solid #D8D8D8', borderRadius: '12px' }}>
          <Box sx={{ border: '1px solid #D8D8D8', padding: '14px', borderRadius: '10px 10px 0 0' }}>
            <Marquee>
              <Typography sx={scrollingText}>Payment will reach to your bank account by 7pm to 7am</Typography>
            </Marquee>
          </Box>
          <Box sx={{ padding: '1rem' }}>
            <Stack sx={{ border: '1px solid #D8D8D8', borderRadius: '10px', bgcolor: 'white', width: '100%' }}>
              <Box
                sx={{ bgcolor: '#F5F5F5', border: '1px solid #D8D8D8', padding: '12px', borderRadius: '10px 10px 0 0' }}
              >
                <Typography sx={{ fontWeight: '500', fontSize: '16px' }}>Filters And Option</Typography>
              </Box>
              <Stack padding="1rem" gap="10px">
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <Box sx={{ overflow: 'hidden', width: '100%', mb: { xs: '10px', sm: '0px' } }}>
                    <DemoContainer components={['SingleInputDateRangeField']} sx={{ overflow: 'hidden', width: '100%' }}>
                      <DateRangePicker slots={{ field: SingleInputDateRangeField }} />
                    </DemoContainer>
                  </Box>
                </LocalizationProvider>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem', mt: '5px' }}>
                  <TextField
                    fullWidth
                    select
                    size='small'
                    value={agent}
                  // onChange={handleAgent}
                  >
                    <MenuItem value={'agent1'}>Agent 1</MenuItem>
                    <MenuItem value={'agent2'}>Agent 2</MenuItem>
                    <MenuItem value={'agent3'}>Agent 3</MenuItem>
                  </TextField>
                  <Button variant="contained" onClick={handleReset} sx={{ px: '5%', py: '8px' }}>
                    Reset
                  </Button>
                </Box>
              </Stack>
            </Stack>
          </Box>
        </Stack>
        <Paper
          elevation={3}
          sx={{
            display: 'flex',
            border: '1px solid #D8D8D8',
            gap: '10px',
            bgcolor: 'white',
            width: '100%',
            height: '38px',
            padding: 0,
            borderRadius: '8px',
          }}
        >
          <StyledButton
            variant={tabs === 'Summary' ? 'contained' : 'text'}
            selected={tabs === 'Summary'}
            startIcon={<SummarizeOutlinedIcon />}
            onClick={() => handleClick('Summary')}
          >
            Summary
          </StyledButton>
          <StyledButton
            variant={tabs === 'OnlineTransaction' ? 'contained' : 'text'}
            selected={tabs === 'OnlineTransaction'}
            startIcon={<PaymentsOutlinedIcon />}
            onClick={() => handleClick('OnlineTransaction')}
          >
            Online Transaction
          </StyledButton>
        </Paper>
        {tabs === 'Summary' ? (
          <Stack width="100%" direction="column" border="1px solid #D8D8D8" borderRadius="10px">
            <Box
              sx={{ border: '1px solid #D8D8D8', padding: '14px', borderRadius: '10px 10px 0 0', bgcolor: '#D8D8D8' }}
            >
              <Typography sx={{ textTransform: 'capitalize', fontWeight: '500', fontSize: '16px' }}>Summary</Typography>
            </Box>
            <Stack direction="column" padding="15px" gap="1rem">
              <Stack direction={{ xs: 'column', md: 'row' }} gap="24px">
                <Stack
                  justifyContent="center"
                  alignItems="center"
                  sx={{ height: '200px', flex: 1, border: '1px solid #D8D8D8', borderRadius: '8px' }}
                >
                  <Typography sx={{ fontWeight: '400', fontSize: { xs: '25px', sm: '30px', md: '40px' }, color: '#F7941D' }}>
                    ₹ {totalTransactionAmount}
                  </Typography>
                  <Typography sx={{ fontWeight: '400', fontSize: { xs: '25px', sm: '30px', md: '40px' }, color: '#0C3547' }}>Total Paid</Typography>
                </Stack>
                <Stack
                  justifyContent="center"
                  alignItems="center"
                  sx={{ height: '200px', flex: 1, border: '1px solid #D8D8D8', borderRadius: '8px' }}
                >
                  <Typography sx={{ fontWeight: '400', fontSize: { xs: '25px', sm: '30px', md: '40px' }, color: '#F7941D' }}>
                    ₹ {totalTransactionAmount}
                  </Typography>
                  <Typography sx={{ fontWeight: '400', fontSize: { xs: '25px', sm: '30px', md: '40px' }, color: '#0C3547' }}>Total Payments</Typography>
                </Stack>
              </Stack>
              <Stack sx={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
                <SummaryTable balanceHistories={balanceHistories} />
              </Stack>
            </Stack>
          </Stack>
        ) : (
          <Stack width="100%" direction="column" border="1px solid #D8D8D8" borderRadius="10px">
            <Box
              sx={{ border: '1px solid #D8D8D8', padding: '14px', borderRadius: '10px 10px 0 0', bgcolor: '#D8D8D8' }}
            >
              <Typography sx={{ textTransform: 'capitalize', fontWeight: '500', fontSize: '16px' }}>
                Online Transactions
              </Typography>
            </Box>
            <Stack direction="column" padding="1rem" gap="1rem">
              <Stack direction="row" gap="24px">
                <Stack
                  justifyContent="center"
                  alignItems="center"
                  sx={{ height: '200px', flex: 1, border: '1px solid #D8D8D8', borderRadius: '8px' }}
                >
                  <Typography sx={{ fontWeight: '400', fontSize: '40px', color: '#F7941D' }}>
                    ₹ {totalTransactionAmountOnline}
                  </Typography>
                  <Typography sx={{ fontWeight: '400', fontSize: '40px', color: '#0C3547' }}>Total Amount</Typography>
                </Stack>
                <Stack
                  justifyContent="center"
                  alignItems="center"
                  sx={{ height: '200px', flex: 1, border: '1px solid #D8D8D8', borderRadius: '8px' }}
                >
                  <Typography sx={{ fontWeight: '400', fontSize: '40px', color: '#F7941D' }}>
                    ₹ {totalTransactionAmountOnline}
                  </Typography>
                  <Typography sx={{ fontWeight: '400', fontSize: '40px', color: '#0C3547' }}>
                    Amount Transferred
                  </Typography>
                </Stack>
              </Stack>
              <Stack>
                <OnlineTransaction balanceHistoriesOnline={balanceHistoriesOnline} />
              </Stack>
            </Stack>
          </Stack>
        )}
      </Stack>
    </Box>
  );
};

export default CollectionContent;
