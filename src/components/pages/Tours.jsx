import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function Tours() {
    const tours = [
        { id: 1, date: 'JUL 16', place: 'DETROIT, MI', description: 'DTE ENERGY MUSIC THEATRE' },
        { id: 2, date: 'JUL 19', place: 'TORONTO', description: 'ONBUDWEISER STAGE' },
        { id: 3, date: 'JUL 29', place: 'PHOENIX', description: 'AK-CHIN PAVILION' },
        { id: 4, date: 'AUG 2', place: 'LAS VEGAS', description: 'T-MOBILE ARENA' },
        { id: 5, date: 'AUG 7', place: 'CONCORD, CA', description: 'CONCORD PAVILION' },
        { id: 6, date: 'JUL 19', place: 'TORONTO, CA', description: 'ONBUDWEISER STAGE' },
    ];

    return (
        <Container className="text-center my-5">
            <h2 className="mb-4">TOURS</h2>
            {tours.map((tour, index) => (
                <Row key={index} className="align-items-center mb-3 border-bottom pb-2">
                    <Col xs={12} md={2} className="mb-2 mb-md-0">
                        <strong>{tour.date}</strong>
                    </Col>
                    <Col xs={12} md={3} className="text-muted">
                        {tour.place}
                    </Col>
                    <Col xs={12} md={5} className="text-muted">
                        {tour.description}
                    </Col>
                    <Col xs={12} md={2}>
                        <Button variant="primary">Buy Tickets</Button>
                    </Col>
                </Row>
            ))}
        </Container>
    );
}
