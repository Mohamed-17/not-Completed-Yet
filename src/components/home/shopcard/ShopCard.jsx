import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
export const ShopCard = () => {
  const [data , SetData] = useState([])
    useEffect(()=>{
      axios.get('src/components/home/shopcard/card.json')
      .then(res => SetData(res.data.cards))
      
    }, []);
    return (
     <div className="CardsSection">
     <div className="CardsContainer">
    <div className="CardsHolder">
    {data.map((item)=>{
      return (
        <div className="Card" key={item.cardId}>
        <Link>
        <div className="text-area">
        <h4>{item.cardName}</h4>
        <p>{item.cardDescription}</p>
        </div>
        <div><img src={item.cardImg} alt={""} className="CardImg" /></div>
        </Link>
        </div>
      )
    })}
    </div>
    </div>
     </div>
     
  )
}
