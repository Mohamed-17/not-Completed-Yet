import React from 'react'
import { Link } from 'react-router-dom'
export const HelpFoot = () => {
  return (
    <>
    <div className="HelpFoot">
    <div className="ContentHelp">
    <div className='d-flex flex-column'> 
    <Link to={"/faqs"} className='container_img'><img src="public/icons/HelpSupport_Icon36.png" alt="" /></Link>
    <Link to={"/faqs"} className='Help_Support'>help & support</Link>
    <Link to={"/faqs"} className='question'>Have any questions? We'll help you with all your product <br /> needs.</Link>
    </div>
    <div className='d-flex flex-column'> 
    <Link to={"/trackorder"} className='container_img'><img src="public/icons/PackageTracking_Icon36.png" alt="" /></Link>
    <Link to={"/trackorder"} className='Help_Support'>Order tracking</Link>
    <Link to={"/trackorder"} className='question'>Keep track of your order’s process, whether delivery or <br /> pickup.</Link>
    </div>
    <div className='d-flex flex-column'> 
    <Link to={"/returnexchange"} className='container_img'><img src="public/icons/Exchange_Icon36.png" alt="" /></Link>
    <Link to={"/returnexchange"} className='Help_Support'>Return & exchange</Link>
    <Link to={"/returnexchange"} className='question'>Everything you need to know about our return & exchange <br /> policies.</Link>
    </div>
    <div className='d-flex flex-column'> 
    <Link to={"/PMG"} className='container_img'><img src="public/icons/PMP_Icon36.png" alt="" /></Link>
    <Link to={"/PMG"} className='Help_Support'>Price match</Link>
    <Link to={"/PMG"} className='question'>Learn how our price match policy can lower your purchase <br /> costs.</Link>
    </div>
    <div className='d-flex flex-column'> 
    <Link to={"/payment"} className='container_img'><img src="public/icons/Payment_Icon36.png" alt="" /></Link>
    <Link to={"/payment"} className='Help_Support'>Flexible payment</Link>
    <Link to={"/payment"} className='question'>Plenty of options to make your purchase, including flexible installment  plans.</Link>
    </div>
    </div>
    </div>
    </>
  )
}
