import React from 'react'
import { Box, Typography, Paper, Stack, Table, TableHead, TableRow, TableCell, TableBody, TableContainer } from '@mui/material'
import Chip from '@mui/material/Chip';
import { OnlineTransactionData } from '../../../_mock/OnlineTransactionData'

const AgentOnlineTransaction = () => {
    return (
        <TableContainer sx={{ border: '1px solid #D8D8D8', width: '100%', overflowX: 'auto', whiteSpace: 'nowrap' }}>
            <Table sx={{ borderRadius: '10px' }}>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ border: '1px solid #D8D8D8', width: 'fit-content', fontWeight: '600', fontSize: '12px', textAlign: 'center' }}>#</TableCell>
                        <TableCell sx={{ border: '1px solid #D8D8D8', width: 'fit-content', fontWeight: '600', fontSize: '12px' }}>Name</TableCell>
                        <TableCell sx={{ border: '1px solid #D8D8D8', width: 'fit-content', fontWeight: '600', fontSize: '12px' }}>Amount</TableCell>
                        <TableCell sx={{ border: '1px solid #D8D8D8', width: 'fit-content', fontWeight: '600', fontSize: '12px' }}>Message</TableCell>
                        <TableCell sx={{ border: '1px solid #D8D8D8', width: 'fit-content', fontWeight: '600', fontSize: '12px' }}>Customer Code</TableCell>
                        <TableCell sx={{ border: '1px solid #D8D8D8', width: 'fit-content', fontWeight: '600', fontSize: '12px' }}>STB_No</TableCell>
                        <TableCell sx={{ border: '1px solid #D8D8D8', width: 'fit-content', fontWeight: '600', fontSize: '12px' }}>Card No</TableCell>
                        <TableCell sx={{ border: '1px solid #D8D8D8', width: 'fit-content', fontWeight: '600', fontSize: '12px' }}>Date</TableCell>
                        <TableCell sx={{ border: '1px solid #D8D8D8', width: 'fit-content', fontWeight: '600', fontSize: '12px' }}>Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        OnlineTransactionData.map((row) => (
                            <TableRow key={row.name} sx={{ borderBottom: 'none' }}>
                                <TableCell sx={{ border: '1px solid #D8D8D8', width: 'fit-content', color: '#212529', fontSize: '25px' }}>{row.icon}</TableCell>
                                <TableCell sx={{ border: '1px solid #D8D8D8', width: 'fit-content', textTransform: 'capitalize' }}>{row.name}</TableCell>
                                <TableCell sx={{ border: '1px solid #D8D8D8', width: 'fit-content', }}>	₹ <span>{row.amount}</span></TableCell>
                                <TableCell sx={{ border: '1px solid #D8D8D8', width: 'fit-content', }}>{row.message}</TableCell>
                                <TableCell sx={{ border: '1px solid #D8D8D8', width: 'fit-content', }}>{row.customercode}</TableCell>
                                <TableCell sx={{ border: '1px solid #D8D8D8', width: 'fit-content', }}>{row.stbNo}</TableCell>
                                <TableCell sx={{ border: '1px solid #D8D8D8', width: 'fit-content', }}>{row.cardNo}</TableCell>
                                <TableCell sx={{ border: '1px solid #D8D8D8', width: 'fit-content', }}>{row.date}</TableCell>
                                <TableCell sx={{ border: '1px solid #D8D8D8', width: 'fit-content', }}>
                                    {row.status && (
                                        <Chip label={row.status} size="small" sx={{ bgcolor: '#28a745', color: 'white', fontSize: '12px' }} />
                                    )}
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default AgentOnlineTransaction
