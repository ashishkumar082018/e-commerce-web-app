import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const ProductDetail = ({ products }) => {
    const { productId } = useParams();
    const { addToCart } = useCart();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchedProduct = products.find(p => p.id === parseInt(productId));
        setProduct(fetchedProduct);
    }, [productId, products]);

    if (!product) {
        return <p>Loading...</p>;
    }

    return (
        <Container className="py-4">
            <Row>
                <Col md={6}>
                    <Card>
                        <Card.Img
                            variant="top"
                            src={product.imageUrl}
                            alt={product.title}
                            className="img-fluid"
                            style={{ maxHeight: '400px', objectFit: 'contain' }} 
                        />
                    </Card>
                    <div className="product-images mt-3">
                        {product.images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`${product.title} ${index + 1}`}
                                className="img-fluid mb-2"
                                style={{ maxHeight: '150px', objectFit: 'cover', cursor: 'pointer' }}
                            />
                        ))}
                    </div>
                </Col>
                <Col md={6}>
                    <Card className="h-100">
                        <Card.Body>
                            <Card.Title>{product.title}</Card.Title>
                            <Card.Text className="fw-bold">${product.price}</Card.Text>
                            <Button
                                variant="primary"
                                onClick={() => addToCart(product)}
                            >
                                Add to Cart
                            </Button>
                            <div className="product-reviews mt-4">
                                <h5>Reviews</h5>
                                <ul className="list-unstyled">
                                    {product.reviews.map((review, index) => (
                                        <li key={index} className="mb-2">
                                            <blockquote className="blockquote">
                                                <p>{review}</p>
                                            </blockquote>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetail;
