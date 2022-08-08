import React from 'react';
import {Container, FormControl, Nav, Navbar, Dropdown, Badge, Button} from "react-bootstrap";
import { AiFillDelete } from 'react-icons/ai';
import { RiShoppingCart2Fill } from "react-icons/ri"
import { Link } from 'react-router-dom';
import { CartContext } from '../Hooks/Context';

const Header = () => {

    const {state: { cart }, dispatch} = CartContext(); // For Adding To Cart
    const {filterState: {searchQuery}, filterDispatch} = CartContext(); // For Search

  return (
    <Navbar bg="info" style={{height: 80, position:"fixed", width:"100%", zIndex: 999, top: 0, left: 0}}>
        <Container>
            <Navbar.Brand className='nav-logo'>
                <Link to="/">Cart App</Link>
            </Navbar.Brand>
            <Navbar.Text className='search'>
                <FormControl 
                    style={{width: "50vw"}}
                    placeholder="Search products..."
                    className='m-auto'
                    onChange={(e) => {
                        filterDispatch({
                            type: "SORT_BY_SEARCH",
                            payload: e.target.value
                        })
                    }}
                    
                />
            </Navbar.Text>


                <Dropdown className='dropdown'>
                    <Dropdown.Toggle variant="dark">
                        <RiShoppingCart2Fill color="white" fontSize= "25px" />
                        <Badge bg='dark'>{cart.length}</Badge>
                    </Dropdown.Toggle>

                    <Dropdown.Menu className='dropdown-menu'>
                        {/* CART Items in dropdown menu */}
                        {
                            cart.length > 0 ?
                            cart.map(item => {
                                const {id, name, image, price} = item

                               return <div key={item.id} className="cartItems">
                                    <img src={image} alt={name} />
                                    <div className='cart-name-price'>
                                        <span>{name}</span>
                                        <span>${price.split(".")[0]}</span>
                                    </div>
                                    <AiFillDelete 
                                        onClick={() => dispatch({
                                            type: "REMOVE_FROM_CART",
                                            payload: item
                                            })}
                                        color = "#dc3545"
                                        fontSize={30}
                                        padding={20}
                                        cursor = "pointer"
                                    />
                               </div>    
                            })
                            : <span style={{padding: 20}}>Cart is Empty!</span>
                        }

                        {
                            cart.length > 0 ?
                                <Link to="/cart">
                                    <Button variant='dark' style={{width:"100%", margin: "10px auto"}}>Go To Cart</Button>
                                </Link>
                            :
                            null
                        }
                        
                    </Dropdown.Menu>
                </Dropdown>

        </Container>
    </Navbar>
  )
}

export default Header