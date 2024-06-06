import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaRegHeart } from "react-icons/fa";
import { FaStar  } from "react-icons/fa";

// Import Swiper styles
import 'swiper/css/navigation';
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';
import "swiper/css";

// import required modules
import { Navigation } from 'swiper/modules';

    

export const SabOffer = () => {
    const [data,setData] = useState([])
    useEffect(()=>{
        axios.get('src/components/home/brands/TopBrands.json').then(
            (respone) => setData(respone.data.sabOffer),
            
        )
    },[])
  return (
    <div>
    <div className="text-areaSab">
    <div className='topBrandsText col-4'>SAB Offer</div>
    </div>
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper d-flex justify-content-start align-items-center">
        <SwiperSlide>
        <div className="conainer">
        
        <div className="CardAppleHolder d-flex mb-5 ">
        
        {data.slice(0,4).map((data , index) =>{
            return(
                <div className="container-fluid" key={data.offerId}>
               <div className="d-flex" >
               <div className="col-md-3 col-sm-12 col-xs-12 cardAppleHolder">
                <Link className='text-dark' to={data.to}>
                <div className="topCard">
                <div className="left">
                <div>{data.sabOffer}</div>
                <div className='spOfficail'>{data.specialOffer}</div>
                
                </div>
                <div className="right">
                <FaRegHeart/>
                </div>
                </div>
                <div className="imgHolder">
                <img src={data.imgUrl} alt="" />
                </div>
                <div className="title d-flex">
                <div><strong>{data.brand}</strong></div> <span>{data.title}</span>
                </div>
                <div className="rate d-flex">
                <div><span><FaStar /></span></div>
                <div><span>{data.rate}</span></div>
                <div><span>(</span>
                {data.peopleRates}
                <span>)</span></div>
                </div>
                <div className="price">
                <div className='left'>SAR <div><strong>849</strong> <span>Incl. VAT</span></div></div>
                <div className="right"><span>{data.offer}</span></div>
                </div>
                <div className="saveHolder">
                <div className="textHolder ">
                {data.lineText}
                </div>
                <div>
                <strong>
                Save 
                <span> {data.save}</span>
                </strong></div>
                </div>
                <p>{data.sub}</p>
                
                <div className="companyImgs">
                <img src="public/offers/imgs/Baseeta-english-logo.png" alt="" />
                <img src="public/offers/imgs/tamara-icon.png" alt="" />
                <img src="public/offers/imgs/tabby_new.png" alt="" />
                </div>
                </Link>
               </div>
               </div>
                </div>
            )
        })}
        </div>
                
        </div>
        </SwiperSlide>
        <SwiperSlide> <div className="conainer">
        
        <div className="CardAppleHolder d-flex ">
        
        {data.slice(4,8).map((data , index) =>{
            return(
                <div className="container-fluid" key={data.offerId}>
               <div className="d-flex">
               <div className="col-md-3 col-sm-12 col-xs-12 cardAppleHolder">
               
                <Link className='text-dark' to={data.to}>
                <div className="topCard">
                <div className="left">
                <div>{data.sabOffer}</div>
                <div className='spOfficail'>{data.specialOffer}</div>
                
                </div>
                <div className="right">
                <FaRegHeart/>
                </div>
                </div>
                <div className="imgHolder">
                <img src={data.imgUrl} alt="" />
                </div>
                <div className="title d-flex">
                <div><strong>{data.brand}</strong></div> <span>{data.title}</span>
                </div>
                <div className="rate d-flex">
                <div><span><FaStar /></span></div>
                <div><span>{data.rate}</span></div>
                <div><span>(</span>
                {data.peopleRates}
                <span>)</span></div>
                </div>
                <div className="price">
                <div className='left'>SAR <div><strong>849</strong> <span>Incl. VAT</span></div></div>
                <div className="right"><span>{data.offer}</span></div>
                </div>
                <div className="saveHolder">
                <div className="textHolder ">
                {data.realPrice}
                </div>
                <div>
                <strong>
                Save 
                <span> {data.saveOffer}</span>
                </strong></div>
                </div>
                <p>{data.sub}</p>
                
                <div className="companyImgs">
                <img src="/public/offers/imgs/Baseeta-english-logo.png" alt="" />
                <img src="/public/offers/imgs/tamara-icon.png" alt="" />
                <img src="/public/offers/imgs/tabby_new.png" alt="" />
                </div>
                </Link>
               </div>
               </div>
                </div>
            )
        })}
        </div>
                
        </div>
        </SwiperSlide>
        <SwiperSlide><div className="conainer">
        
        <div className="CardAppleHolder d-flex ">
        
        {data.slice(8,12).map((data , index) =>{
            return(
                <div className="container-fluid" key={data.offerId}>
               <div className="d-flex">
               <div className="col-md-3 col-sm-12 col-xs-12 cardAppleHolder">
                <div className="topCard">
                <div className="left">
                <div>{data.sabOffer}</div>
                <div className='spOfficail'>{data.specialOffer}</div>
                
                
                </div>
                
                <div className="right">
                <FaRegHeart/>
                </div>
                </div>
                
                <div className="imgHolder">
                <img src={data.imgUrl} alt="" />
                </div>
                <div className="title d-flex">
                <div><strong>{data.brand}</strong></div> <span>{data.title}</span>
                </div>
                <div className="rate d-flex">
                <div><span><FaStar /></span></div>
                <div><span>{data.rate}</span></div>
                <div><span>(</span>
                {data.peopleRates}
                <span>)</span></div>
                </div>
                <div className="price">
                <div className='left'>SAR <div><strong>849</strong> <span>Incl. VAT</span></div></div>
                <div className="right"><span>{data.offer}</span></div>
                </div>
                <div className="saveHolder">
                <div className="textHolder ">
                {data.realPrice}
                </div>
                <div>
                <strong>
                Save 
                <span> {data.saveOffer}</span>
                </strong></div>
                </div>
                <p>{data.sub}</p>
                
                <div className="companyImgs">
                <img src="public/offers/imgs/Baseeta-english-logo.png" alt="" />
                <img src="public/offers/imgs/tamara-icon.png" alt="" />
                <img src="public/offers/imgs/tabby_new.png" alt="" />
                </div>
                
               </div>
               
               </div>
                </div>
            )
        })}
        
        </div>
        </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
