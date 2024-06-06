import React from 'react'
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdChevronRight } from "react-icons/md";
import { Link } from 'react-router-dom'
export const Slider = (props) => {
  return (
    <>
    <div className="NestedSlider" id='NestedSlider'>
    <div className="TopNestedSlider pt-3 pb-5">
    <div className='BackMenu me-2 '><MdOutlineKeyboardArrowLeft className='fs-4'/> <span>Back</span></div>
    <div><h6 className='m-0 fw-bold '>Mobiles & Tablets</h6></div></div>
    <div className="text-area">
    <div className='font-s'>View All Mobiles & Tablets</div>
    </div>
    <ul>
      <li>
        <div className='SlideMenuLeft'>
        
          <Link>{props.first}</Link>
        </div>
        <div>
        <div className="RightSlide">
        <MdChevronRight/>
        </div>
        </div>
      </li>
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
      <li>
        <div className='SlideMenuLeft'>
        
        
          <Link>{props.seventh}</Link>
        </div>
        <div className="RightSlide">
        <MdChevronRight/>
        </div>
      </li>
      <li>
        <div className='SlideMenuLeft'>
        
          <Link>{props.eighth}</Link>
        </div>
        <div className="RightSlide">
        <MdChevronRight/>
        </div>
      </li>
      <li>
        <div className='SlideMenuLeft'>
        
          <Link>{props.ninth}</Link>
        </div>
        <div className="RightSlide">
        <MdChevronRight/>
        </div>
      </li>
      <li>
        <div className='SlideMenuLeft'>
        
          <Link>{props.tenth}</Link>
        </div>
        <div className="RightSlide">
        <MdChevronRight/>
        </div>
      </li>
      <li>
        <div className='SlideMenuLeft'>
        
          <Link>{props.eleventh}</Link>
        </div>
        <div className="RightSlide">
        <MdChevronRight/>
        </div>
      </li>
      <li>
        <div className='SlideMenuLeft'>
        
          <Link>{props.twelfth}</Link>
        </div>
        <div className="RightSlide">
        <MdChevronRight/>
        </div>
      </li>
      <li>
        <div className='SlideMenuLeft'>
          <Link>{props.thirteenth}</Link>
        </div>
        <div className="RightSlide">
        <MdChevronRight/>
        </div>
      </li>
      <li>
        <div className='SlideMenuLeft'>
          <Link>{props.Fourteenth}</Link>
        </div>
        
      </li>
      <li>
        <div className='SlideMenuLeft'>
          <Link>{props.Fifteenth}</Link>
        </div>
        
      </li>
      <li>
        <div className='SlideMenuLeft'>
          <Link>{props.Sixteenth}</Link>
        </div>
        
      </li>
      </ul>
      <div className='BackMenu pt-4 pb-3 ps-4'><MdOutlineKeyboardArrowLeft className='fs-4'/> <span>Back</span></div>
    
    </div>
    </>
  )
}
