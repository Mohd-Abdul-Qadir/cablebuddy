import React, { useState } from 'react';
import { Box, Typography, Paper, Stack, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Icon } from '@iconify/react';
import ExcelandPdfWater from './ReportTabs/ExcelandPdfWater';
import GstInvoiceWater from './ReportTabs/GstInvoiceWater';
import AreaSummaryWater from './ReportTabs/AreaSummaryWater';
import ProfitandLossWater from './ReportTabs/ProfitandLossWater';


const ReportsContentWater = () => {
    const [activeTab, setActiveTab] = useState('Excel&Pdf');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
            }}
        >
            <Box sx={{ width: '100%', px: '20px' }}>
                <Typography sx={{ color: '#0C3547', fontWeight: '400', fontSize: '48px' }}>Reports Water</Typography>
            </Box>
            <Stack direction='row' padding="1rem" width="100%" gap="2rem">
                <Stack sx={{ width: 'fit-content' }}>
                    <List
                        sx={{
                            border: '1px solid #D8D8D8',
                            borderRadius: '8px',
                            padding: 0,
                            width: '220px',
                            height: 'fit-content',
                            bgcolor: 'white',
                        }}
                    >
                        <ListItemButton
                            onClick={() => handleTabClick('Excel&Pdf')}
                            sx={{
                                display: 'flex',
                                gap: '10px',
                                bgcolor: activeTab === 'Excel&Pdf' ? '#2065D1' : 'initial',
                                color: activeTab === 'Excel&Pdf' ? 'white' : 'initial',
                                borderRadius: '8px 8px 0 0',
                                '&:hover': { bgcolor: activeTab === 'Excel&Pdf' ? '#2065D1' : '#f5f5f5' },
                            }}
                        >
                            <ListItemIcon sx={{ minWidth: 0 }}>
                                <Icon icon="ph:file-pdf" width="24px" color={activeTab === 'Excel&Pdf' ? 'white' : 'grey'} />
                            </ListItemIcon>
                            <ListItemText primary="Excel And Pdf" />
                        </ListItemButton>
                        <ListItemButton
                            onClick={() => handleTabClick('GstInvoice')}
                            sx={{
                                display: 'flex',
                                gap: '10px',
                                bgcolor: activeTab === 'GstInvoice' ? '#2065D1' : 'initial',
                                color: activeTab === 'GstInvoice' ? 'white' : 'initial',
                                borderRadius: '8px 8px 0 0',
                                '&:hover': { bgcolor: activeTab === 'GstInvoice' ? '#2065D1' : '#f5f5f5' },
                            }}
                        >
                            <ListItemIcon sx={{ minWidth: 0 }}>
                                <Icon icon="basil:invoice-outline" width="24px" color={activeTab === 'GstInvoice' ? 'white' : 'grey'} />
                            </ListItemIcon>
                            <ListItemText primary="Gst Invoice" />
                        </ListItemButton>
                        <ListItemButton
                            onClick={() => handleTabClick('AreaSummary')}
                            sx={{
                                display: 'flex',
                                gap: '10px',
                                bgcolor: activeTab === 'AreaSummary' ? '#2065D1' : 'initial',
                                color: activeTab === 'AreaSummary' ? 'white' : 'initial',
                                borderRadius: '8px 8px 0 0',
                                '&:hover': { bgcolor: activeTab === 'AreaSummary' ? '#2065D1' : '#f5f5f5' },
                            }}
                        >
                            <ListItemIcon sx={{ minWidth: 0 }}>
                                <Icon
                                    icon="carbon:summary-kpi-mirror"
                                    width="24px"
                                    color={activeTab === 'AreaSummary' ? 'white' : 'grey'}
                                />
                            </ListItemIcon>
                            <ListItemText primary="Area Summary" />
                        </ListItemButton>
                        <ListItemButton
                            onClick={() => handleTabClick('Profit&Loss')}
                            sx={{
                                py: '0px',
                                display: 'flex',
                                gap: '10px',
                                bgcolor: activeTab === 'Profit&Loss' ? '#2065D1' : 'initial',
                                color: activeTab === 'Profit&Loss' ? 'white' : 'initial',
                                borderRadius: '8px 8px 0 0',
                                '&:hover': { bgcolor: activeTab === 'Profit&Loss' ? '#2065D1' : '#f5f5f5' },
                            }}
                        >
                            <ListItemIcon sx={{ minWidth: 0 }}>
                                <Icon icon="basil:invoice-outline" width="24px" color={activeTab === 'Profit&Loss' ? 'white' : 'grey'} />
                            </ListItemIcon>
                            <ListItemText primary="Profit And Loss Statement" />
                        </ListItemButton>
                    </List>
                </Stack>
                <Stack sx={{ flex: 1, width: 'calc(100% - 220px)' }}>
                    {activeTab === 'Excel&Pdf' ? (
                        <ExcelandPdfWater />
                    ) : activeTab === 'GstInvoice' ? (
                        <GstInvoiceWater />
                    ) : activeTab === 'AreaSummary' ? (
                        <AreaSummaryWater />
                    ) : activeTab === 'Profit&Loss' ? (
                        <ProfitandLossWater />
                    ) : null}
                </Stack>
            </Stack>
        </Box>
    );
};

export default ReportsContentWater;
