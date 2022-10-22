import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useLoaderData } from 'react-router-dom';

const Booking = () => {
    const place = useLoaderData();
    const { id, name } = place;

    return (
        <div className='background-banner'>
            <Container className='text-white pt-5'>
                <Row>
                    <Col md={7}>
                        <h1>Sajek</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam delectus eligendi eius ad minus esse repellendus vero a fugiat ipsa tenetur reiciendis est neque dignissimos, cumque enim exercitationem illo illum debitis deleniti harum accusamus dolorem facere? Vero mollitia fugiat voluptatibus debitis, quo ducimus, quasi veniam iusto ipsum delectus nobis suscipit cum laboriosam non inventore rem similique recusandae odio cupiditate doloremque necessitatibus deleniti, molestias at. Beatae dolorem est necessitatibus tempore, nisi quos et excepturi fugit consequatur, quia fugiat illo eveniet, dicta architecto voluptate odit qui impedit tenetur totam quo in soluta dolores id similique. Exercitationem vel expedita modi accusamus voluptatem dolorem.</p>
                    </Col>
                    <Col md={5}>
                        <Card className='text-black bg-info'>
                            <Card.Body>
                                <Card.Title>Shundorban</Card.Title>
                                <Card.Body>
                                    <div class="mb-3">
                                        <label for="origin" class="form-label">Origin</label>
                                        <input type="text" class="form-control" id="origin" placeholder="origin" />
                                    </div>
                                    <div class="mb-3">
                                        <label for="destination" class="form-label">Destination</label>
                                        <input type="text" value={name} readOnly class="form-control" id="destination" placeholder="destination" />
                                    </div>
                                    <div className='d-flex gap-2'>
                                        <div class="mb-3">
                                            <label for="from-date" class="form-label">From</label>
                                            <input type="date" class="form-control" id="from-date" placeholder="from-date" />
                                        </div>
                                        <div class="mb-3">
                                            <label for="to-date" class="form-label">To</label>
                                            <input type="date" class="form-control" id="to-date" placeholder="to-date" />
                                        </div>
                                    </div>
                                </Card.Body>
                                <Link to='/destination'>
                                    <Button variant="primary" className='w-100'>Start Booking</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Booking;