import React from 'react';
import GoogleAuth from '../GoogleAuth';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class OAuth extends React.Component {


    render() {
        return (
            <div className="ui buttons">
                <Link className="ui button" to='/reg'>Sign Up</Link>

                <div className="or"></div>

                <GoogleAuth />

                <div className="or"></div>
                <Link className="ui button" to='/login'>Log In</Link>
            </div>
        );
    }
}



export default OAuth;
