import React, { useState } from 'react'
import { Box, Typography, Stack, Button } from '@mui/material'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { v4 as uuidv4 } from 'uuid';
import { Icon } from '@iconify/react';


const OurClientsSection = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex(activeIndex === 0 ? ClientData.length - 1 : activeIndex - 1);
  };

  const handleNextClick = () => {
    setActiveIndex(activeIndex === ClientData.length - 1 ? 0 : activeIndex + 1);
  };

  const handleDragEnd = (event) => {
    const containerWidth = event.target.offsetWidth;
    const dragDistance = event.clientX - event.target.getBoundingClientRect().left;
    const cardWidth = 350; // Width of one card
    const cardsPerPage = Math.floor(containerWidth / cardWidth);
    const draggedCards = Math.round(dragDistance / cardWidth);

    if (draggedCards >= cardsPerPage) {
      handlePrevClick();
    } else if (draggedCards <= -cardsPerPage) {
      handleNextClick();
    }
  };

  return (
    <Box sx={{ px: '7%', py: '6%', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
      <Typography sx={{ fontWeight: '600', fontSize: '32px', color: '#F7941D' }}>OUR CLIENTS</Typography>
      <Typography sx={{ textTransform: 'capitalize', fontWeight: '600', fontSize: '32px', textAlign: 'center' }}>We are Trusted By 1,00,000 + Merchants</Typography>

      <Stack direction='row' alignItems='center' sx={{ position: 'relative', width: '100%', overflow: 'hidden' }}>

        <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', position: 'absolute', zIndex: 5 }}>
          <Button disableTouchRipple onClick={handlePrevClick} sx={{ position: 'absolute', left: '10px', '&:hover': { backgroundColor: 'transparent' } }}>
            <Icon icon="bi:arrow-left-circle-fill" color='black' width='45px' />
          </Button>
          <Button disableTouchRipple onClick={handleNextClick} sx={{ position: 'absolute', right: '10px', '&:hover': { backgroundColor: 'transparent' } }}>
            <Icon icon="bi:arrow-right-circle-fill" color='black' width='45px' />
          </Button>
        </Box>
        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: '20px',
            py: '5px',
            transition: 'transform 0.3s ease-in-out',
            transform: `translateX(-${activeIndex * 300}px)`,
            cursor: 'grab',
          }}
          onMouseUp={handleDragEnd}
        >
          {
            ClientData.map((card) => (
              <Card elevation={4} key={uuidv4()} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '5px', width: '350px', height: '500px', padding: '15px', borderRadius: '8px' }}>
                <CardMedia
                  component="img"
                  image={card.image}
                  sx={{ height: '60%', objectFit: 'cover', objectPosition: 'center', borderRadius: '8px' }}
                />
                <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: '5px', flexGrow: 1 }}>
                  <Typography sx={{ fontWeight: '600', fontSize: '16px' }}>{card.name}</Typography>
                  <Typography sx={{ fontWeight: '400', fontSize: '14px', color: '#A5A4A4' }}>{card.place}</Typography>
                  <Typography sx={{ fontWeight: '400', fontSize: '14px', color: '#A5A4A4', mt: '5px' }}>{card.about}</Typography>
                </CardContent>
              </Card>
            ))
          }
        </Stack>
      </Stack>
    </Box>
  )
}

export default OurClientsSection
