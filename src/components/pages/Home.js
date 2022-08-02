import React from 'react'
import Filter from '../containers/Filter/Filter';
import SingleProduct from '../containers/SingleProduct';
import { CartContext } from '../Hooks/Context'
import "./home.css"

const Home = () => {
  const { state: {products},
  filterState: {byPrice,
    byStock,
    byFastDelivery,
    byRating,
    searchQuery,
    sort} } = CartContext();

  const filteredProducts = () => {
    let sortedProducts = products;

    // Sort by Price
    if(sort) {
      sortedProducts = sortedProducts.sort((a, b) => {
        return sort === "lowToHigh"? a.price - b.price : b.price - a.price
      })
    }

    // Sort by Include Out of Stock
    if(!byStock) {
      sortedProducts = sortedProducts.filter(prod => !prod.byStock)
    }

    // Sort by Fast Delivery
    if(byFastDelivery) {
      sortedProducts = sortedProducts.filter(prod => prod.fastDelivery)
    }

    // Sort by rating
    if(byRating) {
      sortedProducts = sortedProducts.filter(prod => prod.rating >= byRating)
    }

    // Sort by Search
    if(searchQuery) {
      sortedProducts = sortedProducts.filter(prod => {
        return prod.name.toLowerCase().includes(searchQuery)
      })
    }

    return sortedProducts;
  }
  return (
    <div className="home">
          <Filter />
          <div className="all-products">
            {
              filteredProducts().map(product => {
                return <SingleProduct product = {product} key={product.id}/>
              })
            }
          </div>
    </div>
  )
}

export default Home