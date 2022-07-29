import React from 'react'
import Filter from '../containers/Filter/Filter';
import SingleProduct from '../containers/SingleProduct';
import { CartContext } from '../Hooks/Context'
import "./home.css"

const Home = () => {
  const { state: {products} } = CartContext();
  return (
    <div className="home">
          <Filter />
          <div className="all-products">
            {
              products.map(product => {
                return <SingleProduct product = {product} key={product.id}/>
              })
            }
          </div>
    </div>
  )
}

export default Home