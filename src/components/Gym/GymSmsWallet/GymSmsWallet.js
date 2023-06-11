import { useState } from 'react';
import { Box, Typography, Button, Stack, InputAdornment, IconButton, TextField, Pagination } from '@mui/material'
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import GymSendSMS from './GymSendSMS';
import GymSMSTemplates from './GymSMSTemplates';
import GymSMSReport from './GymSMSReport';
import GymSendSMSTable from './GymSendSMSTable';
import GymSMSReportTable from './GymSMSReportTable';



const activeTabStyle = {
    fontWeight: '600', fontSize: '13px',
    backgroundColor: '#2065D1',
    color: 'white',
    height: '2rem',
    textTransform: 'capitalize',
    '&:hover': {
        backgroundColor: '#2065D1',
        color: 'white',
    }
};

const unactiveStyle = {
    fontWeight: '600', fontSize: '13px',
    color: 'black',
    textTransform: 'capitalize',
    '&:hover': {
        backgroundColor: 'white',
    }
}

const GymSmsWallet = () => {

    const [activeTab, setActiveTab] = useState('Send SMS')
    const [status, setStatus] = useState('');
    const [area, setArea] = useState('');
    const [balance, setBalance] = useState('');
    const [expiry, setExpiry] = useState('');
    const [date, setDate] = useState('');


    const handleStatus = (event) => {
        setStatus(event.target.value);
    };
    const handleArea = (event) => {
        setArea(event.target.value);
    };
    const handleBalance = (event) => {
        setBalance(event.target.value);
    };
    const handleExpiry = (event) => {
        setExpiry(event.target.value)
    }
    const handleDate = (event) => {
        setDate(event.target.value);
    };

    return (
        <Box sx={{
            display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
            position: 'relative'
        }}>
            <Box sx={{ width: '100%', px: '20px' }}>
                <Typography sx={{ color: '#0C3547', fontWeight: '400', fontSize: '48px' }}>SMS/Wallet</Typography>
                <Typography sx={{ color: '#2065D1', fontWeight: '400', fontSize: '30px' }}>Total Balance  <Typography component='span' sx={{ fontWeight: '400', fontSize: '30px', color: 'black' }}>
                    2887.00</Typography>
                </Typography>
            </Box>
            <Stack direction='column' justifyContent='center' alignItems='center' padding='1rem' width='100%' gap='2rem' marginTop='1rem'>
                <Stack sx={{ width: '100%', bgcolor: 'white', border: '1px solid #D8D8D8', borderRadius: '12px' }}>
                    <Stack direction='row' gap='15px' sx={{ borderBottom: '1px solid #D8D8D8', px: '1rem', py: '10px', borderRadius: '10px 10px 0 0', bgcolor: '#F5F5F5' }}>
                        <Stack direction='row' alignItems='center' gap='10px'>
                            <Button onClick={() => { setActiveTab('Send SMS') }}
                                sx={activeTab === 'Send SMS' ? activeTabStyle : unactiveStyle}>Send SMS</Button>
                            <Button onClick={() => { setActiveTab('Sms Templates') }}
                                sx={activeTab === 'Sms Templates' ? activeTabStyle : unactiveStyle}>SMS Templates And Tags</Button>
                            <Button onClick={() => { setActiveTab('Sms Report') }}
                                sx={activeTab === 'Sms Report' ? activeTabStyle : unactiveStyle}>SMS Delivery Report</Button>
                        </Stack>
                    </Stack>
                    {
                        activeTab === 'Send SMS' ? <GymSendSMS /> : activeTab === 'Sms Templates' ? <GymSMSTemplates /> : activeTab === 'Sms Report' ? <GymSMSReport /> : null
                    }
                </Stack>
                <Stack sx={{ width: '100%' }}>
                    {
                        activeTab === 'Send SMS' ? <GymSendSMSTable /> : activeTab === 'Sms Report' ? <GymSMSReportTable /> : null
                    }
                </Stack>
            </Stack>
        </Box >
    )
}
export default GymSmsWallet
