import React from 'react';
import pic from '../../public/pic.png';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, FormText, Col, Row } from 'reactstrap';
import { match } from "minimatch";
import { Redirect } from 'react-router-dom';
import Profile from "./Profile/profile";
import Main from './Main';

class Menu extends React.Component {


  render() {
    return (
      <div className='ui container'>
      <div className="ui stackable menu">
         <div className="item">
          <img src={pic} />
        </div>
    <Router>
      <Link className="item active" to='/logout'>LogOut</Link>
      <Link className="item" to='/profile'>Profile</Link>
      <Link className="item" to='/society'>Society</Link>
          <Route path='/profile' component={Profile} />
          <Route path='/main' component={Main} />
      </Router>
      </div>
      </div>
    );
  }
}



export default Menu;

