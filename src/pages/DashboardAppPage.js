import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import Iconify from '../components/iconify';
// sections
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from '../sections/@dashboard/app';

import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { useEffect } from 'react';
// ----------------------------------------------------------------------

export default function DashboardAppPage() {
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
        console.log(data, 'DASHBOARD DATA');
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

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
              <AppWidgetSummary title="Monthly Total Collection" total={503685} icon={'ic:outline-currency-rupee'} />
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
                total={2008}
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
                total={2765690}
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
                total={174990}
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
              <AppWidgetSummary title="Todays Renewals" total={1} icon={'bi:router'} />
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
              <AppWidgetSummary title="Upcoming Renewals" total={1697} color="error" icon={'bi:router'} />
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
              <AppWidgetSummary title="Expired Renewals" total={254} color="info" icon={'bi:router'} />
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
              <AppWidgetSummary title="Recharged / Renewed" total={673745} color="warning" icon={'bi:router'} />
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
              <AppWidgetSummary title="Total Customers" total={1} icon={'fa:group'} />
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
              <AppWidgetSummary title="Total Active Customers" total={1697} color="error" icon={'fa:group'} />
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
              <AppWidgetSummary title="Total Inactive Customers" total={254} color="info" icon={'fa:group'} />
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
              <AppWidgetSummary title="This Month New Customers" total={673745} color="warning" icon={'fa:group'} />
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
              <AppWidgetSummary
                title="Total Pending Complaints"
                total={36}
                color="warning"
                icon={'fluent:chat-bubbles-question-20-filled'}
              />
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
