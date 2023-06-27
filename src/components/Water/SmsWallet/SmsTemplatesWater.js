import React, { useState } from 'react'
import { Button, Stack, Typography, Select, MenuItem, Table, TableHead, TableBody, TableRow, TableCell, IconButton } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import PersonIcon from '@mui/icons-material/Person';
import CopyAllIcon from '@mui/icons-material/CopyAll';
import PeopleIcon from '@mui/icons-material/People';

const SmsTemplatesWater = () => {
    
    const [language, setLanguage] = useState('');

    const handlelanguage = (event) => {
        setLanguage(event.target.value);
    };

    return (
        <Stack direction='row' justifyContent='space-between' alignItems='start' sx={{ padding: '14px' }}>
            <Stack direction='row' alignItems='center' justifyContent='space-between' gap='15px' sx={{ height: 'fit-content', width: '48%', border: '1px solid #D8D8D8', px: '1rem', py: '10px', borderRadius: '10px' }}>
                <Typography sx={{ fontSize: '14px', fontWeight: '700' }}>Templates</Typography>
                <Stack direction='row' gap='8px'>
                    <Button variant='contained' startIcon={<AddIcon />}>Add Template</Button>
                    <Select
                        size='small'
                        value={language}
                        onChange={handlelanguage}
                        displayEmpty
                    >
                        <MenuItem value=''>Select Language</MenuItem>
                        <MenuItem value='Hindi'>Hindi</MenuItem>
                        <MenuItem value='English'>English</MenuItem>
                        <MenuItem value='Assamese'>Assamese</MenuItem>
                        <MenuItem value='Bengali'>Bengali</MenuItem>
                        <MenuItem value='Gujarati'>Gujarati</MenuItem>
                        <MenuItem value='Kannada'>Kannada</MenuItem>
                        <MenuItem value='Malayalam'>Malayalam</MenuItem>
                        <MenuItem value='Marathi'>Marathi</MenuItem>
                        <MenuItem value='Oriya'>Oriya</MenuItem>
                        <MenuItem value='Punjabi'>Punjabi</MenuItem>
                        <MenuItem value='Tamil'>Tamil</MenuItem>
                        <MenuItem value='Telugu'>Telugu</MenuItem>
                        <MenuItem value='Urdu'>Urdu</MenuItem>
                        <MenuItem value='Others'>Others</MenuItem>
                    </Select>
                </Stack>
            </Stack>
            <Stack sx={{ width: '48%', border: '1px solid #D8D8D8', borderRadius: '10px', bgcolor: 'white', mt: '1rem' }}>
                <Stack direction='row' gap='5px' sx={{ borderBottom: '1px solid #D8D8D8', bgcolor: '#F5F5F5', borderRadius: '10px 10px 0 0', padding: '14px' }}>
                    <PersonIcon /><Typography>MESSAGE TAG FOR CUSTOMER</Typography>
                </Stack>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Tag For</TableCell>
                            <TableCell>Click To Copy Tag</TableCell>
                            <TableCell>Add In</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>Customer Name</TableCell>
                            <TableCell><a href="https://example.com">((customer_name))</a></TableCell>
                            <TableCell>
                                <IconButton><CopyAllIcon /></IconButton><IconButton><PeopleIcon /></IconButton>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Customer Mobile 1</TableCell>
                            <TableCell><a href="https://example.com">((customer_mobile1))</a></TableCell>
                            <TableCell>
                                <IconButton><CopyAllIcon /></IconButton><IconButton><PeopleIcon /></IconButton>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Customer Bill Name</TableCell>
                            <TableCell><a href="https://example.com">	((customer_bill_name))</a></TableCell>
                            <TableCell>
                                <IconButton><CopyAllIcon /></IconButton><IconButton><PeopleIcon /></IconButton>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Customer Billing Address</TableCell>
                            <TableCell><a href="https://example.com">	((customer_billing_address))</a></TableCell>
                            <TableCell>
                                <IconButton><CopyAllIcon /></IconButton><IconButton><PeopleIcon /></IconButton>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Customer Last Bill Date /Expiry Date</TableCell>
                            <TableCell><a href="https://example.com">	((customer_last_bill_date))</a></TableCell>
                            <TableCell>
                                <IconButton><CopyAllIcon /></IconButton><IconButton><PeopleIcon /></IconButton>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Customer Last Bill Amount</TableCell>
                            <TableCell><a href="https://example.com">((customer_last_bill_amount))</a></TableCell>
                            <TableCell>
                                <IconButton><CopyAllIcon /></IconButton><IconButton><PeopleIcon /></IconButton>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Stack>
        </Stack >
    )
}

export default SmsTemplatesWater
