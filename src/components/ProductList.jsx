import React from 'react';
import { Card, Row, Col, Container, Button } from 'react-bootstrap';
import { useCart } from '../context/CartContext'; // Import the cart context

const productsArr = [
    {
        title: 'Colors',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
        title: 'Black and white Colors',
        price: 50,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
        title: 'Yellow and Black Colors',
        price: 70,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
        title: 'Blue Color',
        price: 100,
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    }
];

const ProductList = () => {
    const { addToCart } = useCart(); // Destructure addToCart from useCart

    return (
        <Container className="py-4">
            <Row className="g-4">
                {productsArr.map((product, index) => (
                    <Col key={index} xs={12} sm={6} md={4} lg={3}>
                        <Card>
                            <Card.Img variant="top" src={product.imageUrl} alt={product.title} />
                            <Card.Body>
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Text className="fw-bold">${product.price}</Card.Text>
                                <Button variant="primary"
                                    onClick={() => addToCart(product)} // Add to Cart onClick handler
                                > Add to Cart </Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default ProductList;
