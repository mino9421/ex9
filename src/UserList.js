import React, { Component } from 'react'
import axios from 'axios'

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
                <button onClick={this.getUserList}>Get Users</button>

                <ul>
                    {
                        this.state.users.map(user => (
                            <div>
                                {JSON.stringify(user.name)}
                                {JSON.stringify(user.gender)}
                                {JSON.stringify(user.location.timezone.description)}

                                {JSON.stringify(user.location.street.number)}
                                {JSON.stringify(user.location.street.name)}
                                {JSON.stringify(user.location.city)}
                                {JSON.stringify(user.location.state)}
                                {JSON.stringify(user.location.country)}
                                {JSON.stringify(user.location.postcode)}

                                {JSON.stringify(user.email)}

                                {JSON.stringify(user.dob.date)}
                                {JSON.stringify(user.dob.age)}
                                
                                {JSON.stringify(user.registered.date)}
                                
                                {JSON.stringify(user.phone)}
                                {JSON.stringify(user.cell)}
                            </div>
                        ))
                    }
                </ul>


            </div>
        )
    }
}
