import React, { useState, useEffect } from 'react';
import { Box, Typography, Stack, Button, TextField, InputAdornment } from '@mui/material';
import { Telegram } from '@mui/icons-material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddOnBill = (props) => {
  const [data, setData] = useState(props.allData);
  const [price, setPrice] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    if (data?.balanceAmount) setTotalAmount(parseFloat(data?.balanceAmount));
  }, [data]);

  const handlePrice = (e) => {
    setPrice(parseFloat(e.target.value) || 0);
  };
  const updateCustomer = async () => {
    const url = `/api/update-customer/${data._id}`; // Replace with your API endpoint

    const updatedCustomer = {
      balanceAmount: totalAmount + price,
    };

    try {
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedCustomer),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }

      const data = await response.json();
      toast.success('Updated successfully');
      console.log('Customer updated successfully:', data.customer);
    } catch (error) {
      console.error('Error updating customer:', error.message);
    }
  };

  return (
    <Box>
      <Stack mb="1rem">
        <Typography>
          <b>Add On Bill</b>
        </Typography>
      </Stack>
      <Stack direction={{ xs: 'column', md: 'row' }} gap="1rem" px='5px' py='15px' sx={{ width: '100%' }}>
        <Stack sx={{ border: '1px solid #D8D8D8', borderRadius: '10px', width: '220px' }}>
          <Typography
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              py: '4%',
              fontSize: '14px',
              width: '100%',
              height: '40%',
              borderRadius: '10px 10px 0 0',
              borderBottom: '1px solid #D8D8D8',
            }}
          >
            <b>Current Balance :</b>
          </Typography>
          <Typography sx={{ textAlign: 'center', py: '1rem', fontWeight: 600 }}>
            ₹<span>{totalAmount}</span>
          </Typography>
        </Stack>
        <Stack
          sx={{
            border: '1px solid #D8D8D8',
            borderRadius: '10px',
            gap: '12px',
            width: { xs: '100%', md: '500px' },
            py: '10px',
            px: '15px',
          }}
        >
          <Stack direction={{ xs: 'column', md: 'row' }} alignItems="center">
            <Stack sx={{ width: '50%' }}>
              <Typography>Item Name</Typography>
            </Stack>
            <TextField fullWidth placeholder="Item" id="outlined-start-adornment" />
          </Stack>
          <Stack direction={{ xs: 'column', md: 'row' }} alignItems="center">
            <Stack sx={{ width: '50%' }}>
              <Typography>Price</Typography>
            </Stack>
            <TextField
              fullWidth
              placeholder="Price"
              id="outlined-start-adornment"
              onChange={handlePrice}
              InputProps={{
                startAdornment: <InputAdornment position="start">₹</InputAdornment>,
              }}
            />
          </Stack>
          <Stack direction='row' alignItems="center" gap="2rem">
            <Stack sx={{ width: { xs: '60%', md: '28%' } }}>
              <Typography>New Balance</Typography>
            </Stack>
            <Typography
              sx={{ bgcolor: '#072534', color: 'white', width: '55px', textAlign: 'center', borderRadius: '5px' }}
            >
              ₹ <span> {totalAmount + price}</span>
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack sx={{ mx: 'auto', mt: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Button variant="contained" endIcon={<Telegram />} sx={{ width: 'fit-content' }} onClick={updateCustomer}>
          Update
        </Button>
      </Stack>
      <ToastContainer />
    </Box>
  );
};

export default AddOnBill;
