import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AddItems.css';


const AddItems = ({ item }) => {
    const { _id, name, description, image, price, supplier } = item;
    const navigate = useNavigate();
    const navigateToInventory = id => {
        navigate(`/inventory/${id}`);
    }
    return (
        <div id='item' className='text-center shadow-lg my-5'>
            <img src={image} alt="" />
            <h5>Name: {name}</h5>
            <h5>Price: ${price}</h5>
            <h4>Supplier: {supplier}</h4>
            <p>{description}</p>
            <button id='item-btn' className='fs-5 mb-2' onClick={() => navigateToInventory(_id)}>Update Stock</button>
        </div>
    );
};

export default AddItems;