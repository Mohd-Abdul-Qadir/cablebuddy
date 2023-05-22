import React, { useState } from 'react'
import { Box, Typography, Stack, Button, TextField, InputAdornment, MenuItem, Divider ,ButtonBase} from '@mui/material'
import ShareIcon from '@mui/icons-material/Share';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import TelegramIcon from '@mui/icons-material/Telegram';
import CalenderPop from './CalenderPop';


const PaymentMode = [
    {
        value: 'CASH',
    },
    {
        value: 'Cheque',
    },
    {
        value: 'BHIM',
    },
    {
        value: 'PayTM',
    },
    {
        value: 'UPI',
    },
    {
        value: 'Coupon',
    },
    {
        value: 'Portal',
    },
    {
        value: 'Bank Transfer',
    },
    {
        value: 'Others',
    },
];

const CollectPayment = () => {

    const [price, setPrice]=useState(0)
    const [totalAmount, setTotalAmount]=useState(500)
    const [discount, setDiscount]= useState(0)


    const handleDiscount=(e)=>{
        setDiscount(e.target.value)
    }

    const addAmount=(e)=>{
        setPrice(e.target.value)
    }

   


    return (
        <Box sx={{ width: '100%' }}>
            <Stack direction='row' alignItems='center' justifyContent='space-between' width='100%'>
                <Typography><b>Collect Payment</b></Typography>           
                <Button variant='contained' startIcon={<ShareIcon />}>Share payment link</Button>
            </Stack>
            <Stack direction='row' gap='1rem' padding='1rem' sx={{ width: '100%' }}>
                <Stack gap='1rem'>
                    <Stack sx={{ border: '1px solid #D8D8D8', borderRadius: '10px', width: '220px' }}>
                        <Typography sx={{ py: '4%', fontSize: '14px', width: '100%', borderRadius: '10px 10px 0 0', borderBottom: '1px solid #D8D8D8', textAlign: 'center' }}>Balance Amount :
                        </Typography>
                        <Typography sx={{ textAlign: 'center', py: '1rem', fontWeight: 600 }}>
                            ₹<span>0</span>
                        </Typography>
                        <Typography sx={{ py: '4%', fontSize: '14px', width: '100%', borderRadius: '10px 10px 0 0', borderTop: '1px solid #D8D8D8', textAlign: 'center' }}>Till Date : <CalenderPop/>
                        </Typography>
                    </Stack>
                    <Stack sx={{ border: '1px solid #D8D8D8', borderRadius: '10px', width: '220px' }}>
                        <Typography sx={{ py: '4%', fontSize: '14px', width: '100%', borderRadius: '10px 10px 0 0', borderBottom: '1px solid #D8D8D8', textAlign: 'center' }}>Last Bill Amount :
                        </Typography>
                        <Typography sx={{ textAlign: 'center', py: '1rem', fontWeight: 600 }}>
                            ₹<span>250</span>
                        </Typography>
                    </Stack>
                    <Stack sx={{ border: '1px solid #D8D8D8', borderRadius: '10px', width: '220px' }}>
                        <Typography sx={{ py: '4%', fontSize: '14px', width: '100%', borderRadius: '10px 10px 0 0', borderBottom: '1px solid #D8D8D8', textAlign: 'center' }}>Last Payment :
                        </Typography>
                        <Typography sx={{ textAlign: 'center', py: '1rem', fontWeight: 600 }}>
                            ₹ 350
                        </Typography>
                        <Typography sx={{ py: '4%', fontSize: '14px', width: '100%', borderRadius: '10px 10px 0 0', borderTop: '1px solid #D8D8D8', textAlign: 'center' }}>
                            Collected On: <span>02-May-2023</span>
                        </Typography>
                    </Stack>
                </Stack>
                <Stack sx={{ border: '1px solid #D8D8D8', borderRadius: '10px', gap: '12px', width: '500px', py: '10px', px: '15px' }}>
                    <Stack direction='row' alignItems='center'>
                        <Stack sx={{ width: '50%' }}>
                            <Typography>Paid Amount</Typography>
                        </Stack>
                        <TextField
                            fullWidth
                            defaultValue='0'
                            id="outlined-start-adornment"
                            onChange={addAmount}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">₹</InputAdornment>,
                            }}
                        />
                    </Stack>
                    <Stack direction='row' alignItems='center'>
                        <Stack sx={{ width: '50%' }}>
                            <Typography>Discount</Typography>
                        </Stack>
                        <TextField
                            fullWidth
                            defaultValue='0'
                            onChange={handleDiscount}
                            id="outlined-start-adornment"
                            InputProps={{
                                startAdornment: <InputAdornment position="start">₹</InputAdornment>,
                            }}
                        />
                    </Stack>
                    <Stack direction='row' alignItems='center'>
                        <Stack sx={{ width: '50%' }}>
                            <Typography>Mode</Typography>
                        </Stack>
                        <TextField
                            fullWidth
                            select
                            defaultValue='CASH'
                            id="paymentMode"
                        >
                            {
                                PaymentMode.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.value}
                                    </MenuItem>
                                ))
                            }
                        </TextField>
                    </Stack>
                    <Stack direction='row' alignItems='center'>
                        <Stack sx={{ width: '50%' }}>
                            <Typography>Record Time</Typography>
                        </Stack>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            {/* <DemoItem label="Start Date"> */}
                            <DatePicker fullWidth defaultValue={dayjs('2022-05-17')} sx={{ width: '100%' }} />
                            {/* </DemoItem> */}
                        </LocalizationProvider>
                    </Stack>
                    <Stack direction='row' alignItems='center'>
                        <Stack sx={{ width: '50%' }}>
                            <Typography>Comment</Typography>
                        </Stack>
                        <TextField
                            fullWidth
                            id="outlined-multiline-flexible"
                            placeholder="Comment"
                            multiline
                            rows={3}
                        />
                    </Stack>
                    <Stack direction='row' alignItems='center' gap='2rem'>
                        <Stack direction='row' alignItems='center' gap='40px'>
                            <Stack sx={{ width: '100%' }}>
                                <Typography>Total Payment</Typography>
                            </Stack>
                            <Typography sx={{ bgcolor: '#072534', color: 'white', width: '120px', textAlign: 'center', borderRadius: '5px' }}>₹ <span>{price-discount}</span></Typography>
                        </Stack>
                        <Stack direction='row' alignItems='center' gap='40px'>
                            <Stack sx={{ width: '100%' }}>
                                <Typography>New Balance</Typography>
                            </Stack>
                            <Typography sx={{ bgcolor: (totalAmount - price - discount) >= 0 ? 'green' : 'red', color: 'white', width: '120px', textAlign: 'center', borderRadius: '5px' }}>
  ₹ <span>{totalAmount - price - discount}</span>
</Typography>

                        </Stack>
                    </Stack>
                    <Divider sx={{ mt: '10px' }} />
                    <Stack sx={{ mx: 'auto', bgcolor: 'lightblue' }}>
                        <Button variant='contained' endIcon={<TelegramIcon />} sx={{ width: 'fit-content', display: 'flex', justifyContent: 'end' }}>Record</Button>
                    </Stack>
                </Stack>
            </Stack>
        </Box>
    )
}

export default CollectPayment
