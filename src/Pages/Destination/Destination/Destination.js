import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PlaceCard from '../../Home/PlaceCard/PlaceCard';

const Destination = () => {
    const places = useLoaderData();

    return (
        <div className='container'>
            <h1>This is destination page</h1>
            <div className='row'>
                <div className='col-md-7'>
                    <h1>Left Side</h1>
                    {
                        places.map(place => <PlaceCard
                            key={place.id}
                            place={place}></PlaceCard>)
                    }
                </div>
                <div className='col-md-5'>
                    <h1>Right Side</h1>
                    <iframe style={{ width: "500px", height: "500px" }} src="https://maps.google.com/maps?q=chattogram,%20bangladesh&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                </div>
            </div>
        </div>
    );
};

export default Destination;