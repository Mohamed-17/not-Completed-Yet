import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { TbCategory } from "react-icons/tb";
import { IoIosSearch } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { LuPackageSearch } from "react-icons/lu";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ScreenRotationAltIcon from '@mui/icons-material/ScreenRotationAlt';
import XIcon from '@mui/icons-material/X';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import { HiOutlineMapPin } from "react-icons/hi2";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { MdChevronRight } from "react-icons/md";
import { HiOutlineDeviceMobile } from "react-icons/hi";
import { GrPersonalComputer } from "react-icons/gr";
import { LiaTvSolid } from "react-icons/lia";
import { CgSmartHomeRefrigerator } from "react-icons/cg";
import { TbAirConditioningDisabled } from "react-icons/tb";
import { GiWashingMachine } from "react-icons/gi";
import { MdOutlineIron } from "react-icons/md";
import { PiHairDryerBold } from "react-icons/pi";
import { IoGameController } from "react-icons/io5";
import { PiCards } from "react-icons/pi";
import { MdChair } from "react-icons/md";
import { PiLightbulbFilamentDuotone } from "react-icons/pi";
import { TbBellStar } from "react-icons/tb";
import { PiHandArrowDownBold } from "react-icons/pi";
import { PiTrademark } from "react-icons/pi";
import { FaGift } from "react-icons/fa";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { FaTruckFast } from "react-icons/fa6";
import { LiaTruckSolid } from "react-icons/lia";
import { TbCreditCardPay } from "react-icons/tb";
import { BiSolidCollection } from "react-icons/bi";
import { Slider } from '../slider/Slider';
import { Tvs } from '../slider/Tvs';




import  '@mui/material';
import { Computing } from '../slider/Computing';
import { Applic } from '../slider/Applic';
export const Navbar = () => {
    const [count, setCount] = useState(0);
    const [cartCounter , setCart] = useState(0);
    
    document.addEventListener("mouseover" , (e)=>{
      const menu = document.querySelector(".Account");
      const wishList = document.querySelector(".wishList_Menu");      
      if (!wishList.contains(e.target) && !menu.contains(e.target)){
        wishList.classList.remove("active");
      }

      
    })
    
      
      document.addEventListener("mouseover",(e)=>{
      const ExtraService = document.querySelector(".exstra_services");
      const section_menu = document.querySelector(".section_menu");
      if(!section_menu.contains(e.target) && !ExtraService.contains(e.target)){
        section_menu.classList.remove("active");
      }
      })
      
    
    document.addEventListener("click", (e)=>{
      const menu = document.querySelector("#search_menu");
      const middle = document.querySelector(".middle");
      const lis = document.querySelectorAll(".search_menu ul li");
      if (!menu.contains(e.target) && !middle.contains(e.target)){
        menu.classList.remove("active");
      }
      lis.forEach((li)=>{
        if(li.contains(e.target)){
          menu.classList.remove("active");
        }
      })
    })
    
    document.addEventListener("click",(e)=>{
      const menu = document.querySelector(".SlideMenuLeft");
      const menuRight = document.querySelector(".RightSlide");
      const slider = document.querySelector(".NestedSlider");
      const backMenu = document.querySelectorAll(".BackMenu");
      if (menuRight.contains(e.target)){
        slider.classList.add("active")
      }
      if(menu.contains(e.target)){
        slider.classList.add("active");
        
      }
      backMenu.forEach((bc)=>{
        if(bc.contains(e.target)){
          slider.classList.remove("active");
        }
      })
    })
    document.addEventListener("click",(e)=>{
      const menu = document.querySelector(".computing .SlideMenuLeft");
      const menuRight = document.querySelector(".computing .RightSlide");
      const slider = document.querySelector(".computing .NestedSlider");
      const backMenu = document.querySelectorAll(".computing .BackMenu");
      if (menuRight.contains(e.target)){
        slider.classList.add("active");
        
      }
      if(menu.contains(e.target)){
        slider.classList.add("active");
        
      }
      backMenu.forEach((bc)=>{
        if(bc.contains(e.target)){
          slider.classList.remove("active");
        }
      })
    })
    document.addEventListener("click",(e)=>{
     
      const slider = document.querySelector(".tvs .NestedSlider");
      const backMenu = document.querySelectorAll(".tvs .BackMenu");
     
      backMenu.forEach((bc)=>{
        if(bc.contains(e.target)){
          slider.classList.remove("active");
        }
      })
    })
    document.addEventListener("click",(e)=>{
     
      const slider = document.querySelector(".applic .NestedSlider");
      const backMenu = document.querySelectorAll(".applic .BackMenu");
      
      backMenu.forEach((bc)=>{
        if(bc.contains(e.target)){
          slider.classList.remove("active");
        }
      })
    })
  return (
    <>
    <div className="navbar">
    <div className="layout" onClick={()=>{
      document.querySelector(".catagory").classList.remove("active");
      document.querySelector(".layout").classList.remove("active");
      document.querySelector(".slider").classList.remove("active");
      document.querySelector(".tvs").classList.remove("active");
      document.querySelector(".applic").classList.remove("active");
      document.querySelector(".LeftScrollMenu").classList.remove("active");
      document.querySelector(".NestedSlider").classList.remove("active");
      document.querySelector(".computing .NestedSlider ").classList.remove("active");
      document.querySelector(".tvs .NestedSlider ").classList.remove("active");
      document.querySelector(".applic .NestedSlider ").classList.remove("active");
      
      
      
    }}></div>
    <div className="LeftScrollMenu" id='LeftScrollMenu-1'>
    <div className="text-area">
    <h6>Mega Sale</h6>
    </div>
    <ul>
      <li>
        <div className='SlideMenuLeft' onClick={(e)=>{
          document.querySelector(".NestedSlider").classList.add("active")
        }}>
        <span><HiOutlineDeviceMobile/></span>
          <Link>Mobiles & tablets</Link>
        </div>
        <div>
        <div className="RightSlide">
        <MdChevronRight/>
        </div>
        </div>
      </li>
      <li>
        <div className='SlideMenuLeft' onClick={(e)=>{
          document.querySelector(".computing .NestedSlider").classList.add("active");
        }} >
        <span><GrPersonalComputer/></span>
          <Link>Computing</Link>
        </div>
        <div className="RightSlide">
        <MdChevronRight/>
        </div>
      </li>
      <li>
        <div className='SlideMenuLeft' onClick={(e)=>{
          document.querySelector(".tvs .NestedSlider").classList.add("active");
        }}>
        <span><LiaTvSolid/></span>
          <Link>TVs & Entertainment</Link>
        </div>
        <div className="RightSlide">
        <MdChevronRight/>
        </div>
      </li>
      <li>
        <div  className='SlideMenuLeft' onClick={(e)=>{
          document.querySelector(".applic .NestedSlider").classList.add("active");
        }}>
        <span><TbAirConditioningDisabled/></span>
          <Link>ACS</Link>
        </div>
        <div className="RightSlide">
        <MdChevronRight/>
        </div>
      </li>
      <li>
        <div className='SlideMenuLeft'>
        <span><GiWashingMachine/></span>
          <Link>Washing Machines</Link>
        </div>
        <div className="RightSlide">
        <MdChevronRight/>
        </div>
      </li>
      <li>
        <div className='SlideMenuLeft'>
        
        <span><CgSmartHomeRefrigerator/></span>
          <Link>Refrigerators</Link>
        </div>
        <div className="RightSlide">
        <MdChevronRight/>
        </div>
      </li>
      <li>
        <div className='SlideMenuLeft'>
        <span><MdOutlineIron/></span>
          <Link>Small Appliances</Link>
        </div>
        <div className="RightSlide">
        <MdChevronRight/>
        </div>
      </li>
      <li>
        <div className='SlideMenuLeft'>
        <span><PiHairDryerBold/></span>
          <Link>Personal Care</Link>
        </div>
        <div className="RightSlide">
        <MdChevronRight/>
        </div>
      </li>
      <li>
        <div className='SlideMenuLeft'>
        <span><IoGameController/></span>
          <Link>Gaming</Link>
        </div>
        <div className="RightSlide">
        <MdChevronRight/>
        </div>
      </li>
      <li>
        <div className='SlideMenuLeft'>
        <span><PiCards/></span>
          <Link>Digital Cards</Link>
        </div>
        <div className="RightSlide">
        <MdChevronRight/>
        </div>
      </li>
      <li>
        <div className='SlideMenuLeft'>
        <span><MdChair/></span>
          <Link>Home Improvement</Link>
        </div>
        <div className="RightSlide">
        <MdChevronRight/>
        </div>
      </li>
      <li>
        <div className='SlideMenuLeft'>
        <span><PiLightbulbFilamentDuotone/></span>
          <Link>Smart Home & Gadgets</Link>
        </div>
        <div className="RightSlide">
        <MdChevronRight/>
        </div>
      </li>
      <li>
        <div className='SlideMenuLeft'>
        <span><TbBellStar/></span>
          <Link>Special Offer</Link>
        </div>
        
      </li>
      <li>
        <div className='SlideMenuLeft'>
        <span><PiHandArrowDownBold/></span>
          <Link>Trade-In</Link>
        </div>
        
      </li>
      <li>
        <div className='SlideMenuLeft'>
        <span><PiTrademark/></span>
          <Link>Jood MemberShip</Link>
        </div>
        
      </li>
      <li>
        <div className='SlideMenuLeft'>
        <span><FaGift/></span>
          <Link>Extra Gift Card</Link>
        </div>
        
      </li>
      <li>
        <div className='SlideMenuLeft'>
        <span><HiOutlineWrenchScrewdriver/></span>
          <Link>Extra Services</Link>
        </div>
        <div className="RightSlide">
        <MdChevronRight/>
        </div>
      </li>
    </ul>
    </div>
    <div className='slider'><Slider 
    first = "Apple"
    second = "Samsung"
    third = "Huawei"
    Fourth = "Honor"
      Fifth = "Xiaomi"
      sixth = "Tecno"
      seventh = "Motorola"
      eighth = "Android Mobiles"
      ninth = "Tablets"
      tenth = "Smartwatches"
      eleventh = "Portable Audio"
      twelfth = "Mobile Accessories"
      thirteenth = "Digital Cards"
      Fourteenth = "eXtra Outlet"
      Fifteenth = "eXtra Gift Card"
      Sixteenth = "Trade-in Your Smartphone"
      
      /></div>
      <div className="computing">
      <Computing
      first = "Laptops"
    second = "Desketops"
    third = "Cameras"
    Fourth = "Printers"
      Fifth = "Printers supplies"
      sixth = "Computer Accessories"
      seventh = "Pc Gaming Accessories"
      eighth = "Android Mobiles"
      ninth = "Networking"
      tenth = "Storage Devices"
      eleventh = "Monitors & Projectors"
      twelfth = "Software"
      thirteenth = "Extra Gift Card"
      />
      </div>
      <div className="tvs">
      <Tvs 
      first = "Televisions"
    second = "Tv Accessories"
    third = "Home Entertainment"
    Fourth = "Monitors & Projectors "
      Fifth = "Musical Instruments"
      sixth = "Extra Gift Card"
      />
      </div>
      <div className="applic">
      <Applic 
    second = "Split ACs "
    third = "Window ACs"
    Fourth = "Free Standing ACs"
      Fifth = "AC Cleaning Service"
      sixth = "Extra Gift Card"
      />
      </div>
    <div className="left col-2 d-flex">
    <div>
    <Link to={"/"}><img src="public/extra-img/th.jfif" alt="" /></Link>
    </div>
    <div className='catagory' id='catagory' onClick={()=>{
      const cata =  document.querySelector("#catagory");
      const slider = document.querySelector(".NestedSlider");
      cata.classList.toggle("active");
      if(cata.classList.contains("active")){
        document.querySelector(".layout").classList.add("active");
        document.querySelector(".slider").classList.add("active");
        document.querySelector(".tvs").classList.remove("active");
        document.querySelector(".LeftScrollMenu").classList.add("active");
        document.querySelector(".computing").classList.add("active");
        document.querySelector(".applic").classList.add("active");
        
        
        console.log(document.querySelector(".LeftScrollMenu"));
      }else{
        document.querySelector(".slider").classList.remove("active");
        document.querySelector(".computing").classList.remove("active");
        document.querySelector(".tvs").classList.remove("active");
        document.querySelector(".applic").classList.remove("active");
        slider.classList.remove("active");
        document.querySelector(".layout").classList.remove("active");
        document.querySelector(".LeftScrollMenu").classList.remove("active");
        document.querySelector(".computing .NestedSlider ").classList.remove("active");
        document.querySelector(".tvs .NestedSlider ").classList.remove("active");
        document.querySelector(".applic .NestedSlider").classList.remove("active");
        
      }
      
    }}>
    <TbCategory id='Tbcategory'/> 
    <span>Catagories</span></div>
    </div>
    <div className="middle col-7">
    <div className="search-box">
    <span><IoIosSearch id='search-icon'/></span>
    <input placeholder='Find gadgets, appliances, and inspiration' type="search" name="search" id="search" onFocus={()=>{
      const menu = document.querySelector("#search_menu");
      menu.classList.add("active")
    }}/>
    </div>
    <div className="search_menu" id='search_menu'>
    <p>POPULAR BRANDS</p>
    <ul>
    <Link to={"/popular/apple"}><li>Apple</li></Link>
    <Link to={"/popular/Samsung"}><li>Samsung</li></Link>
    <Link to={"/popular/lg"}> <li>LG</li></Link>
    <Link to={"/popular/class-pro"} > <li>Class Pro</li></Link>
    <Link to={"/popular/sony"} > <li>Sony</li></Link>
    <Link to={"/popular/gree"}> <li>Gree</li></Link>
    <Link to={"/popular/huawei"} > <li>Huawei</li></Link>
    <Link to={"/popular/philips"} ><li>Philips</li></Link>
    </ul>
    <div className='br'></div>
    <p>TRENDING</p>
    <ul>
    <Link to={"/trending/mobiles"}>
      <li>
        Mobiles
      </li>
      </Link>
      <Link to={"/trending/tvs"}>
      <li>
        TVs
      </li>
      </Link>
      <Link to={"/trending/acs"}>
      <li>
        ACs
      </li>
      </Link>
      <Link to={"/trending/washing-machines"}>
      <li>
        Washing Machines
      </li>
      </Link>
      <Link to={"/trending/laptops"}>
      <li>
        Laptops
      </li>
      </Link>
      <Link to={"/trending/gaming-consoles"}>
      <li>
        Gaming Consoles
      </li>
      </Link>
        <Link to={"/trending/electric-scooters"}><li>Electric Scooters</li></Link>
      
        <Link to={"/trending/smart-home"}><li>Smart Home Technology</li></Link>
    </ul>
    </div>
    </div>
    <div className="right col-3">
    <ul>
    <li>
        <Link to={"/jood/benefits"}>
        <div>
        <img src="public/extra-img/jood-logo.svg" alt="" />
        </div>
        </Link>
    </li>
    <li className='wishList'>
    <span className='counter'>{count}</span>
        <Link to={"/login"}><FaRegHeart id='heart'/>
        <div>Your<br /> <span>Wishlist</span></div></Link>
        
    </li>
    <div className='wishList_Menu'>
    <ul>
    <Link to={"/login"} className='login' id='login' onClick={()=>{
      document.querySelector(".wishList_Menu").classList.remove("active")
    }}>
      <li>   <AccountCircleIcon/> <span>Log in or join</span></li>
    </Link>
    <div className="br"></div>
    <p>Orders</p>
    <Link to={"/trackorder"} onClick={()=>{
      document.querySelector(".wishList_Menu").classList.remove("active")
    }}>
      <li><LuPackageSearch/><span>Track Order</span></li>
    </Link>
    <Link to={"/returnexchange"} onClick={()=>{
      document.querySelector(".wishList_Menu").classList.remove("active")
    }}>
      <li> <ScreenRotationAltIcon/><span>Returns & Exchange</span></li>
    </Link>
    <div className="br"></div>
    <Link to={"/baseeta"} onClick={()=>{
      document.querySelector(".wishList_Menu").classList.remove("active")
    }}>
      <li> <img src="public/extra-img/tasheel-icon.svg" alt="No image" /> <span>Baseeta</span></li>
    </Link>
    <div className="br"></div>
    <Link to={'/extraservices'} onClick={()=>{
      document.querySelector(".wishList_Menu").classList.remove("active")
    }}>
      <li><XIcon/><span>Extra Services</span></li>
    </Link>
    <Link to={"/faqs"} onClick={()=>{
      document.querySelector(".wishList_Menu").classList.remove("active")
    }}>
      <li> <HeadphonesIcon/> <span>Help & Support</span></li>
    </Link>
    </ul>
    </div>
    <li  className='Account' onMouseOver={()=>{
      document.querySelector(".wishList_Menu").classList.add("active")
    }} >
    <MdAccountCircle/>
    <div>Hi there! <br /> <span>Account</span></div>
    </li>
    <li>
    <span className='cartCounter'>{cartCounter}</span>
        <Link to={"/cart"}><div><FaShoppingCart/></div><div>Your <br /> <span>Cart</span></div></Link>
        
    </li>
    </ul>
    </div>
    </div>
    <div className="flag_lang">
    <div className="last_nav_left">
    <div className="flag">
    <div className="dropdown">
    <img src="public/flag/4641082361_37d32d0bb3_b.png" alt="" />
  <button className="dropbtn">En</button>
  <span id='menu_flag'><MdOutlineKeyboardArrowDown/></span>
  <div className="dropdown-content">
  <p>Choose a different language</p>
    <div className="languages d-flex">
    <span className='En'><Link to={"/"}>English</Link></span>
    <span><Link>العربية</Link></span>
    
    </div>
    <p>Choose a different country</p>
    <div className="flags_of_countries d-flex">
    <div className="bahrain">
    <div>
    <img src="public/flag/bahrain.png" alt="" />
    </div>
    <span>Bahrain</span>
    </div>
    <div className="Saudi">
    <img src="public/flag/4641082361_37d32d0bb3_b.png" alt="" />
    <span>Saudi Arabia</span>
    </div>
    <div className="Oman">
    <img src="public/flag/Flag_of_Oman.png" alt="" />
    <span>Oman</span>
    </div>
    </div>
  </div>
</div>
<div>
    </div>
    </div>
    <div className="map">
    <HiOutlineMapPin/>
    <span>Riyadh</span>
    </div>
    </div>
    <div className="last_nav_right">
    <div className="extra_blog">
    <a href="https://www.blog.extra.com/" target='_blank'>eXtra Blog</a>
    </div>
    <div className="exstra_services" onMouseOver={()=>{
      document.querySelector('.section_menu').classList.add("active");
      console.log(document.querySelector('.section_menu'));
    }} >
    <p>Extra Services</p> 
    <MdOutlineKeyboardArrowDown id='serv_menu'/> 
    
    
    </div>
    <div className="section_menu">
    <div>
    <ul className='ulLinks'>
    <Link  onClick={()=>{
      document.querySelector('.section_menu').classList.remove("active");
    }} to={"extrasetup"}>
      <li>ExtraSet-up</li>
    </Link>
    <Link onClick={()=>{
      document.querySelector('.section_menu').classList.remove("active");
    }} to={"extrasafeguard2"}>
      <li>ExtraSafeguard</li>
    </Link>
    <Link onClick={()=>{
      document.querySelector('.section_menu').classList.remove("active");
    }} to={"extracare"} >
      <li>ExtraCare</li>
    </Link>
    <Link onClick={()=>{
      document.querySelector('.section_menu').classList.remove("active");
    }} to={"extrarepair"}>
      <li>ExtraRepair</li>
    </Link>
    </ul>
    </div>
    </div>
    </div>
    
    </div>
    
    <hr />
    <section className='delivery mb-1'>
    <ul className='mb-2'>
    <Link to={"/delivery"} >
      <li>
      <LiaTruckSolid />
      <span>Free delivery</span>
      </li>
    </Link>
    <Link to={"/delivery/speed"}>
      <li>
      <FaTruckFast />
      <span>Speedy delivery</span>
      </li>
    </Link>
    <Link to={"/CFS"}>
      <li>
      <BiSolidCollection />
      <span>Click & collect</span>
      </li>
    </Link>
    <Link to={"/baseeta"}>
      <li>
      <TbCreditCardPay/>
      <span>Flexible payments with Baseeta</span>
      </li>
    </Link>
    </ul>
    </section>
    <hr className='mt-0' />
    </>
    
  )
}
