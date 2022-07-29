import React from 'react'
import { RiShoppingCart2Fill } from "react-icons/ri"

const SingleProduct = ({ product }) => {
    const { name, image, price, inStock, rating } = product;
  return (
    <div className='product-container'>
        <div className="product-img">
            <img src={image} alt="images" />
        </div>
        <span>{name}</span>
        <span>₹{price}</span>
        <span>Stock {inStock}</span>
        <span>Rating {rating}</span>
        <button className='btn btn-dark'><span><RiShoppingCart2Fill color="white" fontSize= "25px" /></span> Add to Cart</button>
    </div>
  )
}

export default SingleProduct