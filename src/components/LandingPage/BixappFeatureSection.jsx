import React from 'react'
import { Box, Typography, Stack } from '@mui/material'
import CustomersManagementImg from '../../assets/images/CustomersImg.png'
import AutomaticBilling from '../../assets/images/AutomaticBillingImg.png'
import CollectionAgent from '../../assets/images/AgentImg.png'
import GSTBilling from '../../assets/images/GstImg.png'
import OnlinePayment from '../../assets/images/PaymentImg.png'
import Report from '../../assets/images/Report.png'
import bgImg from '../../assets/images/FeaturesLayer.png'

const BixappFeatureSection = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', px: '7%', py: { xs: '10%', md: '6%' }, gap: '35px', backgroundImage: `url(${bgImg})`, width: '100%' }}>
            <Box sx={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <Typography sx={{ color: '#F7941D', fontWeight: '400', fontSize: { xs: '12px', sm: '14px', md: '16px' } }}>BIXAPP FEATURES</Typography>
                <Typography sx={{ fontWeight: '600', fontSize: { xs: '22px', md: '32px' }, textAlign: 'center' }}>Why Use Cable Buddy App ?</Typography>
            </Box>
            <Stack gap={2}>
                <Stack direction={{ xs: 'column', md: 'row' }} gap={2}>
                    <Stack direction='column' alignItems='center' gap='10px' bgcolor='white' px={{ xs: '5%', md: '2%' }} py={{ xs: '4%', md: '1%' }} borderRadius='12px' boxShadow='1px 1px 10px 2px lightgrey'
                        sx={{ '&:hover': { transform: 'scale(1.1)', transitionDelay: '0.2s', transitionDuration: '0.5s', transitionTimingFunction: 'linear' } }}>
                        <Box component="img" src={CustomersManagementImg} alt='customersmanage' sx={{ width: { xs: '80px', lg: '125px' } }} />
                        <Typography sx={{ fontWeight: '600', fontSize: '18px' }}>Customers Management</Typography>
                        <Typography sx={{ fontWeight: '400', fontSize: { xs: '12px', md: '13px', lg: '16px' }, color: '#A5A4A4' }}>Manage your customers on mobile and Desktop. No Need of Bill Books</Typography>
                    </Stack>
                    <Stack direction='column' alignItems='center' gap='10px' bgcolor='white' px={{ xs: '5%', md: '2%' }} py={{ xs: '4%', md: '1%' }} borderRadius='12px' boxShadow='1px 1px 10px 2px lightgrey'
                        sx={{ '&:hover': { transform: 'scale(1.1)', transitionDelay: '0.2s', transitionDuration: '0.5s', transitionTimingFunction: 'linear' } }}>
                        <Box component="img" src={AutomaticBilling} alt='automaticbilling' sx={{ width: { xs: '80px', lg: '125px' } }} />
                        <Typography sx={{ fontWeight: '600', fontSize: '18px' }}>Automatic Billing</Typography>
                        <Typography sx={{ fontWeight: '400', fontSize: { xs: '12px', md: '13px', lg: '16px' }, color: '#A5A4A4' }}>Manage your customers on mobile and Desktop. No Need of Bill Books</Typography>
                    </Stack>
                    <Stack direction='column' alignItems='center' gap='10px' bgcolor='white' px={{ xs: '5%', md: '2%' }} py={{ xs: '4%', md: '1%' }} borderRadius='12px' boxShadow='1px 1px 10px 2px lightgrey'
                        sx={{ '&:hover': { transform: 'scale(1.1)', transitionDelay: '0.2s', transitionDuration: '0.5s', transitionTimingFunction: 'linear' } }}>
                        <Box component="img" src={CollectionAgent} alt='collectionAgent' sx={{ width: { xs: '80px', lg: '125px' } }} />
                        <Typography sx={{ fontWeight: '600', fontSize: '18px' }}>Collection Agent</Typography>
                        <Typography sx={{ fontWeight: '400', fontSize: { xs: '12px', md: '13px', lg: '16px' }, color: '#A5A4A4' }}>Manage your customers on mobile and Desktop. No Need of Bill Books</Typography>
                    </Stack>
                </Stack >
                <Stack direction={{ xs: 'column', md: 'row' }} gap={2}>
                    <Stack direction='column' alignItems='center' gap='10px' bgcolor='white' px={{ xs: '5%', md: '2%' }} py={{ xs: '4%', md: '1%' }} borderRadius='12px' boxShadow='1px 1px 10px 2px lightgrey'
                        sx={{ '&:hover': { transform: 'scale(1.1)', transitionDelay: '0.2s', transitionDuration: '0.5s', transitionTimingFunction: 'linear' } }}>
                        <Box component="img" src={GSTBilling} alt='GSTBilling' sx={{ width: { xs: '80px', lg: '125px' } }} />
                        <Typography sx={{ fontWeight: '600', fontSize: '18px' }}>GST and Non GST Billing</Typography>
                        <Typography sx={{ fontWeight: '400', fontSize: { xs: '12px', md: '13px', lg: '16px' }, color: '#A5A4A4' }}>Manage your customers on mobile and Desktop. No Need of Bill Books</Typography>
                    </Stack>
                    <Stack direction='column' alignItems='center' gap='10px' bgcolor='white' px={{ xs: '5%', md: '2%' }} py={{ xs: '4%', md: '1%' }} borderRadius='12px' boxShadow='1px 1px 10px 2px lightgrey'
                        sx={{ '&:hover': { transform: 'scale(1.1)', transitionDelay: '0.2s', transitionDuration: '0.5s', transitionTimingFunction: 'linear' } }}>
                        <Box component="img" src={OnlinePayment} alt='OnlinePayment' sx={{ width: { xs: '80px', lg: '125px' } }} />
                        <Typography sx={{ fontWeight: '600', fontSize: '18px' }}>Online Payment</Typography>
                        <Typography sx={{ fontWeight: '400', fontSize: { xs: '12px', md: '13px', lg: '16px' }, color: '#A5A4A4' }}>Manage your customers on mobile and Desktop. No Need of Bill Books</Typography>
                    </Stack >
                    <Stack direction='column' alignItems='center' gap='10px' bgcolor='white' px={{ xs: '5%', md: '2%' }} py={{ xs: '4%', md: '1%' }} borderRadius='12px' boxShadow='1px 1px 10px 2px lightgrey'
                        sx={{ '&:hover': { transform: 'scale(1.1)', transitionDelay: '0.2s', transitionDuration: '0.5s', transitionTimingFunction: 'linear' } }}>
                        <Box component="img" src={Report} alt='Report' sx={{ width: { xs: '80px', lg: '125px' } }} />
                        <Typography sx={{ fontWeight: '600', fontSize: '18px' }}>Report</Typography>
                        <Typography sx={{ fontWeight: '400', fontSize: { xs: '12px', md: '13px', lg: '16px' }, color: '#A5A4A4' }}>Manage your customers on mobile and Desktop. No Need of Bill Books</Typography>
                    </Stack >
                </Stack >
            </Stack >
        </Box >
    )
}

export default BixappFeatureSection
