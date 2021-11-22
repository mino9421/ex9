import React, { Component } from 'react'
import axios from 'axios'

import './App.css';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

export default class LabEx extends Component {

    constructor(props) {
        super(props)

        this.state = {
            users: []
        }
        
    }

    componentDidMount = () => {
        this.getUserList() 
    }
    
    getUserList = () => {

        
        axios.get(`https://randomuser.me/api/?results=10`)
            .then(res => {
                console.log(res.data);
                console.log("debug:")

                console.log("results raw")
                this.setState({ users: res.data.results })
                
            })
            .catch(err => console.log(err))
            
    }

    render() {
        return (
            <div>
                <div className="d-grid gap-2">
                    <Button variant="success" className="d-grid gap-2" onClick={this.getUserList}>Get Users</Button>
                </div>
                                
               
                <ul>
                    {
                        this.state.users.map(user => (


                            <Card bg="info" className="myCard">
                                

                                <Card.Header >
                                    {(user.name.title)} - {(user.name.first)} - {(user.name.last)} - {user.login.uuid}
                                </Card.Header>

                                <Row  className="main-row">
                                        
                                        <Col sm={2}>
                                            <Image className="myImage" roundedCircle src={user.picture.large}/>
                                            <Button className="customBtn" variant="primary">Details</Button>
                                        </Col>

                                        <Col sm={10}>
                                            <Card.Body>
                                        
                                                <div>
                                                    <p>
                                                        <b>Gender: </b>{user.gender}
                                                    </p>
                                                    
                                                    <p>
                                                        <b>Time Zone Description: </b>{user.location.timezone.description}
                                                    </p>

                                                    <p>
                                                        <b>Address:</b> {user.location.street.number},
                                                        {user.location.street.name},
                                                        {user.location.city}
                                                        {user.location.state}
                                                        {user.location.country}
                                                        {user.location.postcode}  
                                                    </p>

                                                    <p>
                                                        <b>Email:</b> user.email
                                                    </p>
                                                    <p>
                                                        <b>Birth Data and Age:</b> {user.dob.date} - {user.dob.age}
                                                    </p>
                                                    <p>
                                                        <b>Register Date:</b> {user.registered.date}
                                                    </p>
                                                    <p>
                                                        <b>Phone#: </b> {user.phone}
                                                    </p>
                                                    <p>
                                                        <b>Cell#: </b> {user.cell}
                                                    </p>
                                                </div>
                                                
                                           </Card.Body>
                                        </Col>
                                    </Row>
                                
                                



                            </Card>
                        ))
                    }
                </ul>


            </div>
        )
    }
}
