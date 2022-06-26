import axios from 'axios'
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "./Dashboard.css";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'


function Dashboard() {
    const [approvals, setapprovals] = useState([])
    const [approved, setapproved] = useState([]);
    const [rejected, setrejected] = useState([]);
    const [noA, setnoA] = useState(0);
    const [noR, setnoR] = useState(0);
    const [toogle, settoogle] = useState(true)
    useEffect(() => {
        async function fetchApprovals() {
            try {
                const res = await axios.get('http://localhost:5000/approval/')
                setapprovals(res.data)

            } catch (error) {
                console.log(error.message)
            }
        }
        async function fetchAccepted() {
            try {
                const res = await axios.get('http://localhost:5000/decision/accepted')
                setapproved(res.data)
                setnoA(approved.length)
            } catch (error) {
                console.log(error.message)
            }
        }
        async function fetchRejected() {
            try {
                const res = await axios.get('http://localhost:5000/decision/rejected')
                setrejected(res.data)
                setnoR(rejected.length)
            } catch (error) {
                console.log(error.message)
            }
        }

        fetchApprovals()
        fetchAccepted()
        fetchRejected()
    }, [toogle])

    const handleClick = (e, bool) => {
        if (bool) {
            e.isApproved = true;
        } else {
            e.isApproved = false;
        }
        axios.post('http://localhost:5000/decision/', e).then(() => null, err => err)
        settoogle(!toogle)
    }


    return (
        <div>
            <div className='navbar_container'>
                <Navbar collapseOnSelect className='navbar' style={{ width: '100%' }} bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">Control Center</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Navbar.Text>Logged in as Admin</Navbar.Text>
                            <Nav>
                                <Nav.Link href="#deets">More details</Nav.Link>
                                <Nav.Link eventKey={2}>
                                    signout
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <br />
            <div className='container'>
                <div className='sidebar_container'>
                    <div className="card" style={{ width: "28rem" }} >
                        <ul className="list-group group list-group-flush">
                            <li className="list-group-item">Requests Pending : {approvals.length}</li>
                            <li className="list-group-item">Accepted Requests : {noA} </li>
                            <li className="list-group-item">Rejected Requests : {noR}</li>
                            <li className="list-group-item">Funding Requests</li>
                        </ul>
                    </div>
                </div>
                <div className='body_container'>
                    <Card>
                        {approvals.map((param) => {
                            return (
                                <>
                                    <Card.Header>{param.email}</Card.Header>
                                    <Card.Body>
                                        <Card.Title>{param.name}</Card.Title>
                                        <Card.Text>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            <br />current revenue ==> {param.revenue}
                                        </Card.Text>
                                        <div className="button_container">
                                            <Button onClick={() => handleClick(param, true)} variant="primary">Approve Application</Button>
                                            <Button onClick={() => handleClick(param, false)} variant="danger">Reject Application</Button>
                                        </div>

                                    </Card.Body>
                                </>
                            )
                        })}

                    </Card>
                </div>

            </div >
        </div >
    )
}


export default Dashboard;