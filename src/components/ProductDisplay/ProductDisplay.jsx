import React, { useContext } from 'react'
import './ProductDisplay.css'
import star from '../Assets/star_icon.png';
import startdull from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../context/ShopContext';

const ProductDisplay = (props) => {

    const {product} = props;
    const {addToCart,addSize} = useContext(ShopContext);

    // const handleSizeSelection = (size) => {
    //     addSize(product.id, size); // Update size for specific product
    //   };

    
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-left-smallimg">
            <img src={product.image} alt='' />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-left-bigimg">
            <img src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <div className="heading">
            <h1>{product.name}</h1>
        </div>
        <div className="product-rating">
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={star} alt="" />
            <img src={startdull} alt="" />
            <p>(122)</p>
        </div>
        <div className="price">
            <p className='line'>Rs.{product.old_price}</p>
            <p className='span'>Rs.{product.new_price}</p>
        </div>
        <div className="text">
            <p>A lightweight, usually knitted ,pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garments.</p>
        </div>
        <div className="selectsize">
            <p>Select Size</p>
        </div>
        <div className="sizechart">
            <div  onClick={(e) => addSize(e)} className="box">S</div>
            <div  onClick={(e) => addSize(e)}  className="box">M</div>
            <div  onClick={(e) => addSize(e)}  className="box">L</div>
            <div  onClick={(e) => addSize(e)}  className="box">XL</div>
            <div  onClick={(e) => addSize(e)}  className="box">XXL</div>
        </div>
        {/* <div className="sizechart">
        {["S", "M", "L", "XL", "XXL"].map((size) => (
          <div key={size} onClick={() => handleSizeSelection(size)} className="box">
            {size}
          </div>
        ))} */}
        {/* </div> */}
        <div className="btn">
            <button onClick={()=>addToCart(product.id)}>ADD TO CART</button>
        </div>
        <div className="category">
            <p><span>category</span>: {product.category}</p>
            <p><span>Tags</span>: Modern, Latest</p>
        </div>
      </div>
    </div>
  )
}

export default ProductDisplay
