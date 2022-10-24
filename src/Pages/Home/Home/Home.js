import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useLoaderData } from 'react-router-dom';

import './Home.css';
import PlaceCard from '../PlaceCard/PlaceCard';

const Home = () => {
    const places = useLoaderData();
    const [name, setName] = useState(places[0].name);
    const [description, setDescription] = useState(places[0].description);

    return (
        <div className='background-banner'>
            <Container className='text-white pt-5'>
                <Row>
                    <Col md={5}>
                        <h1>{name}</h1>
                        <p>{description.slice(0, 300)}</p>
                    </Col>
                    <Col md={7}>
                        <Row>
                            {
                                places.map(place => <PlaceCard
                                    key={place.id}
                                    place={place}
                                    setPlaceName={setName}
                                    setPlaceDescription={setDescription}></PlaceCard>)
                            }
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;