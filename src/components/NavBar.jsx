import React, { useState } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import Cart from './Cart';
import CartIcon from './CartIcon';

const NavigationBar = () => {
    const [showCart, setShowCart] = useState(false);

    // Handlers for opening and closing the cart modal
    const handleCartOpen = () => setShowCart(true);
    const handleCartClose = () => setShowCart(false);

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">E-Commerce Web App</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">HOME</Nav.Link>
                        <Nav.Link href="#store">STORE</Nav.Link>
                        <Nav.Link href="#about">ABOUT</Nav.Link>
                    </Nav>
                    <Button variant="outline-info" onClick={handleCartOpen} style={{ position: 'relative' }}>
                        <CartIcon /> {/*Cart*/} </Button>
                    <Cart show={showCart} handleClose={handleCartClose} />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
