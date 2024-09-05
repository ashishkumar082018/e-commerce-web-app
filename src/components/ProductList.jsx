import React from 'react';
import { Card, Row, Col, Container, Button } from 'react-bootstrap';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const ProductList = ({ products = [] }) => {
    const { addToCart } = useCart();
    const navigate = useNavigate();

    const handleProductClick = (productId) => {
        navigate(`/store/${productId}`);
    };

    return (
        <Container className="py-4">
            <Row className="g-4">
                {products.length === 0 ? (
                    <p>No products available</p>
                ) : (
                    products.map((product) => (
                        <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
                            <Card>
                                <Card.Img
                                    variant="top"
                                    src={product.imageUrl}
                                    alt={product.title}
                                    onClick={() => handleProductClick(product.id)}
                                    style={{ cursor: 'pointer' }}
                                />
                                <Card.Body>
                                    <Card.Title
                                        onClick={() => handleProductClick(product.id)}
                                        style={{ cursor: 'pointer' }}
                                    >
                                        {product.title}
                                    </Card.Title>
                                    <Card.Text className="fw-bold">${product.price}</Card.Text>
                                    <Button
                                        variant="primary"
                                        onClick={() => addToCart(product)}
                                    >
                                        Add to Cart
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))
                )}
            </Row>
        </Container>
    );
};

export default ProductList;
