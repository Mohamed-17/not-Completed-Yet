import React from 'react'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdChevronRight } from "react-icons/md";
import { Link } from 'react-router-dom'
export const Applic = (props) => {
  return (
    <>
    <div className="NestedSlider" id='NestedSlider'>
    <div className="TopNestedSlider pt-3 pb-5">
    <div className='BackMenu me-2 '><MdOutlineKeyboardArrowLeft className='fs-4'/> <span>Back</span></div>
    <div><h6 className='m-0 fw-bold '>ACs</h6></div></div>
    <div className="text-area">
    <div className='font-s'>View All ACs</div>
    </div>
    <ul>
      <li>
        <div className='SlideMenuLeft'>
        
          <Link>{props.second}</Link>
        </div>
        <div className="RightSlide">
        <MdChevronRight/>
        </div>
      </li>
      <li>
        <div className='SlideMenuLeft'>
        
          <Link>{props.third}</Link>
        </div>
        <div className="RightSlide">
        <MdChevronRight/>
        </div>
      </li>
      <li>
        <div className='SlideMenuLeft'>
        
          <Link>{props.Fourth}</Link>
        </div>
        <div className="RightSlide">
        <MdChevronRight/>
        </div>
      </li>
      <li>
        <div className='SlideMenuLeft'>
        
          <Link>{props.Fifth}</Link>
        </div>
        <div className="RightSlide">
        <MdChevronRight/>
        </div>
      </li>
      <li>
        <div className='SlideMenuLeft'>
        
          <Link>{props.sixth}</Link>
        </div>
        <div className="RightSlide">
        <MdChevronRight/>
        </div>
      </li>
      </ul>
      <div className='BackMenu pt-4 pb-3 ps-4'><MdOutlineKeyboardArrowLeft className='fs-4'/> <span>Back</span></div>
    
    </div>
    </>
  )
}
