import React, { Component } from 'react';
import Navbartop from '../components/Navbartop';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <Navbartop></Navbartop>
                <a>dashboard task</a>
            </div>
        );
    }
}

export default Dashboard;