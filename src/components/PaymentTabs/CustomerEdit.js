import React, { useEffect, useState } from 'react';
import {
  Box,
  Stack,
  Typography,
  TextField,
  Select,
  MenuItem,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormLabel,
  InputLabel,
  Divider,
} from '@mui/material';
import TelegramIcon from '@mui/icons-material/Telegram';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BillingArea = [
  {
    value: 'Elaprolu APSFL',
  },
  {
    value: 'Elaprolu SSLC',
  },
  {
    value: 'Elaprolu V DIGITAL',
  },
  {
    value: 'GANGINENI ',
  },
  {
    value: 'GANGINENI SSLC',
  },
  {
    value: 'GANGINENI V DIGITAL',
  },
  {
    value: 'GOLLAPUDI',
  },
];

const Months = [
  {
    value: 'Every 1 Month',
  },
  {
    value: 'Every 2 Month',
  },
  {
    value: 'Every 3 Month',
  },
  {
    value: 'Every 4 Month',
  },
  {
    value: 'Every 5 Month',
  },
  {
    value: 'Every 6 Month',
  },
  {
    value: 'Every 7 Month',
  },
  {
    value: 'Every 8 Month',
  },
  {
    value: 'Every 9 Month',
  },
  {
    value: 'Every 10 Month',
  },
  {
    value: 'Every 11 Month',
  },
  {
    value: 'Every 12 Month',
  },
];

const CustomerEdit = (props) => {
  const [data, setData] = useState(props.allData);

  const [name, setName] = useState(data.name);
  const [billingName, setBillingName] = useState(data.billingName);
  const [billingNo, setBillingNo] = useState(data.billingNo);
  const [billingArea, setBillingArea] = useState(data.billingArea);
  const [gstNo, setGstNo] = useState(data.gstNo);
  const [mobileNo1, setMobileNo1] = useState(data.mobileNo1);
  const [mobileNo2, setMobileNo2] = useState(data.mobileNo2);
  const [email, setEmail] = useState(data.email);
  const [address, setAddress] = useState(data.address);
  const [securityDeposit, setSecurityDeposit] = useState(data.securityDeposit);
  const [customerCode, setCustomerCode] = useState(data.customerCode);
  const [remark, setRemark] = useState(data.remark);

  const updateCustomer = async () => {
    const url = `http://localhost:4001/api/update-customer/${data._id}`; // Replace with your API endpoint

    const updatedCustomer = {
      name,
      billingName,
      billingArea,
      billingNo,
      mobileNo1,
      mobileNo2,
      email,
      securityDeposit,
      address,
      gstNo,
      customerCode,
      remark,
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
      toast.success('Customer updated successfully');
      console.log('Customer updated successfully:', data.customer);
    } catch (error) {
      console.error('Error updating customer:', error.message);
    }
  };

  return (
    <Stack gap="3rem" sx={{ width: '55vw' }}>
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
          General Detail
        </Typography>
        <Stack gap="1rem" fullWidth sx={{ width: '100%', padding: '1rem' }}>
          <Stack direction="row" alignItems="center">
            <Typography sx={{ width: '50%' }}>Customer Name* :</Typography>
            <TextField
              fullWidth
              id="outlined-basic"
              value={name}
              onChange={(e) => setName(e.target.value)}
              variant="outlined"
              sx={{ bgcolor: '#F8F8F8', width: '100%' }}
              autoComplete="off"
            />
          </Stack>
          <Stack direction="row" alignItems="center">
            <Typography sx={{ width: '50%' }}>Customer Billing Name* :</Typography>
            <TextField
              fullWidth
              id="outlined-basic"
              value={billingName}
              onChange={(e) => setBillingName(e.target.value)}
              variant="outlined"
              sx={{ bgcolor: '#F8F8F8', width: '100%' }}
              autoComplete="off"
            />
          </Stack>
          <Stack direction="row" alignItems="center">
            <Typography sx={{ width: '50%' }}>Billing Area :</Typography>
            <TextField fullWidth label="Billing Area" id="outlined-select-currency" select sx={{ bgcolor: '#F8F8F8' }}>
              {BillingArea.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
          </Stack>
          <Stack direction="row" alignItems="center">
            <Typography sx={{ width: '50%' }}>Billing No :</Typography>
            <TextField
              type="number"
              fullWidth
              value={billingNo}
              onChange={(e) => setBillingNo(e.target.value)}
              id="outlined-basic"
              variant="outlined"
              sx={{ bgcolor: '#F8F8F8', width: '100%' }}
              autoComplete="off"
            />
          </Stack>
          <Stack direction="row" alignItems="center">
            <Typography sx={{ width: '50%' }}>GST No :</Typography>
            <TextField
              type="number"
              fullWidth
              value={gstNo}
              onChange={(e) => setGstNo(e.target.value)}
              id="outlined-basic"
              variant="outlined"
              sx={{ bgcolor: '#F8F8F8', width: '100%' }}
              autoComplete="off"
            />
          </Stack>
          <Stack direction="row" alignItems="center">
            <Typography sx={{ width: '50%' }}>Mobile Number 1 :</Typography>
            <TextField
              type="number"
              fullWidth
              onChange={(e) => setMobileNo1(e.target.value)}
              value={mobileNo1}
              id="outlined-basic"
              variant="outlined"
              sx={{ bgcolor: '#F8F8F8', width: '100%' }}
              autoComplete="off"
            />
          </Stack>
          <Stack direction="row" alignItems="center">
            <Typography sx={{ width: '50%' }}>Mobile Number 2 :</Typography>
            <TextField
              type="number"
              fullWidth
              onChange={(e) => setMobileNo2(e.target.value)}
              value={mobileNo2}
              id="outlined-basic"
              variant="outlined"
              sx={{ bgcolor: '#F8F8F8', width: '100%' }}
              autoComplete="off"
            />
          </Stack>
          <Stack direction="row" alignItems="center">
            <Typography sx={{ width: '50%' }}>Email :</Typography>
            <TextField
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              fullWidth
              id="outlined-basic"
              variant="outlined"
              sx={{ bgcolor: '#F8F8F8', width: '100%' }}
              autoComplete="off"
            />
          </Stack>
          <Stack direction="row" alignItems="center">
            <Typography sx={{ width: '50%' }}>Address :</Typography>
            <TextField
              fullWidth
              onChange={(e) => setAddress(e.target.value)}
              id="outlined-multiline-flexible"
              placeholder="Address"
              value={address}
              multiline
              rows={4}
              sx={{ bgcolor: '#F8F8F8' }}
            />
          </Stack>
          <Stack direction="row" alignItems="center">
            <Typography sx={{ width: '50%' }}>Security Deposit :</Typography>
            <TextField
              fullWidth
              id="outlined-basic"
              onChange={(e) => setSecurityDeposit(e.target.value)}
              value={securityDeposit}
              variant="outlined"
              sx={{ bgcolor: '#F8F8F8', width: '100%' }}
              autoComplete="off"
            />
          </Stack>
          <Stack direction="row" alignItems="center">
            <Typography sx={{ width: '50%' }}>Customer Code :</Typography>
            <TextField
              fullWidth
              id="outlined-basic"
              variant="outlined"
              onChange={(e) => setCustomerCode(e.target.value(e.target.value))}
              value={customerCode}
              sx={{ bgcolor: '#F8F8F8', width: '100%' }}
              autoComplete="off"
            />
          </Stack>
          <Stack direction="row" alignItems="center">
            <Typography sx={{ width: '50%' }}>Remark :</Typography>
            <TextField
              fullWidth
              onChange={(e) => setRemark(e.target.value)}
              id="outlined-multiline-flexible"
              multiline
              rows={4}
              sx={{ bgcolor: '#F8F8F8' }}
              value={remark}
            />
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
          Billing Detail
        </Typography>
        <Stack direction="row" gap="1rem" fullWidth sx={{ width: '100%', padding: '1rem' }}>
          <Stack sx={{ border: '1px solid #D8D8D8', borderRadius: '10px', padding: '1rem', width: '50%' }}>
            <Stack fullWidth gap="2rem">
              <FormControl>
                <FormLabel id="demo" sx={{ color: 'black', fontWeight: '600', fontSize: '20px' }}>
                  Bill Duration
                </FormLabel>
                <RadioGroup aria-labelledby="demo" defaultValue="female" name="radio-buttons-group">
                  <FormControlLabel value="endofeverymonth" control={<Radio />} label="End of every month" />
                  <FormControlLabel value="days" control={<Radio />} label="Days" />
                  <FormControlLabel value="month" control={<Radio />} label="Month" />
                </RadioGroup>
              </FormControl>
              <TextField id="outlined-select-currency" select defaultValue="Every 1 Month">
                {Months.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.value}
                  </MenuItem>
                ))}
              </TextField>
            </Stack>
          </Stack>
          <Stack sx={{ border: '1px solid #D8D8D8', borderRadius: '10px', padding: '1rem', width: '50%' }}>
            <Stack fullWidth gap="1rem">
              <FormControl>
                <FormLabel sx={{ color: 'black', fontWeight: '600', fontSize: '20px' }}>Bill Type</FormLabel>
                <RadioGroup defaultValue="female" name="radio-buttons-group">
                  <FormControlLabel value="postpaid" control={<Radio />} label="Postpaid" />
                  <FormControlLabel value="prepaid" control={<Radio />} label="Prepaid" />
                </RadioGroup>
              </FormControl>
            </Stack>
          </Stack>
          <Stack sx={{ border: '1px solid #D8D8D8', borderRadius: '10px', padding: '1rem', width: '50%' }}>
            <Stack fullWidth gap="1rem">
              <FormControl>
                <FormLabel sx={{ color: 'black', fontWeight: '600', fontSize: '20px' }}>GST Type</FormLabel>
                <RadioGroup defaultValue="female" name="radio-buttons-group">
                  <FormControlLabel value="noGST" control={<Radio />} label="No GST" />
                  <FormControlLabel
                    value="CGST+SGST"
                    control={<Radio />}
                    label="CGST + SGST - Customer from same state"
                  />
                  <FormControlLabel value="IGST" control={<Radio />} label="IGST - Customer from different state" />
                </RadioGroup>
              </FormControl>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack direction="row" justifyContent="center" mt="15px">
        <Button
          variant="contained"
          endIcon={<TelegramIcon />}
          sx={{ fontSize: '15px', height: '50px', width: '15%' }}
          onClick={updateCustomer}
        >
          Update
        </Button>
      </Stack>
      <ToastContainer />
    </Stack>
  );
};

export default CustomerEdit;
