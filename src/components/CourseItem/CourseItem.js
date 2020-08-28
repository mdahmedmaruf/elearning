import React from 'react';
import { Card, Badge, Button } from 'react-bootstrap';
import './CourseItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faListAlt } from '@fortawesome/free-solid-svg-icons'

const CourseItem = (props) => {
    console.log(props.courseItem);
    const {name, instructor, price, img, totalEnrolled, lessons} = props.courseItem;
    return (
        <Card className="h-95">
        <Card.Img className="h-10" variant="top" src={img} />
        <Card.Body>
            <div className="mb-2 justify-content-between">
            <Card.Title className="mb-0">{name}</Card.Title>
            <Badge className="mb-1 text-left" variant="warning">
                £{price}
            </Badge>
            </div>
            <Card.Text className="text-secondary"></Card.Text>
            <Button variant="success" onClick={() => props.handleAddProduct(props.courseItem)}>Enroll Now</Button>
            <p className="mt-2">Instructor:  {instructor}</p>
            <div className="fun-face">
                <span className="students"><FontAwesomeIcon icon={faUsers} /> {totalEnrolled} Students</span>
    <span className="lesson"><FontAwesomeIcon icon={faListAlt} /> {lessons} Lessons</span>
            </div>
        </Card.Body>
        </Card>
        
    );
};

export default CourseItem;