import React, { useState } from 'react'
import BreadcrumbNav from '../BreadcrumbNav'
import image1 from "../../Imagefolder/328B-2020-149x198.jpg"
import image2 from "../../Imagefolder/377B-2020-149x198.jpg"
import { Typography, Button, ButtonGroup, IconButton } from '@mui/material'
import CancelIcon from '@mui/icons-material/Cancel';

function Addcard() {

  const [count, setCount] = useState(1)

  return (
    <div className='h-fit'>
      <div>
        <BreadcrumbNav />
      </div>
      <div className="text-center py-4">
        <Typography variant='' className="text-4xl font-bold" >Add Card</Typography>
      </div>
      <div className="flex  w-full flex-wrap">
        <div className="w-[100%] lg:w-[70%]  p-3">
          <div className='flex flex-col gap-4'>
            <div className='relative h-fit w-full border-1 p-7 flex-wrap lg:gap-0 gap-3 rounded-2xl border-dotted border-purple-800 flex justify-evenly items-center'>
              <div className="w-full lg:w-1/2 flex justify-start gap-2 items-center">
                <img src={image1} className="w-15 " />
                <Typography variant='' className="text-xl text-gray-700 font-bold"  >Velvet Rose</Typography>
              </div>
              <div className="w-full lg:w-1/2 flex justify-evenly flex-col md:flex-row gap-2 lg:flex-row  items-center lg:border-none border-t-1 border-b-1 lg:p-0 p-3 border-dotted border-purple-700 ">
                {/* <Typography variant='' className="border-2  h-fit p-2 border-r-none">+</Typography><Typography className="border-2 rounded-sm h-fit p-2" >0</Typography><Typography className="border-2   h-fit p-2" >-</Typography> */}
                <ButtonGroup variant="outlined" color="inherit" className="border-1 border-purple-400 bg-purple-700" aria-label="Basic button group">
                  <Button color="" className='bg-purple-700' sx={{ color: 'white', fontWeight: 'bold' }} variant="contained" onClick={() => count >= 0 && setCount(count + 1)} >+</Button>
                  <Button variant='contained' color="inherit" sx={{ backgroundColor: 'white' }} className="border-none" >{count}</Button>
                  <Button color="" variant="contained" sx={{ color: 'white', fontWeight: 'bold' }} onClick={() => count > 0 && setCount(count - 1)} >-</Button>
                </ButtonGroup>


                <Typography variant='' className="text-md text-gray-700 font-bold">TOTAL : <span className="text-red-700">265.00 AED</span></Typography></div>
              <div className="absolute right-0 top-0"   ><IconButton  ><CancelIcon size="large" color="error" /></IconButton></div>
            </div>
            <div className='relative h-fit w-full border-1 p-7 flex-wrap lg:gap-0 gap-3 rounded-2xl border-dotted border-purple-800 flex justify-evenly items-center'>
              <div className="w-full lg:w-1/2 flex justify-start gap-2 items-center">
                <img src={image2} className="w-15 " />
                <Typography variant='' className="text-xl text-gray-700 font-bold line-clamp-2"  >Club de Nuit Intense Club de Nuit Intense Club de Nuit Intense Club de Nuit Intense Club de Nuit Intense</Typography>
              </div>
              <div className="w-full lg:w-1/2 flex justify-evenly flex-col md:flex-row gap-2 lg:flex-row  items-center lg:border-none border-t-1 border-b-1 lg:p-0 p-3 border-dotted border-purple-700 ">
                {/* <Typography variant='' className="border-2  h-fit p-2 border-r-none">+</Typography><Typography className="border-2 rounded-sm h-fit p-2" >0</Typography><Typography className="border-2   h-fit p-2" >-</Typography> */}
                <ButtonGroup variant="outlined" color="inherit" className="border-1 border-purple-400 bg-purple-700" aria-label="Basic button group">
                  <Button color="" className='bg-purple-700' sx={{ color: 'white', fontWeight: 'bold' }} variant="contained" onClick={() => count >= 0 && setCount(count + 1)} >+</Button>
                  <Button variant='contained' color="inherit" sx={{ backgroundColor: 'white' }} className="border-none" >{count}</Button>
                  <Button color="" variant="contained" sx={{ color: 'white', fontWeight: 'bold' }} onClick={() => count > 0 && setCount(count - 1)} >-</Button>
                </ButtonGroup>

                <Typography variant='' className="text-md text-gray-700 font-bold">TOTAL : <span className="text-red-700">265.00 AED</span></Typography></div>
              <div className="absolute right-0 top-0"   ><IconButton  ><CancelIcon size="large" color="error" /></IconButton></div>
            </div>

          </div>
        </div>
        <div className="w-[100%] lg:w-[30%] p-4">
          <div>
            <Typography variant='' className="font-bold" >Order Summary</Typography>
          </div>
          <div className="flex justify-between py-5 border-b-1 border-purple-700">
            <Typography variant='' className="text-sm" >Items total (without tax)</Typography>
            <Typography variant='' className="font-black text-purple-700" >441.74 SAR</Typography>
          </div>
          <div className='py-3 border-b-1 border-purple-700 '>
            <Typography>Do you have a promo code?</Typography>
            <div className='w-[80%] border-1 border-purple-700 bg-purple-700 my-3 '>
              <input placeholder='Apply the coupon' className="w-[70%] p-2 bg-white focus:outline-0" ></input  >
              <button variant='' className="text-white w-[30%]" >Apply</button>
            </div>


          </div>
          <div className="flex justify-between py-4 ">
            <Typography variant='' className="text-sm" >VAT tax amount</Typography>
            <Typography variant='' className="font-black text-purple-700" >441.74 SAR</Typography>
          </div>
          <div className="flex justify-between py-4">
            <Typography>Final total amount</Typography>
            <Typography variant='' className="font-black" >441.74 SAR</Typography>
          </div>
          <div><Typography variant='' className='text-xs'> * VAT Inclusive</Typography></div>
          <button className='w-full bg-purple-700 p-3 text-white font-medium ' >Submit order</button>
        </div>
      </div>



    </div>
  )
}

export default Addcard
