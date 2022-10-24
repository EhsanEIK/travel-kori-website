import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useLoaderData } from 'react-router-dom';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import MenubarHome from '../Shared/MenubarHome/MenubarHome';

const Booking = () => {
    const place = useLoaderData();
    const { name, description } = place;
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const startMonth = startDate.getMonth() + 1;
    const currentStartDate = startDate.getDate() + '/' + startMonth + '/' + startDate.getFullYear();

    const endMonth = endDate.getMonth() + 1;
    const currentEndDate = endDate.getDate() + '/' + endMonth + '/' + startDate.getFullYear();

    const handleSubmit = () => {
        console.log(currentStartDate);
        console.log(currentEndDate);
    }

    return (
        <div className='background-banner'>
            <MenubarHome></MenubarHome>
            <Container className='text-white pt-5 mt-4'>
                <Row>
                    <Col md={7}>
                        <h1>{name}</h1>
                        <p>{description}</p>
                    </Col>
                    <Col md={5} style={{ marginBottom: "50px" }}>
                        <Card className='text-black bg-info mb-3 mb-md-0'>
                            <Card.Body>
                                <Card.Title>Booking Your Tour</Card.Title>
                                <Card.Body>
                                    <div className="mb-3">
                                        <label htmlFor="origin" className="form-label">Origin</label>
                                        <input type="text" className="form-control" id="origin" placeholder="origin" />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="destination" className="form-label">Destination</label>
                                        <input type="text" value={name} readOnly className="form-control" id="destination" placeholder="destination" />
                                    </div>
                                    <div className='d-lg-flex gap-2'>
                                        <div className="mb-3">
                                            <label htmlFor="from-date" className="form-label">From</label>
                                            <DatePicker
                                                selected={startDate}
                                                onChange={(date: Date) => setStartDate(date)}
                                                dateFormat="dd/MM/yyyy" className='w-100' />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="to-date" className="form-label">To</label>
                                            <DatePicker
                                                selected={endDate}
                                                onChange={(date: Date) => setEndDate(date)}
                                                dateFormat="dd/MM/yyyy"
                                                className='w-100' />
                                        </div>
                                    </div>
                                </Card.Body>

                                <Link to='/destination'>
                                    <Button onClick={handleSubmit} variant="primary" className='w-100'>Start Booking</Button>
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