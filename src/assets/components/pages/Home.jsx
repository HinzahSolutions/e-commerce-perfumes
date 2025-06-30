import { Box, Stack } from '@mui/material'
import React from 'react'
import video1 from '../../Imagefolder/La Collection Privée Christian Dior.mp4'


function Home() {
  return (
   
    <div component="" style={{height:'90vh',width:'100%',padding:'0px',margin:'0px'}}>
       <video src={video1} autoPlay
  loop
  muted
  playsInline
  className="w-100 h-100" />

    </div>
  
  )
}

export default Home