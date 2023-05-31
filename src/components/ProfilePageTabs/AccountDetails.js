import React, { useState, useEffect } from 'react';
import { Stack, Typography, TextField, Button, Divider, Box } from '@mui/material';
import TelegramIcon from '@mui/icons-material/Telegram';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AccountDetails = () => {
  const [uploadPanCard, setUploadPanCard] = useState('');
  const [accountnumber, setAccountnumber] = useState('');
  const [accountholdername, setAccountholdername] = useState('');
  const [Pancardnumber, setPancardnumber] = useState('');
  const [email, setEmail] = useState('');
  const [bankIfsc, setBankIfsc] = useState('');
  const [id, setId] = useState('');

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
        setBankIfsc(user.bankIfsc);
        setEmail(user.email);
        setPancardnumber(user.Pancardnumber);
        setAccountholdername(user.accountholdername);
        setAccountnumber(user.accountnumber);
        setUploadPanCard(user.Pancardnumber);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = { accountnumber, accountholdername, Pancardnumber, bankIfsc };

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
          <b>Manage your online banking account, Pan Card and Address proof details for Online Transactions</b>
        </Typography>
      </Stack>
      <Stack gap="20px" sx={{ width: '100%', padding: '1rem' }}>
        <Stack fullWidth direction="row" gap="20px">
          <TextField
            variant="outlined"
            label="Account Holder Name"
            autoComplete="off"
            value={accountholdername}
            onChange={(e) => setAccountholdername(e.target.value)}
            sx={{ bgcolor: 'white', height: 'fit-content', width: '50%' }}
          />
          <Stack direction="row">
            <Typography>Account Status</Typography>
            <Typography sx={{ color: 'green', bgcolor: '#bdddf6', border: '1px solid #c3e6cb', py: '5px', px: '5%' }}>
              Account Addition to Payment Gateway Successfull
            </Typography>
          </Stack>
        </Stack>
        <Stack fullWidth direction="row" gap="20px">
          <TextField
            fullWidth
            variant="outlined"
            type="number"
            label="Account Number"
            autoComplete="off"
            value={accountnumber}
            onChange={(e) => setAccountnumber(e.target.value)}
            sx={{ bgcolor: 'white' }}
          />
          <TextField
            fullWidth
            label="Bank IFSC"
            variant="outlined"
            autoComplete="off"
            value={bankIfsc}
            onChange={(e) => setBankIfsc(e.target.value)}
            sx={{ bgcolor: 'white' }}
          />
        </Stack>
        <Stack fullWidth direction="row" gap="20px">
          <TextField
            fullWidth
            label="Pan Card Number"
            type="number"
            variant="outlined"
            autoComplete="off"
            value={Pancardnumber}
            onChange={(e) => setPancardnumber(e.target.value)}
            sx={{ bgcolor: 'white' }}
          />
          <TextField
            fullWidth
            type="email"
            label="Email Address"
            variant="outlined"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ bgcolor: 'white' }}
          />
        </Stack>
      </Stack>
      <Divider />
      <Stack gap="1rem">
        <Typography>Upload Pan Card</Typography>
        <Button variant="contained" component="label" sx={{ width: 'fit-content', padding: '12px' }}>
          Choose File
          <input
            hidden
            accept="image/*"
            multiple
            type="file"
            onChange={(event) => setUploadPanCard(event.target.files[0])}
          />
        </Button>
        <Box sx={{ border: '1px solid lightgrey', height: 'fit-content', padding: '10px', borderRadius: '5px' }} />
      </Stack>
      <Stack gap="1rem">
        <Typography>Bank Passbook photo / Cancelled Cheque photo</Typography>
        <Button variant="contained" component="label" sx={{ width: 'fit-content', padding: '12px' }}>
          Choose File
          <input hidden accept="image/*" multiple type="file" />
        </Button>
        <Box sx={{ border: '1px solid lightgrey', height: 'fit-content', padding: '10px', borderRadius: '5px' }} />
      </Stack>
      <Stack mt="10px">
        <Button
          onClick={handleSubmit}
          variant="contained"
          endIcon={<TelegramIcon />}
          sx={{ width: 'fit-content', mx: 'auto', padding: '12px' }}
        >
          Update
        </Button>
      </Stack>
      <ToastContainer />
    </Stack>
  );
};

export default AccountDetails;
