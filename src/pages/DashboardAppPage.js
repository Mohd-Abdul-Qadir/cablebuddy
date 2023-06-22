import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography, Box } from '@mui/material';
// components
import Iconify from '../components/iconify';
import { Icon } from '@iconify/react';
// sections
import { AppWidgetSummary } from '../sections/@dashboard/app';

import { useEffect, useState } from 'react';
// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const [balanceHistories, setBalanceHistories] = useState([]);
  const [totalTransactionAmount, setTotalTransactionAmount] = useState(0);
  const [balanceHistoriesOnline, setBalanceHistoriesOnline] = useState([balanceHistories.length - 1]);
  const [totalTransactionAmountOnline, setTotalTransactionAmountOnline] = useState(0);
  const [totalCustomer, setTotalCustomer] = useState('');

  // console.log(balanceHistoriesOnline?.remainingAmount, 'this is last element of reaming amount');

  const theme = useTheme();
  const navigate = useNavigate();

  const goToMonthlyCollection = () => {
    navigate('/dashboard/collection');
  };
  const goToTodaysCollection = () => {
    navigate('/dashboard/collection');
  };
  const goToPendingAmount = () => {
    navigate('/dashboard/customer');
  };
  const goToOnlineCollection = () => {
    navigate('/dashboard/collection');
  };
  const goToTodaysRenewals = () => {
    navigate('/dashboard/customer');
  };
  const goToUpcomingRenewals = () => {
    navigate('/dashboard/customer');
  };
  const goToExpiredRenewals = () => {
    navigate('/dashboard/customer');
  };
  const goToRechargedOrRenewed = () => {
    navigate('/dashboard/rechargeRenew');
  };
  const goToTotalCustomers = () => {
    navigate('/dashboard/customer');
  };
  const goToActiveCustomers = () => {
    navigate('/dashboard/customer');
  };
  const goToInactiveCustomers = () => {
    navigate('/dashboard/customer');
  };
  const goToNewCustomers = () => {
    navigate('/dashboard/customer');
  };
  const goToPendingComplaints = () => {
    navigate('/dashboard/complaints');
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('/api/user-dashboard', {
          method: 'GET',
          headers: { 'x-access-token': `${localStorage.getItem('accessToken')}`, 'Content-Type': 'application/json' },
        });
        const data = await response.json();
        // console.log(data, 'DASHBOARD DATA');
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  useEffect(() => {
    fetchBalanceHistory();
    fetchBalanceHistoryOnline();
    fetchTotalCustomer();
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

  const fetchTotalCustomer = async () => {
    try {
      const response = await fetch('/api/customer-totalcustomer');
      const data = await response.json();

      if (response.ok) {
        setTotalCustomer(data.totalCustomers);
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <Helmet>
        <title> BillBook </title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography sx={{ mb: 5, fontSize: '48px' }}>Dashboard</Typography>

        <Grid container gap={4}>
          <Grid container spacing={3}>
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              onClick={() => {
                goToMonthlyCollection();
              }}
              sx={{
                cursor: 'pointer',
                '&:hover': {
                  transform: 'scale(1.1)',
                  transitionDelay: '0.2s',
                  transitionDuration: '0.3s',
                  transitionTimingFunction: 'linear',
                },
              }}
            >
              <AppWidgetSummary
                title="Monthly Total Collection"
                total={totalTransactionAmount}
                icon={'ic:outline-currency-rupee'}
              />
            </Grid>

            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              onClick={() => {
                goToTodaysCollection();
              }}
              sx={{
                cursor: 'pointer',
                '&:hover': {
                  transform: 'scale(1.1)',
                  transitionDelay: '0.2s',
                  transitionDuration: '0.3s',
                  transitionTimingFunction: 'linear',
                },
              }}
            >
              <AppWidgetSummary
                title="Todays Collection"
                total={'0'}
                color="error"
                icon={'ic:outline-currency-rupee'}
              />
            </Grid>

            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              onClick={() => {
                goToPendingAmount();
              }}
              sx={{
                cursor: 'pointer',
                '&:hover': {
                  transform: 'scale(1.1)',
                  transitionDelay: '0.2s',
                  transitionDuration: '0.3s',
                  transitionTimingFunction: 'linear',
                },
              }}
            >
              <AppWidgetSummary
                title="Total Pending Amount"
                total={balanceHistories.remainingAmount}
                color="info"
                icon={'ic:outline-currency-rupee'}
              />
            </Grid>

            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              onClick={() => {
                goToOnlineCollection();
              }}
              sx={{
                cursor: 'pointer',
                '&:hover': {
                  transform: 'scale(1.1)',
                  transitionDelay: '0.2s',
                  transitionDuration: '0.3s',
                  transitionTimingFunction: 'linear',
                },
              }}
            >
              <AppWidgetSummary
                title="Monthly Online Collection"
                total={totalTransactionAmountOnline}
                color="warning"
                icon={'ic:outline-currency-rupee'}
              />
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              onClick={() => {
                goToTodaysRenewals();
              }}
              sx={{
                cursor: 'pointer',
                '&:hover': {
                  transform: 'scale(1.1)',
                  transitionDelay: '0.2s',
                  transitionDuration: '0.3s',
                  transitionTimingFunction: 'linear',
                },
              }}
            >
              {/* <AppWidgetSummary title="Todays Renewals" total={1} icon={'bi:router'} sx={{border: '1px solid black'}} /> */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'start', height: '122px', px: '5%', py: '18px', position: 'relative', borderRadius: '12px', border: '0.2px solid #A5A4A4' }}>
                <Typography sx={{ fontWeight: '400', fontSize: '15px' }}>Todays Renewals</Typography>
                <Typography sx={{ fontWeight: '600', fontSize: '20px' }}>5</Typography>
                <Box sx={{ position: 'absolute', bottom: 12, right: 12 }}>
                  <Icon icon="bi:router" width='40' />
                </Box>
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              onClick={() => {
                goToUpcomingRenewals();
              }}
              sx={{
                cursor: 'pointer',
                '&:hover': {
                  transform: 'scale(1.1)',
                  transitionDelay: '0.2s',
                  transitionDuration: '0.3s',
                  transitionTimingFunction: 'linear',
                },
              }}
            >
              {/* <AppWidgetSummary title="Upcoming Renewals" total={'0'}
                // color="error" 
                icon={'bi:router'} sx={{ border: '1px solid black' }} /> */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'start', height: '122px', px: '5%', py: '18px', position: 'relative', borderRadius: '12px', border: '0.2px solid #A5A4A4' }}>
                <Typography sx={{ fontWeight: '400', fontSize: '15px' }}>Upcoming Renewals</Typography>
                <Typography sx={{ fontWeight: '600', fontSize: '20px' }}>10</Typography>
                <Box sx={{ position: 'absolute', bottom: 12, right: 12 }}>
                  <Icon icon="bi:router" width='40' />
                </Box>
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              onClick={() => {
                goToExpiredRenewals();
              }}
              sx={{
                cursor: 'pointer',
                '&:hover': {
                  transform: 'scale(1.1)',
                  transitionDelay: '0.2s',
                  transitionDuration: '0.3s',
                  transitionTimingFunction: 'linear',
                },
              }}
            >
              {/* <AppWidgetSummary title="Expired Renewals" total={'0'}
                // color="info"
                icon={'bi:router'} sx={{ border: '1px solid black' }} /> */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'start', height: '122px', px: '5%', py: '18px', position: 'relative', borderRadius: '12px', border: '0.2px solid #A5A4A4' }}>
                <Typography sx={{ fontWeight: '400', fontSize: '15px' }}>Expired Renewals</Typography>
                <Typography sx={{ fontWeight: '600', fontSize: '20px' }}>15</Typography>
                <Box sx={{ position: 'absolute', bottom: 12, right: 12 }}>
                  <Icon icon="bi:router" width='40' />
                </Box>
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              onClick={() => {
                goToRechargedOrRenewed();
              }}
              sx={{
                cursor: 'pointer',
                '&:hover': {
                  transform: 'scale(1.1)',
                  transitionDelay: '0.2s',
                  transitionDuration: '0.3s',
                  transitionTimingFunction: 'linear',
                },
              }}
            >
              {/* <AppWidgetSummary title="Recharged / Renewed" total={'0'}
                // color="warning" 
                icon={'bi:router'} sx={{ border: '1px solid black' }} /> */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'start', height: '122px', px: '5%', py: '18px', position: 'relative', borderRadius: '12px', border: '0.2px solid #A5A4A4' }}>
                <Typography sx={{ fontWeight: '400', fontSize: '15px' }}>Recharged / Renewed</Typography>
                <Typography sx={{ fontWeight: '600', fontSize: '20px' }}>20</Typography>
                <Box sx={{ position: 'absolute', bottom: 12, right: 12 }}>
                  <Icon icon="bi:router" width='40' />
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              onClick={() => {
                goToTotalCustomers();
              }}
              sx={{
                cursor: 'pointer',
                '&:hover': {
                  transform: 'scale(1.1)',
                  transitionDelay: '0.2s',
                  transitionDuration: '0.3s',
                  transitionTimingFunction: 'linear',
                },
              }}
            >
              {/* <AppWidgetSummary title="Total Customers" total={totalCustomer} icon={'fa:group'} /> */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'start', height: '122px', px: '5%', py: '18px', position: 'relative', borderRadius: '12px', border: '0.2px solid #A5A4A4' }}>
                <Typography sx={{ fontWeight: '400', fontSize: '15px' }}>Total Customers</Typography>
                <Typography sx={{ fontWeight: '600', fontSize: '20px' }}>20</Typography>
                <Box sx={{ position: 'absolute', bottom: 12, right: 12 }}>
                  <Icon icon="akar-icons:person" width='40' />
                </Box>
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              onClick={() => {
                goToActiveCustomers();
              }}
              sx={{
                cursor: 'pointer',
                '&:hover': {
                  transform: 'scale(1.1)',
                  transitionDelay: '0.2s',
                  transitionDuration: '0.3s',
                  transitionTimingFunction: 'linear',
                },
              }}
            >
              {/* <AppWidgetSummary title="Total Active Customers" total={'0'}
                color="error"
                icon={'fa:group'} /> */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'start', height: '122px', px: '5%', py: '18px', position: 'relative', borderRadius: '12px', border: '0.2px solid #A5A4A4' }}>
                <Typography sx={{ fontWeight: '400', fontSize: '15px' }}>Total Active Customers</Typography>
                <Typography sx={{ fontWeight: '600', fontSize: '20px' }}>20</Typography>
                <Box sx={{ position: 'absolute', bottom: 12, right: 12 }}>
                  <Icon icon="akar-icons:person" width='40' />
                </Box>
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              onClick={() => {
                goToInactiveCustomers();
              }}
              sx={{
                cursor: 'pointer',
                '&:hover': {
                  transform: 'scale(1.1)',
                  transitionDelay: '0.2s',
                  transitionDuration: '0.3s',
                  transitionTimingFunction: 'linear',
                },
              }}
            >
              {/* <AppWidgetSummary title="Total Inactive Customers" total={'0'}
                color="info" 
                icon={'fa:group'} /> */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'start', height: '122px', px: '5%', py: '18px', position: 'relative', borderRadius: '12px', border: '0.2px solid #A5A4A4' }}>
                <Typography sx={{ fontWeight: '400', fontSize: '15px' }}>Total Inactive Customers</Typography>
                <Typography sx={{ fontWeight: '600', fontSize: '20px' }}>20</Typography>
                <Box sx={{ position: 'absolute', bottom: 12, right: 12 }}>
                  <Icon icon="akar-icons:person" width='40' />
                </Box>
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              onClick={() => {
                goToNewCustomers();
              }}
              sx={{
                cursor: 'pointer',
                '&:hover': {
                  transform: 'scale(1.1)',
                  transitionDelay: '0.2s',
                  transitionDuration: '0.3s',
                  transitionTimingFunction: 'linear',
                },
              }}
            >
              {/* <AppWidgetSummary title="This Month New Customers" total={1}
                color="warning"
                icon={'fa:group'} /> */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'start', height: '122px', px: '5%', py: '18px', position: 'relative', borderRadius: '12px', border: '0.2px solid #A5A4A4' }}>
                <Typography sx={{ fontWeight: '400', fontSize: '15px' }}>This Month New Customers</Typography>
                <Typography sx={{ fontWeight: '600', fontSize: '20px' }}>20</Typography>
                <Box sx={{ position: 'absolute', bottom: 12, right: 12 }}>
                  <Icon icon="akar-icons:person" width='40' />
                </Box>
              </Box>
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              onClick={() => {
                goToPendingComplaints();
              }}
              sx={{
                cursor: 'pointer',
                '&:hover': {
                  transform: 'scale(1.1)',
                  transitionDelay: '0.2s',
                  transitionDuration: '0.3s',
                  transitionTimingFunction: 'linear',
                },
              }}
            >
              {/* <AppWidgetSummary
                title="Total Pending Complaints"
                total={'0'}
                color="warning"
                icon={'fluent:chat-bubbles-question-20-filled'}
              /> */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'start', height: '122px', px: '5%', py: '18px', position: 'relative', borderRadius: '12px', border: '0.2px solid #A5A4A4' }}>
                <Typography sx={{ fontWeight: '400', fontSize: '15px' }}>This Month New Customers</Typography>
                <Typography sx={{ fontWeight: '600', fontSize: '20px' }}>20</Typography>
                <Box sx={{ position: 'absolute', bottom: 12, right: 12 }}>
                  <Icon icon="fluent:chat-bubbles-question-20-filled" width='40' />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
