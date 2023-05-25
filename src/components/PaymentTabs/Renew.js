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
      <Stack direction="row" padding="1rem" sx={{ width: '100%' }}>
        <Stack direction="column" gap="2rem">
          <Stack direction="row">
            <Typography sx={{ width: '40%' }}>Customer: </Typography>
            <Typography>Srinivasarao Bathula</Typography>
          </Stack>
          <Stack direction="row">
            <Typography sx={{ width: '40%' }}>Current Balance: </Typography>
            <Typography
              sx={{ bgcolor: '#072534', color: 'white', width: '50px', textAlign: 'center', borderRadius: '5px' }}
            >
              ₹ <span> 0</span>
            </Typography>
          </Stack>
          <Stack direction="row">
            <Typography sx={{ width: '40%' }}>Last Bill Date: </Typography>
            <Typography>
              31-May-2023
              {/* <ButtonBase sx={{ bgcolor: '#072534', color: 'white', px: '5px', borderRadius: '5px' }}>Edit</ButtonBase> */}
              <CalenderPop />
            </Typography>
          </Stack>
          <Stack>
            <Typography>Date:</Typography>
            <Stack direction="row" alignItems="center" gap="15px" sx={{}}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker fullWidth defaultValue={dayjs('2022-04-17')} sx={{ bgcolor: '#F8F8F8', width: '35%' }} />
              </LocalizationProvider>
              <Typography>
                <b>To</b>
              </Typography>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker fullWidth defaultValue={dayjs('2022-04-17')} sx={{ bgcolor: '#F8F8F8', width: '35%' }} />
              </LocalizationProvider>
            </Stack>
          </Stack>
          <Stack direction="row" alignItems="center">
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
        <Stack sx={{ width: '30%' }}>
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
      <Stack direction="row" justifyContent="space-between" py="1rem" borderTop="1px solid #D8D8D8" mt="10px">
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
