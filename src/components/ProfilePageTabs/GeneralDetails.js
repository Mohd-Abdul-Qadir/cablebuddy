import React, { useState, useEffect } from 'react';
import { Stack, Typography, TextField, Button } from '@mui/material';
import TelegramIcon from '@mui/icons-material/Telegram';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GeneralDetails = () => {
  const [id, setId] = useState();
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [gstnumber, setGstnumber] = useState('');
  const [address, setAddress] = useState('');
  const [agency, setAgency] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`http://localhost:4001/api/users`, {
          headers: {
            'x-access-token': `${localStorage.getItem('accessToken')}`,
          },
        });

        if (!response.ok) {
          throw new Error('Error fetching user');
        }

        const user = await response.json();
        setId(user._id);
        setNumber(user.number);
        setName(user.name);
        setAgency(user.agency);
        setGstnumber(user.gstnumber);
        setState(user.state);
        setCity(user.city);
        setState(user.state);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = { number, name, city, state, gstnumber, address, agency };

    if (id) {
      fetch(`http://localhost:4001/api/user-update`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'x-access-token': localStorage.accessToken,
        },
        body: JSON.stringify(userData),
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success('User updated successfully');
          setMessage(data.message);
          props.onUpdate();
        })
        .catch((error) => console.error(error));
    }
  };

  return (
    <Stack gap="20px">
      <Stack>
        <Typography>
          <b>Manage your Office Name, Address, Location and GST Details</b>
        </Typography>
      </Stack>
      <Stack gap="20px" sx={{ width: '100%', padding: '1rem' }}>
        <Stack fullWidth direction="row" gap="20px">
          <TextField
            variant="outlined"
            fullWidth
            type="number"
            label="Mobile Number"
            autoComplete="off"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            sx={{ bgcolor: 'white' }}
          />
          <TextField
            fullWidth
            label="Owner Name"
            variant="outlined"
            autoComplete="off"
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{ bgcolor: 'white' }}
          />
        </Stack>
        <Stack fullWidth direction="row" gap="20px">
          <TextField
            fullWidth
            variant="outlined"
            label="Agency Name"
            autoComplete="off"
            value={agency}
            onChange={(e) => setAgency(e.target.value)}
            sx={{ bgcolor: 'white' }}
          />
          <TextField
            fullWidth
            label="GST Number"
            variant="outlined"
            autoComplete="off"
            value={gstnumber}
            onChange={(e) => setGstnumber(e.target.value)}
            sx={{ bgcolor: 'white' }}
          />
        </Stack>
        <Stack fullWidth direction="row" gap="20px">
          <TextField
            fullWidth
            label="State"
            variant="outlined"
            autoComplete="off"
            value={state}
            onChange={(e) => setState(e.target.value)}
            sx={{ bgcolor: 'white' }}
          />
          <TextField
            fullWidth
            label="City"
            variant="outlined"
            autoComplete="off"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            sx={{ bgcolor: 'white' }}
          />
        </Stack>
        <Stack fullWidth direction="row">
          <TextField
            label="Address"
            multiline
            rows={4}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            sx={{ bgcolor: 'white', width: '49%' }}
          />
        </Stack>
      </Stack>
      <Stack mt="10px">
        <Button
          onClick={handleSubmit}
          variant="contained"
          endIcon={<TelegramIcon />}
          sx={{ width: 'fit-content', mx: 'auto', padding: '10px' }}
        >
          Update
        </Button>
      </Stack>
      <ToastContainer />
    </Stack>
  );
};

export default GeneralDetails;
