import React, { useEffect, useState } from 'react'
import { ListGroup, Button, Image, Row, Col, Form } from 'react-bootstrap'
import { AiFillDelete } from 'react-icons/ai'
import Rating from '../containers/Filter/Rating'
import { CartContext } from '../Hooks/Context'

const Cart = () => {
  const { state: {cart}, dispatch } = CartContext();

  const [total, setTotal] = useState(0)

  useEffect(() => {
    setTotal(cart.reduce((acc, current) => acc + Number(current.price) ,0) )
  }, [cart])
  return (
    <div className='cart-page'>
      {
        cart.length > 0 ?
          <div className='cart-items'>
            <ListGroup>
              {
                cart.map(item => {
                  const {id, name, price, image, rating, inStock, qty} = item
                  
                    return <ListGroup.Item key={id}s>
                      <Row>
                        <Col md={2}>
                          <img src={image} alt={`image of ${name}`} />
                        </Col>
                        <Col md={2}>{name}</Col>
                        <Col md={2}>${price}</Col>
                        <Col md={2}>
                          <Rating rating = {rating} />
                        </Col>

                        <Col md={2}>
                          <Form.Control as="select" value={qty}>
                            {
                              [...Array(inStock).keys()].map(stock => (
                                <option key={stock + 1}>{stock + 1}</option>
                              ))
                            }
                          </Form.Control>
                        </Col>

                        <Col md={2}> 
                            <AiFillDelete
                                onClick={() => dispatch({
                                    type: "REMOVE_FROM_CART",
                                    payload: item
                                })}
                                color = "black"
                                fontSize={60}
                                padding={20}
                                cursor = "pointer"
                            />
                        </Col>
                      </Row>
                    </ListGroup.Item>
                })
              }
            </ListGroup>

            <div className="total bg-dark" style={{color: "#fff", width: "30%", padding: "20px"}}>
              <h3>Total Item: {cart.length}</h3>
              <h5>Total Price: ${total}</h5>
              <Button type='button'>
                Proceed to Checkout
              </Button>
            </div>
          </div>
        : <h2>Cart is Empty!</h2>

      }

    </div>
  )
}

export default Cart