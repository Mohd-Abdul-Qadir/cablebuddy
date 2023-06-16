import React, { useState } from 'react';
import {
  Box,
  Typography,
  Stack,
  Button,
  TextField,
  MenuItem,
  Divider,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import TelegramIcon from '@mui/icons-material/Telegram';
import SubscriptionPopup from './SubscriptionPopup';
import RenewPopup from './RenewPopup';
import CalenderPop from './CalenderPop';

const Months = [
  {
    value: '1 Month',
  },
  {
    value: '2 Months',
  },
  {
    value: '3 Months',
  },
  {
    value: '4 Months',
  },
  {
    value: '5 Months',
  },
  {
    value: '6 Months',
  },
  {
    value: '7 Months',
  },
  {
    value: '8 Months',
  },
  {
    value: '9 Months',
  },
  {
    value: '10 Months',
  },
  {
    value: '11 Months',
  },
  {
    value: '12 Months',
  },
];

const Renew = (props) => {
  const [data, setData] = useState(props.allData);
  return (
    <Box sx={{ width: '100%' }}>
      <Stack direction={{ xs: 'column', md: 'row' }} justifyContent='space-between' rowGap='12px' px='5px' py='15px' sx={{ width: '100%' }}>
        <Stack direction="column" gap="2rem" width={{ xs: '100%', md: '50%' }}>
          <Stack direction="row" justifyContent='space-between'>
            <Typography sx={{ width: '40%' }}>Customer: </Typography>
            <Typography>{data.name}</Typography>
          </Stack>
          <Stack direction="row" justifyContent='space-between'>
            <Typography sx={{ width: '40%' }}>Current Balance: </Typography>
            <Typography sx={{ bgcolor: '#072534', color: 'white', width: '50px', textAlign: 'center', borderRadius: '5px' }}
            >
              ₹ <span> {data.subdcriptionAmount}</span>
            </Typography>
          </Stack>
          <Stack direction="row" justifyContent='space-between'>
            <Typography sx={{ width: '40%' }}>Last Bill Date: </Typography>
            <Typography>
              31-May-2023
              {/* <ButtonBase sx={{ bgcolor: '#072534', color: 'white', px: '5px', borderRadius: '5px' }}>Edit</ButtonBase> */}
              <CalenderPop />
            </Typography>
          </Stack>
          <Stack>
            <Typography>Date:</Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} alignItems="center" justifyContent='space-between' gap="15px" mt='5px'>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker label='Start Date' sx={{ bgcolor: '#F8F8F8', width: '100%' }} />
              </LocalizationProvider>
              <Typography>
                <b>To</b>
              </Typography>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker label='End Date' sx={{ bgcolor: '#F8F8F8', width: '100%' }} />
              </LocalizationProvider>
            </Stack>
          </Stack>
          <Stack direction="row" alignItems="center" justifyContent='space-between'>
            <Typography sx={{ width: '40%' }}>Period:</Typography>
            <TextField select id="Months" defaultValue="1 Month" sx={{ minWidth: '45%' }}>
              {Months.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
          </Stack>
        </Stack>
        <Divider orientation="vertical" flexItem sx={{ marginRight: '30px' }} />
        <Stack sx={{ width: { xs: '100%', md: '30%' } }}>
          <Table sx={{ padding: '0px' }}>
            <TableHead>
              <TableRow sx={{ color: 'black', borderTop: '1px solid #D8D8D8', borderBottom: '1px solid #D8D8D8' }}>
                <TableCell sx={{ color: 'black' }}>#</TableCell>
                <TableCell sx={{ color: 'black' }}>
                  <b>Current Subscription (1)</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow sx={{ color: 'black', borderTop: '1px solid #D8D8D8' }}>
                <TableCell>1.</TableCell>
                <TableCell> APSFL Bill 350.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Stack>
      </Stack>
      <Stack direction="row" justifyContent="space-between" flexWrap='wrap' rowGap='14px'  py="1rem" borderTop="1px solid #D8D8D8" mt="10px">
        <RenewPopup data={data} />
        <Button variant="contained" endIcon={<TelegramIcon />}>
          Renew From Today
        </Button>
        <SubscriptionPopup />
      </Stack>
    </Box>
  );
};

export default Renew;
