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
import "./sellers"
// import required modules
import { Navigation } from 'swiper/modules';
import { addClassElementEvent } from './sellers';

export const BestSellersTwo = () => {
  
    const [mobileData,setMobileData] = useState([]);
    const [tvsData,setTvsData] = useState([]);
    const [lapTopsData,setlapTopsData] = useState([]);
    const [washingData,setWashingData] = useState([]);
    const [refrigetarorData,setrefrigetarorData] = useState([]);
    const [tabletsData,settabletsData] = useState([]);
    const [setVacuum,setVacuumData] = useState([]);
    const [setMicrowaves,setMicrowavesData] = useState([]);
    const [setOutdoor,setOutdoorData] = useState([]);
    const [isActive , setActive] = useState(1);
    const lis = document.querySelectorAll(".ulLinks a");
    
const mobile = useEffect(()=>{
    axios.get('src/components/home/sales/Gifts.json').then(
        (respone) => setMobileData(respone.data.Mobiles),
        
    )
},[]);
    const tvs = useEffect(()=>{
        axios.get('src/components/home/sales/Gifts.json').then(
            (respone) => setTvsData(respone.data.Tvs),
            
        )
},[]);
    const lapTops = useEffect(()=>{
        axios.get('src/components/home/sales/Gifts.json').then(
            (respone) => setlapTopsData(respone.data.lapTops),
            
        )
},[]);
    const washing = useEffect(()=>{
        axios.get('src/components/home/sales/Gifts.json').then(
            (respone) => setWashingData(respone.data.washing),
            
        )
},[]);
    const refrigetaror = useEffect(()=>{
        axios.get('src/components/home/sales/Gifts.json').then(
            (respone) => setrefrigetarorData(respone.data.refrigetarors),
            
        )
},[]);
    const tablets = useEffect(()=>{
        axios.get('src/components/home/sales/Gifts.json').then(
            (respone) => settabletsData(respone.data.tablets),
            
        )
},[]);
    const vacuum = useEffect(()=>{
        axios.get('src/components/home/sales/Gifts.json').then(
            (respone) => setVacuumData(respone.data.vacuum),
            
        )
},[]);
    const microwaves = useEffect(()=>{
        axios.get('src/components/home/sales/Gifts.json').then(
            (respone) => setMicrowavesData(respone.data.microwaves),
            
        )
},[]);
    const outdoors = useEffect(()=>{
        axios.get('src/components/home/sales/Gifts.json').then(
            (respone) => setOutdoorData(respone.data.outdoors),
            
        )
},[]);
    addClassElementEvent('.ulLinks a','active','click');
    const toggleTab = (index)=>{
        setActive(index)
        
    }
  return (
    <div className='BestSellersTwo'>
    <div className="text-areaSab container">
    <div className='topSellerText col-3'>Best Sellers</div>
    </div>
    <ul className='ulLinks'>
    <Link 
    
    className='mobile active' 
    
    onClick={()=>toggleTab(1)}>
        <li>Mobiles</li>
    </Link>
    <Link className='tv' onClick={ () => toggleTab(2)}>
        <li>TVs</li>
    </Link>
    <Link 
    className='laptops'
    onClick={()=>toggleTab(3)}>
        <li>Laptops</li>
    </Link>
    <Link 
    
    onClick={()=>toggleTab(4)}>
        <li>Washing Machines</li>
    </Link>
    <Link onClick={()=>toggleTab(5)}>
        <li>Refrigerators</li>
    </Link>
    <Link onClick={()=>toggleTab(6)}>
        <li>Tablets</li>
    </Link>
    <Link onClick={()=>toggleTab(7)}>
        <li>Vacuum Cleaners</li>
    </Link>
    <Link onClick={()=>toggleTab(8)}>
        <li>Microwaves</li>
    </Link>
    <Link onClick={()=>toggleTab(9)}>
        <li>Outdoor</li>
    </Link>
    </ul>
    <Swiper navigation= {isActive == 1 ? true : false} modules={[Navigation]} className= {isActive == 1 ? "mySwiper d-flex justify-content-start align-items-center p-5" : "d-none"}>
       <div>
        <SwiperSlide>
        <div className = {isActive == 1 ? "conainer change-tabs active" : "conainer change-tabs"}>
       
        <div className="CardAppleHolder active d-flex mb-5">
        
        {mobileData.slice(0,7).map((data , index) =>{
            return(
                <div className="container-fluid col-4 me-2" key={data.offerId}>
                <div className="abslouteNamber svelte-x83xky" id={data.sallerId}><span>{data.sallerId}</span></div>
                
               <div className="d-flex me-5" >
               <div className="cardAppleHolder">
               
                <Link className='text-dark' to={data.to}>
                
                <div className="topCard ">
                <div className="left">
                {data.sabOffer == null ?  null: <div className='spOfficail'>{data.sabOffer}</div>}
                {data.specialOffer == null ?  null: <div className='spOfficail'>{data.specialOffer}</div>}
                {data.megaSale == null ?  null: <div className='megaSale'>{data.megaSale}</div>}
                
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
                {data.rate && data.peopleRates != null ? <div className="rate d-flex">
                <div><span><FaStar /></span></div>
                <div><span>{data.rate}</span></div>
                <div><span>(</span>
                {data.peopleRates}
                <span>)</span></div>
                </div> : null}
                <div className="price pt-2">
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
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        </div>
        
    </Swiper>
    <Swiper navigation= {isActive == 2 ? true : false} modules={[Navigation]} className= {isActive == 2 ? "mySwiper d-flex justify-content-start align-items-center p-5" : "d-none"}>
        <div>
      <SwiperSlide>
      <div className = {isActive == 2 ? "conainer change-tabs active" : "conainer change-tabs"}>
      <div className="CardAppleHolder active d-flex mb-5">
      {tvsData.slice(0,7).map((data , index) =>{
          return(
              <div className="container-fluid col-4 me-2" key={data.offerId}>
              <div className="abslouteNamber svelte-x83xky" id={data.sallerId}><span>{data.sallerId}</span></div>
              
             <div className="d-flex me-5" >
             <div className="cardAppleHolder">
             
              <Link className='text-dark' to={data.to}>
              
              <div className="topCard ">
              <div className="left">
              {data.sabOffer == null ?  null: <div className='spOfficail'>{data.sabOffer}</div>}
              {data.specialOffer == null ?  null: <div className='spOfficail'>{data.specialOffer}</div>}
              {data.megaSale == null ?  null: <div className='megaSale'>{data.megaSale}</div>}
              
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
              {data.rate && data.peopleRates != null ? <div className="rate d-flex">
              <div><span><FaStar /></span></div>
              <div><span>{data.rate}</span></div>
              <div><span>(</span>
              {data.peopleRates}
              <span>)</span></div>
              </div> : null}
              <div className="price pt-2">
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
      </div>
      <SwiperSlide></SwiperSlide>
      <SwiperSlide>
      </SwiperSlide>
      
      </Swiper>
      <Swiper navigation= {isActive == 3 ? true : false} modules={[Navigation]} className= {isActive == 3 ? "mySwiper d-flex justify-content-start align-items-center p-5" : "d-none"}>
        <div>
      <SwiperSlide>
      <div className = {isActive == 3 ? "conainer change-tabs active" : "conainer change-tabs"}>
      <div className="CardAppleHolder active d-flex mb-5">
      {lapTopsData.slice(0,7).map((data , index) =>{
          return(
              <div className="container-fluid col-4 me-2" key={data.offerId}>
              <div className="abslouteNamber svelte-x83xky" id={data.sallerId}><span>{data.sallerId}</span></div>
              
             <div className="d-flex me-5" >
             <div className="cardAppleHolder">
             
              <Link className='text-dark' to={data.to}>
              
              <div className="topCard ">
              <div className="left">
              {data.sabOffer == null ?  null: <div className='spOfficail'>{data.sabOffer}</div>}
              {data.specialOffer == null ?  null: <div className='spOfficail'>{data.specialOffer}</div>}
              {data.megaSale == null ?  null: <div className='megaSale'>{data.megaSale}</div>}
              
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
              {data.rate && data.peopleRates != null ? <div className="rate d-flex">
              <div><span><FaStar /></span></div>
              <div><span>{data.rate}</span></div>
              <div><span>(</span>
              {data.peopleRates}
              <span>)</span></div>
              </div> : null}
              <div className="price pt-2">
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
      </div>
      <SwiperSlide></SwiperSlide>
      <SwiperSlide>
      </SwiperSlide>
      </Swiper>
      <Swiper navigation= {isActive == 4 ? true : false} modules={[Navigation]} className= {isActive == 4 ? "mySwiper d-flex justify-content-start align-items-center p-5" : "d-none"}>
        <div>
      <SwiperSlide>
      <div className = {isActive == 4 ? "conainer change-tabs active" : "conainer change-tabs"}>
      <div className="CardAppleHolder active d-flex mb-5">
      {washingData.slice(0,6).map((data , index) =>{
          return(
              <div className="container-fluid col-4 me-2" key={data.offerId}>
              <div className="abslouteNamber svelte-x83xky" id={data.sallerId}><span>{data.sallerId}</span></div>
              
             <div className="d-flex me-5" >
             <div className="cardAppleHolder">
             
              <Link className='text-dark' to={data.to}>
              
              <div className="topCard ">
              <div className="left">
              {data.sabOffer == null ?  null: <div className='spOfficail'>{data.sabOffer}</div>}
              {data.specialOffer == null ?  null: <div className='spOfficail'>{data.specialOffer}</div>}
              {data.megaSale == null ?  null: <div className='megaSale'>{data.megaSale}</div>}
              
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
              {data.rate && data.peopleRates != null ? <div className="rate d-flex">
              <div><span><FaStar /></span></div>
              <div><span>{data.rate}</span></div>
              <div><span>(</span>
              {data.peopleRates}
              <span>)</span></div>
              </div> : null}
              <div className="price pt-2">
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
      </div>
      <SwiperSlide>
      </SwiperSlide>
      
      </Swiper>
      <Swiper navigation= {isActive == 5 ? true : false} modules={[Navigation]} className= {isActive == 5 ? "mySwiper d-flex justify-content-start align-items-center p-5" : "d-none"}>
      <div>
    <SwiperSlide>
    <div className = {isActive == 5 ? "conainer change-tabs active" : "conainer change-tabs"}>
    <div className="CardAppleHolder active d-flex mb-5">
    {refrigetarorData.slice(0,6).map((data , index) =>{
        return(
            <div className="container-fluid col-4 me-2" key={data.offerId}>
            <div className="abslouteNamber svelte-x83xky" id={data.sallerId}><span>{data.sallerId}</span></div>
            
           <div className="d-flex me-5" >
           <div className="cardAppleHolder">
           
            <Link className='text-dark' to={data.to}>
            
            <div className="topCard ">
            <div className="left">
            {data.sabOffer == null ?  null: <div className='spOfficail'>{data.sabOffer}</div>}
            {data.specialOffer == null ?  null: <div className='spOfficail'>{data.specialOffer}</div>}
            {data.megaSale == null ?  null: <div className='megaSale'>{data.megaSale}</div>}
            
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
            {data.rate && data.peopleRates != null ? <div className="rate d-flex">
            <div><span><FaStar /></span></div>
            <div><span>{data.rate}</span></div>
            <div><span>(</span>
            {data.peopleRates}
            <span>)</span></div>
            </div> : null}
            <div className="price pt-2">
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
    </div>
    <SwiperSlide>
    </SwiperSlide>
    
    </Swiper>
      <Swiper navigation= {isActive == 6 ? true : false} modules={[Navigation]} className= {isActive == 6 ? "mySwiper d-flex justify-content-start align-items-center p-5" : "d-none"}>
      <div>
    <SwiperSlide>
    <div className = {isActive == 6 ? "conainer change-tabs active" : "conainer change-tabs"}>
    <div className="CardAppleHolder active d-flex mb-5">
    {tabletsData.slice(0,6).map((data , index) =>{
        return(
            <div className="container-fluid col-4 me-2" key={data.offerId}>
            <div className="abslouteNamber svelte-x83xky" id={data.sallerId}><span>{data.sallerId}</span></div>
            
           <div className="d-flex me-5" >
           <div className="cardAppleHolder">
           
            <Link className='text-dark' to={data.to}>
            
            <div className="topCard ">
            <div className="left">
            {data.sabOffer == null ?  null: <div className='spOfficail'>{data.sabOffer}</div>}
            {data.specialOffer == null ?  null: <div className='spOfficail'>{data.specialOffer}</div>}
            {data.megaSale == null ?  null: <div className='megaSale'>{data.megaSale}</div>}
            
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
            {data.rate && data.peopleRates != null ? <div className="rate d-flex">
            <div><span><FaStar /></span></div>
            <div><span>{data.rate}</span></div>
            <div><span>(</span>
            {data.peopleRates}
            <span>)</span></div>
            </div> : null}
            <div className="price pt-2">
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
    </div>
    <SwiperSlide>
    </SwiperSlide>
    
    </Swiper>
      <Swiper navigation= {isActive == 7 ? true : false} modules={[Navigation]} className= {isActive == 7 ? "mySwiper d-flex justify-content-start align-items-center p-5" : "d-none"}>
      <div>
    <SwiperSlide>
    <div className = {isActive == 7 ? "conainer change-tabs active" : "conainer change-tabs"}>
    <div className="CardAppleHolder active d-flex mb-5">
    {setVacuum.slice(0,6).map((data , index) =>{
        return(
            <div className="container-fluid col-4 me-2" key={data.offerId}>
            <div className="abslouteNamber svelte-x83xky" id={data.sallerId}><span>{data.sallerId}</span></div>
            
           <div className="d-flex me-5" >
           <div className="cardAppleHolder">
           
            <Link className='text-dark' to={data.to}>
            
            <div className="topCard ">
            <div className="left">
            {data.sabOffer == null ?  null: <div className='spOfficail'>{data.sabOffer}</div>}
            {data.specialOffer == null ?  null: <div className='spOfficail'>{data.specialOffer}</div>}
            {data.megaSale == null ?  null: <div className='megaSale'>{data.megaSale}</div>}
            
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
            {data.rate && data.peopleRates != null ? <div className="rate d-flex">
            <div><span><FaStar /></span></div>
            <div><span>{data.rate}</span></div>
            <div><span>(</span>
            {data.peopleRates}
            <span>)</span></div>
            </div> : null}
            <div className="price pt-2">
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
    </div>
    <SwiperSlide>
    </SwiperSlide>
    
    </Swiper>
      <Swiper navigation= {isActive == 8 ? true : false} modules={[Navigation]} className= {isActive == 8 ? "mySwiper d-flex justify-content-start align-items-center p-5" : "d-none"}>
      <div>
    <SwiperSlide>
    <div className = {isActive == 8 ? "conainer change-tabs active" : "conainer change-tabs"}>
    <div className="CardAppleHolder active d-flex mb-5">
    {setMicrowaves.slice(0,6).map((data , index) =>{
        return(
            <div className="container-fluid col-4 me-2" key={data.offerId}>
            <div className="abslouteNamber svelte-x83xky" id={data.sallerId}><span>{data.sallerId}</span></div>
            
           <div className="d-flex me-5" >
           <div className="cardAppleHolder">
           
            <Link className='text-dark' to={data.to}>
            
            <div className="topCard ">
            <div className="left">
            {data.sabOffer == null ?  null: <div className='spOfficail'>{data.sabOffer}</div>}
            {data.specialOffer == null ?  null: <div className='spOfficail'>{data.specialOffer}</div>}
            {data.megaSale == null ?  null: <div className='megaSale'>{data.megaSale}</div>}
            
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
            {data.rate && data.peopleRates != null ? <div className="rate d-flex">
            <div><span><FaStar /></span></div>
            <div><span>{data.rate}</span></div>
            <div><span>(</span>
            {data.peopleRates}
            <span>)</span></div>
            </div> : null}
            <div className="price pt-2">
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
    </div>
    <SwiperSlide>
    </SwiperSlide>
    
    </Swiper>
      <Swiper navigation= {isActive == 9 ? true : false} modules={[Navigation]} className= {isActive == 9 ? "mySwiper d-flex justify-content-start align-items-center p-5" : "d-none"}>
      <div>
    <SwiperSlide>
    <div className = {isActive == 9 ? "conainer change-tabs active" : "conainer change-tabs"}>
    <div className="CardAppleHolder active d-flex mb-5">
    {setOutdoor.slice(0,6).map((data , index) =>{
        return(
            <div className="container-fluid col-4 me-2" key={data.offerId}>
            <div className="abslouteNamber svelte-x83xky" id={data.sallerId}><span>{data.sallerId}</span></div>
            
           <div className="d-flex me-5" >
           <div className="cardAppleHolder">
           
            <Link className='text-dark' to={data.to}>
            
            <div className="topCard ">
            <div className="left">
            {data.sabOffer == null ?  null: <div className='spOfficail'>{data.sabOffer}</div>}
            {data.specialOffer == null ?  null: <div className='spOfficail'>{data.specialOffer}</div>}
            {data.megaSale == null ?  null: <div className='megaSale'>{data.megaSale}</div>}
            
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
            {data.rate && data.peopleRates != null ? <div className="rate d-flex">
            <div><span><FaStar /></span></div>
            <div><span>{data.rate}</span></div>
            <div><span>(</span>
            {data.peopleRates}
            <span>)</span></div>
            </div> : null}
            <div className="price pt-2">
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
    </div>
    <SwiperSlide>
    </SwiperSlide>
    
    </Swiper>
    </div>
  )
}
