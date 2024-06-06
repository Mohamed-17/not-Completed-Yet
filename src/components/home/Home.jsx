import React from 'react'
import SwipeMenu from './SwipeMenu'
import ImgsSlider from './ImgsSlider'
import SalesSlider from './sales/SalesSlider'
import { ShopCard } from './shopcard/ShopCard'
import { TopBrands } from './brands/TopBrands'
import { Apple } from './brands/Apple'
import { SabOffer } from './brands/SabOffer'
import { LastPieceDeal } from './LastPieceDeal'
import { Cashback } from './brands/Cashback'
import { Trending } from './brands/Trending'
import { HonorBanner } from './HonorBanner'
import { BestSellers } from './sales/BestSellers'
import { MegaSale } from './sales/MegaSale'
import {  ValueGifts } from './ValueGifts'
import { BestSellersTwo } from './sales/BestSellersTwo'
import { Shopping } from './Shopping'


export const Home = () => {
  return (
    <div>
    <SwipeMenu/>
    <ImgsSlider/>
    <ShopCard/>
    <SalesSlider/>
    <TopBrands/>
    <Apple/>
    <SabOffer/>
    <Cashback/>
    <LastPieceDeal/>
    <Trending/>
    <HonorBanner/>
    <BestSellers/>
    <MegaSale/>
    <ValueGifts/>
    <BestSellersTwo/>
    <Shopping/>
    </div>
  )
}
