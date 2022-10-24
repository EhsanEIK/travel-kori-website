import React from 'react';
import { Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PlaceCard = ({ place, setPlaceName, setPlaceDescription }) => {
    const { id, image, name, description } = place;

    const handleSelectCard = () => {
        setPlaceName(name);
        setPlaceDescription(description);
    }

    const myStyle = {
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgrounSize: "cover",
        backgroundPosition: "cneter",

        width: "200px",
        height: "400px",
        borderRadius: "15px",
        boxShadow: "10px 10px 15px black"
    }

    return (
        <Col lg={4} md={6} sm={6} className="position-relative mb-3">
            <div style={myStyle} onMouseEnter={handleSelectCard}>
                <Link to={`/booking/${id}`} style={{
                    position: "absolute", bottom: "10px", left: "20px",
                }}>
                    <Button variant="outline-light" style={{ width: "180px" }}>{name}</Button>
                </Link>
            </div >
        </Col>
    );
};

export default PlaceCard;