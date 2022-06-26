import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Registration.css"

function StartupLogin() {

    const handleSubmit = async e => {
        e.preventDefault()
        console.log(client)

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
                Startup Login
            </h1>
            <Form onSubmit={(e) => handleSubmit(e)}>
                <div className='form' >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Information about your start-up</Form.Label>
                        <Form.Control onChange={handleInputChange} name="Info" required type="text" placeholder="Information about your startup" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Founder</Form.Label>
                        <Form.Control onChange={handleInputChange} name="Founder" required type="text" placeholder="Enter founder's name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Co-founders</Form.Label>
                        <Form.Control onChange={handleInputChange} name="Co-founders" required type="text" placeholder="Enter co-founders' names" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Number of team members</Form.Label>
                        <Form.Control onChange={handleInputChange} name="Number of team members" required type="text" placeholder="Enter number of team members" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Type of incorporation</Form.Label>
                        <Form.Control onChange={handleInputChange} name="Type of incorporation" required type="text" placeholder="Enter type of incorporation" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Name of the legal entity</Form.Label>
                        <Form.Control onChange={handleInputChange} name="Name of the legal entity" required type="text" placeholder="Name of the legal entity" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Directors/Partners</Form.Label>
                        <Form.Control onChange={handleInputChange} name="Directors/Partners" required type="text" placeholder="Enter Directors/Partners" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Funding status</Form.Label>
                        <Form.Control onChange={handleInputChange} name="Funding status" required type="text" placeholder="Funding status" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Funding requirements</Form.Label>
                        <Form.Control onChange={handleInputChange} name="Funding reqirements" required type="text" placeholder="Funding requirement" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Registered address</Form.Label>
                        <Form.Control onChange={handleInputChange} name="Registered address" required type="text" placeholder="Registered address" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Website</Form.Label>
                        <Form.Control onChange={handleInputChange} name="Website" required type="text" placeholder="Website" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Social media links</Form.Label>
                        <Form.Control onChange={handleInputChange} name="Social media links" required type="text" placeholder="Social media links" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Residential address of the founder</Form.Label>
                        <Form.Control onChange={handleInputChange} name="Residential address of the founder" required type="text" placeholder="Residential address of the founder" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Founder contact number</Form.Label>
                        <Form.Control onChange={handleInputChange} name="Founder contact number" required type="text" placeholder="Founder contact number" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Founder email address</Form.Label>
                        <Form.Control onChange={handleInputChange} name="Founder email address" required type="text" placeholder="Founder email address" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Secondary Contact Details</Form.Label>
                        <Form.Control onChange={handleInputChange} name="Secondary Contact Details" required type="text" placeholder="Secondary Contact Details" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>PAN</Form.Label>
                        <Form.Control onChange={handleInputChange} name="PAN" required type="text" placeholder="PAN" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Name of the bank</Form.Label>
                        <Form.Control onChange={handleInputChange} name="Name of the bank" required type="text" placeholder="Name of the bank" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Bank account number</Form.Label>
                        <Form.Control onChange={handleInputChange} name="Bank account number" required type="tel" placeholder="Bank account number" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>IFSC Code</Form.Label>
                        <Form.Control onChange={handleInputChange} name="IFSC Code" required type="number" placeholder="IFSC Code" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Facilities required</Form.Label>
                        <Form.Control onChange={handleInputChange} name="Facilities required" required type="text" placeholder="Facilities required" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Frequency of utility</Form.Label>
                        <Form.Control onChange={handleInputChange} name="Frequency of utility" required type="text" placeholder="Frequency of utility" />
                    </Form.Group>
                </div>

                <div className="d-flex justify-content-center">
                    <Button className="col-md-3" variant="dark" type="submit" >
                        Submit
                    </Button>

                    <div class="space"></div>

                    <Button className="col-md-3" variant="dark" type="submit" href='https://rzp.io/i/TsVeoGr'>
                        Subscription Payment
                    </Button>
                </div>

                <form><script src="https://cdn.razorpay.com/static/widget/subscription-button.js" data-subscription_button_id="pl_Jlkf6qBCSI8y2r" data-button_theme="rzp-dark-standard" async> </script></form>
            </Form>
        </div >
    )
}

export default StartupLogin