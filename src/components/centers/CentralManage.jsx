import React, { Component } from 'react';
import { request, requestAll } from "../utils/request"

class CentralManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            parge: []
        }

    }
    componentDidMount() {
        request('http://114.55.142.155:8094/gw/ec/meals?limit=99999&EQ_squserBm=&BETWEEN_diningTime=2018-03-01~2018-03-31').then(response=>{
            return response.json()
        }).then(data=>{
            console.log(data);
        })
        // requestAll('http://114.55.142.155:8094/gw/ec/meals?limit=99999&EQ_squserBm=&BETWEEN_diningTime=2018-03-01~2018-03-31','get').then(data=>{
        //     console.log(data);
        // })
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

export default CentralManage;   