import React, { useState } from 'react';
import { Button, Form, Table } from 'react-bootstrap';
import AddItems from '../AddItems/AddItems';
import './Inventory.css';

const Inventory = () => {
    let initialValue = [];
    const [products, setProduct] = useState(initialValue)
    const addProduct = (event) => {
        event.preventDefault();
        // console.log(event.target.product_name.value)
        const formDate = event.target;
        const newProduct = {
            product_name: formDate.product_name.value,
            price: formDate.price.value,
            qty: formDate.qty.value
        }
        // console.log(newProduct)
        setProduct([...products, newProduct]);
        // console.log(products)
    }
    return (
        <div className='addtoproduct'>
            <Form onSubmit={addProduct}>
                <Form.Group className="mb-3" controlId="formBasicProductName">
                    <Form.Label>Product Name:</Form.Label>
                    <Form.Control type="text" placeholder="Enter Product Name" name="product_name" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPrice">
                    <Form.Label>Price:</Form.Label>
                    <Form.Control type="number" placeholder="price in usd" name="price" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicQty">
                    <Form.Label>Quantity:</Form.Label>
                    <Form.Control type="number" placeholder="How many : qty" name="qty" />
                </Form.Group>

                <Button className='mb-3' variant="primary" type="submit">
                    Add To Product
                </Button>
            </Form>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Product Name:</th>
                        <th>Price:</th>
                        <th>Qty:</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td>{item.product_name}</td>
                                    <td>{item.price}</td>
                                    <td>{item.qty}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default Inventory;