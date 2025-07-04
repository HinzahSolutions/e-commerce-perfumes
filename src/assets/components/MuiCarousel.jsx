import React, { useState, useEffect } from 'react';
import {
  Box,
  Card,
  CardMedia,
  Fade,
  IconButton,
  Stack,
} from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import image1 from '../Imagefolder/10-Most-Popular-Perfumes-for-Women.jpg';
import image2 from '../Imagefolder/501167.webp';
import image3 from '../Imagefolder/VzUqgr8pfbNcfXrpzeVBPE.jpg';

const images = [image1, image2, image3];

const MuiCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [current]);

  const handleNext = () => {
    setFadeIn(false);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
      setFadeIn(true);
    }, 300);
  };

  const handlePrev = () => {
    setFadeIn(false);
    setTimeout(() => {
      setCurrent((prev) =>
        prev === 0 ? images.length - 1 : prev - 1
      );
      setFadeIn(true);
    }, 300);
  };

  return (
    <Box position="relative" width="100%" maxWidth={1300} height="80vh" mx="auto" >
      <Card sx={{ height:"100%", overflow: 'hidden', backgroundColor:'black' }}>
        <Fade in={fadeIn} timeout={500}>
          <CardMedia
            component="img"
            image={images[current]}
            alt={`Slide ${current + 1}`}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: "cover",
              transition: 'opacity 0.5s ease-in-out',
              backgroundColor:'black'
            }}
          />
        </Fade>

        {/* Arrows */}
        <IconButton
          onClick={handlePrev}
          sx={{
            position: 'absolute',
            top: '50%',
            left: 10,
            transform: 'translateY(-50%)',
            backgroundColor: 'white',
            '&:hover': { backgroundColor: 'grey.300' },
          }}
        >
          <ArrowBackIos fontSize="small" />
        </IconButton>

        <IconButton
          onClick={handleNext}
          sx={{
            position: 'absolute',
            top: '50%',
            right: 10,
            transform: 'translateY(-50%)',
            backgroundColor: 'white',
            '&:hover': { backgroundColor: 'grey.300' },
          }}
        >
          <ArrowForwardIos fontSize="small" />
        </IconButton>
      </Card>

      {/* Indicator Dots */}
      <Stack direction="row" justifyContent="center" mt={1} spacing={1} position="absolute" sx={{bottom:'20px',left:'50%',}} >
        {images.map((_, index) => (
          <Box
            key={index}
            onClick={() => setCurrent(index)}
            sx={{
              width: 10,
              height: 10,
              borderRadius: '50%',
              backgroundColor:
                index === current ? 'purple' : 'grey.100',
              cursor: 'pointer',
              transition: 'background-color 0.3s',
            }}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default MuiCarousel;

