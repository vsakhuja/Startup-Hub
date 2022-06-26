import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Registration.css";
import Header from "./headers/light";
import axios from 'axios';


function Registration() {

    const handleSubmit = async e => {
        e.preventDefault()
        const obj = {
            name: client.Name,
            email: client.Email_Address,
            phonenumber: client.Phone_Number,
            address: client.Address,
            revenue: client.Revenue,
            isApproved: false,
        }
        async function requestApproval() {
            try {
                console.log(obj)
                const res = await axios.post('http://localhost:5000/approval/', obj)
                console.log(res.data)
            } catch (error) {
                console.log(error.message)
            }
        }
        requestApproval();

    }
    const clientObj = {}
    const [client, setClient] = useState(clientObj);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setClient(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    return (
        <div className="container">
            <Header roundedHeaderButton={true} />
            <div className="form-container shadow-lg p-3 mb-5 rounded">
                <h1>
                    Please fill in the Registration Details
                </h1>
                <Form onSubmit={(e) => handleSubmit(e)}>
                    <div className='form'>
                        <Form.Group className="mb-3 shadow-lg p-3 mb-5 rounded" controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control onChange={handleInputChange} name="Name" required type="text" placeholder="Enter name" />
                        </Form.Group>

                        <Form.Group className="mb-3 shadow-lg p-3 mb-5 rounded" controlId="formBasicEmail">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control onChange={handleInputChange} name="Phone_Number" required type="tel" placeholder="Enter phone number" />
                        </Form.Group>

                        <Form.Group className="mb-3 shadow-lg p-3 mb-5 rounded" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onChange={handleInputChange} name="Email_Address" required type="email" placeholder="Enter email address" />
                        </Form.Group>

                        <Form.Group className="mb-3 shadow-lg p-3 mb-5 rounded" controlId="formBasicPassword">
                            <Form.Label>Address</Form.Label>
                            <Form.Control onChange={handleInputChange} name="Address" required type="text" placeholder="Enter address" />
                        </Form.Group>

                        <Form.Group className="mb-3 shadow-lg p-3 mb-5 rounded" controlId="formBasicPassword">
                            <Form.Label>Are you a Student?</Form.Label>
                            <Form.Control onChange={handleInputChange} name="Are you a Student?" required type="text" placeholder="Yes/No" />
                        </Form.Group>

                        <Form.Group className="mb-3 shadow-lg p-3 mb-5 rounded" controlId="formBasicPassword">
                            <Form.Label>Startup Name</Form.Label>
                            <Form.Control onChange={handleInputChange} name="Startup Name" required type="text" placeholder="Enter startup name" />
                        </Form.Group>

                        <Form.Group className="mb-3 shadow-lg p-3 mb-5 rounded" controlId="formBasicPassword">
                            <Form.Label>Brief Description of Innovation</Form.Label>
                            <Form.Control onChange={handleInputChange} name="Brief Description of Innovation" required type="text" />
                        </Form.Group>
                        <Form.Group className="mb-3 shadow-lg p-3 mb-5 rounded" controlId="formBasicPassword">
                            <Form.Label>Brief Description of Business Model</Form.Label>
                            <Form.Control onChange={handleInputChange} name="Brief Description of Business Model" required type="text" />
                        </Form.Group>
                        <Form.Group className="mb-3 shadow-lg p-3 mb-5 rounded" controlId="formBasicPassword">
                            <Form.Label>Startup Stage</Form.Label>
                            <Form.Select onChange={handleInputChange} aria-label="Default select example">
                                <option>Select...</option>
                                <option value="1">Pre-Seed</option>
                                <option value="2">Seed</option>
                                <option value="3">Growth</option>
                                <option value="4">Later</option>
                            </Form.Select>

                        </Form.Group>
                        <Form.Group className="mb-3 shadow-lg p-3 mb-5 rounded" controlId="formBasicPassword">
                            <Form.Label>Description about Startup Innovation Details</Form.Label>
                            <Form.Control onChange={handleInputChange} name="Description about Startup Innovation Details" required type="text" />
                        </Form.Group>
                        <Form.Group className="mb-3 shadow-lg p-3 mb-5 rounded" controlId="formBasicPassword">
                            <Form.Label>Why your startup/ innovation is innovative?</Form.Label>
                            <Form.Control onChange={handleInputChange} name="Why your startup/ innovation is innovative?" required type="text" />
                        </Form.Group>

                        <Form.Group className="mb-3 shadow-lg p-3 mb-5 rounded" controlId="formBasicPassword">
                            <Form.Label>Revenue Information of Startup</Form.Label>
                            <Form.Control onChange={handleInputChange} name="Revenue" required type="number" />
                        </Form.Group>

                        <Form.Group className="mb-3 shadow-lg p-3 mb-5 rounded" controlId="formBasicPassword">
                            <Form.Label>Select Fund Source</Form.Label>
                            <Form.Select onChange={handleInputChange} aria-label="Default select example">
                                <option>Select...</option>
                                <option value="1">Government grants</option>
                                <option value="2">Gujarat University</option>
                                <option value="3">External investors</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3 shadow-lg p-3 mb-5 rounded" controlId="formBasicPassword">
                            <Form.Label>Fund required to move to the next stage</Form.Label>
                            <Form.Control onChange={handleInputChange} name="Fund required to move to the next stage" required type="text" />
                        </Form.Group>

                        <Form.Group className="mb-3 shadow-lg p-3 mb-5 rounded" controlId="formBasicPassword">
                            <Form.Label>Startup Establish Date</Form.Label>
                            <Form.Control onChange={handleInputChange} name="Startup Establish Date" required type="text" />
                        </Form.Group>

                        <Form.Group className="mb-3 shadow-lg p-3 mb-5 rounded" controlId="formBasicPassword">
                            <Form.Label>Name of the firm</Form.Label>
                            <Form.Control onChange={handleInputChange} name="Name of the firm" required type="text" />
                        </Form.Group>

                        <Form.Group className="mb-3 shadow-lg p-3 mb-5 rounded" controlId="formBasicPassword">
                            <Form.Label>Facilities to be availed from GUSEC</Form.Label>
                            <Form.Control onChange={handleInputChange} name="Facilities to be availed from GUSEC" required type="text" />
                        </Form.Group>

                        <Form.Group className="mb-3 shadow-lg p-3 mb-5 rounded" controlId="formBasicPassword">
                            <Form.Label>Co-Founder Information</Form.Label>
                            <Form.Control onChange={handleInputChange} name="Co-Founder Information" required type="text" />
                        </Form.Group>

                        <Form.Group className="mb-3 shadow-lg p-3 mb-5 rounded" controlId="formBasicPassword">
                            <Form.Label>Web URL</Form.Label>
                            <Form.Control onChange={handleInputChange} name="Web URL" required type="text" />
                        </Form.Group>

                        <Form.Group className="mb-3 shadow-lg p-3 mb-5 rounded" controlId="formBasicPassword">
                            <Form.Label>Remarks</Form.Label>
                            <Form.Control onChange={handleInputChange} name="Remarks" required type="text" />
                        </Form.Group>
                    </div>

                    <div className="d-flex justify-content-center">
                        <Button className="col-md-3" variant="dark" type="submit" >
                            Submit
                        </Button>

                        <div class="space"></div>

                        <Button className="col-md-3" variant="dark" type="submit" href='/startuplogin'>
                            Startup Login
                        </Button>
                    </div>



                </Form>
            </div>
        </div>
    )
}

export default Registration