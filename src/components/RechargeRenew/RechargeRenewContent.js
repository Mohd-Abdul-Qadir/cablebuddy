import React, { useState } from 'react'
import { Stack, Paper, Button, Typography, Box, styled } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { SingleInputDateRangeField } from '@mui/x-date-pickers-pro/SingleInputDateRangeField';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import AllRechargedTable from './AllRechargedTable';
import PaymentPending from './PaymentPending';
import RechargeAndPaid from './RechargeAndPaid';

const StyledButton = styled(Button)(({ theme, selected }) => ({
    padding: '14px',
    color: selected ? '#fff' : theme.palette.text.primary,
    backgroundColor: selected ? '#2065D1' : 'transparent',
    '&:hover': {
        backgroundColor: selected ? '#2065D1' : theme.palette.action.hover,
    },
}));

const RechargeRenewContent = () => {
    const [tabs, setTabs] = useState('AllRecharged')

    const handleClick = (tab) => {
        setTabs(tab);
    };

    return (
        <Stack>
            <Box>
                <Typography sx={{ color: '#0C3547', fontWeight: '400', fontSize: '48px' }}>Recharged / Renewed</Typography>
            </Box>
            <Stack direction='column' justifyContent='center' alignItems='center' padding='1rem' width='100%' gap='2rem' >
                <Stack sx={{ border: '1px solid #D8D8D8', borderRadius: '10px', bgcolor: 'white', width: '100%', mt: '1rem' }}>
                    <Box
                        sx={{ bgcolor: '#F5F5F5', border: '1px solid #D8D8D8', padding: '14px', borderRadius: '10px 10px 0 0' }}
                    >
                        <Typography sx={{ fontWeight: '600', fontSize: '16px' }}>Filters And Option</Typography>
                    </Box>
                    <Stack padding="1rem" gap="10px">
                        <Typography>Select Range: </Typography>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['SingleInputDateRangeField']} sx={{ padding: '0px' }}>
                                <DateRangePicker slots={{ field: SingleInputDateRangeField }} sx={{ bgcolor: '#F5F5F5' }} />
                            </DemoContainer>
                        </LocalizationProvider>
                    </Stack>
                </Stack>
                <Paper elevation={3} sx={{
                    display: 'flex', border: '1px solid #D8D8D8', gap: '10px', bgcolor: 'white', width: '100%', height: '38px', padding: 0, borderRadius: '8px',
                }}>
                    <StyledButton variant={tabs === 'AllRecharged' ? 'contained' : 'text'}
                        selected={tabs === 'AllRecharged'}
                        onClick={() => handleClick('AllRecharged')}
                    >
                        All Recharged
                    </StyledButton>
                    <StyledButton variant={tabs === 'PaymentPending' ? 'contained' : 'text'}
                        selected={tabs === 'PaymentPending'}
                        onClick={() => handleClick('PaymentPending')}
                    >
                        Recharged but Payment Pending
                    </StyledButton>
                    <StyledButton variant={tabs === 'RechargedPaid' ? 'contained' : 'text'}
                        selected={tabs === 'RechargedPaid'}
                        onClick={() => handleClick('RechargedPaid')}
                    >
                        Recharged and Paid
                    </StyledButton>
                </Paper>
                {/* <Stack> */}
                {
                    tabs === 'AllRecharged' ? <AllRechargedTable /> : tabs === 'PaymentPending' ? <PaymentPending /> : tabs === 'RechargedPaid' ? <RechargeAndPaid /> : null
                }
                {/* </Stack> */}
            </Stack>
        </Stack>
    )
}

export default RechargeRenewContent
