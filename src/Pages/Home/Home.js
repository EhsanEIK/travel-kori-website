import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useLoaderData } from 'react-router-dom';
import PlaceCard from './PlaceCard/PlaceCard';
import './Home.css';

const Home = () => {
    const places = useLoaderData();

    return (
        <div className='background-banner'>
            <Container className='text-white pt-5'>
                <Row>
                    <Col md={5}>
                        <h1>Sajek</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam delectus eligendi eius ad minus esse repellendus vero a fugiat ipsa tenetur reiciendis est neque dignissimos, cumque enim exercitationem illo illum debitis deleniti harum accusamus dolorem facere? Vero mollitia fugiat voluptatibus debitis, quo ducimus, quasi veniam iusto ipsum delectus nobis suscipit cum laboriosam non inventore rem similique recusandae odio cupiditate doloremque necessitatibus deleniti, molestias at. Beatae dolorem est necessitatibus tempore, nisi quos et excepturi fugit consequatur, quia fugiat illo eveniet, dicta architecto voluptate odit qui impedit tenetur totam quo in soluta dolores id similique. Exercitationem vel expedita modi accusamus voluptatem dolorem.</p>
                    </Col>
                    <Col md={7}>
                        <Row>
                            {
                                places.map(place => <PlaceCard
                                    key={place.id}
                                    place={place}></PlaceCard>)
                            }
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;