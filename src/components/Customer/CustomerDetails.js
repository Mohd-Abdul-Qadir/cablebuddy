import React, { useState, useEffect } from 'react';
import { Box, Stack, Typography, Switch, Button, FormControlLabel } from '@mui/material';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Chip from '@mui/material/Chip';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import PaymentIcon from '@mui/icons-material/Payment';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import SubscriptionIcon from '@mui/icons-material/Subscriptions';
import BalanceIcon from '@mui/icons-material/Money';
import AddIcon from '@mui/icons-material/Add';
import ActiveIcon from '@mui/icons-material/CheckCircle';
import ChargeIcon from '@mui/icons-material/PriceChange';
import HistoryIcon from '@mui/icons-material/History';
import HardwareIcon from '@mui/icons-material/Computer';
import FollowUpIcon from '@mui/icons-material/AlternateEmail';
import EditIcon from '@mui/icons-material/Edit';
import styled from '@emotion/styled';
import Subscription from '../PaymentTabs/Subscription';
import Renew from '../PaymentTabs/Renew';
import AdjustBalance from '../PaymentTabs/AdjustBalance';
import AddOnBill from '../PaymentTabs/AddOnBill';
import ActiveInactive from '../PaymentTabs/ActiveInactive';
import AdditionalCharge from '../PaymentTabs/AdditionalCharge';
import BalanceHistory from '../PaymentTabs/BalanceHistory';
import CustomerFollowUp from '../PaymentTabs/CustomerFollowUp';
import CustomerEdit from '../PaymentTabs/CustomerEdit';
import CollectPayment from '../PaymentTabs/CollectPayment';
import HardwareDetails from '../PaymentTabs/HardwareDetails';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// .................................switchButton.................................//

const IOSSwitch = styled((props) => <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />)(
  ({ theme }) => ({
    width: 42,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 2,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
          opacity: 1,
          border: 0,
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          opacity: 0.5,
        },
      },
      '&.Mui-focusVisible .MuiSwitch-thumb': {
        color: '#33cf4d',
        border: '6px solid #fff',
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color: theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[600],
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
      },
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 22,
      height: 22,
    },
    '& .MuiSwitch-track': {
      borderRadius: 26 / 2,
      backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
      opacity: 1,
      transition: theme.transitions.create(['background-color'], {
        duration: 500,
      }),
    },
  })
);

// .................................tabsLogic...................................//
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

// ................................................Main Function CustomerDetails............................................//

const CustomerDetails = () => {
  const { id } = useParams();
  const [value, setValue] = useState(0);
  const [active, setActive] = useState(false);

  const [allData, setAllData] = useState([]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:4001/api/single-customer/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setAllData(data);
        })
        .catch((error) => console.error(error));
    }
  }, [id]);

  const handleDelete = (id) => {
    fetch(`http://localhost:4001/api/delete-customers/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === 'Customer deleted successfully') {
          // const updatedProducts = products.filter((props) => props.id !== id);

          toast.success('Customer deleted successfully');
          // setProducts(updatedProducts);
        } else {
          toast.error('Error deleting product');
        }
      })
      .catch((error) => {
        console.error(error);
        toast.error('Server error');
      });
  };

  return (
    <>
      <Box sx={{ padding: '1%', width: '100%', position: 'relative' }}>
        <Stack direction="row" alignItems="center" gap="1rem">
          <Typography variant="h2" sx={{ fontWeight: '300' }}>
            {allData.name}
          </Typography>
          <Chip label="Active" sx={{ bgcolor: '#28a745', color: 'white', height: '20px' }} />
          <Stack direction="row" alignItems="center" sx={{ position: 'absolute', right: 15, top: 0 }}>
            <FormControlLabel control={<IOSSwitch sx={{ m: 1 }} defaultChecked />} />
            <Button
              variant="outlined"
              startIcon={<DeleteIcon />}
              onClick={() => handleDelete(allData._id)}
              sx={{
                height: 'fit-content',
                borderColor: '#FF3333',
                color: '#FF3333',
                '&:hover': {
                  backgroundColor: '#FF3333',
                  color: '#fff',
                  borderColor: '#fff',
                },
              }}
            >
              Delete
            </Button>
          </Stack>
        </Stack>
        <Stack gap={5} mt="1rem">
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            gap="2rem"
            sx={{ width: '100%', border: '1px solid #D8D8D8', bgcolor: 'white', borderRadius: '10px' }}
          >
            <Typography
              sx={{
                px: '2%',
                py: '1%',
                fontWeight: '600',
                fontSize: '16px',
                width: '100%',
                borderRadius: '10px 10px 0 0',
                borderBottom: '1px solid #D8D8D8',
                bgcolor: 'rgba(145, 158, 171, 0.12)',
              }}
            >
              Additional Details
            </Typography>
            <Stack direction="row" gap="1rem" sx={{ width: '100%', padding: '1rem' }}>
              <Stack sx={{ border: '1px solid #D8D8D8', borderRadius: '10px', width: '50%' }}>
                <Typography
                  sx={{
                    py: '4%',
                    fontSize: '16px',
                    width: '100%',
                    borderRadius: '10px 10px 0 0',
                    borderBottom: '1px solid #D8D8D8',
                    textAlign: 'center',
                  }}
                >
                  Balance Amount :
                </Typography>
                <Typography sx={{ textAlign: 'center', py: '1rem', fontWeight: 600 }}>
                  ₹ {allData.balanceAmount}
                </Typography>
              </Stack>
              <Stack sx={{ border: '1px solid #D8D8D8', borderRadius: '10px', width: '50%' }}>
                <Typography
                  sx={{
                    py: '4%',
                    fontSize: '16px',
                    width: '100%',
                    borderRadius: '10px 10px 0 0',
                    borderBottom: '1px solid #D8D8D8',
                    textAlign: 'center',
                  }}
                >
                  Last Bill Date :
                </Typography>
                <Typography sx={{ textAlign: 'center', py: '1rem', fontWeight: 600 }}>31-May-2023</Typography>
              </Stack>
              <Stack sx={{ border: '1px solid #D8D8D8', borderRadius: '10px', width: '50%' }}>
                <Typography
                  sx={{
                    py: '4%',
                    fontSize: '16px',
                    width: '100%',
                    borderRadius: '10px 10px 0 0',
                    borderBottom: '1px solid #D8D8D8',
                    textAlign: 'center',
                  }}
                >
                  Billing Area :
                </Typography>
                <Typography sx={{ textAlign: 'center', py: '1rem', fontWeight: 600 }}>{allData.billingArea}</Typography>
              </Stack>
              <Stack sx={{ border: '1px solid #D8D8D8', borderRadius: '10px', width: '50%' }}>
                <Typography
                  sx={{
                    py: '4%',
                    fontSize: '16px',
                    width: '100%',
                    borderRadius: '10px 10px 0 0',
                    borderBottom: '1px solid #D8D8D8',
                    textAlign: 'center',
                  }}
                >
                  Mobile Number :
                </Typography>
                <Typography sx={{ textAlign: 'center', py: '1rem', fontWeight: 600 }}>{allData.mobileNo1}</Typography>
              </Stack>
            </Stack>
          </Stack>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            gap="2rem"
            sx={{ width: '100%', border: '1px solid #D8D8D8', bgcolor: 'white', borderRadius: '10px' }}
          >
            <Typography
              sx={{
                px: '2%',
                py: '1%',
                fontWeight: '600',
                fontSize: '16px',
                width: '100%',
                borderRadius: '10px 10px 0 0',
                borderBottom: '1px solid #D8D8D8',
                bgcolor: 'rgba(145, 158, 171, 0.12)',
              }}
            >
              Hardware Details
            </Typography>
            <Stack direction="row" gap="1rem" sx={{ width: '100%', padding: '1rem' }}>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow sx={{ border: '1px solid #D8D8D8' }}>
                      <TableCell sx={{ border: '1px solid #D8D8D8', color: 'black', fontWeight: '600' }}>
                        STB NAME
                      </TableCell>
                      <TableCell sx={{ border: '1px solid #D8D8D8', color: 'black', fontWeight: '600' }} align="left">
                        STB
                      </TableCell>
                      <TableCell sx={{ border: '1px solid #D8D8D8', color: 'black', fontWeight: '600' }} align="left">
                        CARD
                      </TableCell>
                      <TableCell sx={{ border: '1px solid #D8D8D8', color: 'black', fontWeight: '600' }} align="left">
                        MEMBERSHIP NO.
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow sx={{ border: '1px solid #D8D8D8' }}>
                      <TableCell sx={{ border: '1px solid #D8D8D8' }} component="th" scope="row">
                        {allData.stbName}
                      </TableCell>
                      <TableCell sx={{ border: '1px solid #D8D8D8' }} align="left">
                        {allData.stbNumber}
                      </TableCell>
                      <TableCell sx={{ border: '1px solid #D8D8D8' }} align="left">
                        {allData.cardNumber}
                      </TableCell>
                      <TableCell sx={{ border: '1px solid #D8D8D8' }} align="left">
                        {allData.membershipNo}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Stack>
          </Stack>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            gap="2rem"
            sx={{ width: '100%', border: '1px solid #D8D8D8', bgcolor: 'white', borderRadius: '10px' }}
          >
            <Stack direction="row" gap="1rem" sx={{ width: '100%', padding: '1rem' }}>
              <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 'fit-content' }}>
                <Tabs
                  orientation="vertical"
                  variant="scrollable"
                  value={value}
                  onChange={handleChange}
                  aria-label="Vertical tabs example"
                  sx={{ borderRight: 1, borderColor: 'divider', width: '180px' }}
                >
                  <Tab
                    label="Collect Payment"
                    icon={<PaymentIcon />}
                    {...a11yProps(0)}
                    sx={{ color: 'black', fontWeight: '400' }}
                  />
                  <Tab
                    label="Renew"
                    icon={<AutorenewIcon />}
                    {...a11yProps(1)}
                    sx={{ color: 'black', fontWeight: '400' }}
                  />
                  <Tab
                    label="Subscription"
                    icon={<SubscriptionIcon />}
                    {...a11yProps(2)}
                    sx={{ color: 'black', fontWeight: '400' }}
                  />
                  <Tab
                    label="Adjust Balance"
                    icon={<BalanceIcon />}
                    {...a11yProps(3)}
                    sx={{ color: 'black', fontWeight: '400' }}
                  />
                  <Tab
                    label="Add On Bill"
                    icon={<AddIcon />}
                    {...a11yProps(4)}
                    sx={{ color: 'black', fontWeight: '400' }}
                  />
                  <Tab
                    label="Active/Inactive"
                    icon={<ActiveIcon />}
                    {...a11yProps(5)}
                    sx={{ color: 'black', fontWeight: '400' }}
                  />
                  <Tab
                    label="Additional Charge"
                    icon={<ChargeIcon />}
                    {...a11yProps(6)}
                    sx={{ color: 'black', fontWeight: '400' }}
                  />
                  <Tab
                    label="Balance History"
                    icon={<HistoryIcon />}
                    {...a11yProps(7)}
                    sx={{ color: 'black', fontWeight: '400' }}
                  />
                  <Tab
                    label="Hardware Details"
                    icon={<HardwareIcon />}
                    {...a11yProps(8)}
                    sx={{ color: 'black', fontWeight: '400' }}
                  />
                  <Tab
                    label="Customer Follow Up"
                    icon={<FollowUpIcon />}
                    {...a11yProps(9)}
                    sx={{ color: 'black', fontWeight: '400' }}
                  />
                  <Tab
                    label="Customer Edit"
                    icon={<EditIcon />}
                    {...a11yProps(10)}
                    sx={{ color: 'black', fontWeight: '400' }}
                  />
                </Tabs>
                <TabPanel value={value} index={0}>
                  <CollectPayment allData={allData} />
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <Renew allData={allData} />
                </TabPanel>
                <TabPanel value={value} index={2}>
                  <Subscription allData={allData} />
                </TabPanel>
                <TabPanel value={value} index={3}>
                  <AdjustBalance />
                </TabPanel>
                <TabPanel value={value} index={4}>
                  <AddOnBill allData={allData} />
                </TabPanel>
                <TabPanel value={value} index={5}>
                  <ActiveInactive />
                </TabPanel>
                <TabPanel value={value} index={6}>
                  <AdditionalCharge />
                </TabPanel>
                <TabPanel value={value} index={7}>
                  <BalanceHistory allData={allData} />
                </TabPanel>
                <TabPanel value={value} index={8}>
                  <HardwareDetails allData={allData} />
                </TabPanel>
                <TabPanel value={value} index={9}>
                  <CustomerFollowUp />
                </TabPanel>
                <TabPanel value={value} index={10}>
                  <CustomerEdit allData={allData} />
                </TabPanel>
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Box>
      <ToastContainer />
    </>
  );
};

export default CustomerDetails;
