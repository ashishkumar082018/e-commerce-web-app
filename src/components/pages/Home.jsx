import React from 'react';
import { GiTriangleTarget } from 'react-icons/gi';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Tours from './Tours';

export default function Home() {
    return (
        <Container className="text-center mt-5">
            <Row className="justify-content-center">
                <Col md={8}>
                    <Button
                        variant="outline-primary"
                        className="mb-4"
                        style={{ borderColor: '#56CCF2', color: '#56CCF2' }}
                    >
                        Get our Latest Album
                    </Button>
                    <div>
                        <GiTriangleTarget className="music__playerBtn" size={50} />
                    </div>
                </Col>
            </Row>
            <Tours />
        </Container>
    );
}
