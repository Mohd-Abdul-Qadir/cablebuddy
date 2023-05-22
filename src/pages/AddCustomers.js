import React, { useState } from 'react';
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
  InputAdornment,
  FormLabel,
  InputLabel,
  Divider,
} from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import TelegramIcon from '@mui/icons-material/Telegram';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import moment from 'moment';
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

const AddCustomers = () => {
  const [selectedValue, setSelectedValue] = React.useState('outstanding');
  const [selectedValue2, setSelectedValue2] = React.useState('additionalcharge');
  const [month, setMonth] = React.useState('Every 1 Month');
  const [stbName, setStbName] = React.useState(null);
  const [stbNumber, setStbNumber] = useState(null);
  const [cardNumber, setCardNumber] = useState(null);
  const [membershipNo, setMembershipNo] = useState(null);
  const [showCard, setShowCard] = React.useState(false);

  const [inputData, setInputData] = useState({
    name: '',
    billingName: '',
    billingArea: '',
    billingNo: '',
    mobileNo1: '',
    mobileNo2: '',
    email: '',
    securityDeposit: '',
    address: '',
    gstNo: '',
    customerCode: '',
    remark: '',
    stbName: '',
    stbNumber: '',
    cardNumber: '',
    membershipNo: '',
    startDate: null,
    openingBalanceRadio: '',
    openingBalanceAmount: '',
    additionalChargeDiscount: '',
    additionalChargeRadio: '',
    billDurationRadio: '',
    billDurationSelect: '',
    billTypeRadio: '',
    gstTypeRadio: '',
  });

  // const handleInputs = (e) => {
  //     const { name, value } = e.target;
  //     setInputData((prevData) => ({ ...prevData, [name]: value }));
  // }

  const handleInputs = (e) => {
    const { name, value } = e.target;
    const startDate = inputData.startDate; // Get the startDate value

    if (startDate instanceof Date) {
      const date = startDate.getDate(); // Get the date
      const month = startDate.getMonth(); // Get the month (0-based index)
      const year = startDate.getFullYear(); // Get the year

      setInputData((prevData) => ({
        ...prevData,
        [name]: value,
        startDay: date,
        startMonth: month + 1, // Adding 1 to the month to convert it to 1-12 format
        startYear: year,
      }));
    } else {
      setInputData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  // .................................Add Button Hardware Details....................................//
  const onclickShowCard = () => {
    if (stbName === null) {
      setShowCard(false);
    } else if (stbNumber === null) {
      setShowCard(false);
    } else if (cardNumber === null) {
      setShowCard(false);
    } else if (membershipNo === null) {
      setShowCard(false);
    } else {
      setShowCard(true);
    }
  };

  // .........................addButton.........................

  const handleAddSubmit = async (e) => {
    console.log(inputData);
    e.preventDefault();
    const {
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
      stbName,
      stbNumber,
      cardNumber,
      membershipNo,
      startDate,
      openingBalanceRadio,
      openingBalanceAmount,
      additionalChargeDiscount,
      additionalChargeRadio,
      billDurationRadio,
      billDurationSelect,
      billTypeRadio,
      gstTypeRadio,
    } = inputData;

    const res = await fetch('http://localhost:4001/api/add-customer', {
      method: 'POST',
      headers: { 'x-access-token': `${localStorage.getItem('accessToken')}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
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
        stbName,
        stbNumber,
        cardNumber,
        membershipNo,
        startDate,
        openingBalanceRadio,
        openingBalanceAmount,
        additionalChargeDiscount,
        additionalChargeRadio,
        billDurationRadio,
        billDurationSelect,
        billTypeRadio,
        gstTypeRadio,
      }),
    });

    const data = await res.json();

    if (data.status === 422 || !data) {
      toast.error(`Not Add`);
    } else {
      toast.success('Add successful!');
    }
  };

  return (
    <Box sx={{ padding: '1%', width: '100%' }}>
      <Typography variant="h4">Add Customer</Typography>
      <Stack gap={5}>
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
          <Stack gap="1rem" sx={{ width: '100%', padding: '1rem' }}>
            <Stack fullWidth direction="row" gap="1rem">
              <TextField
                variant="outlined"
                fullWidth
                id="outlined-basic"
                label="Customer Name"
                autoComplete="off"
                name="name"
                value={inputData.name}
                onChange={handleInputs}
                sx={{ bgcolor: '#F8F8F8', width: '100%' }}
              />
              <TextField
                fullWidth
                id="outlined-basic"
                label="Customer Billing Name"
                variant="outlined"
                autoComplete="off"
                name="billingName"
                value={inputData.billingName}
                onChange={handleInputs}
                sx={{ bgcolor: '#F8F8F8', width: '100%' }}
              />
            </Stack>
            <Stack fullWidth direction="row" gap="1rem">
              <TextField
                select
                fullWidth
                label="Billing Area"
                id="outlined-select-currency"
                name="billingArea"
                value={inputData.billingArea}
                onChange={handleInputs}
                sx={{ bgcolor: '#F8F8F8' }}
              >
                {BillingArea.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.value}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                fullWidth
                type="number"
                id="outlined-basic"
                label="Billing No "
                variant="outlined"
                autoComplete="off"
                name="billingNo"
                value={inputData.billingNo}
                onChange={handleInputs}
                sx={{ bgcolor: '#F8F8F8' }}
              />
            </Stack>
            <Stack fullWidth direction="row" gap="1rem">
              <TextField
                fullWidth
                type="number"
                id="outlined-basic"
                label="Mobile Number-1 "
                variant="outlined"
                autoComplete="off"
                name="mobileNo1"
                value={inputData.mobileNo1}
                onChange={handleInputs}
                sx={{ bgcolor: '#F8F8F8', width: '100%' }}
              />
              <TextField
                fullWidth
                type="number"
                id="outlined-basic"
                label="Mobile Number-2"
                variant="outlined"
                autoComplete="off"
                name="mobileNo2"
                value={inputData.mobileNo2}
                onChange={handleInputs}
                sx={{ bgcolor: '#F8F8F8', width: '100%' }}
              />
            </Stack>
            <Stack fullWidth direction="row" gap="1rem">
              <TextField
                fullWidth
                type="email"
                id="outlined-basic"
                label="Email"
                variant="outlined"
                autoComplete="off"
                name="email"
                value={inputData.email}
                onChange={handleInputs}
                sx={{ bgcolor: '#F8F8F8' }}
              />
              <TextField
                fullWidth
                type="number"
                id="outlined-basic"
                label="Security Deposit"
                defaultValue="₹ 0"
                variant="outlined"
                autoComplete="off"
                name="securityDeposit"
                value={inputData.securityDeposit}
                onChange={handleInputs}
                sx={{ bgcolor: '#F8F8F8' }}
              />
            </Stack>
            <Stack fullWidth direction="row" gap="1rem">
              <TextField
                fullWidth
                multiline
                id="outlined-multiline-flexible"
                label="Address"
                rows={4}
                name="address"
                value={inputData.address}
                onChange={handleInputs}
                sx={{ bgcolor: '#F8F8F8' }}
              />
              <TextField
                fullWidth
                type="number"
                id="outlined-basic"
                label="GST No"
                variant="outlined"
                autoComplete="off"
                name="gstNo"
                value={inputData.gstNo}
                onChange={handleInputs}
                sx={{ bgcolor: '#F8F8F8', height: 'fit-content' }}
              />
            </Stack>
            <Stack fullWidth direction="row" gap="1rem">
              <TextField
                fullWidth
                id="outlined-basic"
                label="Customer Code"
                variant="outlined"
                autoComplete="off"
                name="customerCode"
                value={inputData.customerCode}
                onChange={handleInputs}
                sx={{ bgcolor: '#F8F8F8', height: 'fit-content' }}
              />
              <TextField
                fullWidth
                id="outlined-multiline-flexible"
                label="Remark"
                multiline
                rows={4}
                name="remark"
                value={inputData.remark}
                onChange={handleInputs}
                sx={{ bgcolor: '#F8F8F8' }}
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
            Hardware Detail
          </Typography>
          <Stack gap="1rem" sx={{ width: '100%', padding: '1rem' }}>
            <Stack fullWidth direction="row" gap="1rem">
              <TextField
                fullWidth
                id="outlined-basic"
                label="STB Name"
                placeholder="STB Name (Den/JIO/Hathway...)"
                variant="outlined"
                autoComplete="off"
                name="stbName"
                value={inputData.stbName}
                onChange={handleInputs}
                sx={{ bgcolor: '#F8F8F8' }}
              />
              <TextField
                fullWidth
                type="number"
                id="outlined-basic"
                label="STB Number"
                placeholder="STB Number"
                variant="outlined"
                autoComplete="off"
                name="stbNumber"
                value={inputData.stbNumber}
                onChange={handleInputs}
                sx={{ bgcolor: '#F8F8F8', width: '100%' }}
              />
            </Stack>
            <Stack fullWidth direction="row" gap="1rem">
              <TextField
                fullWidth
                type="number"
                id="outlined-basic"
                label="Card Number"
                placeholder="CARD/VC Number"
                variant="outlined"
                autoComplete="off"
                name="cardNumber"
                value={inputData.cardNumber}
                onChange={handleInputs}
                sx={{ bgcolor: '#F8F8F8', width: '100%' }}
              />
              <TextField
                fullWidth
                type="number"
                id="outlined-basic"
                label="Membership Number"
                placeholder="Membership/Account Number"
                variant="outlined"
                autoComplete="off"
                name="membershipNo"
                value={inputData.membershipNo}
                onChange={handleInputs}
                sx={{ bgcolor: '#F8F8F8', width: '100%' }}
              />
            </Stack>
            <Button
              variant="contained"
              onClick={() => {
                onclickShowCard();
              }}
              startIcon={<AddCircleOutlineIcon />}
              sx={{ width: 'fit-content' }}
            >
              Add
            </Button>

            <Divider sx={{ my: '10px' }} />
            {showCard ? (
              <Stack
                sx={{
                  border: '1px solid #D8D8D8',
                  borderRadius: '10px',
                  padding: '1rem',
                  width: '300px',
                  gap: '1rem',
                  position: 'relative',
                }}
              >
                <Stack direction="row" gap="10px" width="100%">
                  <Typography sx={{ width: '50%', fontSize: '12px', color: 'grey' }}>STB NAME</Typography>
                  <Typography sx={{ width: '50%', fontSize: '12px' }}>{stbName}</Typography>
                </Stack>
                <Stack direction="row" gap="10px" width="100%">
                  <Typography sx={{ width: '50%', fontSize: '12px', color: 'grey' }}>STB Number</Typography>
                  <Typography sx={{ width: '50%', fontSize: '12px' }}>{stbNumber}</Typography>
                </Stack>
                <Stack direction="row" gap="10px" width="100%">
                  <Typography sx={{ width: '50%', fontSize: '12px', color: 'grey' }}>Card Number</Typography>
                  <Typography sx={{ width: '50%', fontSize: '12px' }}>{cardNumber}</Typography>
                </Stack>
                <Stack direction="row" gap="10px" width="100%">
                  <Typography sx={{ width: '50%', fontSize: '12px', color: 'grey' }}>Membership No</Typography>
                  <Typography sx={{ width: '50%', fontSize: '12px' }}>{membershipNo}</Typography>
                </Stack>
                <DeleteOutlineIcon sx={{ position: 'absolute', right: 10, top: 10 }} />
              </Stack>
            ) : null}
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
                {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DatePicker
                                        label="Select Date"
                                        value={inputData.startDate}
                                        onChange={(newValue) => setInputData(newValue)}
                                        renderInput={(props) => <TextField {...props} />}
                                        format='DD/MM/YYYY'
                                    />
                                </LocalizationProvider> */}
                <LocalizationProvider dateAdapter={AdapterDayjs} locale="en">
                  <DemoItem label="Start Date">
                    <DatePicker
                      value={inputData.startDate}
                      onChange={(newValue) => setInputData((prevData) => ({ ...prevData, startDate: newValue }))}
                      renderInput={(params) => <TextField {...params} />}
                      format="DD/MM/YYYY"
                      dayjs={dayjs}
                    />
                  </DemoItem>
                </LocalizationProvider>
                <Stack>
                  <Typography>
                    Till <b>30-Apr-2023</b> opening balance is :
                  </Typography>
                  <FormControl component="fieldset">
                    <RadioGroup
                      aria-label="options"
                      name="openingBalanceRadio"
                      value={inputData.openingBalanceRadio}
                      onChange={handleInputs}
                      sx={{ display: 'flex', flexDirection: 'row' }}
                    >
                      <FormControlLabel
                        value="outstanding"
                        control={<Radio />}
                        label="Outstanding"
                        labelPlacement="end"
                      />
                      <FormControlLabel value="advance" control={<Radio />} label="Advance" labelPlacement="end" />
                    </RadioGroup>
                  </FormControl>
                  <TextField
                    type="number"
                    id="outlined-start-adornment"
                    name="openingBalanceAmount"
                    value={inputData.openingBalanceAmount}
                    onChange={handleInputs}
                    sx={{ m: 1, width: '25ch' }}
                    InputProps={{
                      startAdornment: <InputAdornment position="start">₹</InputAdornment>,
                    }}
                  />
                </Stack>
              </Stack>
            </Stack>
            <Stack sx={{ border: '1px solid #D8D8D8', borderRadius: '10px', padding: '1rem', width: '50%' }}>
              <Stack fullWidth gap="1rem">
                <DemoItem label="Additional Charge/Discount per month">
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    placeholder="0"
                    variant="outlined"
                    autoComplete="off"
                    name="additionalChargeDiscount"
                    value={inputData.additionalChargeDiscount}
                    onChange={handleInputs}
                    sx={{ bgcolor: '#F8F8F8', width: '100%' }}
                  />
                  <FormControl component="fieldset">
                    <RadioGroup
                      aria-label="options"
                      name="additionalChargeRadio"
                      value={inputData.additionalChargeRadio}
                      onChange={handleInputs}
                      sx={{ display: 'flex', flexDirection: 'row' }}
                    >
                      <FormControlLabel
                        value="additionalcharge"
                        control={<Radio />}
                        label="Additional Charge"
                        labelPlacement="end"
                      />
                      <FormControlLabel value="discount" control={<Radio />} label="Discount" labelPlacement="end" />
                    </RadioGroup>
                  </FormControl>
                </DemoItem>
              </Stack>
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
            Additional Details
          </Typography>
          <Stack direction="row" gap="1rem" fullWidth sx={{ width: '100%', padding: '1rem' }}>
            <Stack sx={{ border: '1px solid #D8D8D8', borderRadius: '10px', padding: '1rem', width: '50%' }}>
              <Stack fullWidth gap="2rem">
                <FormControl>
                  <FormLabel id="demo" sx={{ color: 'black', fontWeight: '600', fontSize: '20px' }}>
                    Bill Duration
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo"
                    defaultValue="female"
                    name="billDurationRadio"
                    value={inputData.billDurationRadio}
                    onChange={handleInputs}
                  >
                    <FormControlLabel value="endofeverymonth" control={<Radio />} label="End of every month" />
                    <FormControlLabel value="days" control={<Radio />} label="Days" />
                    <FormControlLabel value="month" control={<Radio />} label="Month" />
                  </RadioGroup>
                </FormControl>
                <TextField
                  select
                  id="outlined-select-currency"
                  defaultValue="Every 1 Month"
                  name="billDurationSelect"
                  value={inputData.billDurationSelect}
                  onChange={handleInputs}
                >
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
                  <RadioGroup
                    defaultValue="female"
                    name="billTypeRadio"
                    value={inputData.billTypeRadio}
                    onChange={handleInputs}
                  >
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
                  <RadioGroup
                    defaultValue="female"
                    name="gstTypeRadio"
                    value={inputData.gstTypeRadio}
                    onChange={handleInputs}
                  >
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
        <Button
          variant="contained"
          endIcon={<TelegramIcon />}
          onClick={handleAddSubmit}
          sx={{ fontSize: '17px', mx: 'auto', px: '20px', width: '12%', height: '50px' }}
        >
          Add
        </Button>
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
      </Stack>
    </Box>
  );
};

export default AddCustomers;
