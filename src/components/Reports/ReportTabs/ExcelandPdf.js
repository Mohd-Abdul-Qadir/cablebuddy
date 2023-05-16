import React, { useState } from 'react'
import { Box, Typography, Paper, Stack, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { Icon } from '@iconify/react';


const ExcelandPdf = () => {
    return (
        <Stack width='75%' height='fit-content' sx={{ border: '1px solid #D8D8D8', borderRadius: '10px 10px 10px 10px', bgcolor: '#F5F5F5' }}>
            <Box sx={{ border: '1px solid #D8D8D8', padding: '14px', borderRadius: '10px 10px 0 0', bgcolor: '#F5F5F5' }}>
                <Typography sx={{ textTransform: 'capitalize', fontWeight: '500', fontSize: '16px' }}>Excel and pdf</Typography>
            </Box>
            <Stack flexDirection='column' gap='2rem' py='5%' px='3%' bgcolor='white'>
                <Stack direction='row' justifyContent='space-between' gap='1rem'>
                    <Box sx={{ border: '1px solid #D8D8D8', width: '240px', height: '140px', borderRadius: '8px', padding: '14px', boxShadow: '2px 2px 2px lightgrey' }}>
                        <Box sx={{ display: 'flex', height: '50%', justifyContent: 'space-between' }}>
                            <Icon icon="ph:wallet-light" width='50px' color='#F7941D' />
                            <Icon icon="arcticons:expense-register" width='50px' />
                        </Box>
                        <Box sx={{ display: 'flex', height: '50%', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <Typography sx={{ fontWeight: '500', fontSize: '20px' }}>Bills</Typography>
                            <Typography sx={{ textTransform: 'capitalize', color: '#59B6EA', fontWeight: '400', fontSize: '12px' }}>Download bills of all customers</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ border: '1px solid #D8D8D8', width: '240px', height: '140px', borderRadius: '8px', padding: '14px', boxShadow: '2px 2px 2px lightgrey' }}>
                        <Box sx={{ display: 'flex', height: '50%', justifyContent: 'space-between' }}>
                            <Icon icon="ph:wallet-light" width='50px' color='#F7941D' />
                            <Icon icon="material-symbols:group-outline" width='50px' />
                        </Box>
                        <Box sx={{ display: 'flex', height: '50%', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <Typography sx={{ fontWeight: '500', fontSize: '20px' }}>Customer Product</Typography>
                            <Typography sx={{ textTransform: 'capitalize', color: '#59B6EA', fontWeight: '400', fontSize: '12px' }}>Download area wise list</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ border: '1px solid #D8D8D8', width: '240px', height: '140px', borderRadius: '8px', padding: '14px', boxShadow: '2px 2px 2px lightgrey' }}>
                        <Box sx={{ display: 'flex', height: '50%', justifyContent: 'space-between' }}>
                            <Icon icon="ph:wallet-light" width='50px' color='#F7941D' />
                            <Icon icon="material-symbols:group-outline" width='50px' />
                        </Box>
                        <Box sx={{ display: 'flex', height: '50%', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <Typography sx={{ fontWeight: '500', fontSize: '20px' }}>Customer List</Typography>
                            <Typography sx={{ textTransform: 'capitalize', color: '#59B6EA', fontWeight: '400', fontSize: '12px' }}>Download customer list</Typography>
                        </Box>
                    </Box>
                </Stack>
                <Stack direction='row' justifyContent='space-between' gap='1rem'>
                    <Box sx={{ border: '1px solid #D8D8D8', width: '240px', height: '140px', borderRadius: '8px', padding: '14px', boxShadow: '2px 2px 2px lightgrey' }}>
                        <Box sx={{ display: 'flex', height: '50%', justifyContent: 'space-between' }}>
                            <Icon icon="ph:wallet-light" width='50px' color='#F7941D' />
                            <Icon icon="arcticons:expense-register" width='50px' />
                        </Box>
                        <Box sx={{ display: 'flex', height: '50%', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <Typography sx={{ fontWeight: '500', fontSize: '20px' }}>Bills (Hindi)</Typography>
                            <Typography sx={{ textTransform: 'capitalize', color: '#59B6EA', fontWeight: '400', fontSize: '12px' }}>Download bills of all customers</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ border: '1px solid #D8D8D8', width: '240px', height: '140px', borderRadius: '8px', padding: '14px', boxShadow: '2px 2px 2px lightgrey' }}>
                        <Box sx={{ display: 'flex', height: '50%', justifyContent: 'space-between' }}>
                            <Icon icon="ph:wallet-light" width='50px' color='#F7941D' />
                            <Icon icon="material-symbols:group-outline" width='50px' />
                        </Box>
                        <Box sx={{ display: 'flex', height: '50%', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <Typography sx={{ fontWeight: '500', fontSize: '20px' }}>Product List</Typography>
                            <Typography sx={{ textTransform: 'capitalize', color: '#59B6EA', fontWeight: '400', fontSize: '12px' }}>Download area products list</Typography>
                        </Box>
                    </Box>
                    <Box sx={{ border: '1px solid #D8D8D8', width: '240px', height: '140px', borderRadius: '8px', padding: '14px', boxShadow: '2px 2px 2px lightgrey' }}>
                        <Box sx={{ display: 'flex', height: '50%', justifyContent: 'space-between' }}>
                            <Icon icon="ph:wallet-light" width='50px' color='#F7941D' />
                            <Icon icon="material-symbols:group-outline" width='50px' />
                        </Box>
                        <Box sx={{ display: 'flex', height: '50%', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <Typography sx={{ fontWeight: '500', fontSize: '20px' }}>All Payments</Typography>
                            <Typography sx={{ textTransform: 'capitalize', color: '#59B6EA', fontWeight: '400', fontSize: '12px' }}>Download all payments</Typography>
                        </Box>
                    </Box>
                </Stack>
                <Stack direction='row' justifyContent='end'>
                    <Box sx={{ border: '1px solid #D8D8D8', width: '240px', height: '140px', borderRadius: '8px', padding: '14px', boxShadow: '2px 2px 2px lightgrey' }}>
                        <Box sx={{ display: 'flex', height: '50%', justifyContent: 'space-between' }}>
                            <Icon icon="ph:wallet-light" width='50px' color='#F7941D' />
                            <Icon icon="material-symbols:group-outline" width='50px' />
                        </Box>
                        <Box sx={{ display: 'flex', height: '50%', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <Typography sx={{ fontWeight: '500', fontSize: '20px' }}>All Expenses</Typography>
                            <Typography sx={{ textTransform: 'capitalize', color: '#59B6EA', fontWeight: '400', fontSize: '12px' }}>Download all expenses</Typography>
                        </Box>
                    </Box>
                </Stack>
            </Stack>
        </Stack>
    )
}

export default ExcelandPdf

