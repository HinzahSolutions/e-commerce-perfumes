import React, { useRef } from 'react';
import image1 from "../Imagefolder/perfume-7639483_640.jpg"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import VisibilityIcon from '@mui/icons-material/Visibility';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { IconButton } from '@mui/material';

const products = [
  {
    id: 1,
    name: 'TITAN',
    desc: 'Fruity charm, floral vitality / 200',
    price: 259,
    image: image1,
    tag: '3 perfumes for 299 SAR',
  },
  {
    id: 2,
    name: 'Reef 31 perfume',
    desc: 'Amber & Vanilla Softness / 100ml',
    price: 229,
    image: image1,
    tag: '3 perfumes for 299 SAR',
  },
  {
    id: 3,
    name: 'VOLCANO',
    desc: 'Citrus zest, woody depth / 200ml',
    price: 259,
    image: image1,
    tag: 'Add to wishlist',
  },
  {
    id: 4,
    name: 'Summer Pink Perfume',
    desc: 'Sandalwood Luxury / 100ml',
    price: 259,
    image: image1,
    tag: '',
  },
  {
    id: 5,
    name: 'Violet Breeze',
    desc: 'Distinct floral breeze / 100ml',
    price: 239,
    image: image1,
    tag: '',
  },
   {
    id: 5,
    name: 'Violet Breeze',
    desc: 'Distinct floral breeze / 100ml',
    price: 239,
    image: image1,
    tag: '',
  },
   {
    id: 5,
    name: 'Violet Breeze',
    desc: 'Distinct floral breeze / 100ml',
    price: 239,
    image: image1,
    tag: '',
  },
   {
    id: 5,
    name: 'Violet Breeze',
    desc: 'Distinct floral breeze / 100ml',
    price: 239,
    image: image1,
    tag: '',
  },

];

const ProductCarousel = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === 'left') {
      current.scrollBy({ left: -300, behavior: 'smooth' });
    } else {
      current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative px-6">
      {/* Scroll buttons */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow z-10 hover:bg-gray-200"
      >
        < ArrowBackIosIcon />
      </button>
      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow z-10 hover:bg-gray-200"
      >
       <ArrowForwardIosIcon />
      </button>

      {/* Product List */}
      <div
        ref={scrollRef}
        className="flex gap-13 overflow-x-auto scrollbar-hide scroll-smooth py-6 m-4"
        style={{ scrollBehavior: 'smooth' }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="min-w-[230px] bg-white rounded-lg shadow hover:shadow-lg transition-all relative"
          >
            {product.tag && (
              <div className="absolute top-2 left-2 bg-black text-white text-xs px-2 py-1 rounded">
                {product.tag}
              </div>
            )}
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-60 object-cover rounded-t-lg"
              />
              <div className="absolute bottom-2 left-2 flex gap-2">
                <button className="bg-white p-2 rounded-full shadow hover:scale-105  text-purple-500">
                 <FavoriteBorderOutlinedIcon />
                </button>
                <button className="bg-white p-2 rounded-full shadow hover:scale-105  text-purple-500">
                  < VisibilityIcon />
                </button>
              </div>
            </div>
            <div className="p-4 text-center">
              <h2 className="text-md font-semibold">{product.name}</h2>
              <p className="text-sm text-gray-500 mb-2">{product.desc}</p>
              <div className="flex justify-center mb-2">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <span key={idx} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="font-bold text-lg mb-2">₹{product.price}</p>
              <button className="w-full bg-purple-500 text-white py-2 rounded hover:bg-purple-600">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;
