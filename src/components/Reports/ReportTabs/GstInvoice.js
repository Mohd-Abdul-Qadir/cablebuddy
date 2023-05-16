import React, { useState } from 'react'
import { Box, Typography, Paper, Stack, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { Icon } from '@iconify/react';


const GstInvoice = () => {
    return (
        <Stack width='75%' height='fit-content' sx={{ border: '1px solid #D8D8D8', borderRadius: '10px 10px 10px 10px', bgcolor: '#F5F5F5' }}>
            <Box sx={{ borderBottom: '1px solid #D8D8D8', padding: '14px', borderRadius: '10px 10px 0 0', bgcolor: '#F5F5F5' }}>
                <Typography sx={{ textTransform: 'capitalize', fontWeight: '500', fontSize: '16px' }}>GST Invoice</Typography>
            </Box>
            <Stack flexDirection='column' gap='2rem' py='5%' px='3%' bgcolor='white'>
                jhj
            </Stack>
        </Stack>
    )
}

export default GstInvoice
