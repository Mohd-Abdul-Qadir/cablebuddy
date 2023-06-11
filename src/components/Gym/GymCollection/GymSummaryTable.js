import React from 'react';
import {
    Box,
    Typography,
    Stack,
    Table,
    TableHead,
    TableRow,
    TableCell,
    TableBody,
    TableContainer,
} from '@mui/material';

const GymSummaryTable = (props) => {

    const data = props.balanceHistories;

    return (
        <Stack sx={{ display: 'flex', border: '1px solid #D8D8D8', borderRadius: '10px', width: '100%' }}>
            <Box sx={{ border: '1px solid #D8D8D8', padding: '14px', borderRadius: '10px 10px 0 0', bgcolor: '#D8D8D8' }}>
                <Typography sx={{ textTransform: 'capitalize', fontWeight: '500', fontSize: '16px', color: 'black' }}>
                    11-March-2023
                </Typography>
            </Box>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ border: '1px solid #D8D8D8', py: '5px', px: '10px' }}>Customer</TableCell>
                        <TableCell sx={{ border: '1px solid #D8D8D8', py: '5px', px: '10px' }}>Amount</TableCell>
                        <TableCell sx={{ border: '1px solid #D8D8D8', py: '5px', px: '10px' }}>Discount</TableCell>
                        <TableCell sx={{ border: '1px solid #D8D8D8', py: '5px', px: '10px' }}>Total Payment</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow sx={{ borderBottom: 'none' }}>
                        <TableCell sx={{ border: '1px solid #D8D8D8', py: '5px', px: '10px' }}>37</TableCell>
                        <TableCell sx={{ border: '1px solid #D8D8D8', py: '5px', px: '10px' }}>12538</TableCell>
                        <TableCell sx={{ border: '1px solid #D8D8D8', py: '5px', px: '10px' }}>0</TableCell>
                        <TableCell sx={{ border: '1px solid #D8D8D8', py: '5px', px: '10px' }}>12538</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
            <Stack direction="row" padding="1rem" gap="1rem">
                <Stack sx={{ border: '1px solid #D8D8D8', borderRadius: '10px 10px 0 0', width: '100%' }}>
                    <Box sx={{ py: '10px', px: '10px', borderRadius: '10px 10px 0 0' }}>
                        <Typography sx={{ textTransform: 'capitalize', fontWeight: '500', fontSize: '16px' }}>
                            Customer Details
                        </Typography>
                    </Box>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell
                                        sx={{ border: '1px solid #D8D8D8', width: 'fit-content', fontWeight: '600', fontSize: '12px' }}
                                    >
                                        Name
                                    </TableCell>
                                    <TableCell
                                        sx={{ border: '1px solid #D8D8D8', width: 'fit-content', fontWeight: '600', fontSize: '12px' }}
                                    >
                                        Previous Balance
                                    </TableCell>
                                    <TableCell
                                        sx={{ border: '1px solid #D8D8D8', width: 'fit-content', fontWeight: '600', fontSize: '12px' }}
                                    >
                                        Paid Amount
                                    </TableCell>
                                    <TableCell
                                        sx={{ border: '1px solid #D8D8D8', width: 'fit-content', fontWeight: '600', fontSize: '12px' }}
                                    >
                                        Discount
                                    </TableCell>
                                    <TableCell
                                        sx={{ border: '1px solid #D8D8D8', width: 'fit-content', fontWeight: '600', fontSize: '12px' }}
                                    >
                                        Current Balance
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map((item, index) => (
                                    <TableRow key={index} sx={{ borderBottom: 'none' }}>
                                        <TableCell sx={{ border: '1px solid #D8D8D8', py: '5px', px: '10px', color: '#59B6EA' }}>
                                            {item.name}
                                        </TableCell>
                                        <TableCell sx={{ border: '1px solid #D8D8D8', py: '5px', px: '10px' }}>52</TableCell>
                                        <TableCell sx={{ border: '1px solid #D8D8D8', py: '5px', px: '10px' }}>
                                            {item.transactionAmount}
                                        </TableCell>
                                        <TableCell sx={{ border: '1px solid #D8D8D8', py: '5px', px: '10px' }}>0</TableCell>
                                        <TableCell sx={{ border: '1px solid #D8D8D8', py: '5px', px: '10px' }}>
                                            {item.remainingAmount}
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default GymSummaryTable;
