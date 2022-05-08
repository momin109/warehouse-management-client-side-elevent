import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Invenstory = () => {
    const [userQuantity, setUserQuantity] = useState(null);


    const { id } = useParams();
    const [item, setItem] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const url = `http://localhost:5000/item/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [item]);


    const navigateToManageInventories = () => {
        navigate('/additem');
    }

    const quentity = parseInt(item.quentity);
    const handleDelivered = () => {
        console.log(quentity);
        if (quentity > 0) {
            const newQuantity = quentity - 1;
            const deliveredQuanty = { newQuantity }
            const url = `http://localhost:5000/item/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(deliveredQuanty)
            })
                .then(res => res.json())
                .then(data => console.log(data))
        }
        else {
            alert('Out of Stock')
        }

    }

    const getInputvalue = (event) => {
        const userValue = event.target.value;
        setUserQuantity(userValue)
    }

    const handleQuantity = () => {
        if (userQuantity && userQuantity > 0) {
            const newQuantity = parseInt(quentity) + parseInt(userQuantity);
            const setQuantity = { newQuantity }
            const url = `http://localhost:5000/item/${id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(setQuantity)
            })
                .then(res => res.json())
                .then(data => console.log(data))
        }
        else {
            alert('Please given valid data')
        }
    }

    return (
        <div>
            <h1 className='text-center mt-2 mb-5 text-success'>Your selected item </h1>
            <div id='single-item'>
                <img src={item._id} alt="" />
                <div className='ps-2'>
                    <h5>Id : {item._id}</h5>
                    <h5>Name : {item.name}</h5>
                    <h4><small> : {item.supplier}</small></h4>
                    <h4>Quantity: {item.quentity}</h4>
                    <p>{item.description}</p>
                    <button id='item-btn' className='fs-5 mb-2' onClick={handleDelivered}>Delivered</button>
                    <button id='item-btn' className='fs-5 mb-2' onClick={navigateToManageInventories}></button>

                </div>
            </div>
            <div>
                <form>
                    <input type="text" onChange={getInputvalue} placeholder='Add Quantity' />
                    <br />
                    <input id="item-btn" className='mt-3' type="button" value="Restock" onClick={handleQuantity} />
                </form>
            </div>
        </div>
    );
};

export default Invenstory;