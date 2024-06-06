import React from 'react'
import { Swiper, SwiperSlide  } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';

import 'swiper/css';

// import required modules
import { Pagination } from 'swiper/modules';
export const SlideFoot = () => {
  return (
    <>
    <div className="SlideFoot">
    <Swiper 
        
        pagination={{
          dynamicBullets: true,
        }}
        // autoplay ={true}
          

        modules={[Pagination ]}
        className="mySwiper"
      >
        <SwiperSlide className='swiper_sldie'>
        <div className='container-rater'>
        <div className="content p-2">
        <div className="rate d-flex gap-1 align-items-center">
        <img className='star-img'  src="/public/icons/star.svg" alt="" /> 
        <div className='text-area'><span className='text-dark ' >5</span><span className='text-muted'>/5</span></div>
        </div>
        <p>Service is excellent and quick</p>
        </div>
        <hr />
        <div className="name-content ps-2 pb-2">
        <div className="name_added d-flex">
        <h6>Joel</h6>
        <img src="/public/icons/valid.svg" alt="" className='valid-img' />
        </div>
        <p>Added Yasterday</p>
        </div>
        </div>
        <div className='container-rater'><div className="content p-2">
        <div className="rate d-flex gap-1 align-items-center">
        <img className='star-img'  src="/public/icons/star.svg" alt="" /> 
        <div className='text-area'><span className='text-dark ' >5</span><span className='text-muted'>/5</span></div>
        </div>
        <p>Appreciate</p>
        </div>
        <hr />
        <div className="name-content ps-2 pb-2">
        <div className="name_added d-flex">
        <h6>Mohamed</h6>
        <img src="/public/icons/valid.svg" alt="" className='valid-img' />
        </div>
        <p>Added Yasterday</p>
        </div>
        </div>
        <div className='container-rater'><div className="content p-2">
        <div className="rate d-flex gap-1 align-items-center">
        <img className='star-img'  src="/public/icons/star.svg" alt="" /> 
        <div className='text-area'><span className='text-dark ' >4</span><span className='text-muted'>/5</span></div>
        </div>
        <p>Good</p>
        </div>
        <hr />
        <div className="name-content ps-2 pb-2">
        <div className="name_added d-flex">
        <h6>Salah</h6>
        <img src="/public/icons/valid.svg" alt="" className='valid-img' />
        </div>
        <p>Added 3 days ago</p>
        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className='swiper_sldie'>
        <div className='container-rater'>
        <div className="content p-2">
        <div className="rate d-flex gap-1 align-items-center">
        <img className='star-img'  src="/public/icons/star.svg" alt="" /> 
        <div className='text-area'><span className='text-dark ' >5</span><span className='text-muted'>/5</span></div>
        </div>
        <p>Services is ok. But price little bit up. </p>
        </div>
        <hr />
        <div className="name-content ps-2 pb-2">
        <div className="name_added d-flex">
        <h6>Glenn</h6>
        <img src="/public/icons/valid.svg" alt="" className='valid-img' />
        </div>
        <p>Added 4 days ago</p>
        </div>
        </div>
        <div className='container-rater'>
        <div className="content p-2">
        <div className="rate d-flex gap-1 align-items-center">
        <img className='star-img'  src="/public/icons/star.svg" alt="" /> 
        <div className='text-area'><span className='text-dark ' >5</span><span className='text-muted'>/5</span></div>
        </div>
        <p>Good</p>
        </div>
        <hr />
        <div className="name-content ps-2 pb-2">
        <div className="name_added d-flex">
        <h6>Muhamed</h6>
        <img src="/public/icons/valid.svg" alt="" className='valid-img' />
        </div>
        <p>Added 6 days ago</p>
        </div>
        </div>
        <div className='container-rater'>
        <div className="content p-2">
        <div className="rate d-flex gap-1 align-items-center">
        <img className='star-img'  src="/public/icons/star.svg" alt="" /> 
        <div className='text-area'><span className='text-dark ' >5</span><span className='text-muted'>/5</span></div>
        </div>
        <p>Excellent service..thanks eXtra</p>
        </div>
        <hr />
        <div className="name-content ps-2 pb-2">
        <div className="name_added d-flex">
        <h6>Tek B</h6>
        <img src="/public/icons/valid.svg" alt="" className='valid-img' />
        </div>
        <p>Added 7 days ago</p>
        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide className='swiper_sldie'>
        <div className='container-rater'>
        <div className="content p-2">
        <div className="rate d-flex gap-1 align-items-center">
        <img className='star-img'  src="/public/icons/star.svg" alt="" /> 
        <div className='text-area'><span className='text-dark ' >5</span><span className='text-muted'>/5</span></div>
        </div>
        <p>Very easy and pleasant experience, I will shop again. </p>
        </div>
        <hr />
        <div className="name-content ps-2 pb-2">
        <div className="name_added d-flex">
        <h6>Orkun</h6>
        <img src="/public/icons/valid.svg" alt="" className='valid-img' />
        </div>
        <p>Added 7 days ago</p>
        </div>
        </div>
        <div className='container-rater'>
        <div className="content p-2">
        <div className="rate d-flex gap-1 align-items-center">
        <img className='star-img'  src="/public/icons/star.svg" alt="" /> 
        <div className='text-area'><span className='text-dark ' >5</span><span className='text-muted'>/5</span></div>
        </div>
        <p>Good Process in all</p>
        </div>
        <hr />
        <div className="name-content ps-2 pb-2">
        <div className="name_added d-flex">
        <h6>Muhamed</h6>
        <img src="/public/icons/valid.svg" alt="" className='valid-img' />
        </div>
        <p>Added 9 days ago</p>
        </div>
        </div>
        <div className='container-rater'>
        <div className="content p-2">
        <div className="rate d-flex gap-1 align-items-center">
        <img className='star-img'  src="/public/icons/star.svg" alt="" /> 
        <div className='text-area'><span className='text-dark ' >5</span><span className='text-muted'>/5</span></div>
        </div>
        <p>Same Day Delivery User Friendly Website</p>
        </div>
        <hr />
        <div className="name-content ps-2 pb-2">
        <div className="name_added d-flex">
        <h6>Lily</h6>
        <img src="/public/icons/valid.svg" alt="" className='valid-img' />
        </div>
        <p>Added 10 days ago</p>
        </div>
        </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
    </>
  )
}
