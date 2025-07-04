import {React, useEffect,useState,useMemo} from 'react'
import perfumes from "../Perfumedata"
import { useSearchParams } from 'react-router-dom';
import { Rating, Typography,Tooltip,IconButton, Button, Card,Drawer,Box,MenuItem, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import MenuOpenOutlinedIcon from '@mui/icons-material/MenuOpenOutlined';
import { useNavigate } from 'react-router-dom';
import BreadcrumbNav from '../BreadcrumbNav';

function FilterProduct() {
  const [searchParams] = useSearchParams();
  const name = searchParams.get('name');
    const [loading, setLoading] =useState(false);
    const [isopen,setIsopen] = useState(false)

  const [filters, setFilters] = useState({
  sort: '', 
  category: '', 
  size: '', 
});


const navigate = useNavigate()


    const filteredPerfumes = useMemo(() => {
  let data = [...perfumes];

  // Filter by category
  if (filters.category) {
    data = data.filter(p => p.perfumeCategory === filters.category);
  }

  // Filter by size
  if (filters.size === '100ml') {
    data = data.filter(p => p.perfumeSize.includes('100ml'));
  } else if (filters.size === '250ml') {
    data = data.filter(p => p.perfumeSize.includes('250ml'));
  } else if (filters.size === 'above') {
    data = data.filter(p =>
      p.perfumeSize.some(size => parseInt(size) > 250)
    );
  }

  // Sort logic
  if (filters.sort === 'low-high') {
    data.sort((a, b) => a.perfumeRate - b.perfumeRate);
  } else if (filters.sort === 'high-low') {
    data.sort((a, b) => b.perfumeRate - a.perfumeRate);
  } else if (filters.sort === 'a-z') {
    data.sort((a, b) => a.perfumeName.localeCompare(b.perfumeName));
  } else if (filters.sort === 'z-a') {
    data.sort((a, b) => b.perfumeName.localeCompare(a.perfumeName));
  } else if (filters.sort === 'rating') {
    data.sort((a, b) => b.rating - a.rating);
  }

  return data;
}, [filters]);


      const toggleDrawer = (newOpen) => () => {
     setIsopen(newOpen);
  };


  console.log(perfumes)
  console.log("navigate item name ", name)
  return (
    <>
      <div >
        <div className="text-center my-8">
          <Typography variant='' className="text-4xl font-extrabold ">PERFUMES</Typography>
          
        </div>
       
         <div className="flex justify-between p-3 "  >
          <div>
            <BreadcrumbNav />
          </div>

          <div onClick={ toggleDrawer(true)} >  <MenuOpenOutlinedIcon  sx={{fontSize:'2rem'}} /></div>
             
         </div>
         <div className="flex justify-center">
        <div className="flex flex-wrap justify-center gap-7 hover:scale-z-200 m-4 ">
          {filteredPerfumes.map((value, index) => (
           
            <motion.div
              key={value.perfumeId}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: index * 0.5 }} // ⏱️ 2s delay per item
              className="w-80 flex flex-col justify-center items-center p-3 border-1 rounded-2xl border-purple-800 border-dotted "
            >  
            <div className="w-full flex flex-col justify-cente"> 
                 <div className="flex justify-between w-full">
                    <div>
                    <IconButton  onClick={() => navigate('/addcard')}  >
                      <AddShoppingCartRoundedIcon />
                    </IconButton>
                    </div>
                    <div>
                     <IconButton color="error" >
                        <FavoriteBorderRoundedIcon />
                     </IconButton> {value.perfumeOfferPercentage?<Typography variant='' className="bg-purple-800 p-2 text-white font-medium rounded-sm" >{value.perfumeOfferPercentage} % OFFER</Typography>:<></>} 
                     </div>
                  
                </div>
                <div className="w-full flex justify-center">
                       <img className="w-40" src={value.perfumeTitleImage} alt={value.perfumeName} />
                    </div>
              </div>
              <div className=" flex flex-col gap-3 justify-center m-3 w-full  bg-purple-50 p-2 rounded-sm">
                <div className="text-center"> 
                <Typography variant='' className="text-md font-bold text-gray-800 ">{value.perfumeName}</Typography>
                </div>
                <div className="flex justify-center w-full">
                  <div className='flex flex-col justify-center gap-2'>
                    <div className="flex flex-row gap-2">
                      { value.perfumeOfferPercentage ?( <>
                        <Typography  variant="" className=" text-center font-extrabold text-gray-700 line-through" >{value.perfumeRate}</Typography> <Typography variant='' className=" text-center font-extrabold text-red-700 " >
                        {value.perfumeRate * (1 - value.perfumeOfferPercentage / 100).toFixed(2)} </Typography>
                      </>):( <Typography  variant="" className=" text-center font-extrabold text-gray-700 " >{value.perfumeRate}</Typography> )}
                       
                    </div>
                 <div> <Rating readOnly defaultValue={value.rating} precision={0.5} 
                size="small" /></div>
               
                </div>
                </div>
              
                    <Button onClick={() => navigate('/product') } variant="contained" size="medium" color="secondary" className="w-full"  >BUY NOW</Button>
                
              </div>
            </motion.div>
            
          ))}
        </div>
        </div>

        
      </div>
      <Drawer open={isopen} onClose={toggleDrawer(false)}>
            <Box component='' sx={{ width: 250,padding:'10px', }} className="mt-50" role="presentation" onClick={(e) => e.stopPropagation()}>
          <Typography variant='' className="font-bold text-lg mb-2 px-4 pt-4">Sort By</Typography>
          <MenuItem selected={filters.sort === 'low-high'} onClick={() => setFilters({ ...filters, sort: 'low-high' })}>
            Price Low to High
          </MenuItem>
          <MenuItem selected={filters.sort === 'high-low'} onClick={() => setFilters({ ...filters, sort: 'high-low' })}>
            Price High to Low
          </MenuItem>
          <MenuItem selected={filters.sort === 'a-z'} onClick={() => setFilters({ ...filters, sort: 'a-z' })}>
            Name A-Z
          </MenuItem>
          <MenuItem selected={filters.sort === 'z-a'} onClick={() => setFilters({ ...filters, sort: 'z-a' })}>
            Name Z-A
          </MenuItem>
          <MenuItem selected={filters.sort === 'rating'} onClick={() => setFilters({ ...filters, sort: 'rating' })}>
            High Rating
          </MenuItem>

          <Divider className="my-2" />

          <Typography variant='' className="font-bold text-lg mb-2 px-4">Category</Typography>
          <MenuItem selected={filters.category === 'Men'} onClick={() => setFilters({ ...filters, category: 'Men' })}>
            Men
          </MenuItem>
          <MenuItem selected={filters.category === 'Women'} onClick={() => setFilters({ ...filters, category: 'Women' })}>
            Women
          </MenuItem>
          <MenuItem selected={filters.category === ''} onClick={() => setFilters({ ...filters, category: '' })}>
            All
          </MenuItem>

          <Divider className="my-2" />

          <Typography className="font-bold text-lg mb-2 px-4">Size</Typography>
          <MenuItem selected={filters.size === '100ml'} onClick={() => setFilters({ ...filters, size: '100ml' })}>
            100ml
          </MenuItem>
          <MenuItem selected={filters.size === '250ml'} onClick={() => setFilters({ ...filters, size: '250ml' })}>
            250ml
          </MenuItem>
          <MenuItem selected={filters.size === 'above'} onClick={() => setFilters({ ...filters, size: 'above' })}>
            Above 250ml
          </MenuItem>

          <Divider className="my-2" />

          <Button variant="outlined" fullWidth onClick={() => setFilters({ sort: '', category: '', size: '' })}>
            Reset Filters
          </Button>
        </Box>
</Drawer>
    </>
  )
}

export default FilterProduct  