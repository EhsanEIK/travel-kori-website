import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Menubar from '../../Shared/Menubar/Menubar';
import Room from '../Room/Room';
import './Destination.css';

const Destination = () => {
    const rooms = useLoaderData();

    return (
        <>
            <Menubar></Menubar>
            <div className='container' style={{ marginBottom: "100px" }}>
                <div className='row mt-4'>
                    <div className='col-lg-8'>
                        <h2 className='mb-4'>Our Rooms: {rooms.length}</h2>
                        <div className='row'>
                            {
                                rooms.map(room => <Room
                                    key={room.id}
                                    room={room}></Room>)
                            }
                        </div>
                    </div>
                    <div className='col-lg-4 mb-lg-0 mb-3'>
                        <h2 className='mb-4'>Location:</h2>
                        <div className='map-div'>
                            <iframe src="https://maps.google.com/maps?q=chattogram,%20bangladesh&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Destination;