import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF } from "react-icons/fa";
import { VscTwitter } from "react-icons/vsc";
import { GrInstagram } from "react-icons/gr";
import { FaYoutube } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaShop } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";

export const LastFoot = () => {
  return (
    <div className="bg-blue FooterBackContainer">
    <div className="d-flex flex-row ContactContainer">
    <div className="FooterFirstSide d-flex flex-column">
    <div className='ExtraLogo col-4'>
    <div className='ImgContent'>
    <img src="/public/logo/eXtraFooterLogo.png" alt="" />
    </div>
    <div className="ExtraLogoText">
    eXtra anytime, anywhere!
    <p>Make sure to download our app for an enhanced shopping experience and exclusive deals! </p>
    </div>
    </div>
    <div className="ScanDownload mt-4 pt-3">
    <div className="Scan">
    <div className="ScanHolder">
    <img src="/public/footer-imgs/qr-code-prod.png" alt="" />
    <div className='text-area mt-2'>Scan to download</div>
    </div>
    </div>
    <div className="Download">
    <a target='_blank' href="https://apps.apple.com/sa/app/extra-%D8%A7%D9%83%D8%B3%D8%AA%D8%B1%D8%A7/id584430757"><img src="/public/footer-imgs/download/Download_on_the_App_Store_Badge.png" alt="" /></a>
    <a href="https://play.google.com/store/apps/details?id=com.asgatech.extra" target='_blank'><img src="/public/footer-imgs/download/google-play-badge-updated.png" alt="" /></a>
    <a target='_blank' href="https://appgallery.huawei.com/app/C100938241"><img src="/public/footer-imgs/download/appGallery.png" alt="" /></a>
    </div>
    </div>
    <div className="Visa">
    <img src="public\footer-imgs\visa\Mada_footerlogo.png" alt="" />
    <img src="public\footer-imgs\visa\visa_footerlogo.png" alt="" />
    <img src="public\footer-imgs\visa\mc_footerlogo.png" alt="" />
    <img src="public\footer-imgs\visa\AXP_footerlogo.png" alt="" />
    <img src="public\footer-imgs\visa\ApplePay_footerlogo.png" alt="" />
    <img src="public\footer-imgs\visa\tamara_footerlogo.png" alt="" />
    <img src="public\footer-imgs\visa\tabby_new.png" alt="" />
    <img className='thawte' src="public\footer-imgs\visa\thawte_footerlogo.png" alt="" />
    </div>
    </div>
    <div className='AboutUs'>
    <h5>About us</h5>
    <Link to={"/aboutextra"}>Company Information</Link>
    <a target='_blank' href ="http://investors.extrastores.com/index_ar.html">Investor Relations</a>
    <Link to={"/corporateSales"}>Corporate Sales</Link>
    <a target='_blank' href='https://www.bayt.com/ar/company/united-electronics-company-extra-2058853/'>Careers</a>
    </div>
    <div className='AboutUs'>
    <h5>Our services</h5>
    <Link to={"/extrasetup"}>ExtraSet-Up</Link>
    <Link to={"/extrasafeguard2"}>ExtraSafeguard</Link>
    <Link to={"/extracare"}>ExtraCare</Link>
    <Link to={"/extrarepair"}>ExtraRepair</Link>
    <Link to={"/maintenance"}>Maintenance & Repair</Link>
    </div>
    <div className='AboutUs'>
    <h5>Need help?</h5>
    <Link to={"/faqs"}>FAQs</Link>
    <Link to={"/baseeta"}>Tasheel</Link>
    <Link to={"/tamaraterms"}>Tamara</Link>
    <Link to={"/returnexchange"}>Return & Exchange</Link>
    <Link to={"/yourrights"}>Know Your Rights</Link>
    </div>
    <div className='PlatFormsSide'>
    <div className="FirstSide">
    <h5>Contact Us</h5>
    <p>Find us on social platforms</p>
    <div className="PlatForms">
    <div><a target='_blank' href="https://www.facebook.com/extrastores"><FaFacebookF/></a></div>
    <div><a target='_blank' href="https://x.com/eXtraStores"><VscTwitter/></a></div>
    <div><a target='_blank' href="https://www.instagram.com/extrastores"><GrInstagram/></a></div>
    <div><a target='_blank' href="https://www.youtube.com/extrastores"><FaYoutube/></a></div>
    </div>
    <div className="CallUs">
    <div className="CallUsSide">
    <div className='PhoneSide'>
    <p>Call us</p>
    <div><FaPhone/></div>
    </div>
    <div className="Numbers">
    <a target='_blank' href="https://mockcall.com/">92 000 41 23</a>
    <a target='_blank' href="https://mockcall.com/">800 12 40 900</a>
    </div>
    <div>
    </div>
    </div>
    <div className="p_side">
    <p>Saturday - Thursday: 9:00 AM - 10:00 PM
    Friday: 4:00 PM - 10:00 PM</p>
    </div>
    </div>
    </div>
    <div className="ExtraShop">
    <h5>eXtra Stores</h5>
    <div className="ShopMenu row d-flex text-light">
    <div className="shop"><Link to={"/store-finder"} className='text-light'><FaShop/></Link></div>
    <div className='text'><Link to={"/store-finder"} className='text-light'>See our stores</Link></div>
    <div className='arrow'><Link to={"/store-finder"} className='text-light'><IoIosArrowForward/></Link></div>
    </div>
    <p>Working hours might differ between stores</p>
    </div>
    </div>
    </div>
    <hr />
    <div className="FooterNav">
    <div className='CopyRight'>
    <p>Copyright © 2024 <span>extra.com.</span> All rights reserved.</p>
    </div>
    <div className='certified'><img src="/public/footer-imgs/ExtraBPTW_Logo.png" alt="" /></div>
    <div className='NavLinks'>
    <ul>
      <li><Link to={"/privacypolicy"}>Privacy Policy</Link></li>
      <li><Link to={"/sitemap"}>Sitemap</Link></li>
      <li><Link to={"/terms"}>Terms & Conditions</Link></li>
    </ul>
    </div>
    </div>
    <div className='d-flex FooterNavMiddle'>
    <p>United Electronics Co. – eXtra. Online Store CR No. 2051232505. VAT No. 300468781910003</p>
    </div>
    <div className="FooterLastImg">
    <Link><img src="/public/footer-imgs/MCI_disLogo.png" alt="" /></Link>
    </div>
    </div>
  )
}
