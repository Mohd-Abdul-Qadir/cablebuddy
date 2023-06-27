import React from 'react'
import { ExpenseTableData } from '../../../_mock/ExpensesTableData'
import SettingsIcon from '@mui/icons-material/Settings';
import Image from '../../Image';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const ExpensesTableWater = () => {

    return (
        <TableContainer sx={{ border: '1px solid #D8D8D8' }}>
            <Table sx={{ width: '110%' }}>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ border: '1px solid #D8D8D8' }}>S.No</TableCell>
                        <TableCell sx={{ border: '1px solid #D8D8D8' }}>Category</TableCell>
                        <TableCell sx={{ border: '1px solid #D8D8D8' }}>Amount</TableCell>
                        <TableCell sx={{ border: '1px solid #D8D8D8' }}>Comment</TableCell>
                        <TableCell sx={{ border: '1px solid #D8D8D8' }}>Date</TableCell>
                        <TableCell sx={{ border: '1px solid #D8D8D8' }}>Image</TableCell>
                        <TableCell sx={{ border: '1px solid #D8D8D8' }}><SettingsIcon /></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {ExpenseTableData.map((row) => (
                        <TableRow key={row.Sno}>
                            <TableCell sx={{ border: '1px solid #D8D8D8' }}>{row.Sno}</TableCell>
                            <TableCell sx={{ border: '1px solid #D8D8D8' }}>{row.Category}</TableCell>
                            <TableCell sx={{ border: '1px solid #D8D8D8' }}>{row.Amount}</TableCell>
                            <TableCell sx={{ border: '1px solid #D8D8D8' }}>{row.Comment}</TableCell>
                            <TableCell sx={{ border: '1px solid #D8D8D8' }}>{row.Date}</TableCell>
                            <TableCell sx={{ border: '1px solid #D8D8D8' }}>
                                <Image src={row.Image} alt='randomImage' />
                            </TableCell>
                            <TableCell sx={{ border: '1px solid #D8D8D8' }}>blank</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default ExpensesTableWater
