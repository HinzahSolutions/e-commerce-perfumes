import { Box, Button, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import image1 from "../../Imagefolder/14083B-149x198.jpg"
import image2 from "../../Imagefolder/14083C-149x198 (1).jpg"
import image3 from "../../Imagefolder/14083D-149x198.jpg"
import image4 from "../../Imagefolder/744A-2020-350x435.jpg"
import image5 from "../../Imagefolder/576A-2020-350x435.jpg"
import image6 from "../../Imagefolder/377A-2020-350x435.jpg"
import image7 from "../../Imagefolder/328A-2020-350x435.jpg"
import image8 from "../../Imagefolder/328B-2020-149x198.jpg"
import image9 from "../../Imagefolder/377B-2020-149x198.jpg"
import image10 from "../../Imagefolder/576B-2020-149x198.jpg"
import image11 from "../../Imagefolder/744B-2020-149x198.jpg"

function Product() {
    const [changeimage, setChangeimage] = useState(image1)
    const [animate, setAnimate] = useState(false);
    const [count, setCount] = useState(0)

    const handleImageChange = (newImage) => {
        if (newImage !== changeimage) {
            setAnimate(true); // trigger animation
            setTimeout(() => {
                setChangeimage(newImage);
                setAnimate(false);
            }, 300); // match with animation duration
        }
    };
    return (
        <>
         <div className="p-2" >
         <Box className="flex flex-col p-8 lg:flex-row lg:items-start  md:justify-center gap-8 w-full lg:p-4">

  <Box className="w-full lg:w-1/2 flex flex-col-reverse lg:flex-row xl:w-1/2  md:flex-row justify-center gap-4">
  
    <Box className="flex flex-row justify-start sm:justify-center md:flex-col gap-2 ">
      <img className="w-20 cursor-pointer" src={image1} alt="thumb1" onClick={() => handleImageChange(image1)} />
      <img className="w-20 cursor-pointer" src={image2} alt="thumb2" onClick={() => handleImageChange(image2)} />
      <img className="w-20 cursor-pointer" src={image3} alt="thumb3" onClick={() => handleImageChange(image3)} />
    </Box>

    {/* Main Image */}
    <Box className="overflow-hidden relative flex justify-center items-center">
      <img
        src={changeimage}
        alt="Main"
        className={`w-[360px] transition-all duration-300 transform ${
          animate ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'
        }`}
      />
    </Box>
  </Box>

  {/* Right Side - Content */}
  <Box className="w-full lg:w-1/2 flex flex-col gap-8 px-4">
    <Typography variant='' className="w-full   lg:w-90 text-sm md:text-3xl xl:text-5xl font-bold tracking-tight">
      Imperial Valley Perfume Oil (LUXE) 10ml Roll-On for Men and Women (Unisex) – by NICHE Perfumes (Oil Number 72)
    </Typography>

    <Box className="flex gap-4">
      <Typography variant='' className=" text-md lg:text-2xl font-bold text-gray-300 line-through">6.500</Typography>
      <Typography variant='' className="text-md lg:text-2xl font-bold text-red-400">3.900 </Typography>
    </Box>

    <Typography variant=''  className="lg:text-base font-medium text-xs  lg:font-medium text-gray-500">
      This perfume oil is inspired by <span className="text-gray-900 font-bold">Imperial Valley perfume</span>,
      launched in 2021. It embodies a sense of sophistication and grandeur, invoking the imagery of golden sands,
      timeless dunes, and the raw beauty of nature.
    </Typography>

    <Typography variant='' className="lg:text-base text-xs font-medium text-gray-500">
      Visit <span className="text-red-600">NPerfume.com</span> to see the full collection.
    </Typography>

    <Typography className="text-green-500 text-base">In stock</Typography>

    <Box className="flex gap-7 items-center">
      <Typography
        className="text-base cursor-pointer"
        onClick={() => count > 0 && setCount(count - 1)}
      >
        -
      </Typography>
      <Typography>{count}</Typography>
      <Typography className="text-base cursor-pointer" onClick={() => setCount(count + 1)}>
        +
      </Typography>
      <Button
        variant="contained"
        color="error" 
        sx={{ paddingX: '20px', paddingY: '10px', }}
      >
        ADD TO CART
      </Button>
    </Box>

    <Box className="flex flex-col text-xs lg:font-bold text-gray-400">
      <Typography variant=''>SKU: 14083</Typography>
      <Typography variant=''>
        Categories: <span className="hover:text-red-600">Perfume Oils</span>,{' '}
        <span className="hover:text-red-600">Single Perfumes</span>
      </Typography>
    </Box>
  </Box>
</Box>


            <Box  sx={{textAlign: 'center', }}>
                <Box className="p-10" >
                    <Typography variant='' className="text-sm font-medium p-5" > Related products</Typography>

                </Box>
                <Box>
                    <Box className="flex flex-col lg:flex-row md:flex-row  md:justify-center gap-5 w-full flex-wrap">
  {[ // array of products
    {
      defaultImage: image4,
      hoverImage: image9,
      title: 'Youth Dew for Women, edp 65ml by Estee Lauder',
      oldPrice: '18.000 KD',
      newPrice: '8.900 KD'
    },
    {
      defaultImage: image5,
      hoverImage: image10,
      title: 'CK Be (Black) for Men and Women (Unisex), edT 100ml by Calvin Klein',
      oldPrice: '16.500 KD',
      newPrice: '6.900 KD'
    },
    {
      defaultImage: image6,
      hoverImage: image11,
      title: 'Cool Water for Women, edT 100ml by Davidoff',
      oldPrice: '25.900 KD',
      newPrice: '8.500 KD'
    },
    {
      defaultImage: image7,
      hoverImage: image8,
      title: 'Herrera for Men, edT 100ml by Carolina Herrera',
      oldPrice: '28.000 KD',
      newPrice: '18.000 KD'
    },
  ].map((item, index) => (
    <Box key={index} className="w-full sm:w-full md:w-1/3 lg:w-1/5 flex flex-col items-center gap-4 px-2">
      <div className="relative w-40 sm:w-60 group">
        <img
          src={item.defaultImage}
          alt="Default"
          className="w-full h-auto object-cover transition-opacity duration-300 group-hover:opacity-0"
        />
        <img
          src={item.hoverImage}
          alt="Hover"
          className="w-full h-auto object-cover absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        />
      </div>
      <Typography variant='' className="text-sm  font-medium text-center">
        {item.title}
      </Typography>
      <Box className="flex gap-2">
        <Typography variant='' className="text-sm font-bold text-gray-400 line-through">{item.oldPrice}</Typography>
        <Typography variant='' className="text-sm font-bold text-red-600">{item.newPrice}</Typography>
      </Box>
    </Box>
  ))}
</Box>

                </Box>
            </Box>
            </div>
        </>
    )
}

export default Product