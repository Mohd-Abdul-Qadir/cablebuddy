import React, { useState } from 'react'
import { Box, Typography, Stack, Button } from '@mui/material'
import { ClientData } from './OurClientsData';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { v4 as uuidv4 } from 'uuid';
import { Icon } from '@iconify/react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const OurClientsSection = () => {
    const CustomButtonGroup = ({ next, previous, carouselState }) => {
        // const { currentSlide, slidesToShow, totalItems } = carouselState;
        // const firstVisibleIndex = currentSlide;
        // const lastVisibleIndex = currentSlide + slidesToShow - 1;
        // const showLeftArrow = firstVisibleIndex > 0;
        // const showRightArrow = lastVisibleIndex < totalItems - 1;

        return (
            <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', position: 'absolute', zIndex: 5 }}>
                <Button disableTouchRipple onClick={previous} sx={{ position: 'absolute', left: '10px', '&:hover': { backgroundColor: 'transparent' } }}>
                    <Icon icon="ph:arrow-circle-left" color='#F7941D' width='50px' />
                </Button>
                <Button disableTouchRipple onClick={next} sx={{ position: 'absolute', right: '10px', '&:hover': { backgroundColor: 'transparent' } }}>
                    <Icon icon="ph:arrow-circle-right" color='#F7941D' width='50px' />
                </Button>

            </Box>
        )
    }

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1536 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 1536, min: 1300 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1300, min: 1000 },
            items: 3
        },
        bigmobile: {
            breakpoint: { max: 1000, min: 650 },
            items: 2
        },
        mdmobile: {
            breakpoint: { max: 650, min: 500 },
            items: 1.3
        },
        mobile: {
            breakpoint: { max: 500, min: 0 },
            items: 1
        }
    };

    return (
        <Box sx={{ px: '7%', py: '6%', width: '100%', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Typography sx={{ fontWeight: '600', fontSize: { xs: '22px', md: '32px' }, color: '#F7941D', textAlign: 'center' }}>OUR CLIENTS</Typography>
            <Typography sx={{ textTransform: 'capitalize', fontWeight: '600', fontSize: { xs: '22px', md: '32px' }, textAlign: 'center' }}>We are Trusted By 1,00,000 + Merchants</Typography>
            <Carousel responsive={responsive} customButtonGroup={<CustomButtonGroup />} infinite={true} arrows={false}>
                {
                    ClientData.map((card) => (
                        <Card elevation={4} key={uuidv4()} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: { xs: '95%' }, height: 'fit-content', px: '15px', pt: '15px', borderRadius: '8px', margin: '4px', gap: '12px' }}>
                            <CardMedia
                                component="img"
                                image={card.image}
                                sx={{ height: { xs: '60%', sm: '350px' }, objectFit: 'cover', objectPosition: 'center', borderRadius: '8px' }}
                            />
                            <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'end', gap: '5%', padding: 0, height: '40%' }}>
                                <Typography sx={{ fontWeight: '600', fontSize: '16px' }}>{card.name}</Typography>
                                <Typography sx={{ fontWeight: '400', fontSize: { xs: '12px', sm: '14px' }, color: '#A5A4A4' }}>{card.place}</Typography>
                                <Typography sx={{ fontWeight: '400', fontSize: { xs: '11px', sm: '14px' }, color: '#A5A4A4', mt: '5px' }}>{card.about}</Typography>
                            </CardContent>
                        </Card>
                    ))
                }
            </Carousel>
        </Box >
    )
}

export default OurClientsSection
