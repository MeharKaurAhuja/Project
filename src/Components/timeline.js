import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import '../App.css';

class Timeline extends Component {
    render() {
        return (
            <div>
            <h1> HELLOOO </h1>
            <h2> {this.props.name} </h2>
            </div>
        )
    }
}

export default Timeline;