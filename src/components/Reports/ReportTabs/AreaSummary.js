import React, { useState } from 'react'
import { Box, Stack, Table, TableBody, TableCell, TableHead, TableRow, Typography, Button, Divider } from '@mui/material'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine } from "recharts";
import { AreaSummaryTableData } from '../../../_mock/AreaSummaryTable';


const data = [
    {
        name: "Page A",
        uv: 4000,
        pv: 2400,
        amt: 2400
    },
    {
        name: "Page B",
        uv: -1000,
        pv: 1398,
        amt: 2210
    },
    {
        name: "Page C",
        uv: -500,
        pv: -800,
        amt: 2290
    },
    {
        name: "Page D",
        uv: 2780,
        pv: 3908,
        amt: 2000
    },
    {
        name: "Page E",
        uv: -1890,
        pv: 4800,
        amt: 2181
    },
    {
        name: "Page F",
        uv: 2390,
        pv: -2000,
        amt: 2500
    },
    {
        name: "Page G",
        uv: 3490,
        pv: 4300,
        amt: 2100
    }
];

const AreaSummary = () => {
    const [openChart, setOpenChart] = useState(false);

    return (
        <Stack height='fit-content' sx={{ border: '1px solid #D8D8D8', borderRadius: '10px 10px 10px 10px', bgcolor: '#F5F5F5' }}>
            <Box sx={{ borderBottom: '1px solid #D8D8D8', padding: '14px', borderRadius: '10px 10px 0 0', bgcolor: '#F5F5F5' }}>
                <Typography sx={{ textTransform: 'capitalize', fontWeight: '500', fontSize: '16px' }}>Area Wise Summary</Typography>
            </Box>
            <Stack flexDirection='column' gap='1rem' py='5%' px='3%' bgcolor='white' border='1px solid #D8D8D8'>
                <Box sx={{ borderBottom: '1px solid #D8D8D8', padding: '14px', borderRadius: '10px 10px 0 0', bgcolor: '#F5F5F5' }}>
                    <Typography sx={{ textTransform: 'capitalize', fontWeight: '500', fontSize: '16px' }}>Month Wise</Typography>
                </Box>
                <BarChart
                    width={600}
                    height={300}
                    data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Bar dataKey="value1" fill="#8884d8" barSize={100} />
                    <Bar dataKey="value2" fill="#82ca9d" barSize={100} />
                </BarChart>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ bgcolor: '#8884d8', color: 'white' }}>Outstanding</TableCell>
                            <TableCell>Clear Balance</TableCell>
                            <TableCell sx={{ bgcolor: '#82ca9d', color: 'white' }}>Credit</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>Amount : ₹ 2824690</TableCell>
                            <TableCell>Amount : ₹ 0</TableCell>
                            <TableCell>Amount : ₹ -30350</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Customer : 1168</TableCell>
                            <TableCell>Customer : 1075</TableCell>
                            <TableCell>Customer : 90</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <Button variant='contained' onClick={() => { setOpenChart(!openChart) }}>Get Area Wise Stats</Button>

                <Stack padding='14px' gap='20px' sx={{ display: `${openChart === true ? 'block' : 'none'}` }}>
                    <Stack sx={{ bgcolor: '#82ca9d', padding: '10px' }}>
                        <Typography sx={{ color: 'white', textAlign: 'center', fontWeight: '500', fontSize: '20px' }}>Balance Summary
                        </Typography>
                    </Stack>
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        {/* <Legend /> */}
                        <ReferenceLine y={0} stroke="#000" />
                        <Bar dataKey="pv" fill="#8884d8" />
                        <Bar dataKey="uv" fill="#82ca9d" />
                    </BarChart>
                    <Divider />
                    <Stack gap='20px'>
                        {
                            AreaSummaryTableData.map((row) => (
                                <Box sx={{ borderRadius: '10px', border: '1px solid #D8D8D8', height: 'fit-content' }}>
                                    <Box sx={{ borderRadius: '10px 10px 0 0' }}>
                                        <Typography sx={{ textTransform: 'capitalize', fontWeight: '500', fontSize: '16px', textAlign: 'center', bgcolor: '#ece9e9', borderRadius: '10px 10px 0 0', padding: '10px' }}>
                                            {row.heading}
                                        </Typography>
                                    </Box>
                                    <Table>
                                        <TableHead sx={{}}>
                                            <TableRow>
                                                <TableCell sx={{ border: '1px solid #D8D8D8', py: '5px', fontWeight: '600', fontSize: '14px', textAlign: 'center', bgcolor: 'white' }}><b>Outstanding</b></TableCell>
                                                <TableCell sx={{ border: '1px solid #D8D8D8', py: '5px', fontWeight: '600', fontSize: '14px', textAlign: 'center', bgcolor: 'white' }}><b>Clear Balance</b></TableCell>
                                                <TableCell sx={{ border: '1px solid #D8D8D8', py: '5px', fontWeight: '600', fontSize: '14px', textAlign: 'center', bgcolor: 'white' }}><b>Credit</b></TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            <TableRow sx={{ borderBottom: 'none' }}>
                                                <TableCell sx={{ textAlign: 'center', border: '1px solid #D8D8D8', py: '5px' }}>Amount:- {row.outstandingAmount}</TableCell>
                                                <TableCell sx={{ textAlign: 'center', border: '1px solid #D8D8D8', py: '5px' }}>Amount:- {row.clearbalanceAmount}</TableCell>
                                                <TableCell sx={{ textAlign: 'center', border: '1px solid #D8D8D8', py: '5px' }}>Amount:- {row.creditAmount}</TableCell>
                                            </TableRow>
                                            <TableRow sx={{ borderBottom: 'none' }}>
                                                <TableCell sx={{ textAlign: 'center', border: '1px solid #D8D8D8', py: '5px' }}>Customer:- {row.outstandingCustomer}</TableCell>
                                                <TableCell sx={{ textAlign: 'center', border: '1px solid #D8D8D8', py: '5px' }}>Customer:- {row.clearbalanceCustomer}</TableCell>
                                                <TableCell sx={{ textAlign: 'center', border: '1px solid #D8D8D8', py: '5px' }}>Customer:- {row.creditCustomer}</TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </Box>
                            ))
                        }
                    </Stack>
                </Stack>
            </Stack>

        </Stack>
    )
}

export default AreaSummary
