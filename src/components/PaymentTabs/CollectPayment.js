import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Stack,
  Button,
  TextField,
  InputAdornment,
  MenuItem,
  Divider,
  ButtonBase,
} from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import TelegramIcon from '@mui/icons-material/Telegram';
import CalenderPop from './CalenderPop';
import CollectPopUp from '../Customer/CollectPopUp';
import PaymentLink from '../Customer/PaymentLink';

const PaymentMode = [
  {
    value: 'CASH',
  },
  {
    value: 'Cheque',
  },
  {
    value: 'BHIM',
  },
  {
    value: 'PayTM',
  },
  {
    value: 'UPI',
  },
  {
    value: 'Coupon',
  },
  {
    value: 'Portal',
  },
  {
    value: 'Bank Transfer',
  },
  {
    value: 'Others',
  },
];

const CollectPayment = (props) => {
  const [price, setPrice] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [discountAmount, setDiscountAmount] = useState(0);
  const [paymentMode, setPaymentMode] = useState('CASH');
  const [recordDate, setRecordDate] = useState(dayjs(new Date()));
  const [data, setData] = useState(null);
  const [name, setName] = useState('');
  const [collectedBy, setCollectedBy] = useState('');

  useEffect(() => {
    setData(props.allData);
    setName(props.allData.name);
  }, [props]);

  useEffect(() => {
    if (data?.balanceAmount) setTotalAmount(parseFloat(data?.balanceAmount));
  }, [data]);

  const handleDiscount = (e) => {
    setDiscountAmount(parseFloat(e.target.value) || 0);
  };

  const addAmount = (e) => {
    setPrice(parseFloat(e.target.value) || 0);
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`/api/users`, {
          headers: {
            'x-access-token': `${localStorage.getItem('accessToken')}`,
          },
        });

        if (!response.ok) {
          throw new Error('Error fetching user');
        }

        const user = await response.json();
        setCollectedBy(user.agency);
      } catch (error) {
        console.error(error);
      }
    };

    fetchUser();
  }, []);

  const updateCustomer = async () => {
    const url = `/api/update-amount/${data._id}`;
    const updatedCustomer = {
      transactionAmount: price + discountAmount,
      remainingAmount: totalAmount - price + discountAmount,
      fromDate: new Date(),
      toDate: recordDate.toDate(),
      paymentMode,
      name,
      collectedBy,
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
      window.alert('Customer updated successfully:', data.customer);
      window.location.reload();
    } catch (error) {
      console.error('Error updating customer:', error.message);
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between" width="100%">
        <Typography>
          <b>Collect Payment</b>
        </Typography>
        <PaymentLink data={data} />
      </Stack>
      <Stack direction="row" gap="1rem" padding="1rem" sx={{ width: '100%' }}>
        <Stack gap="1rem">
          <Stack sx={{ border: '1px solid #D8D8D8', borderRadius: '10px', width: '220px' }}>
            <Typography
              sx={{
                py: '4%',
                fontSize: '14px',
                width: '100%',
                borderRadius: '10px 10px 0 0',
                borderBottom: '1px solid #D8D8D8',
                textAlign: 'center',
              }}
            >
              Balance Amount :
            </Typography>
            <Typography sx={{ textAlign: 'center', py: '1rem', fontWeight: 600 }}>
              ₹<span>{data?.balanceAmount}</span>
            </Typography>
            <Typography
              sx={{
                py: '4%',
                fontSize: '14px',
                width: '100%',
                borderRadius: '10px 10px 0 0',
                borderTop: '1px solid #D8D8D8',
                textAlign: 'center',
              }}
            >
              Till Date : <CalenderPop />
            </Typography>
          </Stack>
          <Stack sx={{ border: '1px solid #D8D8D8', borderRadius: '10px', width: '220px' }}>
            <Typography
              sx={{
                py: '4%',
                fontSize: '14px',
                width: '100%',
                borderRadius: '10px 10px 0 0',
                borderBottom: '1px solid #D8D8D8',
                textAlign: 'center',
              }}
            >
              Last Bill Amount :
            </Typography>
            <Typography sx={{ textAlign: 'center', py: '1rem', fontWeight: 600 }}>
              ₹<span>250</span>
            </Typography>
          </Stack>
          <Stack sx={{ border: '1px solid #D8D8D8', borderRadius: '10px', width: '220px' }}>
            <Typography
              sx={{
                py: '4%',
                fontSize: '14px',
                width: '100%',
                borderRadius: '10px 10px 0 0',
                borderBottom: '1px solid #D8D8D8',
                textAlign: 'center',
              }}
            >
              Last Payment :
            </Typography>
            <Typography sx={{ textAlign: 'center', py: '1rem', fontWeight: 600 }}>₹ 350</Typography>
            <Typography
              sx={{
                py: '4%',
                fontSize: '14px',
                width: '100%',
                borderRadius: '10px 10px 0 0',
                borderTop: '1px solid #D8D8D8',
                textAlign: 'center',
              }}
            >
              Collected On: <span>02-May-2023</span>
            </Typography>
          </Stack>
        </Stack>
        <Stack
          sx={{
            border: '1px solid #D8D8D8',
            borderRadius: '10px',
            gap: '12px',
            width: '500px',
            py: '10px',
            px: '15px',
          }}
        >
          <Stack direction="row" alignItems="center">
            <Stack sx={{ width: '50%' }}>
              <Typography>Paid Amount</Typography>
            </Stack>
            <TextField
              fullWidth
              defaultValue="0"
              id="outlined-start-adornment"
              onChange={addAmount}
              InputProps={{
                startAdornment: <InputAdornment position="start">₹</InputAdornment>,
              }}
            />
          </Stack>
          <Stack direction="row" alignItems="center">
            <Stack sx={{ width: '50%' }}>
              <Typography>Discount</Typography>
            </Stack>
            <TextField
              fullWidth
              defaultValue="0"
              onChange={handleDiscount}
              id="outlined-start-adornment"
              InputProps={{
                startAdornment: <InputAdornment position="start">₹</InputAdornment>,
              }}
            />
          </Stack>
          <Stack direction="row" alignItems="center">
            <Stack sx={{ width: '50%' }}>
              <Typography>Mode</Typography>
            </Stack>
            <TextField
              fullWidth
              select
              onChange={(e) => setPaymentMode(e.target.value)}
              value={paymentMode}
              id="paymentMode"
            >
              {PaymentMode.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {' '}
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
          </Stack>
          <Stack direction="row" alignItems="center">
            <Stack sx={{ width: '50%' }}>
              <Typography>Record Time</Typography>
            </Stack>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              {/* <DemoItem label="Start Date"> */}
              <DatePicker
                fullWidth
                value={recordDate}
                sx={{ width: '100%' }}
                onChange={(newDate) => setRecordDate(newDate)}
              />
              {/* </DemoItem> */}
            </LocalizationProvider>
          </Stack>
          <Stack direction="row" alignItems="center">
            <Stack sx={{ width: '50%' }}>
              <Typography>Comment</Typography>
            </Stack>
            <TextField fullWidth id="outlined-multiline-flexible" placeholder="Comment" multiline rows={3} />
          </Stack>
          <Stack direction="row" alignItems="center" gap="2rem">
            <Stack direction="row" alignItems="center" gap="40px">
              <Stack sx={{ width: '100%' }}>
                <Typography>Total Payment</Typography>
              </Stack>
              <Typography
                sx={{
                  bgcolor: price + discountAmount >= 0 ? '#072534' : 'red',
                  color: 'white',
                  width: '120px',
                  textAlign: 'center',
                  borderRadius: '5px',
                }}
                // onChange={(e) => setTotalPayment(e.target.value)}
              >
                ₹ <span>{price + discountAmount}</span>
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="center" gap="40px">
              <Stack sx={{ width: '100%' }}>
                <Typography>New Balance</Typography>
              </Stack>
              <Typography
                sx={{
                  bgcolor: totalAmount - price + discountAmount >= 0 ? 'green' : 'red',
                  color: 'white',
                  width: '120px',
                  textAlign: 'center',
                  borderRadius: '5px',
                }}
              >
                <span>{totalAmount - price + discountAmount}</span>
              </Typography>
            </Stack>
          </Stack>
          <Divider sx={{ mt: '10px' }} />
          <Stack sx={{ mx: 'auto', bgcolor: 'lightblue' }}>
            <Button
              onClick={updateCustomer}
              variant="contained"
              endIcon={<TelegramIcon />}
              sx={{ width: 'fit-content', display: 'flex', justifyContent: 'end' }}
            >
              Record
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default CollectPayment;
