import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Room from '../Room/Room';

const Destination = () => {
    const rooms = useLoaderData();

    return (
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-7'>
                    <h2 className='mb-4'>Our Rooms: {rooms.length}</h2>
                    {
                        rooms.map(room => <Room
                            key={room.id}
                            room={room}></Room>)
                    }
                </div>
                <div className='col-md-5'>
                    <h2 className='mb-4'>Location:</h2>
                    <iframe style={{ width: "500px", height: "500px" }} src="https://maps.google.com/maps?q=chattogram,%20bangladesh&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                </div>
            </div>
        </div>
    );
};

export default Destination;