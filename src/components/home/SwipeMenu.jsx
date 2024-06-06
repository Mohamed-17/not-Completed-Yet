import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';
import 'swiper/css/pagination';
import "swiper/css";
import { Link } from "react-router-dom";


export default function SwiperMenu() {
  return (
    <>
      <div className="SwiperMenu">
      <Swiper className="mySwiper">
        <SwiperSlide className="SliderHolder">
        
        <Link to={"/mega-sale/cp/8018"}>
            <li>Mega Sale</li>
        </Link>
        <Link to={"/special-offer/cp/8025"}>
            <li>Special Offer</li>
        </Link>
        <Link to={"/cashback"}>
            <li>Cashback Offer</li>
        </Link>
        <Link to={"/jood/benefits"}>
            <li>Jood Membership</li>
        </Link>
        <Link to={"/tamaraterms"}>
            <li>Tamara in 4 Splits</li>
        </Link>
        <Link to={"/tabbyterms"}>
            <li>Tabby Pay-In-4</li>
        </Link>
        <Link to={"/apple/b/APPLE"}>
            <li>Apple</li>
        </Link>
        <Link to={"/mobiles-tablets"}>
            <li>Mobiles & Tablets</li>
        </Link>
        <Link to={"/white-goods"}>
            <li>Large Appliances</li>
        </Link>
        
        </SwiperSlide>
        <SwiperSlide className="SliderHolder">
        <Link to={"/electronics"}>
            <li>TVs</li>
        </Link>
        <Link to={"/computer"}>
            <li>Computing</li>
        </Link>
        <Link to={"/small-appliances"}>
            <li>Small Appliances</li>
        </Link>
        <Link to={"/electronic-games"}>
            <li>Gaming</li>
        </Link>
        <Link to={"/home-automation"}>
            <li>Smart Home Devices </li>
        </Link>
        <Link to={"/trade-in"}>
            <li>Trade-In</li>
        </Link>
        </SwiperSlide>
      </Swiper>
      </div>
    </>
  );
}
