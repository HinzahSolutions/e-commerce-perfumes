import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './assets/components/pages/Home'
import Product from './assets/components/pages/Product'
import FilterProduct from './assets/components/pages/FilterProduct'
import Navbars from './assets/components/Navbars'
import SuperDeils from './assets/components/pages/SuperDeils'
import Brands from './assets/components/pages/Brands'
import LoginPage from './assets/components/pages/LoginPage'
import SignupPage from './assets/components/pages/SignupPage'
import Profile from './assets/components/pages/Profile'
import Fooder from './assets/components/pages/Fooder'
import Addcard from './assets/components/pages/Addcard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
    
      <div  className='w-full h-39 '>
      <div  className='position: fixed w-full z-1 '>
         <Navbars/>
        </div> 
        </div>
       
         
       <Routes>
      
             <Route path='/' element={<Home />} />
             <Route path='/product' element={<Product />} /> 
             <Route path='/filterproduct' element={<FilterProduct/>} />
              <Route path='/superDeils'  element={<SuperDeils/>} />
              <Route path='/brands'  element={<Brands />} />
              <Route  path='/login' element={<LoginPage />} />
              <Route  path='/signup' element={<SignupPage />} />
              <Route  path='/profile' element={<Profile />} />
                <Route  path='/addcard' element={<Addcard />} />
                
        </Routes>
       <div  className="h-fit">
           <Fooder />
           </div>
      
       
        
    </>
  )
}

export default App
