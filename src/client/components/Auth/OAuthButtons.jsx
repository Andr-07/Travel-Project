import React from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class OAuth extends React.Component {
 
    renderAuthButton() {
        if (this.props.check.isSignedInGoogle === false) {
            return (
                <button onClick={this.props.setLogin}
                className="ui google plus button">
                    <i className="google plus icon"></i>
                    Sign In
            </button>
                );
        } if (this.props.check.isSignedInGoogle===true) {
            return (
                <div>
                <button onClick={this.props.setLogOut}
                className="ui google plus button">
                <i className="google plus icon"/>
                    Sign Out
                </button>
                </div>
        )
            
    } else {
        return (
            <button onClick={this.props.setLogin}
            className="ui google plus button">
                <i className="google plus icon"></i>
               Load
        </button>
            );
        }
    }

    render() {
        // console.log(this.props.check)
        return (
            <div className="ui buttons">
                <Link className="ui button" to='/reg'>Sign Up</Link>

                <div className="or"></div>

                <div>{this.renderAuthButton()}</div>

                <div className="or"></div>
                <Link className="ui button" to='/login'>Log In</Link>
            </div>
        );
    }
}



export default OAuth;
