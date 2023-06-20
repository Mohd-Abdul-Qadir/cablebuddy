import { Button, Stack, Typography } from '@mui/material';
import React from 'react';
import ActiveInactivePopup from './ActiveInactivePopup';

const ActiveInactive = () => {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center" width={{ xs: '100%', md: '55vw' }}>
      <Typography>
        <b>Active/Inactive</b>
      </Typography>
      {/* <Button variant="contained">Active/Inactive</Button> */}
      <ActiveInactivePopup />
    </Stack>
  );
};

export default ActiveInactive;
