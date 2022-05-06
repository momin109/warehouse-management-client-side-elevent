import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { id, name, img, description, price } = service;
    const navigate = useNavigate();

    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`);
    }
    return (
        <div className='main-container'>
            <div className='image-contener'>
                <img src={img} alt="" />
            </div>

            <div className='service-contener'>
                <h3>name: {name}</h3>
                <p>Price: {price}</p>
                <p>{description}</p>
                <div className="d-grid gap-2">
                    <button onClick={() => navigateToServiceDetail(id)} className="btn btn-primary" type="button">Update</button>
                </div>
            </div>
        </div>
    );
};

export default Service;