import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PlaceCard = ({ place }) => {
    const { id, image, name } = place;

    return (
        <Col md={4}>
            <Card>
                <Card.Img variant="top" src={image} style={{ height: '150px' }} />
                <Card.Body>
                    <Card.Title className='text-black'>{name}</Card.Title>
                    <Link to={`/destination/${id}`}>
                        <Button variant="primary">Book Now</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default PlaceCard;