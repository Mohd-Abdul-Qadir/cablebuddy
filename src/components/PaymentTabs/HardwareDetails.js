import { Box, ButtonBase, Input, Stack, Typography } from '@mui/material'
import React from 'react'

const HardwareDetails = () => {
    return (
        <Box sx={{ width: '55vw' }}>
            <Stack mb='2rem'>
                <Typography><b>Add On Bill</b></Typography>
            </Stack>
            <Stack gap='20px' sx={{ border: '1px solid #D8D8D8', padding: '2rem', borderRadius: '10px', width: '20rem' }}>
                <Stack>
                    <Typography>STB NAME</Typography>
                    <Input type='text' />
                </Stack>
                <Stack>
                    <Typography>STB</Typography>
                    <Input type='text' />
                </Stack>
                <Stack>
                    <Typography>CARD</Typography>
                    <Input type='text' />
                </Stack>
                <Stack>
                    <Typography>MEMBERSHIP NO</Typography>
                    <Input type='text' />
                </Stack>
                <Stack direction='row' gap='5px' justifyContent='right' mt='15px'>
                    <ButtonBase sx={{ bgcolor: '#17a2b8', padding: '5px', borderRadius: '5px',color: 'white' }}>Edit</ButtonBase>
                    <ButtonBase sx={{ bgcolor: '#ff4136', padding: '5px', borderRadius: '5px',color: 'white' }}>Delete</ButtonBase>
                </Stack>
            </Stack>
        </Box>
    )
}

export default HardwareDetails
