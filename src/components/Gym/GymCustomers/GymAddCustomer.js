import React, { useState } from 'react';
import {
    Box, Stack, Typography, TextField, Select, MenuItem, Button, FormControl, FormControlLabel,
    Radio, RadioGroup, InputAdornment, FormLabel, InputLabel, Divider,
} from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import TelegramIcon from '@mui/icons-material/Telegram';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import dayjs from 'dayjs';
import moment from 'moment';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Gender = [
    {
        value: 'Male',
    },
    {
        value: 'Female',
    },
    {
        value: 'Others',
    }
];

const MembershipType = [
    {
        value: 'Monthly',
    },
    {
        value: 'Quarterly',
    },
    {
        value: 'Yearly',
    },
];

const MembershipStatus = [
    {
        value: 'Active',
    },
    {
        value: 'Inactive',
    },
    {
        value: 'Pending',
    },
];


const GymAddCustomer = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        gender: '',
        dateOfBirth: '01-01-2022',
        contactNumber: '',
        email: '',
        address: '',
        membershipType: '',
        startDate: '',
        membershipStatus: '',
        emergencyName: '',
        emergencyNumber: '',
        height: '',
        weight: '',
    });

    const onChangeForm = (event) => {
        setFormData((prevValue) => ({
            ...prevValue, [event.target.name]: event.target.value
        }))
    }

    const handleAddSubmit = () => {
        console.log(formData)
    }

    return (
        <Box sx={{ padding: '1%', width: '100%' }}>
            <Typography variant="h4">Add Customer</Typography>
            <Stack gap={5} mt='2rem'>
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
                        <Stack direction="row" gap="1rem">
                            <TextField
                                variant="outlined"
                                fullWidth
                                id="outlined-basic"
                                label="Full Name"
                                autoComplete="off"
                                sx={{ bgcolor: '#F8F8F8' }}
                                name='fullName'
                                onChange={onChangeForm}
                            />
                            <TextField select
                                fullWidth
                                label="Gender"
                                id="outlined-select-currency"
                                sx={{ bgcolor: '#F8F8F8' }}
                                defaultValue='Male'
                                name='gender'
                                onChange={onChangeForm}
                            >
                                {Gender.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.value}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </Stack>
                        <Stack direction="row" gap="1rem">
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker', 'DatePicker']} sx={{ padding: 0, width: '100%' }}>
                                    <DatePicker
                                        label="Date of Birth"
                                        sx={{ width: '100%' }}
                                        name='dateOfBirth'
                                        format="DD-MM-YYYY"
                                        onChange={(newValue) => {
                                            setFormData({
                                                ...formData, ["dateOfBirth"]: newValue.format('DD-MM-YYYY')
                                            })
                                        }}
                                    />
                                </DemoContainer>
                            </LocalizationProvider>
                            <TextField
                                fullWidth
                                type="number"
                                id="outlined-basic"
                                label="Contact Number"
                                variant="outlined"
                                autoComplete="off"
                                sx={{ bgcolor: '#F8F8F8' }}
                                name='contactNumber'
                                onChange={onChangeForm}
                            />
                        </Stack>
                        <Stack direction="row" gap="1rem">
                            <TextField
                                fullWidth
                                type="email"
                                label="Email"
                                variant="outlined"
                                autoComplete="off"
                                sx={{ bgcolor: '#F8F8F8', height: 'fit-content' }}
                                name='email'
                                onChange={onChangeForm}
                            />
                            <TextField
                                fullWidth
                                multiline
                                label="Address"
                                rows={4}
                                sx={{ bgcolor: '#F8F8F8' }}
                                name='address'
                                onChange={onChangeForm}
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
                        Membership Detail
                    </Typography>
                    <Stack gap="1rem" sx={{ width: '100%', padding: '1rem' }}>
                        <Stack direction="row" gap="1rem">
                            <TextField
                                select
                                fullWidth
                                label="Membership Type"
                                id="outlined-select-currency"
                                sx={{ bgcolor: '#F8F8F8' }}
                                defaultValue='Monthly'
                                name='membershipType'
                                onChange={onChangeForm}
                            >
                                {MembershipType.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.value}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker', 'DatePicker']} sx={{ padding: 0, width: '100%' }}>
                                    <DatePicker
                                        label="Start Date"
                                        format="DD-MM-YYYY"
                                        sx={{ width: '100%' }}
                                        name='startDate'
                                        onChange={(newValue) => {
                                            setFormData({
                                                ...formData, ["startDate"]: newValue.format('DD-MM-YYYY')
                                            })
                                        }}
                                    />
                                </DemoContainer>
                            </LocalizationProvider>
                        </Stack>
                        <Stack direction="row" gap="1rem">
                            <TextField select
                                fullWidth
                                label="Membership Status"
                                id="outlined-select-currency"
                                sx={{ bgcolor: '#F8F8F8' }}
                                defaultValue='Inactive'
                                name='membershipStatus'
                                onChange={onChangeForm}
                            >
                                {MembershipStatus.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.value}
                                    </MenuItem>
                                ))}
                            </TextField>
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
                        Emergency Contact
                    </Typography>
                    <Stack gap="1rem" sx={{ width: '100%', padding: '1rem' }}>
                        <Stack direction='row' gap="1rem">
                            <TextField
                                variant="outlined"
                                fullWidth
                                id="outlined-basic"
                                label="Emergency Contact Name"
                                autoComplete="off"
                                sx={{ bgcolor: '#F8F8F8', width: '100%' }}
                                name='emergencyName'
                                onChange={onChangeForm}
                            />
                            <TextField
                                fullWidth
                                type="number"
                                id="outlined-basic"
                                label="Emergency Contact Number"
                                variant="outlined"
                                autoComplete="off"
                                sx={{ bgcolor: '#F8F8F8', width: '100%' }}
                                name='emergencyNumber'
                                onChange={onChangeForm}
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
                        Health and Fitness Information
                    </Typography>
                    <Stack gap="1rem" sx={{ width: '100%', padding: '1rem' }}>
                        <Stack direction="row" gap="1rem">
                            <TextField
                                variant="outlined"
                                fullWidth
                                id="outlined-basic"
                                label="Height"
                                autoComplete="off"
                                sx={{ bgcolor: '#F8F8F8', width: '100%' }}
                                name='height'
                                onChange={onChangeForm}
                            />
                            <TextField
                                variant="outlined"
                                fullWidth
                                id="outlined-basic"
                                label="Weight"
                                autoComplete="off"
                                sx={{ bgcolor: '#F8F8F8', width: '100%' }}
                                name='weight'
                                onChange={onChangeForm}
                            />
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
            </Stack>
        </Box>
    );
};

export default GymAddCustomer;
