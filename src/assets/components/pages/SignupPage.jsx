import { Box, Button, TextField, Typography } from '@mui/material'
import React from 'react'

function SignupPage() {
    return (
        <Box component="" className="p-5 text-center" >
            <Box component="" className="mb-5">
                <Typography variant="" className="text-5xl font-bold text-purple-900" >Sign up</Typography>
            </Box>
            <Box className="w-full flex  justify-center   ">
                <Box className="w-full p-3 lg:w-1/2 flex flex-col border-dotted  border-2 gap-y-10  border-purple-500 lg:p-20 bg-purple-50 ">
                    <TextField size="small" type="text" color="secondary" label="First Name" variant="outlined" />
                    <TextField  size="small" type="text" color="secondary" label="Last Name" variant="outlined" />
                    <TextField  size="small" variant="outlined" color="secondary" label="Number" />
                    <TextField size="small" variant="outlined" color="secondary" label="Email" type="email" />
                    <TextField size="small" variant="outlined" color="secondary" label="Password" type="password" />
                    <TextField size="small" variant="outlined"  color="secondary" label="Conform Password" type="password" />
                      <Box>
                         <Button color="secondary" variant="contained"    sx={{
                                px: { xs: '20px', sm: '30px', md: '50px' },
                                py: { xs: '8px', sm: '10px' },
                                fontSize: { xs: '14px', sm: '16px', md: '20px' },
                                fontWeight: 'bold',
                            }} >SIGNUP</Button>
                      </Box>
                      <Box  component=""  className="w-full  text-start flex flex-col gap-2 text-gray-800">
                        <Typography variant='' className="text-sm font-medium" >Hint: The password should be at 
                        least twelve characters long. To make it stronger,
                         use upper and lower case letters, numbers,
                          and symbols like ! " ? $ % ^ & ).</Typography>

                          <Typography variant='' className="text-sm font-medium text-gray-500" >Already You Have Account <Typography variant="" component="a" href='/login'  className="text-red-700 underline" >Login</Typography></Typography>
                      </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default SignupPage