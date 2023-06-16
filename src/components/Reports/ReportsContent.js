import React, { useState } from 'react';
import { Box, Typography, Paper, Stack, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Icon } from '@iconify/react';
import ExcelandPdf from './ReportTabs/ExcelandPdf';
import GstInvoice from './ReportTabs/GstInvoice';
import AreaSummary from './ReportTabs/AreaSummary';
import ProfitAndLoss from './ReportTabs/ProfitAndLoss';

const ReportsContent = () => {
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
        <Typography sx={{ color: '#0C3547', fontWeight: '400', fontSize: '48px' }}>Reports</Typography>
      </Box>
      <Stack direction={{ xs: 'column', md: 'row' }} padding="1rem" width="100%" gap="2rem">
        <List
          sx={{
            border: '1px solid #D8D8D8',
            borderRadius: '8px',
            padding: 0,
            width: '25%',
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
        <Stack>
          {activeTab === 'Excel&Pdf' ? (
            <ExcelandPdf />
          ) : activeTab === 'GstInvoice' ? (
            <GstInvoice />
          ) : activeTab === 'AreaSummary' ? (
            <AreaSummary />
          ) : activeTab === 'Profit&Loss' ? (
            <ProfitAndLoss />
          ) : null}
        </Stack>
      </Stack>
    </Box>
  );
};

export default ReportsContent;
