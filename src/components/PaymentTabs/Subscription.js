import { Box, Button, Stack, Table, TableBody, TableCell, Typography } from '@mui/material';
import React, { useState } from 'react';
import FolderIcon from '@mui/icons-material/Folder';
import TelegramIcon from '@mui/icons-material/Telegram';
import SubscriptionPopup from './SubscriptionPopup';

const Subscription = (props) => {
  const [customer, setCustomer] = useState(props.allData);
  console.log(customer, 'customer');
  return (
    <Box sx={{ width: '55vw' }}>
      <Stack>
        <Typography>
          <b>Current Subscription (1)</b>
        </Typography>
      </Stack>
      <Table sx={{ width: '100%' }}>
        <TableBody>
          <TableCell>1.</TableCell>
          <TableCell sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <FolderIcon /> APSFL Bill 350.00
          </TableCell>
        </TableBody>
      </Table>
      <Stack sx={{ paddingY: '1rem' }}>
        <SubscriptionPopup customer={customer} />
      </Stack>
    </Box>
  );
};

export default Subscription;
