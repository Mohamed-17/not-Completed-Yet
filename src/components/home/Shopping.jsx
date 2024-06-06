import React from 'react'
import { Link } from 'react-router-dom'

export const Shopping = () => {
  return (
    <div className="container p-5 mt-5">
    <div className='shopping-text'>Get your shopping done faster</div>
    <div className="row shopping-holder gap-5">
    <Link className='col-3'>
    <div >
    <div><img src='/public/icons/shopping/CFS_Icon.jpg'></img></div>
    <h3>Click & collect</h3>
    <p>Shop online and pick up from the nearest store to you!</p>
    </div>
    <div className='learn-more-1'>Learn more</div>
    </Link>
    
    <Link className='col-3'>
    <div >
    <div><img src='/public/icons/shopping/Delivery_Icon.jpg'></img></div>
    <h3>Free home delivery</h3>
    <p>Enjoy free standard delivery on all purchases above SAR 199! </p></div>
    <div className='learn-more-2'>Learn more</div>
    </Link>
    <Link className='col-4'>
    <div>
    <div><img src='/public/icons/shopping/PMP_Icon.jpg'></img></div>
    <h3>We'll match your price!</h3>
    <p>Seen an item for less at a competitor? Maybe it got discounted after your purchase? Talk to us and we will match the presented price if the product qualifies.</p>
    <div className='learn-more-3'>Learn more</div>
    </div>
    </Link>
    </div>
    </div>
  )
}
