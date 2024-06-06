import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';
import "swiper/css";

// import required modules
import { Navigation } from 'swiper/modules';
export const TopBrands = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
        axios.get('/src/components/home/brands/TopBrands.json').then(
            (respone) => setData(respone.data.Brands)
        )
    },[])
  return (
    <>
    <div className='text-areaSab container'><div className='topBrandsText col-2'>Top Brands</div></div>
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
    <SwiperSlide>
    <div className="top-brands">
    
    <div className="cardsContainer">
    
    {data.slice(0,7).map((data , index)=>{
        
        return(
            <div className="card" key={data.brandId}>
            <Link>
            <img src={data.brandImg} alt="" />
            </Link>
            </div>
           
        )
        
    }

)

}
    </div>
    </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className="top-brands">
    
    <div className="cardsContainer">
    
    {data.slice(7,16).map((data , index)=>{
        
        return(
            <div className="card" key={data.brandId}>
            <Link>
            <img src={data.brandImg} alt="" />
            </Link>
            </div>
           
        )
        
    }

)

}
    </div>
    </div>
    </SwiperSlide>
    </Swiper>
    </>
  )
}
