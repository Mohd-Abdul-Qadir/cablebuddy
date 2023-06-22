import React, { useState, useEffect } from 'react';
import { Stack, Typography, TextField, Button } from '@mui/material';
import TelegramIcon from '@mui/icons-material/Telegram';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GeneralDetailsAgent = () => {
  const [id, setId] = useState();
  const [number, setNumber] = useState('');
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [address, setAddress] = useState('');
  const [userId, setUserId] = useState('');
  const [user, setUser] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`/api/agent`, {
          headers: {
            'x-access-token': `${localStorage.getItem('agentToken')}`,
          },
        });

        if (!response.ok) {
          throw new Error('Error fetching user');
        }
        const user = await response.json();
        console.log(user, 'this is user data in agent profile');
        setId(user._id);
        setNumber(user.number);
        setName(user.name);
        setState(user.state);
        setCity(user.city);
        setState(user.state);
        setAddress(user.address);
        setUserId(user.userId);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUser();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const agentData = { name, number, city, state, address };

    if (id) {
      fetch(`/api/update-agent/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(agentData),
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success('Agent updated successfully');
          setMessage(data.message);
          onUpdate();
        })
        .catch((error) => console.error(error));
    }
  };
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`/api/single-user/${userId}`);
        const data = await response.json();

        if (response.ok) {
          setUser(data);
        } else {
          console.log(data);
        }

        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchUser();
  }, [userId]);

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
            label="Name"
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
            disabled
            variant="outlined"
            label="Agency Name"
            autoComplete="off"
            value={user.agency}
            sx={{ bgcolor: 'white' }}
          />
          <TextField
            fullWidth
            label="State"
            variant="outlined"
            autoComplete="off"
            value={state}
            onChange={(e) => setState(e.target.value)}
            sx={{ bgcolor: 'white' }}
          />
        </Stack>
        <Stack fullWidth direction="row" gap="20px">
          <TextField
            fullWidth
            label="City"
            variant="outlined"
            autoComplete="off"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            sx={{ bgcolor: 'white', height: 'fit-content' }}
          />
          <TextField
            label="Address"
            fullWidth
            multiline
            rows={4}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            sx={{ bgcolor: 'white' }}
          />
        </Stack>
        <Stack fullWidth direction="row"></Stack>
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

export default GeneralDetailsAgent;
