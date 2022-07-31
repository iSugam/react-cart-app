import React from 'react';
import { Card, Button } from "react-bootstrap";
import Rating from "./Filter/Rating";

const SingleProduct = ({ product }) => {
    const { name, image, price, inStock, rating, fastDelivery } = product;
  return (
    <div className='products'>
        <Card>
          <Card.Img variant='top' src={image} alt={`image of ${image}`}/>

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

            <Button variant="danger">Remove Item</Button>
            <Button variant='dark' disabled={inStock < 1}>
              {
                inStock < 1 ? "Out of Stock" : " Add Item"
              }
            </Button>
          </Card.Body>
        </Card>
    </div>
  )
}

export default SingleProduct