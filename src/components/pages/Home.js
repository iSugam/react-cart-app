import React from 'react'
import { CartContext } from '../Hooks/Context'

const Home = () => {
  const { state } = CartContext();
  console.log(state);
  return (
    <div>
      Home
    </div>
  )
}

export default Home