import React from 'react';
import { Col, Image } from 'react-bootstrap';
import './Room.css';

const Room = ({ room }) => {
    const { img, name, bed, person } = room;

    return (
        <Col lg={12} md={6}>
            <div className='d-lg-flex border rounded-2 gap-3 p-4 ms-0 me-2 mb-3'>
                <Image src={img} className='img-size h-auto' />
                <div>
                    <h3>{name}</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam quos officia, voluptatem obcaecati, animi numquam cumque facere natus mollitia in delectus pariatur unde repudiandae asperiores nihil atque nisi eos nostrum hic impedit quo iusto.</p>
                    <small>Bed: {bed}</small><br />
                    <small>Person: {person}</small>
                </div>
            </div>
        </Col>
    );
};

export default Room;