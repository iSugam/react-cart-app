import React from 'react';
import {Container, FormControl, Nav, Navbar, Dropdown, Badge} from "react-bootstrap";
import { RiShoppingCart2Fill } from "react-icons/ri"
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar bg="info" style={{height: 80, position:"fixed", width:"100%", zIndex: 999}}>
        <Container>
            <Navbar.Brand>
                <Link to="/">Header</Link>
            </Navbar.Brand>
            <Navbar.Text className='search'>
                <FormControl 
                    style={{width: 500}}
                    placeholder="Search products..."
                    className='m-auto'
                />
            </Navbar.Text>

            <Nav>
                <Dropdown align={{ sm:"right" }}>
                    <Dropdown.Toggle variant="dark">
                        <RiShoppingCart2Fill color="white" fontSize= "25px" />
                        <Badge bg='dark'>{10}</Badge>
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={{minWidth: 370}}>
                        <span style={{padding: 10}}>Cart is Empty!</span>
                    </Dropdown.Menu>
                </Dropdown>
            </Nav>
        </Container>
    </Navbar>
  )
}

export default Header