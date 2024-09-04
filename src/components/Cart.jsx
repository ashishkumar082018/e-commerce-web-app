import React, { useState } from 'react';
import { Modal, Button, ListGroup, Image, Row, Col } from 'react-bootstrap';

const cartElements = [
    {
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        quantity: 2,
    },
    {
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        quantity: 3,
    },
    {
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        quantity: 1,
    },
];

const Cart = ({ show, handleClose }) => {
    const [cartItems, setCartItems] = useState(cartElements);

    const handleRemove = (index) => {
        const updatedCart = cartItems.filter((_, i) => i !== index);
        setCartItems(updatedCart);
    };

    return (
        <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Your Cart</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ListGroup>
                    {cartItems.map((item, index) => (
                        <ListGroup.Item key={index}>
                            <Row>
                                <Col md={2}><Image src={item.imageUrl} rounded fluid /></Col>
                                <Col md={4}><span>{item.title}</span></Col>
                                <Col md={2}><span>${item.price}</span></Col>
                                <Col md={2}><span>Qty: {item.quantity}</span></Col>
                                <Col md={2}>
                                    <Button variant="danger" onClick={() => handleRemove(index)}> Remove </Button>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary-" onClick={handleClose}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default Cart;
