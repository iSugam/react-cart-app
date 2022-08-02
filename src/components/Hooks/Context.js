import React, { createContext, useContext, useReducer } from "react";
import { faker } from '@faker-js/faker';
import { cartReducer, filterReducer } from "./Reducer";

const Cart = createContext();
faker.seed(99)
const Context = ({ children }) => {

  const products = [...Array(20)].map(() => ({
      id: faker.datatype.uuid(),
      name: faker.commerce.productName(),
      price: faker.commerce.price(),
      image: faker.image.image(1234, 2345, true),
      inStock: faker.helpers.arrayElement([1, 3, 4, 5, 6, 8]),
      fastDelivery: faker.datatype.boolean(),
      rating: faker.random.numeric(1, { bannedDigits: ['0', '6', '7', '8', '9', '10']})
  }))

  const [state, dispatch] = useReducer(cartReducer, {
      products,
      cart: []
  })
  
  const [filterState, filterDispatch] = useReducer(filterReducer, {
    byPrice: false,
    byStock: false,
    byFastDelivery: false,
    byRating: -1,
    searchQuery: ""
  })

  return (
    <Cart.Provider value={{state, dispatch, filterState, filterDispatch}}>
        {children}
    </Cart.Provider>
  )
}

export default Context;

export const CartContext = () => useContext(Cart)