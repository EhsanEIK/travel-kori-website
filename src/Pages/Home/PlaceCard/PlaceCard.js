import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const PlaceCard = ({ place }) => {
    const { id, image, name } = place;

    return (
        <Col md={4}>
            <Card>
                <Card.Img variant="top" src={image} style={{ height: '150px' }} />
                <Card.Body>
                    <Card.Title className='text-black'>{name}</Card.Title>
                    <Button variant="primary">Book Now</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default PlaceCard;