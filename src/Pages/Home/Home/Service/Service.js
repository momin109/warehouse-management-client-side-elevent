import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { id, name, img, description, price, supplier } = service;
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
                <h5>name: {name}</h5>
                <p>Price: {price}</p>
                <h5>Supplier : {supplier}</h5>
                <p>{description}</p>
                <div className="d-grid gap-2">
                    <button onClick={() => navigateToServiceDetail(id)} className="btn btn-primary" type="button">Update</button>
                </div>
            </div>
        </div>
    );
};

export default Service;