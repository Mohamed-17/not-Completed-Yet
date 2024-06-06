import React from 'react'
import {Link} from 'react-router-dom'
import { LuPackageSearch } from "react-icons/lu";
import { VscRefresh } from "react-icons/vsc";
import { FcSupport } from "react-icons/fc";

export const FirstBar = () => {
  return (
    <div className="first_bar">
    <ul>
    <li><Link to={"/trackorder"}> <span><LuPackageSearch /></span> Track Order</Link></li>
    <li><Link to={"/returnexchange"}> <span><VscRefresh/></span> Returns & Exchange</Link></li>
    <li><Link to={"/faqs"}> <span><FcSupport/></span> Help & Support</Link></li>
    </ul>
    </div>
  )
}
