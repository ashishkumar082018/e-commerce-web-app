import React, { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Cart from './Cart';
import CartIcon from './CartIcon';

const NavBar = () => {
    const [showCart, setShowCart] = useState(false);

    const handleCartOpen = () => setShowCart(true);
    const handleCartClose = () => setShowCart(false);

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand as={NavLink} to="/">E-Commerce Web App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/home" end>Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/store">Store</Nav.Link>
                        <Nav.Link as={NavLink} to="/about">About</Nav.Link>
                        <Nav.Link as={NavLink} to="/contact">Contact Us</Nav.Link>
                    </Nav>
                    <Button variant="outline-info" onClick={handleCartOpen} style={{ position: 'relative' }}>
                        <CartIcon />
                    </Button>
                    <Cart show={showCart} handleClose={handleCartClose} />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
