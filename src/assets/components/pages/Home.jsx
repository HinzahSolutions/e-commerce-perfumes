import { Box, Stack, Typography,IconButton, Card,
  CardContent,
  Button,
   } from '@mui/material'
import React from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import video1 from '../../Imagefolder/La Collection Privée Christian Dior.mp4'
import image1 from "../../Imagefolder/PK-New-Imperrial.Valley.01.jpg.webp"
import image2 from "../../Imagefolder/PK-New-Oud-Maracuja.01.jpg.webp"
import image3 from "../../Imagefolder/PK-9PM-Rebel.jpg.webp"
import image4 from "../../Imagefolder/PK-Q-Intense.jpg.webp"
import image5 from "../../Imagefolder/PK-Q.jpg.webp"
import image6 from "../../Imagefolder/744A-2020-350x435.jpg"
import image7 from "../../Imagefolder/576A-2020-350x435.jpg"
import image8 from "../../Imagefolder/377A-2020-350x435.jpg"
import image9 from "../../Imagefolder/328A-2020-350x435.jpg"
import image10 from "../../Imagefolder/328B-2020-149x198.jpg"
import image11 from "../../Imagefolder/377B-2020-149x198.jpg"
import image12 from "../../Imagefolder/576B-2020-149x198.jpg"
import image13 from "../../Imagefolder/744B-2020-149x198.jpg"
import image14 from "../../Imagefolder/PK-AngelsShare.01.jpg.webp"
import image15 from "../../Imagefolder/PK-OudSatinMood.01.jpg.webp"
import image16 from "../../Imagefolder/TobaccoIntense.jpg.webp"
import MuiCarousel from '../MuiCarousel';
import ModalImage from "../../Imagefolder/istockphoto-1128826884-612x612.jpg"
import ScrollableProductList from '../ScrollableProductList';
import headerimage from "../../Imagefolder/CREED-ELADARIA-NEW-ARRIVAL_3024x.webp"
import headerimage2 from "../../Imagefolder/1600w-HTLUxQmFxH8.webp"
import headerimage3 from "../../Imagefolder/240_F_845589510_QmbsMXwCXhQG2jrEHLrhIzQqdo1EeFe3.jpg"

function Home() {

  
const products = [
  {
    name: "PINK MOON 100 ML",
    price: "32.00 KWD",
    oldPrice: "64.00 KWD",
    discount: "50%",
    image: image8
  },
  {
    name: "ELLE 85 ML",
    price: "24.00 KWD",
    oldPrice: "48.00 KWD",
    discount: "50%",
    image:  image9
  },
  {
    name: "ELLE 85 ML",
    price: "24.00 KWD",
    oldPrice: "48.00 KWD",
    discount: "50%",
    image:  image9
  },{
    name: "ELLE 85 ML",
    price: "24.00 KWD",
    oldPrice: "48.00 KWD",
    discount: "50%",
    image:  image9
  },{
    name: "ELLE 85 ML",
    price: "24.00 KWD",
    oldPrice: "48.00 KWD",
    discount: "50%",
    image:  image9
  },{
    name: "ELLE 85 ML",
    price: "24.00 KWD",
    oldPrice: "48.00 KWD",
    discount: "50%",
    image:  image9
  },{
    name: "ELLE 85 ML",
    price: "24.00 KWD",
    oldPrice: "48.00 KWD",
    discount: "50%",
    image:  image11
  },{
    name: "ELLE 85 ML",
    price: "24.00 KWD",
    oldPrice: "48.00 KWD",
    discount: "50%",
    image:  image13
  },
  {
    name: "ELLE 85 ML",
    price: "24.00 KWD",
    oldPrice: "48.00 KWD",
    discount: "50%",
    image:  image13
  },
  // Add more products as needed
];

  return (
    <>
      {/* <div className="h-auto">
        <Box className="w-9xl" >
          <video src={video1} autoPlay
            loop
            muted
            playsInline
            className="" />

        </Box>

        <Box className="flex flex-col md:flex-row">
          <Box className="w-full md:w-1/2">
            <img src={image1} className="w-full" alt="Image 1" />
          </Box>
          <Box className="w-full md:w-1/2">
            <img src={image2} className="w-full" alt="Image 2" />
          </Box>
        </Box>


        <div className="flex flex-col md:flex-row ">
          <div className="w-full md:w-1/2 lg:h-127 md:h-100 ms:h-100 ">
            <img src={image3} className="w-full h-full" alt="Image 1" />
          </div>
          <div className="w-full md:w-1/2 p-10 h-100%  md:h-100  flex justify-center items-center  sm:h-200 lg:h-127 " style={{ backgroundColor: '#A82A25' }}   >
            <div className=" w-140 flex flex-col justify-center items-center  gap-4 p-3"   >
              <Typography variant='' className="text-white font-medium text-2xl">New! 9PM Rebel by Afnan</Typography>
              <Typography variant='' className="text-white font-medium text-sm md:text-base" >
                The wait is over! The most hyped perfume 9PM Rebel is
                now available on PerfumesKuwait.com.
                Be Among the First in Kuwait to Own 9PM Rebel by Afnan!
              </Typography>
              <Typography variant='' className="text-white font-medium text-sm md:text-base"  >
                Top Notes: Mandarin, Pineapple and Granny Smith
                Middle Notes: Cedarwood, Oakmoss and Vanilla
                Base Notes: Caramel, Dry woods, Ambergris and Musk
              </Typography>

              <Typography variant='' className="text-white font-medium text-md" >9.500 KD</Typography>

              <div>
                <button className="border-2 border-white p-3 hover:bg-red-100 hover:text-red-700" >BUY NOW</button>
              </div>
            </div>
          </div>
        </div>


      </div>

      <Box className="flex flex-col md:flex-row">
        <Box className="w-full md:w-1/2">
          <img src={image4} className="w-full" alt="Image 1" />
        </Box>
        <Box className="w-full md:w-1/2">
          <img src={image5} className="w-full" alt="Image 2" />
        </Box>
      </Box>

      <div className=" text-center m-6" >
        <div>
          <Typography variant='' className="text-4xl font-extrabold text-center" > RECOMMEND </Typography>
        </div>
        <div>
          <Box sx={{ textAlign: 'center', }}>
            <Box className="p-10" >
              <Typography variant='' className="text-sm font-medium p-5" > Related products</Typography>

            </Box>
            <Box>
              <Box className="flex flex-col lg:flex-row md:flex-row  md:justify-center gap-5 w-full flex-wrap">
                {[ // array of products
                  {
                    defaultImage: image6,
                    hoverImage: image10,
                    title: 'Youth Dew for Women, edp 65ml by Estee Lauder',
                    oldPrice: '18.000 KD',
                    newPrice: '8.900 KD'
                  },
                  {
                    defaultImage: image7,
                    hoverImage: image12,
                    title: 'CK Be (Black) for Men and Women (Unisex), edT 100ml by Calvin Klein',
                    oldPrice: '16.500 KD',
                    newPrice: '6.900 KD'
                  },
                  {
                    defaultImage: image8,
                    hoverImage: image13,
                    title: 'Cool Water for Women, edT 100ml by Davidoff',
                    oldPrice: '25.900 KD',
                    newPrice: '8.500 KD'
                  },
                  {
                    defaultImage: image9,
                    hoverImage: image10,
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
      </div>

      <Box className="flex flex-col md:flex-row">
        <Box className="w-full md:w-1/2">
          <img src={image14} className="w-full" alt="Image 1" />
        </Box>
        <Box className="w-full md:w-1/2">
          <img src={image15} className="w-full" alt="Image 2" />
        </Box>
      </Box>

      <div className="flex flex-col md:flex-row ">
        <div className="w-full md:w-1/2 lg:h-127 md:h-100 ms:h-100 ">
          <img src={image16} className="w-full h-full" alt="Image 1" />
        </div>
        <div className="w-full md:w-1/2 p-10 h-100%  md:h-100  flex justify-center items-center  sm:h-200 lg:h-127 " style={{ backgroundColor: '#060E24' }}   >
          <div className=" w-140 flex flex-col justify-center items-center  gap-4 p-3"   >
            <Typography variant='' className="text-white font-medium text-2xl">NEW! – Red Tobacco Intense</Typography>
            <Typography variant='' className="text-white font-medium text-sm md:text-base" >
              Red Tobacco Intense is a highly concentrated, powerful and assertive fragrance 
              that will engrave your presence in the space around you.
            </Typography>
            <Typography variant='' className="text-white font-medium text-sm md:text-base"  >
             This irresistible fragrance combines vanilla from Madagascar, 
             leather, and the intense aroma of tobacco 
             and dazzles with its shimmering spices, saffron and oud
            </Typography>

            <Typography variant='' className="text-white font-medium text-md" >9.500 KD</Typography>

            <div>
              <button className="border-2 border-white p-3 text-white hover:bg-blue-200 hover:text-black" >BUY NOW</button>
            </div>
          </div>
        </div>
      </div>

       <Box p={3}>
        <Box  className="m-4 text-center">
      <Typography variant='' className="text-center text-4xl font-extrabold">
        
        Trending for her
      </Typography>
      </Box>

      <Box sx={{
        display: 'flex',
        overflowX: 'auto',
        gap: 2,
        pb: 2,
        scrollSnapType: 'x mandatory',
        '&::-webkit-scrollbar': { display: 'none' }
      }}>
        {products.map((item, idx) => (
          <Card
            key={idx}
            sx={{
              minWidth: 260,
              flex: '0 0 auto',
              borderRadius: 3,
              p: 2,
              scrollSnapAlign: 'start',
              position: 'relative'
            }}
          >
           
            <IconButton sx={{ position: 'absolute', top: 8, left: 8 }}>
              <FavoriteBorderIcon />
            </IconButton>

            
            <Box
              sx={{
                position: 'absolute',
                top: 8,
                right: 8,
                backgroundColor: 'black',
                color: 'white',
                px: 1,
                fontSize: '0.75rem',
                borderRadius: 1
              }}
            >
              {item.discount} off
            </Box>

           
            <Box textAlign="center" my={2}>
              <img
                src={item.image}
                alt={item.name}
                style={{ height: 140, objectFit: 'contain' }}
              />
            </Box>

           
            <CardContent>
              <Typography fontWeight={600} gutterBottom>
                {item.name}
              </Typography>
              <Typography color="primary" fontWeight={600}>
                {item.price}
              </Typography>
              <Typography
                variant="body2"
                sx={{ textDecoration: 'line-through', color: 'gray' }}
              >
                {item.oldPrice}
              </Typography>
            </CardContent>

            
            <IconButton
              sx={{
                position: 'absolute',
                bottom: 16,
                right: 16,
                backgroundColor: '#8B4513',
                color: 'white',
                '&:hover': { backgroundColor: '#5c3317' }
              }}
            >
              <ShoppingCartIcon />
            </IconButton>
          </Card>
        ))}
      </Box>
    </Box> */}
    <div className="">
     <div className="">
    <MuiCarousel />
    </div>

       <div  className='m-3 h-fit'>
           <div className="flex flex-wrap w-[100%] h-60 lg:h-100 bg-black">
              <div className="w-full md:w-1/2 lg:w-1/2 h-full  " >
              <img src={ModalImage} className="w-full h-full" />
              </div>
              <div className="w-full md:w-1/2 lg:w-1/2 h-[100%] bg-red-700 flex items-center justify-center " >
                <Typography variant='' className="text-2xl font-black text-white" >offer details</Typography></div>
           </div>
       </div>
        <div className="lg:mt-9   mt-70 "> 
                <div className='text-center' >
                  <Typography variant='' className="text-4xl font-black " >NEW </Typography>
                </div>
               <div className=' lg:my-4 '>
                 <ScrollableProductList />
                </div> 
                <div className="text-center">
                   <Button variant="outlined" color="secondary" >VIEW ALL</Button>
                </div>
        </div>


         <div  className='mx-3 mt-7' >
           <div className="flex flex-wrap w-[100%] h-60 lg:h-100 bg-black">
              <div className="w-full md:w-1/2 lg:w-1/2 h-full  " >
              <img src={ModalImage} className="w-full h-full" />
              </div>
              <div className="w-full md:w-1/2 lg:w-1/2  h-60 lg:h-100 bg-black flex items-center justify-center " >
                <Typography variant='' className="text-2xl font-black text-white" >offer details</Typography></div>
           </div>
       </div>


        <div className="flex flex-wrap justify-center mt-9 ">
             <div><img src={ModalImage} className="h-100 w-150" /></div>
             <div><img src={ModalImage}  className="h-100 w-150"  /></div>
             <div><img src={ModalImage} className="h-100 w-150"  /> </div>
             <div><img src={ModalImage}  className="h-100 w-150"  /></div>
        </div>

         <div className="lg:mt-9   mt-70 "> 
                <div className='text-center' >
                  <Typography variant='' className="text-4xl font-black " >best seller</Typography>
                </div>
               <div className=' lg:my-4 '>
                 <ScrollableProductList />
                </div> 
                <div className="text-center">
                   <Button variant="outlined" color="secondary" >VIEW ALL</Button>
                </div>
        </div>

           <div className="my-5" > 
             <img src={headerimage} />
           </div>

           <Box className="w-9xl" >
          <video src={video1} autoPlay
            loop
            muted
            playsInline
            className="" />

        </Box>


         <div className="lg:mt-9   mt-70 "> 
                <div className='text-center' >
                  <Typography variant='' className="text-4xl font-black " >MEN</Typography>
                </div>
               <div className=' lg:my-4 '>
                 <ScrollableProductList />
                </div> 
                <div className="text-center">
                   <Button variant="outlined" color="secondary" >VIEW ALL</Button>
                </div>
        </div>
             

             <div className="my-5" > 
             <img src={headerimage2} />
           </div>


             <div className="lg:mt-9   mt-70 "> 
                <div className='text-center' >
                  <Typography variant='' className="text-4xl font-black " >WOMEN</Typography>
                </div>
               <div className=' lg:my-4 '>
                 <ScrollableProductList />
                </div> 
                <div className="text-center">
                   <Button variant="outlined" color="secondary" >VIEW ALL</Button>
                </div>
        </div>

          <div className="my-5 " > 
             <img src={headerimage3} className="w-[100vw]" />
           </div>
      </div>
    </>

  )
}

export default Home