import { Box, ButtonBase, Input, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import HardwareEditPopup from './HardwareEditPopup';

const HardwareDetails = (props) => {
  // console.log(props.allData, 'hi i am props');
  const [data, setData] = useState(props.allData);

  const [stbName, setStbName] = useState(data.stbName);
  const [stbNumber, setStbNumber] = useState(data.stbNumber);
  const [card, setCard] = useState(data.cardNumber);
  const [member, setMember] = useState(data.membershipNo);

  console.log(data, ' it is props');
  return (
    <Box sx={{ width: '55vw' }}>
      <Stack mb="2rem">
        <Typography>
          <b>Add On Bill</b>
        </Typography>
      </Stack>
      <Stack gap="20px" sx={{ border: '1px solid #D8D8D8', padding: '2rem', borderRadius: '10px', width: '20rem' }}>
        <Stack>
          <Typography>STB NAME</Typography>
          <Input type="text" value={stbName} />
        </Stack>
        <Stack>
          <Typography>STB</Typography>
          <Input type="text" value={stbNumber} />
        </Stack>
        <Stack>
          <Typography>CARD</Typography>
          <Input type="text" value={card} />
        </Stack>
        <Stack>
          <Typography>MEMBERSHIP NO</Typography>
          <Input type="text" value={member} />
        </Stack>
        <Stack direction="row" gap="5px" justifyContent="right" mt="15px">
          <HardwareEditPopup data={data} />
          <ButtonBase sx={{ bgcolor: '#ff4136', padding: '5px', borderRadius: '5px', color: 'white' }}>
            Delete
          </ButtonBase>
        </Stack>
      </Stack>
    </Box>
  );
};

export default HardwareDetails;
