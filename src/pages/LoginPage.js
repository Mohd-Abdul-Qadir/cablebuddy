import { useNavigate } from 'react-router-dom';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  MenuItem,
  Stack,
  Select,
  Tab,
  Tabs,
  TextField,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import CBlogo from '/assets/images/CBlogo.png'
import Image from '../components/Image';

const theme = createTheme({
  components: {
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: '#F7941D',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          paddingTop: '0px',
          paddingBottom: '0px',
        },
      },
    },
  },
});

const LoginSignup = ({ value }) => {
  const [cable, setCable] = useState('cable');
  const [roll, setRoll] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [number, setNumber] = React.useState('');
  const [business, setBusiness] = React.useState('');

  const handleSelect = (event) => {
    setRoll(event.target.value);
  };
  console.log(roll);
  const handleChange = (event, newValue) => {
    if (newValue === '2') navigate(`/signup`);
    else navigate(`/login`);
  };

  const handleNumber = (e) => {
    setNumber(e.target.value);
  };
  console.log(number);
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  console.log(password);
  const handlBusiness = (e) => {
    setBusiness(e.target.value);
  };
  console.log(password);

  const handleCableChange = (event) => {
    setCable(event.target.value);
  };

  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ roll, business, password, number }),
      });
      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('accessToken', data.token);
        navigate('/dashboard/app');
        toast.success('Sign up successful!');
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error(`Sign up failed: ${error.message}`);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ number, password }),
      });
      const data = await response.json();
      console.log(data, 'data');
      if (response.ok) {
        localStorage.setItem('accessToken', data.token);
        navigate('/dashboard/app');
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    // Check if user is already logged in
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      navigate('/dashboard/app');
    } else {
      navigate('/login');
    }
  }, []);

  // if (role === "admin") {
  //   options.unshift({
  //     icon: <DashboardIcon />,
  //     name: "Dashboard",
  //     func: dashboard,
  //   });
  // }

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'linear-gradient(#0C3547 62.68%, rgba(12, 53, 71, 0.83) 98.96%)',
          width: '100%',
          minHeight: '100vh',
          px: '4%',
          boxSizing: 'border-box',
        }}
      >
        <Box
          sx={{
            bgcolor: 'white',
            borderRadius: '12px',
            width: { xs: '100%', sm: '45%', md: '35%' },
            height: 'fit-content',
          }}
        >
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList
                aria-label="Tabs"
                onChange={handleChange}
                textColor="primary"
                sx={{
                  '& .MuiTab-textColorPrimary': {
                    color: 'black',
                    fontWeight: '500',
                    fontSize: { xs: '16px', lg: '18px', xl: '20px' },
                    '&.Mui-selected': { color: 'black' },
                  },
                }}
              >
                <Tab label="Login" value="1" sx={{ width: '50%' }} />
                <Tab label="Signup" value="2" sx={{ width: '50%' }} />
              </TabList>
            </Box>
            {/* .........................login...................... */}
            <TabPanel value="1">
              <Stack sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
                <Image src="/assets/images/CBlogo.png" alt="CBLogo" sx={{ width: '30%' }} />
                <FormControl fullWidth sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <Select
                    value={roll}
                    onChange={handleSelect}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    sx={{
                      backgroundColor: '#F8F8F8',
                      color: '#A5A4A4',
                      borderColor: '#ccc',
                      ':active': {
                        borderColor: 'red', // Set border color to red when clicked
                      },
                    }}
                  >
                    <MenuItem value="">Please Select Type</MenuItem>
                    <MenuItem value="Cable">Cable</MenuItem>
                    {/* <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem> */}
                  </Select>
                  <TextField placeholder="Mobile Number" sx={{ bgcolor: '#F8F8F8' }} onChange={handleNumber} />
                  <TextField
                    placeholder="Password"
                    type="password"
                    sx={{ bgcolor: '#F8F8F8' }}
                    onChange={handlePassword}
                  />
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Remember Password"
                    sx={{
                      width: 'fit-content',
                      my: '0px',
                      color: '#A5A4A4',
                      '& .MuiCheckbox-root': { py: 0 },
                      '& .Mui-checked': {
                        color: '#F7941D', // Change the color of the checkbox when checked
                      },
                    }}
                  />
                  <Button
                    variant="outlined"
                    onClick={handleLogin}
                    sx={{
                      fontWeight: '500',
                      fontSize: '16px',
                      py: '10px',
                      borderRadius: '8px',
                      width: '70%',
                      mx: 'auto',
                      my: '10px',
                      bgcolor: '#F7941D',
                      color: '#0C3547',
                      border: 'none',
                      '&:hover': { bgcolor: '#F7941D', color: '#0C3547', border: 'none' },
                    }}
                  >
                    LOGIN
                  </Button>
                </FormControl>
              </Stack>
            </TabPanel>
            {/* .....................signup..................... */}
            <TabPanel value="2">
              <Stack sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
                <Image src="/assets/images/CBlogo.png" alt="CBLogo" sx={{ width: '30%' }} />
                <FormControl fullWidth sx={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <Select
                    value={roll}
                    required
                    onChange={handleSelect}
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    sx={{
                      backgroundColor: '#F8F8F8',
                      color: '#A5A4A4',
                      borderColor: '#ccc',
                      ':active': {
                        borderColor: 'red', // Set border color to red when clicked
                      },
                    }}
                  >
                    <MenuItem value="">Please Select Type</MenuItem>
                    <MenuItem value="Cable">Cable</MenuItem>
                    {/* <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem> */}
                  </Select>
                  <TextField placeholder="Mobile Number" sx={{ bgcolor: '#F8F8F8' }} onChange={handleNumber} />
                  <TextField placeholder=" Business Name" sx={{ bgcolor: '#F8F8F8' }} onChange={handlBusiness} />
                  <TextField
                    placeholder="Password"
                    type="password"
                    sx={{ bgcolor: '#F8F8F8' }}
                    onChange={handlePassword}
                  />
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Remember Password"
                    sx={{
                      width: 'fit-content',
                      my: '0px',
                      color: '#A5A4A4',
                      '& .MuiCheckbox-root': { py: 0 },
                      '& .Mui-checked': {
                        color: '#F7941D', // Change the color of the checkbox when checked
                      },
                    }}
                  />
                  <Button
                    variant="outlined"
                    onClick={handleSignup}
                    sx={{
                      fontWeight: '500',
                      fontSize: '16px',
                      py: '10px',
                      borderRadius: '8px',
                      width: '70%',
                      mx: 'auto',
                      my: '10px',
                      bgcolor: '#F7941D',
                      color: '#0C3547',
                      border: 'none',
                      '&:hover': { bgcolor: '#F7941D', color: '#0C3547', border: 'none' },
                    }}
                  >
                    SignUp
                  </Button>
                </FormControl>
              </Stack>
            </TabPanel>
          </TabContext>
        </Box>
      </Box>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </ThemeProvider>
  );
};

export default LoginSignup;
