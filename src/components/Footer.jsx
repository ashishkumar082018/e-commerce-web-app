import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-3">
            <Container className="text-center">
                <Row>
                    <h2>E-Commerce Web App</h2>
                    <div className="d-flex justify-content-center">
                        <a href="https://spotify.com" target="_blank" rel="noopener noreferrer" className="btn btn-dark text-white mx-2 rounded-circle p-2" style={{ fontSize: '1rem' }}>
                            <i className="fab fa-spotify"></i>
                        </a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="btn btn-dark text-white mx-2 rounded-circle p-2" style={{ fontSize: '1rem' }}>
                            <i className="fab fa-youtube"></i>
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="btn btn-dark text-white mx-2 rounded-circle p-2" style={{ fontSize: '1rem' }}>
                            <i className="fab fa-facebook"></i>
                        </a>
                    </div>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
