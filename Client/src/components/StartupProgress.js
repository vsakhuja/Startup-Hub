import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Registration.css"

function Registration() {

    const handleSubmit = async e => {
        e.preventDefault()
        console.log(clientObj)

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
        <div className="form-container">
            <h1>
                Please fill in the Registration Details
            </h1>
            <Form onSubmit={(e) => handleSubmit(e)}>
                <div className='form' >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>How many people are working full time for your startup?</Form.Label>
                        <Form.Control onChange={handleInputChange} name="fulltime" required type="text" placeholder="Enter number of full time members" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>How many people are intern,fellows or any other part-time exmployees are working with your startup?</Form.Label>
                        <Form.Control onChange={handleInputChange} name="parttime" required type="text" placeholder="Enter number of part time members" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Share your Priority miles</Form.Label>
                        <Form.Control onChange={handleInputChange} name="priority" required type="text" placeholder="Priority miles" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Share your Backlog miles</Form.Label>
                        <Form.Control onChange={handleInputChange} name="backlog" required type="text" placeholder="Backlog miles" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Revenue generated from the startup</Form.Label>
                        <Form.Control onChange={handleInputChange} name="revenue" required type="text" placeholder="Enter the revnue generated from startup" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Web URL</Form.Label>
                        <Form.Control onChange={handleInputChange} name="webURL" required type="url" placeholder="Paste your web URL" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Current valuation of your startup</Form.Label>
                        <Form.Control onChange={handleInputChange} name="valuation" required type="text" placeholder="Enter current valuation of your startup" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Revenue of startup from start uptil now</Form.Label>
                        <Form.Control onChange={handleInputChange} name="revenue from start" required type="text" placeholder="Enter the revnue generated of startup from start" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Credit availed information</Form.Label>
                        <Form.Control onChange={handleInputChange} name="credit" required type="text" placeholder="Enter credit availed information" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Achievement and its document/Photo in the last 3 months</Form.Label>
                        <Form.Control onChange={handleInputChange} name="achievement" required type="file" placeholder="Drop Here" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Mentorship & funding support to be required to get to the next stage</Form.Label>
                        <Form.Control onChange={handleInputChange} name="mentorship" required type="text" placeholder="Enter details" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Describe how GUSEC has helped you and your startup</Form.Label>
                        <Form.Control onChange={handleInputChange} name="feedback" required type="text" placeholder='Describe' />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Select GUSEC Team member for meeting</Form.Label>
                        <Form.Control onChange={handleInputChange} name="team member" required type="text" placeholder='Enter the GUSEC Team member name' />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Select date for meeting</Form.Label>
                        <Form.Control onChange={handleInputChange} name="date" required type="date" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Enter time of the meeting</Form.Label>
                        <Form.Control onChange={handleInputChange} name="time" required type="datetime-local" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Venue for the meeting</Form.Label>
                        <Form.Control onChange={handleInputChange} name="venue" required type="text" placeholder='Enter the venue' />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Any Remarks</Form.Label>
                        <Form.Control onChange={handleInputChange} name="remark" required type="text" placeholder='Enter your remark' />
                    </Form.Group>
                </div>

                <Button variant="primary" type="submit">
                    Submit
                </Button>


            </Form>


        </div >
    )
}

export default StartupProgres