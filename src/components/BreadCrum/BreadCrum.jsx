import React from 'react'
import arrow from '../Assets/breadcrum_arrow.png';
import './BreadCrum.css'
const BreadCrum = (props) => {
    const {product} = props;
  return (
    <div className="main">
    <div className='breadcrum'>
      HOME <img src={arrow} alt="" /> SHOP <img src={arrow} alt="" /> {product.category} <img src={arrow} alt="" /> {product.name} 
    </div>
    </div>
  )
}

export default BreadCrum
