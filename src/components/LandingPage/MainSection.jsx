import { Box, Button, Card, Stack, Typography } from '@mui/material'
import vector1 from '../../assets/Images/Vector-1.png'
import vector2 from '../../assets/Images/Vector-2.png'
import { Icon } from '@iconify/react';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
import Snake1 from '../../assets/Images/Snake1.jpg'
import Snake2 from '../../assets/Images/Snake2.jpg'
import Snake3 from '../../assets/Images/Snake3.jpg'
import FrontsectionImg from '../../assets/Images/FrontImage.png'
import BillingSoftImg from '../../assets/Images/InvoiceImage.png'
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import follower1 from '../../assets/Images/follower1.png'
import follower2 from '../../assets/Images/follower2.png'
import follower3 from '../../assets/Images/follower3.png'
import follower4 from '../../assets/Images/follower4.png'


const MainSection = () => {
    return (
        <Stack direction='column' sx={{ width: '100%', height: 'fit-content' }}>
            <Stack direction='row' justifyContent='space-between' alignItems='center' sx={{
                position: 'relative', width: '100%', px: '7%', py: { xs: '10%', md: '6%' }, height: 'fit-content', background: {
                    xs: 'linear-gradient(to right, rgba(248,162,58,0.9) 100%, rgb(250, 250, 250) 100%)',
                    md: 'linear-gradient(to right, #F8A23A 25%, rgba(250, 250, 250, 15) 74.58%)'
                }
            }}>
                <Box component="img" src={vector1} alt='vector1' sx={{ position: 'absolute', left: '-40px', top: '80px', width: '5rem', display: { xs: 'none', md: 'block' } }} />
                <Box component="img" src={vector2} alt='vector2' sx={{ position: 'absolute', left: '10px', top: '180px', width: '3rem', display: { xs: 'none', md: 'block' } }} />
                <Stack spacing='4%' sx={{ textTransform: 'capitalize', width: { xs: '100%', md: '44%', lg: '34%' } }}>
                    <Typography sx={{ fontWeight: '500', fontSize: { xs: '16px', lg: '20px' }, color: 'white' }}>Manage Your Business !!</Typography>
                    <Typography sx={{ fontWeight: '900', fontSize: { xs: '50px', lg: '64px' }, color: '#0C3547', lineHeight: '4rem' }}>BILLING SOFTWARE</Typography>
                    <Stack spacing='2%'>
                        <Typography sx={{ fontSize: { xs: '14px', lg: '16px' }, fontWeight: '400', color: '#0C3547' }}>Automatic billing and payment collection app</Typography>
                        <Typography sx={{ fontSize: { xs: '14px', lg: '16px' }, fontWeight: '400', color: '#0C3547' }}>Mobile app and desktop billing softwere</Typography>
                        <Typography sx={{ fontSize: { xs: '14px', lg: '16px' }, fontWeight: '400', color: '#0C3547' }}>Download the app now for free</Typography>
                    </Stack>
                    <Button startIcon={<Icon icon="logos:google-play-icon" width='38px' />} sx={{ bgcolor: '#F7941D', width: 'fit-content', marginTop: '8% !important', px: '20px', py: '8px', borderRadius: '12px', '&:hover': { bgcolor: 'rgba(247, 148, 29, 0.6)', boxShadow: '2px 2px 3px 2px #FFFFFF' } }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', color: 'white' }}>
                            <Typography sx={{ fontWeight: '600', fontSize: { xs: '8px', md: '10px' } }}>GET IT ON</Typography>
                            <Typography sx={{ fontWeight: '600', fontSize: { xs: '20px', lg: '30px' }, textTransform: 'capitalize', lineHeight: '35px', }}>Google Play</Typography>
                        </Box>
                    </Button>
                </Stack>
                <Box component="img" src={FrontsectionImg} alt='FrontsectionImg' sx={{ width: '50%', display: { xs: 'none', md: 'block' } }} />
            </Stack>

            {/* ...................second-section................... */}

            <Stack direction='row' alignItems='center' justifyContent='space-between' sx={{ px: '7%', py: { xs: '10%', md: '7%' }, display: 'flex' }}>
                <Stack direction='row' alignItems='center' sx={{ position: 'relative', width: '50%', height: '100%', display: { xs: 'none', md: 'block' } }}>
                    <Box component="img" src={BillingSoftImg} alt='bill' sx={{ width: '90%' }} />
                    <Card sx={{
                        position: 'absolute', top: '20%', right: '-4%', display: 'flex', flexDirection: 'column', gap: '8px', padding: '2%',
                        width: { xs: '130px', lg: '190px' }, borderRadius: '12px',
                    }}>
                        <Box display='flex' alignItems='center' gap='10px'>
                            <DesktopWindowsOutlinedIcon sx={{ color: '#F7941D', fontSize: '16px' }} />
                            <Typography sx={{ fontWeight: '400', fontSize: { xs: '12px', lg: '16px' } }}>App + Web</Typography>
                        </Box>
                        <Typography sx={{ fontWeight: '300', fontSize: { xs: '8px', lg: '12px' } }}>We provide both android and Web application for desktop</Typography>
                    </Card>
                    <Card sx={{ display: 'flex', position: 'absolute', right: '-6%', bottom: '30%', alignItems: 'center', width: 'fit-content', padding: '2%', borderRadius: '12px' }}>
                        <AvatarGroup max={4} spacing={2}>
                            <Avatar alt="Remy Sharp" src={follower1} sx={{ width: '25px', height: '25px' }} />
                            <Avatar alt="Travis Howard" src={follower2} sx={{ width: '25px', height: '25px' }} />
                            <Avatar alt="Cindy Baker" src={follower3} sx={{ width: '25px', height: '25px' }} />
                            <Avatar alt="Agnes Walker" src={follower4} sx={{ width: '25px', height: '25px' }} />
                        </AvatarGroup>
                        <Typography sx={{ ml: '5px', fontSize: { xs: '10px', lg: '14px' } }}>Followers</Typography>
                    </Card>
                    <Card sx={{
                        position: 'absolute', right: '15%', bottom: '-10%', display: 'flex', flexDirection: 'column', gap: '8px', padding: '2%',
                        width: { xs: '130px', lg: '190px' }, borderRadius: '12px'
                    }}>
                        <Box display='flex' alignItems='center' gap='10px'>
                            <StarBorderPurple500Icon sx={{ color: '#F7941D', fontSize: '18px' }} />
                            <Typography sx={{ fontWeight: '400', fontSize: { xs: '12px', lg: '16px' } }}>Rated 4.8</Typography>
                        </Box>
                        <Typography sx={{ fontWeight: '300', fontSize: { xs: '8px', lg: '12px' } }}>We provide both android and Web application for desktop</Typography>
                    </Card>
                </Stack>

                <Stack gap={2} direction='column' justifyContent='center' sx={{ width: { xs: '100%', md: '40%' }, position: 'relative', height: { xs: '100%', sm: '60vh' } }}>
                    <Box component="img" src={Snake1} alt='zigzag' sx={{ width: '100px', position: 'absolute', top: 0, display: { xs: 'none', sm: 'block' } }} />
                    <Typography sx={{ fontWeight: '400', fontSize: { xs: '12px', sm: '14px', md: '16px' }, color: '#F7941D' }}>// ABOUT BIX42</Typography>
                    <Typography sx={{ fontWeight: '600', fontSize: { xs: '22px', md: '32px' } }}>Billing Software</Typography>
                    <Typography sx={{ fontWeight: '400', fontSize: { xs: '14px', lg: '16px' }, color: '#A5A4A4' }}>Bix42 is helpful to merchants in their Customer Management and Collecting Payment from their Customers. It has automatic billing and reminder specialised for subscription based merchants</Typography>
                    <Box component="img" src={Snake2} alt='zigzag' sx={{ width: '100px', position: 'absolute', bottom: 0, display: { xs: 'none', sm: 'block' } }} />
                    <Box component="img" src={Snake3} alt='zigzag' sx={{ width: '100px', position: 'absolute', bottom: 0, right: 0, display: { xs: 'none', sm: 'block' } }} />
                </Stack>
            </Stack>
        </Stack >
    )
}

export default MainSection
