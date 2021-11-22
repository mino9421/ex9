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


                            <Card bg="info" className="">
                                

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
                                                    Gender: {user.gender}
                                                </div>
                                                
                                                <div>
                                                    Time Zone Description: {user.location.timezone.description}
                                                </div>

                                                <div>
                                                    Address: {user.location.street.number},
                                                    {user.location.street.name},
                                                    {user.location.city}
                                                    {user.location.state}
                                                    {user.location.country}
                                                    {user.location.postcode}
                                                </div>

                                                <div>
                                                    Email: user.email

                                                </div>

                                                <div>
                                                    Birth Data and Age: {user.dob.date} - {user.dob.age}
                                                </div>

                                                <div>
                                                     Register Date: {user.registered.date}
                                                </div>

                                                <div>
                                                    Phone#: {user.phone}
                                                    Cell#: {user.cell}
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
