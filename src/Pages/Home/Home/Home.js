import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useLoaderData } from 'react-router-dom';
import './Home.css';
import PlaceCard from '../PlaceCard/PlaceCard';
import MenubarHome from '../../Shared/MenubarHome/MenubarHome';
import useTitle from '../../../hooks/useTitle';

const Home = () => {
    const places = useLoaderData();
    const [name, setName] = useState(places[0].name);
    const [description, setDescription] = useState(places[0].description);

    useTitle('Home');

    return (
        <div className='background-banner'>
            <MenubarHome></MenubarHome>
            <Container className='text-white pt-5 mt-4'>
                <Row>
                    <Col md={5}>
                        <h1>{name}</h1>
                        <p>{description.slice(0, 300)}</p>
                    </Col>
                    <Col md={7} style={{ marginBottom: "100px" }}>
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