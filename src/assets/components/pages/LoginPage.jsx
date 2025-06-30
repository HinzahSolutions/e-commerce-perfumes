import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'

function LoginPage() {
    return (
        <>
            <Box component="" className="p-5 text-center" >
                <Box component="" className="mb-5">
                    <Typography variant="" className="text-5xl font-bold text-purple-900" >Login</Typography>
                </Box>
                <Box className="lg:w-90% border-2 border-dotted bg-purple-50 border-purple-500 lg:p-20  rounded flex flex-col justify-start gap-y-10 px-1 py-3  md:p-5 w-full">
                    <Box component='' className="w-full" >
                       
                          <TextField fullWidth variant="outlined"  label="USERNAME OR EMAIL ADDRESS"  color="secondary"  />
                    </Box>
                    <Box component='' className="w-full"  >
                      
                       
                         <TextField  variant="outlined" fullWidth  label="PASSWORD" type="password"  color="secondary" />

                    </Box>
                    <Box component='' className="flex flex-col items-start gap-2" >
                        <Button
                            variant="contained"
                            size="large"
                            color="secondary"
                            sx={{
                                px: { xs: '20px', sm: '30px', md: '50px' },
                                py: { xs: '8px', sm: '10px' },
                                fontSize: { xs: '14px', sm: '16px', md: '20px' },
                                fontWeight: 'bold',
                            }}
                        >
                            LOG IN
                        </Button>
                          <Typography variant='' component="a" href='/' className="text-red-500 text-sm font-bold hover:text-red-400 underline" >Lost Your Password</Typography>
                           <Typography variant='' className="text-sm font-medium text-gray-700" >Create a new Account <Typography variant='' component="a" href='/signup' className="text-red-700 hover:text-red-500 underline" >Signup</Typography></Typography>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default LoginPage