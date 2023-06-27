import React, { useState, useEffect } from 'react';
import { Box, Typography, Paper, Stack, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Icon } from '@iconify/react';
// import Button from 'src/theme/overrides/Button';

const ExcelandPdfWater = () => {
    const [agency, setAgency] = useState('');
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(`/api/users`, {
                    headers: {
                        'x-access-token': `${localStorage.getItem('accessToken')}`,
                    },
                });

                if (!response.ok) {
                    throw new Error('Error fetching user');
                }

                const user = await response.json();
                setAgency(user.agency);
            } catch (error) {
                console.error(error);
            }
        };

        fetchUser();
    }, []);
    const downloadPDF = async (productData) => {
        try {
            const queryParams = new URLSearchParams(productData);
            const url = `/api/download-pdf?${queryParams}`;

            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Download failed');
            }

            const blob = await response.blob();
            const downloadUrl = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = downloadUrl;
            link.setAttribute('download', 'product.pdf');
            document.body.appendChild(link);
            link.click();
        } catch (error) {
            console.error(error);
        }
    };

    // Usage:
    const productData = {
        name: agency,
    };
    console.log(productData.name, 'this is agency');

    //   downloadPDF(productData);
    return (
        <Stack
            height="fit-content"
            sx={{ border: '1px solid #D8D8D8', borderRadius: '10px 10px 10px 10px', bgcolor: '#F5F5F5' }}
        >
            <Box sx={{ border: '1px solid #D8D8D8', padding: '14px', borderRadius: '10px 10px 0 0', bgcolor: '#F5F5F5' }}>
                <Typography sx={{ textTransform: 'capitalize', fontWeight: '500', fontSize: '16px' }}>Excel and pdf</Typography>
            </Box>
            <Stack flexDirection="column" gap="2rem" py="5%" px="3%" bgcolor="white">
                <Stack direction="row" justifyContent="space-between" gap="1rem">
                    <Box
                        sx={{
                            border: '1px solid #D8D8D8',
                            width: '240px',
                            height: '140px',
                            borderRadius: '8px',
                            padding: '14px',
                            boxShadow: '2px 2px 2px lightgrey',
                        }}
                    >
                        <Box sx={{ display: 'flex', height: '50%', justifyContent: 'space-between' }}>
                            <Icon icon="vscode-icons:file-type-pdf2" width="50px" color="#F7941D" />
                            <Icon icon="arcticons:expense-register" width="50px" />
                        </Box>
                        <Box sx={{ display: 'flex', height: '50%', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <Typography sx={{ fontWeight: '500', fontSize: '20px' }}>Bills</Typography>
                            <Typography sx={{ textTransform: 'capitalize', color: '#59B6EA', fontWeight: '400', fontSize: '12px' }}>
                                Download bills of all customers
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            border: '1px solid #D8D8D8',
                            width: '240px',
                            height: '140px',
                            borderRadius: '8px',
                            padding: '14px',
                            boxShadow: '2px 2px 2px lightgrey',
                        }}
                    >
                        <Box sx={{ display: 'flex', height: '50%', justifyContent: 'space-between' }}>
                            <Icon icon="vscode-icons:file-type-pdf2" width="50px" color="#F7941D" />
                            <Icon icon="material-symbols:group-outline" width="50px" />
                        </Box>
                        <Box sx={{ display: 'flex', height: '50%', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <Typography sx={{ fontWeight: '500', fontSize: '20px' }}>Customer Product</Typography>
                            <Typography sx={{ textTransform: 'capitalize', color: '#59B6EA', fontWeight: '400', fontSize: '12px' }}>
                                Download area wise list
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            border: '1px solid #D8D8D8',
                            width: '240px',
                            height: '140px',
                            borderRadius: '8px',
                            padding: '14px',
                            boxShadow: '2px 2px 2px lightgrey',
                        }}
                    >
                        <Box sx={{ display: 'flex', height: '50%', justifyContent: 'space-between' }}>
                            <Icon icon="vscode-icons:file-type-excel" width="50px" color="#F7941D" />
                            <Icon icon="material-symbols:group-outline" width="50px" />
                        </Box>
                        <Box sx={{ display: 'flex', height: '50%', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <Typography sx={{ fontWeight: '500', fontSize: '20px' }}>Customer List</Typography>
                            <Typography sx={{ textTransform: 'capitalize', color: '#59B6EA', fontWeight: '400', fontSize: '12px' }}>
                                Download customer list
                            </Typography>
                        </Box>
                    </Box>
                </Stack>
                <Stack direction="row" justifyContent="space-between" gap="1rem">
                    <Box
                        sx={{
                            border: '1px solid #D8D8D8',
                            width: '240px',
                            height: '140px',
                            borderRadius: '8px',
                            padding: '14px',
                            boxShadow: '2px 2px 2px lightgrey',
                        }}
                    >
                        <Box sx={{ display: 'flex', height: '50%', justifyContent: 'space-between' }}>
                            <Icon icon="vscode-icons:file-type-pdf2" width="50px" color="#F7941D" />
                            <Icon icon="arcticons:expense-register" width="50px" />
                        </Box>
                        <Box sx={{ display: 'flex', height: '50%', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <Typography sx={{ fontWeight: '500', fontSize: '20px' }}>Bills (Hindi)</Typography>
                            <Typography
                                sx={{
                                    textTransform: 'capitalize',
                                    color: '#59B6EA',
                                    fontWeight: '400',
                                    fontSize: '12px',
                                    cursor: 'pointer',
                                }}
                                onClick={() => {
                                    downloadPDF(productData);
                                }}
                            >
                                Download bills of all customers
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            border: '1px solid #D8D8D8',
                            width: '240px',
                            height: '140px',
                            borderRadius: '8px',
                            padding: '14px',
                            boxShadow: '2px 2px 2px lightgrey',
                        }}
                    >
                        <Box sx={{ display: 'flex', height: '50%', justifyContent: 'space-between' }}>
                            <Icon icon="vscode-icons:file-type-pdf2" width="50px" color="#F7941D" />
                            <Icon icon="ri:product-hunt-line" width="50px" />
                        </Box>
                        <Box sx={{ display: 'flex', height: '50%', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <Typography sx={{ fontWeight: '500', fontSize: '20px' }}>Product List</Typography>
                            <Typography sx={{ textTransform: 'capitalize', color: '#59B6EA', fontWeight: '400', fontSize: '12px' }}>
                                Download area products list
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            border: '1px solid #D8D8D8',
                            width: '240px',
                            height: '140px',
                            borderRadius: '8px',
                            padding: '14px',
                            boxShadow: '2px 2px 2px lightgrey',
                        }}
                    >
                        <Box sx={{ display: 'flex', height: '50%', justifyContent: 'space-between' }}>
                            <Icon icon="vscode-icons:file-type-excel" width="50px" color="#F7941D" />
                            <Icon icon="fluent:payment-16-regular" width="50px" />
                        </Box>
                        <Box sx={{ display: 'flex', height: '50%', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <Typography sx={{ fontWeight: '500', fontSize: '20px' }}>All Payments</Typography>
                            <Typography sx={{ textTransform: 'capitalize', color: '#59B6EA', fontWeight: '400', fontSize: '12px' }}>
                                Download all payments
                            </Typography>
                        </Box>
                    </Box>
                </Stack>
                <Stack direction="row" justifyContent="end">
                    <Box
                        sx={{
                            border: '1px solid #D8D8D8',
                            width: '240px',
                            height: '140px',
                            borderRadius: '8px',
                            padding: '14px',
                            boxShadow: '2px 2px 2px lightgrey',
                        }}
                    >
                        <Box sx={{ display: 'flex', height: '50%', justifyContent: 'space-between' }}>
                            <Icon icon="vscode-icons:file-type-excel" width="50px" color="#F7941D" />
                            <Icon icon="ri:bill-line" width="50px" />
                        </Box>
                        <Box sx={{ display: 'flex', height: '50%', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <Typography sx={{ fontWeight: '500', fontSize: '20px' }}>All Expenses</Typography>
                            <Typography sx={{ textTransform: 'capitalize', color: '#59B6EA', fontWeight: '400', fontSize: '12px' }}>
                                Download all expenses
                            </Typography>
                        </Box>
                    </Box>
                </Stack>
            </Stack>
        </Stack>
    );
};

export default ExcelandPdfWater;
