import React from "react";
import { Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class LogIn extends React.Component {
    state = {
        password: '',
        email: ''
    }

    checkingRegistration = async () => {
        let response = await fetch('/api/login',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    password: this.state.password,
                    email: this.state.email
                })
            })
        console.log(response)
        let whatIGet = await response.json()
        console.log(whatIGet)
        if (whatIGet.result === 'OK') {
            this.props.setLogin(whatIGet.user)
            this.setState({ redirect: true })
        }
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/main' />
        }
    }
    render() {
        return (

            <div style={{ marginTop: '10%' }} className="ui centered card">
                <div style={{ margin: '4%' }} className="ui form">
                    <div className="field">
                        <label>Email</label>
                        <input type="text" name="email" placeholder="Email" value={this.state.email}
                            onChange={(event) => this.setState({ email: event.target.value })} />
                    </div>
                    <div className="field">
                        <label>Password</label>
                        <input type="text" name="password" placeholder="Password" value={this.state.password}
                            onChange={(event) => this.setState({ password: event.target.value })} />
                    </div>
                    {this.renderRedirect()}
                    <button className="ui button" type="submit" onClick={this.checkingRegistration}>LogIn</button>
                </div>
            </div>


        );
    }
}

export default LogIn;