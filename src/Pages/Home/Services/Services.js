import React, { useEffect, useState } from 'react';
import Service from '../Home/Service/Service';
import './Services.css';


const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('Data.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])

    return (
        <div id='services'>
            <h1 className='services-title'>Our Bikes</h1>
            <h6 className='title'>Which bike is the best for you?</h6>
            <div className="container">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;