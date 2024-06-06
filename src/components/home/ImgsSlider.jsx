import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

export default function App() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    // progressCircle.current.style.setProperty('--progress', 1 - progress);
    // progressContent.current.textContent = `${Math.ceil(time / 5000)}s`;
  };
  return (
    <>
    <div className="ImgSwipe">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper m-0"
      >
      <div>
      <Link to={"/mega-sale/cp/8018"}> 
      <SwiperSlide className='linkurl  w-100' ></SwiperSlide> 
      </Link>
      <Link>
      <SwiperSlide className='linkurl-2  w-100'></SwiperSlide></Link>
        <SwiperSlide className='linkurl-3  w-100'><Link></Link></SwiperSlide>
        <SwiperSlide className='linkurl-4  w-100'><Link></Link></SwiperSlide>
        <SwiperSlide className='linkurl-5  w-100'><Link></Link></SwiperSlide>
        <SwiperSlide className='linkurl-6  w-100'><Link></Link></SwiperSlide>
        <SwiperSlide className='linkurl-7  w-100'><Link></Link></SwiperSlide>
        <SwiperSlide className='linkurl-8  w-100'><Link></Link></SwiperSlide>
        <SwiperSlide className='linkurl-9  w-100'><Link></Link></SwiperSlide>
        <SwiperSlide className='linkurl-10 '><Link></Link></SwiperSlide>
      </div>
      </Swiper>
      </div>
      <div className="LastSlideBar">
      <div className="LastSlideBar-1">
      <Link><img src="/public/imgslider/MS24_SAB_TripleTreat_Strip_E.png" alt="" /></Link>
      </div>
      </div>
    </>
  );
}
