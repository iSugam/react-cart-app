import React from 'react';
import { Card, Button } from "react-bootstrap";
import { CartContext } from '../Hooks/Context';
import Rating from "./Filter/Rating";

const SingleProduct = ({ product }) => {
    const {id, name, image, price, inStock, rating, fastDelivery } = product;
    const { state: { cart }, dispatch } = CartContext()
  return (
    <div className='products'>
        <Card>
          <Card.Img variant='top' src={image} alt={`image of ${image}`}
            style={{
              width: "20vw",
              height: "40vh",
              objectFit: "cover",
              objectPosition: "center",
              margin: "0 auto"
            }}
          />

          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Subtitle style={{paddingBottom: 10}}>
              <span>${price.split(".")[0]}</span>
              {
                fastDelivery? 
                  <div>Fast Delivery</div>
                  : <div>4 days delivery</div>
              }  
              <Rating rating={rating} />
            </Card.Subtitle>
            <p>Item Left: {inStock}</p>

              {
                cart.some(prod => prod.id === id) ? <Button onClick={() => dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: product
                })} variant="danger">Remove Item</Button>

                : (<Button variant='dark' disabled={inStock < 1} onClick={() => dispatch({
                    type: "ADD_TO_CART",
                    payload: product
                  })}>
                    {
                      inStock < 1 ? "Out of Stock" : " Add Item"
                    }
                  </Button>)
              }
      
          </Card.Body>
        </Card>
    </div>
  )
}

export default SingleProduct