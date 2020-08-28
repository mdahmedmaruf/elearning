import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import fakedata from '../../data/fakedata';
import CourseItem from '../CourseItem/CourseItem';
import './Courses.css';
import Cart from '../Cart/Cart';


const Courses = () => {
    const [courseItems, setCourseItem] = useState(fakedata);
    const [cart, setCart] = useState([]);
    const handleAddProduct = (product) => {
        console.log('added to cart', product);
        const newCart = [...cart, product];
        setCart(newCart);
    }
    
    return (
        <section className="course-section">
            <Container>
                <Row style={{paddingTop: '50px'}}>
                    <Col md={9}>
                        <Row>
                            {courseItems.map(courseItem => (
                            <Col md={4} className="single-course-item mb-3" >
                                <CourseItem handleAddProduct={handleAddProduct} courseItem={courseItem}></CourseItem>
                            </Col>
                            ))}
                        </Row>
                    </Col>
                    <Col md={3}>
                        <Cart cart={cart}></Cart>
                    </Col>
                </Row>
                
            </Container>
        </section>
    );
};

export default Courses;