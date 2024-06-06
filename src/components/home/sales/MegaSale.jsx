import React from 'react'
import { Link } from 'react-router-dom'
export const MegaSale = () => {
  return (
    <div className="container">
    <div className="row m-2 center">
    <div className="col-6">
    <Link to={"/samsung/c/SAMSNG/facet/?q=:relevance:productStatusEn:Mega Sale:inStock:true&text=&pageSize=24&pg=0&sort=relevance"}>
    <img src="public/sales/MS24_Samsung_Products_1x2_A.png" alt="" className='w-100' />
    </Link>
    </div>
    <div className="col-6">
    <Link to={"/dyson/c/DYSON/facet/?q=:relevance:productStatusEn:Mega Sale:inStock:true&text=&pageSize=24&pg=0&sort=relevance"}>
    <img src="public/sales/MS24_Dyson_1x2_A.png" alt="" className='w-100' />
        </Link>
    </div>
    </div>
    </div>
  )
}
