import React from "react";



import { Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const cookies = new Cookies();

class Reg extends React.Component {
  state = {
    name: '',
    password: '',
    email: '',
    redirect:false
  }

  saveData = async () => {
    let response = await fetch('/api/reg',
      {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userName: this.state.name,
          password: this.state.password,
          email: this.state.email
        })
      })
      let whatIGet = await response.json()
      if (whatIGet === 'OK') {
          this.setState({ redirect: true })
         
      }
  }

  renderRedirect = () => {
    if(this.state.redirect){
      return <Redirect to = '/main'/> 
    }
  }

  render() {
    return (

      <div style={{ marginTop: '10%' }} className="ui centered card">
        <div style={{ margin: '4%' }} className="ui form">
          <div className="field">
            <label>Name</label>
            <input type="text" name="first-name" placeholder="First Name" value={this.state.name}
              onChange={(event) => this.setState({ name: event.target.value })} />
          </div>
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
          <button className="ui button" type="submit" onClick={this.saveData}>Sign Up</button>
        </div>
    
      </div>


    );
  }
}

export default Reg;