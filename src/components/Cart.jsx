import React from 'react';
import { Modal, Button, ListGroup, Image, Row, Col } from 'react-bootstrap';
import { useCart } from '../context/CartContext'; // Import the cart context

const Cart = ({ show, handleClose }) => {

    const { cartItems, removeFromCart } = useCart();
    return (
        <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Your Cart</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty.</p>
                ) : (
                    <ListGroup>
                        {cartItems.map((item, index) => (
                            <ListGroup.Item key={index}>
                                <Row>
                                    <Col md={2}><Image src={item.imageUrl} rounded fluid /></Col>
                                    <Col md={4}><span>{item.title}</span></Col>
                                    <Col md={2}><span>${item.price}</span></Col>
                                    <Col md={2}><span>Qty: {item.quantity}</span></Col>
                                    <Col md={2}>
                                        <Button variant="danger" onClick={() => removeFromCart(index)}> Remove </Button>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button> {/* Fixed variant */}
            </Modal.Footer>
        </Modal>
    );
};

export default Cart;
