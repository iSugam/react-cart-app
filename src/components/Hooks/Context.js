import React, { createContext, useContext, useReducer } from "react";
import { faker } from '@faker-js/faker';
import { cartReducer } from "./Reducer";

const Cart = createContext();

const Context = ({ children }) => {

    const products = [...Array(20)].map(() => ({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.dataUri(),
        inStock: faker.random.numeric(),
        fastDelivery: faker.datatype.boolean(),
        rating: 4
    }))

    const [state, dispatch] = useReducer(cartReducer, {
        products,
        cart: []
    })

  return (
    <Cart.Provider value={{state, dispatch}}>
        {children}
    </Cart.Provider>
  )
}

export default Context;

export const CartContext = () => useContext(Cart)