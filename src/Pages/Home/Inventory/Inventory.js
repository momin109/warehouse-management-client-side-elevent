import React, { useState } from 'react';
import { Button, Form, Table } from 'react-bootstrap';
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
        console.log(products)
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

                <Button variant="primary" type="submit">
                    Add To Product
                </Button>
            </Form>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default Inventory;