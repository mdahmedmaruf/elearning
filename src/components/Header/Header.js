import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../../../src/logo.png';
import './Header.css';

const Header = () => {
    return (
        <section className="container">
            <Container>
                <Row>
                    <Col className="logo text-center" md={12}>
                        <img className="img-fluid" src={ logo } alt="Logo"/>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Header;