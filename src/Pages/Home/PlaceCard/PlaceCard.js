import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PlaceCard = ({ place, setPlaceName, setPlaceDescription }) => {
    const { id, image, name, description } = place;

    const handleSelectCard = () => {
        setPlaceName(name);
        setPlaceDescription(description);
    }

    return (
        <Col lg={4} md={6}>
            <Card onClick={handleSelectCard} style={{ marginBottom: '15px' }}>
                <Card.Img variant="top" src={image} style={{ height: '150px' }} />
                <Card.Body>
                    <Card.Title className='text-black'>{name}</Card.Title>
                    <Link to={`/booking/${id}`}>
                        <Button variant="primary">Book Now</Button>
                    </Link>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default PlaceCard;