import React from 'react';
import { Container, Card } from 'react-bootstrap';

const Banner = () => {
    return (
        <Card className="text-center" style={{ backgroundColor: '#6c757d', color: 'white' }}>
            <Card.Body>
                <Container>
                    <h1>The Generics</h1>
                </Container>
            </Card.Body>
        </Card>
    );
};

export default Banner;
