import '../mock/data'
import React, { Component } from 'react';
import { request, requestAll } from "../utils/request"

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            parge: []
        }

    }
    componentDidMount() {
        request('/data').then(response=>{
           return response.text()
        }).then(data=>{
            console.log(data);  
        })
    }

    render() {
        return (
            <div>
User
            </div>
        )
    }
}

export default User;   